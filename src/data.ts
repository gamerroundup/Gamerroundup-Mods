import { ModProject, CYOAChoice } from "./types";

export const STARFIELD_MODS: ModProject[] = [
  {
    id: "trade-wars-galaxy-at-war",
    title: "Trade Wars - Galaxy At War",
    subtitle: "Dynamic Space Conflicts & Active Warfare Zones",
    category: "Trade Wars",
    description: "Transform deep space from a quiet vacuum into a volatile, reactive battleground. This mod introduces dynamic space conflicts across major sectors where factional skirmishes, tactical defense operations, and aggressive cargo raids occur. Engage in corporate-backed space battles, raid rival transport vessels, and loot high-value industrial cargo in contested space.",
    status: "Available Now",
    creationsLink: "https://creations.bethesda.net/en/starfield/details/190a2180-5802-4d1a-a6ea-3a14893bd28f/Trade_Wars__Galaxy_At_War",
    nexusLink: "#",
    features: [
      "Dynamic factional space combat and active conflict encounters",
      "High-yield cargo salvage claiming and ship-boarding events",
      "Tactical space skirmishes responding organically to player presence",
      "Contraband loot tables and high-value scrap resources in deep space"
    ],
    visualTheme: "from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100",
    iconName: "ShieldAlert"
  },
  {
    id: "trade-wars-mid",
    title: "Trade Wars - MID",
    subtitle: "Merchant Intelligence Division & Corporate Ops",
    category: "Trade Wars",
    description: "Join the covert shadow operations of the Merchant Intelligence Division (M.I.D.). Tasked with enforcing corporate trade networks and securing strategic salvage claims, you'll execute high-stakes black-market contracts, infiltrate rival ship hulls, and work with specialized fully-voiced handlers. Features monochrome cockpits and heavy industrial styles.",
    status: "Available Now",
    creationsLink: "https://creations.bethesda.net/en/starfield/details/e02c971a-3a99-49ae-880e-38e21cce45f6/Trade_Wars__Merchant_Intelligence_Division__MID_",
    nexusLink: "#",
    features: [
      "Covert corporate espionage, scrap enforcement, and shadow assignments",
      "Fully-voiced handlers guiding your operations across the systems",
      "Custom monochrome industrial cockpit compatibility for tactical play",
      "Classified M.I.D. tactical stealth suits and special operations gear"
    ],
    visualTheme: "from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100",
    iconName: "Eye"
  },
  {
    id: "trade-wars-supply-charter-redux",
    title: "Trade Wars Supply Charter REDUX",
    subtitle: "Overhauled Freight Economy & Interstellar Logistics",
    category: "Trade Wars",
    description: "The definitive revamp of Starfield's interstellar cargo logistics. Establish binding Supply Charters with corporate megacorporations and outpost clusters to establish functional bulk freight networks. Deliver heavy machinery, tech modules, and mineral shipments across active shipping lanes while protecting your freight from corporate raiders.",
    status: "Available Now",
    creationsLink: "https://creations.bethesda.net/en/starfield/details/66a557bf-66ee-48cb-b851-1a6db9c08b07/Trade_Wars_Supply_Charter_REDUX",
    nexusLink: "#",
    features: [
      "Complete logistics and shipping contract system with heavy payouts",
      "Interstellar supply networks linking outpost silos to high-demand hubs",
      "Logistical freight shipping with custom bulk cargo components",
      "Vulnerable, active trade routes that attract space piracy and interceptors"
    ],
    visualTheme: "from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100",
    iconName: "Package"
  },
  {
    id: "trade-wars-community-supply-charter",
    title: "Trade Wars - Community Supply Charter",
    subtitle: "Frontier Trade Network & Collaborative Jobs",
    category: "Trade Wars",
    description: "Extend your logistics networks to the independent outer rim systems. This community-driven expansion integrates collaborative cargo contracts, new frontier trade goods, and dynamic shipping jobs from remote mining settlements. Secure the lifelines of developing frontier colonies by delivering key defense equipment and technical scrap.",
    status: "Available Now",
    creationsLink: "https://creations.bethesda.net/en/starfield/details/7d8da2dd-ed05-4035-b8c3-60e266efd96c/Trade_Wars__Community_Supply_Charter",
    nexusLink: "#",
    features: [
      "Dozens of localized dynamic shipping contracts for independent frontiers",
      "Community-designed commodities, trade goods, and technical cargo",
      "Reputation-based unlocks at remote outpost trade boards",
      "Seamless mechanical compatibility with the main Supply Charter economy"
    ],
    visualTheme: "from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100",
    iconName: "Users"
  },
  {
    id: "trade-wars-gates-of-janus",
    title: "Trade Wars Gates of Janus (4-in-1)",
    subtitle: "Consolidated Master Mod Compilation",
    category: "Trade Wars",
    description: "The ultimate compilation of the Trade Wars universe. Gates of Janus seamlessly combines four massive systems—Galaxy At War, Merchant Intelligence Division (M.I.D.), Supply Charter REDUX, and Community Supply Charters—into a single, optimized, conflict-free package. Saves valuable load order slots while ensuring maximum stability and performance.",
    status: "Available Now",
    creationsLink: "https://creations.bethesda.net/en/starfield/details/2920d7ab-8f77-406f-8443-eea597d8da53/Trade_Wars_Gates_of_Janus__4_in_1_combined",
    nexusLink: "#",
    features: [
      "Consolidates four extensive systems into a single slot-saving load file",
      "Optimized script integration and unified space encounter tables",
      "Perfect sync between M.I.D. corporate quests and Supply Charter trade loops",
      "The definitive, conflict-free method to play the Trade Wars overhaul series"
    ],
    visualTheme: "from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-white text-zinc-100",
    iconName: "Layers"
  },
  {
    id: "galaxy-in-flux",
    title: "Galaxy in Flux",
    subtitle: "Dynamic Points of Interest & Alive Settled Systems",
    category: "Galaxy In",
    description: "The Settled Systems are no longer static. They’re alive, reactive, and ready to defend themselves. Galaxy in Flux transforms points of interest across the Settled Systems into dynamic, lived‑in locations by populating them with organically placed NPCs drawn from expanded leveled lists. Outposts, research stations, science labs, bio facilities, and remote frontier sites now feel inhabited, and threatened. As you arrive at these POIs, you’ll encounter civilians, workers, guards, scientists, and faction‑aligned personnel actively defending their homes and livelihoods.",
    status: "Upcoming / Expanded",
    creationsLink: "#",
    nexusLink: "#",
    features: [
      "Dynamic NPC population injected into a wide range of POIs",
      "Outposts and labs that feel inhabited, active, and worth defending",
      "Organic encounters that evolve the tone of exploration",
      "A more reactive, lived‑in Settled Systems",
      "Clean up quest on ref collect aliases runs to avoid save bloat"
    ],
    visualTheme: "from-blue-950 via-slate-900 to-zinc-900 border-blue-900 hover:border-blue-400 text-blue-50",
    iconName: "Orbit"
  },
  {
    id: "partner-dev",
    title: "Microsoft Partner & Google Dev Assets",
    subtitle: "Enterprise Cloud & Android Mobile Systems",
    category: "Other Core Works",
    description: "Bridging the gap between real-world cloud engineering and game development. Showcasing secure Azure API backends, Android companion applications, and cross-platform companion utilities designed to track Starfield industrial production and planetary cargo output.",
    status: "Beta Access",
    nexusLink: "#",
    features: [
      "Azure-integrated Companion API prototypes",
      "Google Play Companion app for sector resource cataloging",
      "OAuth 2.0 secure integrations for private server systems",
      "Custom telemetry dashboards designed with D3 and React"
    ],
    visualTheme: "from-emerald-950 via-stone-900 to-zinc-900 border-emerald-900 hover:border-emerald-400 text-emerald-50",
    iconName: "Cpu"
  }
];

export const ORIGINS: CYOAChoice[] = [
  {
    id: "Neon Street Rat",
    title: "Neon Street Rat",
    description: "You grew up on the rain-slicked, drug-fueled platforms of Neon. You know how Ryujin operates, how the gangs fight, and how to survive with nothing but credit chits and quick wit."
  },
  {
    id: "Cargo Salvager",
    title: "Cargo Salvager",
    description: "You spent your youth cutting through radioactive bulkheads of shattered bulk-carriers. Debris fields of the Colony War are your graveyard, your playground, and your pantry."
  },
  {
    id: "UC Vanguard recruit",
    title: "UC Vanguard Recruit",
    description: "You took the oath under the gleaming towers of New Atlantis. Trained in atmospheric dogfighting and tactical boarding, you look for honor but usually find red tape."
  },
  {
    id: "Freestar Drifter",
    title: "Freestar Drifter",
    description: "Born under the wide-open skies of Akila. You trust your laser rifle, your crew, and nobody else. You believe the Collective is getting soft and corporate."
  },
  {
    id: "Ryujin Junior Analyst",
    title: "Ryujin Junior Analyst",
    description: "A desk in the executive tower was your throne. You learned that spreadsheets can destroy a rival outpost faster than a squadron of starfighters."
  },
  {
    id: "Drifting Ship Hand",
    title: "Drifting Ship Hand",
    description: "A space-faring nomad who drifted from cargo vessel to bulk-carrier, cleaning corrosive coolant tubes and surviving multiple explosive decompressions."
  },
  {
    id: "Traveling Asteroid Miner",
    title: "Traveling Asteroid Miner",
    description: "An outskirts youth digging for Helium-3 and titanium in deep-space belts. You know how to operate heavy drilling lasers and hope to strike a motherlode."
  },
  {
    id: "Spacer Orphan",
    title: "Spacer Orphan",
    description: "Spacers raided your parents' research outpost, leaving you as the sole survivor in the frozen wreckage. You grew up fueled by survival instincts and cold fury."
  },
  {
    id: "Homestead Pioneer",
    title: "Homestead Pioneer",
    description: "Raised in a struggling agricultural outpost on a hostile, radiation-baked world. You know how to coax food out of frozen soil and defend the perimeter from local predators."
  },
  {
    id: "UC Navy Dropout",
    title: "UC Navy Dropout",
    description: "You washed out of the prestigious officer academy on Jemison after questioning a superior's tactical sacrifice. Your training is elite, but your discharge was bitter."
  },
  {
    id: "Black-Market Smuggler",
    title: "Black-Market Smuggler",
    description: "You spent years running forbidden contraband past United Colonies orbit scans until a rival smuggler tipped off security and your ship was seized."
  },
  {
    id: "Cyber-Runner Renegade",
    title: "Cyber-Runner Renegade",
    description: "A rogue deck-hacker who stole high-value corporate data pads from Ryujin executives. You're always looking over your shoulder for cyber-extraction teams."
  },
  {
    id: "Xenobiologist Outcast",
    title: "Xenobiologist Outcast",
    description: "You studied lethal alien fauna on remote wilderness moons, until a classified research project went horribly wrong and you were blamed for the lab's destruction."
  },
  {
    id: "Freestar Militia Veteran",
    title: "Freestar Militia Veteran",
    description: "Fought in a brutal brush-fire colony dispute. You left the service with a scarred chest, a decommissioned mag-rifle, and a deep distrust of politicians."
  },
  {
    id: "Sanctum Universum Seeker",
    title: "Sanctum Universum Seeker",
    description: "A pilgrim seeking spiritual truths hidden within the grav-wave resonance patterns of the outer rim. You look at the stars as a divine puzzle."
  },
  {
    id: "Colony War Scavenger",
    title: "Colony War Scavenger",
    description: "You sift through ancient wreckage to salvage high-grade hyperconductors, selling tech relics to the highest bidder on the black-market."
  },
  {
    id: "Ecliptic Mercenary Ex-Gun",
    title: "Ecliptic Mercenary Ex-Gun",
    description: "Formerly a hired weapon for Charybdis contracts, you walked away after refusing an order to liquidate an unarmed research outpost. Now you work solo."
  },
  {
    id: "Luxe Cruise Escort",
    title: "Luxe Cruise Escort",
    description: "Accompanied wealthy oligarchs on pleasure yachts until a violent Crimson Fleet boarding party forced you to take the helm and fight back."
  },
  {
    id: "Va'ruun Zealot Fugitive",
    title: "Va'ruun Zealot Fugitive",
    description: "Escaped from the isolationist clutches of the fanatical House Va'ruun. You live in hiding, knowing the Great Serpent's shadow agents seek your silence."
  },
  {
    id: "Red Mile Survivor",
    title: "Red Mile Survivor",
    description: "You ran the notorious Red Mile gauntlet on Porrima III and actually crossed the finish line alive. You have the scars and the local reputation to prove it."
  },
  {
    id: "Astral Lounge Bouncer",
    title: "Astral Lounge Bouncer",
    description: "Threw out unruly aurora-addled corporate heirs from Neon's premier club, until you threw the wrong Ryujin director's son down the elevator shaft."
  },
  {
    id: "Independent Surveyor",
    title: "Independent Surveyor",
    description: "Spent lonely months mapping radiation-baked, uncharted worlds for commercial developers. You talk to your suit's AI more than you talk to humans."
  },
  {
    id: "Frontier Combat Medic",
    title: "Frontier Combat Medic",
    description: "Patched up wounded cargo haulers under intense pirate plasma fire. You know exactly how the human body works, and how to put it back together."
  },
  {
    id: "Industrial Outpost Fabricator",
    title: "Industrial Outpost Fabricator",
    description: "Spent a decade managing heavy automated manufacturing silos on desolate moons, designing starship frames and specialized mining equipment."
  }
];

export const TRAITS: CYOAChoice[] = [
  {
    id: "High-Stress Tolerance",
    title: "High-Stress Tolerance",
    description: "When the atmospheric shield fails or laser fire cooks the cockpit, your heart rate barely spikes. You think clearly when everything burns."
  },
  {
    id: "Cybernetic Enhancements",
    title: "Cybernetic Enhancements",
    description: "A illegal neuro-link runs down your spine, letting you interface directly with starship telemetry. Powerful, but gives you phantom static headaches."
  },
  {
    id: "Wanted",
    title: "Wanted",
    description: "There's a high price on your head from a syndicate contract. Bounty hunters track your grav-signature. It keeps you alert."
  },
  {
    id: "Alien DNA",
    title: "Alien DNA",
    description: "You volunteered for a classified genetic experiment in an independent lab. You heal faster and jump higher, but food tastes like copper."
  },
  {
    id: "Taskmaster",
    title: "Taskmaster",
    description: "You know how to push humans and machinery to the absolute breaking point to squeeze an extra 5% yield out of any system."
  },
  {
    id: "Silver-Tongued Diplomat",
    title: "Silver-Tongued Diplomat",
    description: "You can talk your way out of a UC blockade or negotiate a 20% discount on smuggled Aurora. Words are your primary weapon."
  },
  {
    id: "Quick-Draw Trigger",
    title: "Quick-Draw Trigger",
    description: "You shoot first and bypass the talking. When negotiations turn sour, your hand is already on your modified laser holster."
  },
  {
    id: "Empathic Resonance",
    title: "Empathic Resonance",
    description: "You are highly attuned to the feelings of your crew. You fight with 15% more efficiency when a companion is watching your back."
  },
  {
    id: "Sentimental Grounding",
    title: "Sentimental Grounding",
    description: "You send 2% of your weekly salvage earnings back to your parents on Jemison. It keeps you poor, but their care packages keep you alive."
  },
  {
    id: "Neon Street Smarts",
    title: "Neon Street Smarts",
    description: "You grew up in the wet, neon-drenched gutters of Ebbside. You know exactly when a corporate exec is lying and how to pick a mag-lock."
  },
  {
    id: "Isolated Wanderer",
    title: "Isolated Wanderer",
    description: "You operate best when the stars are your only companions. You get a 10% pilot speed boost when flying solo without crew, but suffer from space loneliness in long stints."
  },
  {
    id: "Hero Worshiped",
    title: "Hero Worshiped",
    description: "You've earned an obsessive fan who constantly tracks your coordinate log. He talks incessantly and hands you random, occasionally useful planetary minerals."
  },
  {
    id: "Serpent's Embrace",
    title: "Serpent's Embrace",
    description: "Grav-jumping wraps your mind in a temporary state of religious euphoria, boosting your focus. If you go too long without jumping, your resolve starts to fray."
  },
  {
    id: "Spaced Lung",
    title: "Spaced Lung",
    description: "Your body has acclimated to near-vacuum environments. Oxygen recovers 15% faster in zero-g spaces, but you feel sluggish on high-gravity planets."
  },
  {
    id: "Terra Firma",
    title: "Terra Firma",
    description: "You love having real soil beneath your boots. You gain increased health on solid planetary ground, but consume significantly more oxygen in deep-space vacuums."
  },
  {
    id: "Space Scoundrel",
    title: "Space Scoundrel",
    description: "A healthy mix of pure luck, dirty tricks, and low morals. You start with extra pocket credits and have a knack for getting smugglers' goods past UC customs."
  },
  {
    id: "Academic Tenure",
    title: "Academic Tenure",
    description: "Your head is filled with histories of the Colony War. You decode encrypted alien ruins and research station terminals 25% faster, but struggle with raw physical labor."
  },
  {
    id: "Gadgeteer Tinkerer",
    title: "Gadgeteer Tinkerer",
    description: "You treat your starship like a living organism. You can repair shield regulators with spare junk, though your modifications occasionally blow a minor cabin fuse."
  },
  {
    id: "Ruthless Executive",
    title: "Ruthless Executive",
    description: "You prioritize profit over sentimentality. You secure 15% better payouts on corporate contracts, but hiring reliable crew members costs you double."
  },
  {
    id: "Born Gambler",
    title: "Born Gambler",
    description: "You thrive on the knife's edge. Whenever your starship shields drop below 10%, your critical counter-attack efficiency doubles in a desperate bid to survive."
  }
];

export const DEFINING_CHOICES: CYOAChoice[] = [
  {
    id: "Betrayed corporate handler",
    title: "Betrayed a corporate handler during a high-yield salvage run",
    description: "You diverted a shipment of military-grade grav-coils to an independent buyer, leaving your handler to explain the deficit to the board."
  },
  {
    id: "Recovered classified blueprint",
    title: "Recovered a classified blueprint from a derelict ship in deep space",
    description: "While cutting salvage, you found an encrypted drive in a dead Admiral's cabin detailing experimental tactical beacons. You hid it in your boot."
  },
  {
    id: "Defended independent outpost",
    title: "Defended an independent mining outpost from a Crimson Fleet raid",
    description: "You hotwired the outpost's industrial turret arrays, single-handedly turning a pirate vanguard into stellar dust."
  },
  {
    id: "Stole Ryujin trade secrets",
    title: "Stole Ryujin industrial trade secrets to sell to the highest bidder",
    description: "You smuggled out chemical formulas for high-yield neuro-chem stimulants, sparking an underground bidding war across the Settled Systems."
  },
  {
    id: "Humming Artifact Discovery",
    title: "Discovered a humming metallic artifact fragment deep in an active mining vein",
    description: "The moment your mining laser touched the metallic deposit, a strange ring of light flared, leaving you with visual anomalies and temporary gravity-warping dreams."
  },
  {
    id: "Refused UC Navy Order",
    title: "Refused a direct command to fire on an unmarked civilian blockade-runner",
    description: "Rather than taking innocent lives, you locked the weapon systems, threw your ship's command codes into an emergency purge, and accepted immediate court martial."
  },
  {
    id: "Red Mile Survivor Run",
    title: "Ran the notorious Red Mile gauntlet on Porrima III to clear a massive debt",
    description: "Under the cheers of degenerate high-rollers, you sprinted through the toxic frost and fire-spitting fauna, activated the beacon, and came back alive."
  },
  {
    id: "SysDef Covert Infiltration",
    title: "Infiltrated the Crimson Fleet under deep cover for UC SysDef",
    description: "You spent months drinking cold synthetic blend, forging pirate trust, and marking contraband cargo haulers before extracting with key fleet encryption keys."
  },
  {
    id: "House Va'ruun Escape",
    title: "Escaped from a fanatical House Va'ruun sector outpost with a stolen warp-compass",
    description: "Before they could complete your 'cleansing transition', you slipped your bindings, stole a legendary ceremonial grav-compass, and hyperjumped into the unknown."
  },
  {
    id: "Prototype Shuttle Heist",
    title: "Hijacked a Ryujin experimental sub-orbital shuttle during a corporate riot",
    description: "While security forces clashed with Ebbside strikers, you hotwired the hangar bay overrides and boosted the prototype spacecraft straight through Neon's energy shields."
  },
  {
    id: "Sole Survey Survivor",
    title: "Survived a planetary survey expedition where your entire crew was lost",
    description: "A sudden nest of apex predators wiped out the base camp. You spent three grueling weeks hiding in ancient temple caves until a passing scavenger ship picked up your distress signal."
  },
  {
    id: "Frontier Peace Mediator",
    title: "Brokered a tense ceasefire between Freestar settlers and a Trade Authority convoy",
    description: "With both sides charging heavy laser batteries, you walked directly into the demilitarized zone and negotiated a cargo-sharing agreement that saved twenty families from starvation."
  },
  {
    id: "Akila City Customs Heist",
    title: "Slipped a shipment of high-yield illegal contraband past Akila City security",
    description: "You shielded your cargo bay with magnetic scrap-metal and custom-calibrated the reactor heat signature, floating past scanners as a harmless pile of orbital garbage."
  },
  {
    id: "Grav-Frequency Pilgrim",
    title: "Mapped the mysterious sub-light harmonic frequencies of the outer rim",
    description: "You spent six months in silent orbit, tuning planetary sensors to anomalous grav-wave signals that some say are the echoes of a ancient cosmic civilization."
  },
  {
    id: "Bounty Capture Solo Hunt",
    title: "Tracked a legendary mercenary warlord across three hostile star systems",
    description: "With only an antique mag-rifle and a cracked helmet visor, you cornered the outlaw in a frozen research station and secured the high-value bounty voucher."
  }
];

export const FACTIONS: CYOAChoice[] = [
  {
    id: "Freestar Rangers",
    title: "Freestar Rangers",
    description: "The elite peacekeepers of the Freestar Collective. Armed with a badge and a quick draw, you patrol the rugged outer worlds, protecting independent settlers from predators and outlaws."
  },
  {
    id: "Trackers Alliance",
    title: "Trackers Alliance",
    description: "A guild of professional bounty hunters operating under strict guild codes. You don't care about politics or planetary borders—only the weight of the credit box and the thrill of the hunt."
  },
  {
    id: "Trade Authority Trucker",
    title: "Trade Authority Trucker",
    description: "A seasoned freight runner carrying high-value (and occasionally highly illegal) cargo across the Settled Systems. You know how to bypass orbital scans and handle corrupt corporate dock-masters."
  },
  {
    id: "UC SysDef",
    title: "UC SysDef (System Defense)",
    description: "The dedicated military wing of the United Colonies focused on eradicating piracy, securing deep-space shipping routes, and running high-stakes covert sting operations."
  },
  {
    id: "UC Marine",
    title: "UC Marine",
    description: "Hardened frontline ground troop of the United Colonies. Specializes in heavy weaponry, orbital planetary drops, and tactical boarding actions on hostile alien outposts."
  },
  {
    id: "UC Vanguard",
    title: "UC Vanguard",
    description: "The volunteer space defense force of the United Colonies. Earn citizenship through civic patrol duties, starship piloting, and taking on high-risk deep-space combat operations."
  },
  {
    id: "Crimson Fleet",
    title: "Crimson Fleet (Pirate Collective)",
    description: "A ruthless coalition of space pirates and outlaws. Operating from the Key in the Kryx system, you live by the pirate code: no one leaves the Fleet alive, and everything has a price."
  },
  {
    id: "Starborn",
    title: "Starborn",
    description: "A mysterious spacefarer who has stepped through the Unity, reborn with cosmic gravity-manipulating powers. You view mortal factions as temporary ripples in an infinite cosmic sea."
  },
  {
    id: "LIST (League of Independent Settlers)",
    title: "LIST (League of Independent Settlers)",
    description: "An organization helping families escape the high taxes and corporate control of the core systems. You help homesteaders clear frozen land and defend their borders."
  },
  {
    id: "House Va'ruun",
    title: "House Va'ruun Seekers",
    description: "Followers of the enigmatic Great Serpent. You live on the fringes of the charted galaxy, interpreting grav-jump resonance as sacred whispers of the coming cosmic reset."
  },
  {
    id: "Ebbside Strikers",
    title: "Ebbside Strikers",
    description: "A rugged street gang from the neon-soaked gutters of Neon. You fight Ryujin operatives and rival syndicates, protecting your territory with modified mag-pistols and raw attitude."
  },
  {
    id: "Constellation Enthusiasts",
    title: "Constellation",
    description: "The legendary group of space explorers dedicated to uncovering the final mysteries of the galaxy. You look past political squabbles to seek strange metallic artifacts and alien templates."
  },
  {
    id: "Merchant Intelligence Division (M.I.D.)",
    title: "Merchant Intelligence Division (M.I.D.)",
    description: "An elite, shadow corporate division conducting high-stakes intelligence, corporate espionage, and asset recovery across the trade networks."
  },
  {
    id: "United Colonies",
    title: "United Colonies (UC Civilians)",
    description: "Believing in structure, security, and unified law. You act as a registered colonial citizen helping to build peaceful trade lanes."
  },
  {
    id: "Freestar Collective",
    title: "Freestar Collective (Militia)",
    description: "Upholding individual liberty, pioneer independence, and decentralized rule. You help local cargo haulers protect their claim chits."
  },
  {
    id: "Ryujin Industries",
    title: "Ryujin Industries (Corporate)",
    description: "The peak of planetary megacorporations based in Neon. To you, the universe is a board of numbers, and you are ready to acquire or liquidate whatever is necessary."
  },
  {
    id: "Independent",
    title: "Independent (Mercenary / Smuggler)",
    description: "No flags, no politicians, no corporate handlers. You sell your services to the highest bidder, and sleep with a charged laser pistol under your pillow."
  }
];

// Immersive Name Generators for Starfield Lore
export const NAME_PARTS = {
  first: [
    "Vance", "Kaelen", "Rook", "Sarah", "Jaxon", "Cade", "Marlowe", "Sloane", "Valery", "Dax", 
    "Aria", "Cassian", "Lyra", "Talon", "Rhys", "Nova", "Zane", "Harlan", "Briggs", "Freya",
    "Garek", "Orion", "Selene", "Silas", "Theron", "Keira", "Bastian", "Rhea", "Vesper", "Finn"
  ],
  last: [
    "Sterling", "Voss", "Blackwood", "Rye", "Kincaid", "Cross", "Chen", "Hawthorne", "Valdez", "Gantry",
    "Ryder", "Corelli", "Stark", "Hale", "Renoir", "Keane", "Drury", "Colt", "Sundance", "Mercer",
    "Wren", "Sovereign", "Banner", "West", "Devlin", "Kerr", "Vane", "Stryker", "Gale", "Locke"
  ],
  callsigns: [
    "Specter", "Dustwood", "Caelum", "Void", "Hedge", "Contraband", "Gasket", "Rust", "Zero", "Anchor",
    "Apex", "Fuse", "Cipher", "Slick", "Beacon", "Breaker", "Drift", "Static", "Titan", "Phantom"
  ]
};
