import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const CUSTOM_MODS_PATH = path.join(process.cwd(), "custom_mods.json");
const CUSTOM_CRED_PATH = path.join(process.cwd(), "custom_credentials.json");

const DEFAULT_HONEST_CREDENTIALS = [
  {
    id: "bethesda",
    title: "Bethesda Verified Creator",
    badge: "BVC-STARFIELD",
    description: "Verified Creator for Bethesda with access to the Bethesda Creations publishing system, specializing in building and maintaining immersive additions.",
    techStack: "Starfield Creation Kit, Papyrus Scripting, Custom Starfield Systems",
    status: "VERIFIED CREATOR",
    color: "border-zinc-700 bg-neutral-900 text-zinc-100 shadow-zinc-950",
    icon: "Award"
  },
  {
    id: "microsoft",
    title: "Microsoft Partner",
    badge: "MS-PARTNER-ID",
    description: "Microsoft Partner because of VC status with Bethesda, working within the broader Xbox and Microsoft developer ecosystem.",
    techStack: "Microsoft Dev Center, Xbox Live Integration Guides",
    status: "ACTIVE PARTNER",
    color: "border-blue-900 bg-blue-950/20 text-blue-100 shadow-blue-950/20",
    icon: "Cpu"
  },
  {
    id: "google",
    title: "Google Developer",
    badge: "GDEV-CONSOLES",
    description: "Self-taught weekend warrior developer with access to Google developer functions and publishing tools, learning and expanding capabilities for when ready to deploy.",
    techStack: "Google Play Console, React & Web Tools, Firebase & AI Tools",
    status: "ACCESS GRANTED",
    color: "border-emerald-900 bg-emerald-950/10 text-emerald-100 shadow-emerald-950/10",
    icon: "Code2"
  }
];

function getCustomCredentials(): any[] {
  try {
    if (fs.existsSync(CUSTOM_CRED_PATH)) {
      const data = fs.readFileSync(CUSTOM_CRED_PATH, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading custom credentials:", err);
  }
  return DEFAULT_HONEST_CREDENTIALS;
}

function saveCustomCredentials(creds: any[]) {
  try {
    fs.writeFileSync(CUSTOM_CRED_PATH, JSON.stringify(creds, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving custom credentials:", err);
  }
}

function getCustomMods(): any[] {
  try {
    if (fs.existsSync(CUSTOM_MODS_PATH)) {
      const data = fs.readFileSync(CUSTOM_MODS_PATH, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading custom mods:", err);
  }
  return [];
}

function saveCustomMods(mods: any[]) {
  try {
    fs.writeFileSync(CUSTOM_MODS_PATH, JSON.stringify(mods, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving custom mods:", err);
  }
}

// Lazy initialize Gemini client to prevent startup crashes if GEMINI_API_KEY is missing
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not configured. Please add it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Get all custom credentials
  app.get("/api/credentials", (req, res) => {
    try {
      const creds = getCustomCredentials();
      res.json(creds);
    } catch (error: any) {
      res.status(500).json({ error: "Failed to read credentials database." });
    }
  });

  // API Route: Update custom credentials
  app.post("/api/credentials", (req, res) => {
    try {
      const { credentials } = req.body;
      if (!Array.isArray(credentials)) {
        return res.status(400).json({ error: "Credentials must be an array." });
      }
      saveCustomCredentials(credentials);
      res.json(credentials);
    } catch (error: any) {
      res.status(500).json({ error: "Failed to update credentials database." });
    }
  });

  // API Route: Get all custom mods
  app.get("/api/mods", (req, res) => {
    try {
      const mods = getCustomMods();
      res.json(mods);
    } catch (error: any) {
      res.status(500).json({ error: "Failed to read custom mods database." });
    }
  });

  // API Route: Add a new custom mod
  app.post("/api/mods", (req, res) => {
    try {
      const { title, subtitle, category, description, status, creationsLink, features, iconName, visualTheme } = req.body;
      if (!title || !description) {
        return res.status(400).json({ error: "Title and Description are required." });
      }

      const newMod = {
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title,
        subtitle: subtitle || "",
        category: category || "Trade Wars",
        description,
        status: status || "Available Now",
        creationsLink: creationsLink || "",
        nexusLink: "#",
        features: features || [],
        visualTheme: visualTheme || "from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100",
        iconName: iconName || "Layers"
      };

      const mods = getCustomMods();
      mods.unshift(newMod); // Prepend so new mods appear first
      saveCustomMods(mods);

      res.status(201).json(mods);
    } catch (error: any) {
      res.status(500).json({ error: "Failed to add custom mod to database." });
    }
  });

  // API Route: Generate Character Backstory using Gemini API
  app.post("/api/generate-story", async (req, res) => {
    try {
      const { name, origin, trait, definingChoice, factionAlignment } = req.body;

      if (!name || !origin || !trait || !definingChoice || !factionAlignment) {
        return res.status(400).json({ error: "Missing required character choices." });
      }

      const client = getGeminiClient();

      const prompt = `
        Character Name: ${name}
        Origin: ${origin}
        Core Trait: ${trait}
        Defining Choice/Event: ${definingChoice}
        Faction Alignment: ${factionAlignment}
      `;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: `You are a master lore architect and narrative designer for the Starfield universe, specifically trained in the themes of the "Trade Wars" mod series (featuring the corporate, high-stakes black-and-white aesthetic of the Merchant Intelligence Division) and the broader Settled Systems lore.

Translate the raw player choices into a highly immersive, 2-3 minute readable backstory log.
Narrative Style & Rules:
- Tone: Gritty, hard sci-fi, professional corporate/military logging style mixed with deep space atmospheric storytelling.
- Lore Adherence: Ensure all background elements seamlessly align with Starfield factions (United Colonies, Freestar Collective, Ryujin Industries) and specifically integrate elements from the Trade Wars salvage and corporate warfare economy.
- Formatting: Write the main backstory as an official data log entry (e.g., "LOGENTRY // SETTLED SYSTEMS PERSONNEL ARCHIVE"). Use markdown formatting for readability when displayed on the web.
- The backstory must be exactly 3 rich, detailed paragraphs, focusing heavily on atmospheric prose, high corporate stakes, or the heavy toll of deep space salvage and salvage-claim skirmishes. Include technical or regional Starfield jargon (e.g., Neon, Akila, New Atlantis, the Well, Caelum, HE-3, Grav-drives, M.I.D. operatives, corporate espionage).
- The Reddit post should be catchy and formatted for immediate sharing with custom hashtags (e.g., #Starfield, #TradeWars, #SettledSystems, #Roleplay).`,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              logHeader: {
                type: Type.STRING,
                description: "An in-universe tactical or corporate header, e.g., 'MID-DATABANK // CLASSIFIED RECORD #4819'"
              },
              fullBackstory: {
                type: Type.STRING,
                description: "The complete, rich 3-paragraph markdown formatted backstory based on the user's choices."
              },
              redditReadyText: {
                type: Type.STRING,
                description: "A pre-formatted, catchy version of the story optimized for copy-pasting into Reddit (includes a hook at the top and relevant community hashtags)."
              },
              characterSummary: {
                type: Type.STRING,
                description: "A brief 1-sentence tagline describing the character archetype created (e.g., 'A cynical MID salvage contractor haunted by a bad drop on Akila.')"
              }
            },
            required: ["logHeader", "fullBackstory", "redditReadyText", "characterSummary"]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response generated from AI model.");
      }

      const result = JSON.parse(responseText.trim());
      res.json(result);

    } catch (error: any) {
      console.error("Backstory generation error:", error);
      res.status(500).json({ 
        error: error.message || "Failed to generate backstory. Make sure GEMINI_API_KEY is configured." 
      });
    }
  });

  // Vite development integration or static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
