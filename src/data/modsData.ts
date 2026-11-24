export const STUDIO_INQUIRY_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScLvheXf1ejAmosTkpubj_W73RaGmY-B3F3faJhTHrMD0wGLg/viewform?usp=publish-editor';

export interface ModProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Trade Wars' | 'Galaxy In' | string;
  description: string;
  status: string;
  creationsLink?: string;
  nexusLink?: string;
  features: string[];
  visualTheme: string;
  iconName: string;
  accentColor: 'amber' | 'cyan' | 'emerald' | 'purple' | 'blue' | 'indigo';
  bannerHeader: string;
  bannerSub: string;
  bannerTag: string;
}

export interface StudioCredential {
  id: string;
  title: string;
  badge: string;
  description: string;
  techStack: string;
  status: string;
  color: string;
  icon: string;
}

export interface StudioValue {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
}

export interface StudioConfig {
  studioName: string;
  founderName: string;
  foundedYear: string;
  studioHeaderTagline: string;
  verifiedBadge: string;
  subBadge: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  bethesdaAuthorUrl: string;
  bethesdaAuthorName: string;
  portfolioHeading: string;
  portfolioSubheading: string;
  aboutStudioTitle: string;
  aboutStudioSubtitle: string;
  whoWeAreHeading: string;
  whoWeArePara1: string;
  whoWeArePara2: string;
  whatWeDoHeading: string;
  whatWeDoPara1: string;
  whatWeDoPara2: string;
  missionHeading: string;
  missionStatement: string;
  valuesHeading: string;
  values: StudioValue[];
  verifiedRegistriesHeading: string;
  verifiedRegistriesSubtitle: string;
  discordUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
  stat3Label: string;
  stat3Value: string;
  stat4Label: string;
  stat4Value: string;
  toolchain1Title: string;
  toolchain1Value: string;
  toolchain2Title: string;
  toolchain2Value: string;
  toolchain3Title: string;
  toolchain3Value: string;
  toolchain4Title: string;
  toolchain4Value: string;
  footerNote: string;
}

export const DEFAULT_STUDIO_CONFIG: StudioConfig = {
  studioName: 'GAMERROUNDUP STUDIOS',
  founderName: 'Matt Pratt',
  foundedYear: '2026',
  studioHeaderTagline: 'Starfield Creation Kit • Voiced Narrative & Systemic Worlds',
  verifiedBadge: 'Bethesda Verified Creator',
  subBadge: 'Independent Game & Creation Studio',
  heroEyebrow: 'Official Bethesda Verified Creator • Founded by Matt Pratt',
  heroTitle: 'GAMERROUNDUP ',
  heroHighlight: 'STUDIOS',
  heroSubtitle:
    'Crafting thoughtful, story-driven worlds, real human-voiced handlers, and high-stakes gameplay systems across the Settled Systems. Engineered for 100% load-order stability, zero save bloat, and emergent cosmic immersion.',
  bethesdaAuthorUrl: 'https://creations.bethesda.net/en/starfield/all?author_display_name=prattgrf3',
  bethesdaAuthorName: 'prattgrf3',
  portfolioHeading: 'Starfield Mod Portfolio',
  portfolioSubheading: 'Explore official releases, #1 best-sellers, master compilations, voiced expansions, and sector overhauls.',
  aboutStudioTitle: 'About GAMERROUNDUP Studios',
  aboutStudioSubtitle: 'Our team, recording philosophy, real voice-acted storytelling, and studio engineering values.',
  whoWeAreHeading: 'Who We Are',
  whoWeArePara1:
    'GAMERROUNDUP Studios is an independent game development studio founded in 2026 by Matt Pratt. Dedicated to crafting thoughtful, story-driven worlds and high-stakes gameplay systems. Built on the belief that great games come from genuine passion and transparent collaboration, we bring together voice actors, world builders, artists, and engineers who care deeply about the craft.',
  whoWeArePara2:
    'Every project we ship is a direct reflection of our personal integrity, treating our collaborators with respect and honoring the time, trust, and imagination of the players who step into our worlds.',
  whatWeDoHeading: 'What We Do',
  whatWeDoPara1:
    'We specialize in systemic worldbuilding, narrative-driven expansions, and immersive gameplay mechanics across PC and console platforms. Starting within the Bethesda Verified Creator ecosystem, Gamerroundup Studios has built a catalog of deeply interconnected Starfield creations, including the Trade Wars saga, Iron Immortals, and the Galaxy overhaul series.',
  whatWeDoPara2:
    'Known for combining voiced storytelling, meaningful resource logistics, and emergent sandbox encounters. As we grow from acclaimed mod development into standalone indie titles, our strategy remains the same: focus on mechanics that matter, stories that resonate, and living worlds that reward player curiosity.',
  missionHeading: 'Our Mission',
  missionStatement:
    'We build thoughtful, story-driven mods and games with honesty, craftsmanship, and respect for players and creators alike.',
  valuesHeading: 'Our Values',
  values: [
    {
      id: 'integrity-first',
      title: 'Integrity First',
      subtitle: 'Honesty & Personal Accountability',
      description: 'We lead with honesty, transparency, and personal accountability in every update, and release.',
      icon: 'ShieldCheck',
      accent: 'amber'
    },
    {
      id: 'behind-the-pixels',
      title: 'Behind the Pixels',
      subtitle: 'Real Voice Actors & Collaborators',
      description: 'Great games start with creators. Treating every collaborator, actor, and player with genuine respect.',
      icon: 'Mic',
      accent: 'purple'
    },
    {
      id: 'meaning-over-noise',
      title: 'Meaning Over Noise',
      subtitle: 'Intentional Stories & Systems',
      description: "We honor players' time by crafting intentional stories and rewarding systems, never hollow filler.",
      icon: 'Sparkles',
      accent: 'cyan'
    }
  ],
  verifiedRegistriesHeading: 'Official Bethesda Verified Creator Registry',
  verifiedRegistriesSubtitle: 'Official platform credentials, publishing authorization, and Creation Kit technical architecture.',
  discordUrl: 'https://discord.com/invite/starfield',
  facebookUrl: 'https://facebook.com',
  twitterUrl: 'https://twitter.com',
  youtubeUrl: 'https://youtube.com',
  stat1Label: 'ACTIVE RELEASES',
  stat1Value: '8 Flagship Works',
  stat2Label: 'VOICE ACTING',
  stat2Value: '100% Human Voiced',
  stat3Label: 'VOICE TALENT INQUIRIES',
  stat3Value: 'Voice Actor Casting',
  stat4Label: 'DEV & ART INQUIRIES',
  stat4Value: 'Programmers, Artists & Level Designers',
  toolchain1Title: 'Primary Toolchain',
  toolchain1Value: 'Creation Kit 2.0 & Wwise Audio',
  toolchain2Title: 'Narrative & Audio',
  toolchain2Value: 'Live Voice Actors & Recording Guides',
  toolchain3Title: 'Scripting Architecture',
  toolchain3Value: 'Native Papyrus (Zero Save Bloat)',
  toolchain4Title: 'Distribution',
  toolchain4Value: 'Bethesda Creations (PC & Xbox)',
  footerNote: 'Bethesda Verified Creator • Founded 2026 by Matt Pratt'
};

export const DEFAULT_CREDENTIALS: StudioCredential[] = [
  {
    id: 'bethesda',
    title: 'Bethesda Verified Creator',
    badge: 'BVC-STARFIELD-OFFICIAL',
    description:
      'Officially Verified Creator for Bethesda Softworks with direct publishing authorization on the Bethesda Creations platform across PC and Xbox Series X|S. Specializes in lore-friendly, conflict-free, production-grade gameplay systems brought to life by real human voice actors, world builders, artists, and engineers.',
    techStack: 'Starfield Creation Kit 2.0, Native Papyrus Scripting, Wwise Voice Integration, Custom Starfield Systems, Conflict-Free ESM Architecture',
    status: 'VERIFIED CREATOR',
    color: 'border-amber-500/30 bg-zinc-900/80 hover:border-amber-400 text-zinc-100',
    icon: 'Award'
  }
];

export const DEFAULT_MODS: ModProject[] = [
  {
    id: 'galaxy-colonized',
    title: 'Galaxy Colonized',
    subtitle: 'Planetary Surface Density & Subterranean Cave Networks',
    category: 'Galaxy In',
    description:
      "Our #1 best-selling Starfield Creation. Galaxy Colonized completely reworks planetary surface exploration by unlocking and expanding the engine's built-in procedural generation limits. Eliminating vast stretches of empty, barren terrain, it raises world-space placement caps and enables multi-cluster POI generation alongside lucrative Spacer Cache Cave Networks so every horizon feels organically active, populated, and rewarding.",
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/6d8df4fd-1591-4eb4-94f5-61ad64451381/Galaxy_Colonized',
    nexusLink: '#',
    features: [
      'Unlocks procedural generation caps for higher planetary POI density',
      'High-value Spacer Cache Cave Networks turning subterranean runs into expeditions',
      'Natural biome clustering along terrain contours with zero save bloat',
      '100% compatible with Galaxy Salvage Runner, Galaxy in Flux & Trade Wars'
    ],
    visualTheme: 'from-amber-950 via-zinc-900 to-zinc-900 border-amber-500/50 hover:border-amber-300 text-zinc-100',
    iconName: 'Orbit',
    accentColor: 'amber',
    bannerHeader: '#1 BEST-SELLING CREATION',
    bannerSub: 'PLANETARY POI DENSITY OVERHAUL',
    bannerTag: 'GALAXY SERIES FLAGSHIP'
  },
  {
    id: 'galaxy-salvage-runner',
    title: 'Galaxy Salvage Runner',
    subtitle: 'Scrap Economy, 15 Industrial Micro-POIs & Delivery Contracts',
    category: 'Galaxy In',
    description:
      'Transform scattered clutter, ship debris, and miscellaneous loot into a full-scale interstellar salvage economy. Break down almost any item across the Settled Systems into tiered Salvage Crates, haul raw materials to 15 brand-new lived-in industrial micro-POIs, and take on 7 handcrafted delivery missions and lore slates from former Vanguard Captain Alistair "Mac" Vance while balancing the dynamic Cost of Doing Business.',
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/4873d7b9-4f50-4b9f-867e-577ea26564b8/Galaxy_Salvage_Runner',
    nexusLink: '#',
    features: [
      'Scrap anything into tiered Salvage Crates for a profitable loot economy',
      '15 brand-new lived-in industrial micro-POIs across the Settled Systems',
      '7 handcrafted delivery contracts & lore slates from Captain Alistair "Mac" Vance',
      'Dynamic "Cost of Doing Business" simulation (fuel, crew salaries, tariffs & permits)'
    ],
    visualTheme: 'from-purple-950 via-zinc-900 to-zinc-900 border-purple-500/50 hover:border-purple-300 text-zinc-100',
    iconName: 'Package',
    accentColor: 'purple',
    bannerHeader: 'SALVAGE & SCRAP ECONOMY',
    bannerSub: '15 NEW INDUSTRIAL MICRO-POIS',
    bannerTag: 'CAPTAIN MAC VANCE CONTRACTS'
  },
  {
    id: 'trade-wars-galaxy-at-war',
    title: 'Trade Wars - Galaxy At War',
    subtitle: 'Dynamic Space Conflicts & Active Warfare Zones',
    category: 'Trade Wars',
    description:
      'Transform deep space from a quiet vacuum into a volatile, reactive battleground. This mod introduces dynamic space conflicts across major sectors where factional skirmishes, tactical defense operations, and aggressive cargo raids occur. Engage in corporate-backed space battles, raid rival transport vessels, and loot high-value industrial cargo in contested space.',
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/190a2180-5802-4d1a-a6ea-3a14893bd28f/Trade_Wars__Galaxy_At_War',
    nexusLink: '#',
    features: [
      'Dynamic factional space combat and active conflict encounters',
      'High-yield cargo salvage claiming and ship-boarding events',
      'Tactical space skirmishes responding organically to player presence',
      'Contraband loot tables and high-value scrap resources in deep space'
    ],
    visualTheme: 'from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-amber-400 text-zinc-100',
    iconName: 'ShieldAlert',
    accentColor: 'amber',
    bannerHeader: 'ACTIVE COMBAT SECTOR',
    bannerSub: 'DYNAMIC WARFARE MATRIX',
    bannerTag: 'LIVE ENGAGEMENT FEED'
  },
  {
    id: 'trade-wars-mid',
    title: 'Trade Wars - MID',
    subtitle: 'Merchant Intelligence Division & Corporate Ops',
    category: 'Trade Wars',
    description:
      "Join the covert shadow operations of the Merchant Intelligence Division (M.I.D.). Tasked with enforcing corporate trade networks and securing strategic salvage claims, you'll execute high-stakes black-market contracts, infiltrate rival ship hulls, and work with specialized fully-voiced handlers. Features monochrome cockpits and heavy industrial styles.",
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/e02c971a-3a99-49ae-880e-38e21cce45f6/Trade_Wars__Merchant_Intelligence_Division__MID_',
    nexusLink: '#',
    features: [
      'Covert corporate espionage, scrap enforcement, and shadow assignments',
      'Fully-voiced handlers guiding your operations across the systems',
      'Custom monochrome industrial cockpit compatibility for tactical play',
      'Classified M.I.D. tactical stealth suits and special operations gear'
    ],
    visualTheme: 'from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-cyan-400 text-zinc-100',
    iconName: 'Eye',
    accentColor: 'cyan',
    bannerHeader: 'MERCHANT INTEL DIVISION',
    bannerSub: 'CLASSIFIED COVERT OPS',
    bannerTag: 'CLEARANCE: LEVEL 5'
  },
  {
    id: 'trade-wars-supply-charter-redux',
    title: 'Trade Wars Supply Charter REDUX',
    subtitle: 'Overhauled Freight Economy & Interstellar Logistics',
    category: 'Trade Wars',
    description:
      "The definitive revamp of Starfield's interstellar cargo logistics. Establish binding Supply Charters with corporate megacorporations and outpost clusters to establish functional bulk freight networks. Deliver heavy machinery, tech modules, and mineral shipments across active shipping lanes while protecting your freight from corporate raiders.",
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/66a557bf-66ee-48cb-b851-1a6db9c08b07/Trade_Wars_Supply_Charter_REDUX',
    nexusLink: '#',
    features: [
      'Complete logistics and shipping contract system with heavy payouts',
      'Interstellar supply networks linking outpost silos to high-demand hubs',
      'Logistical freight shipping with custom bulk cargo components',
      'Vulnerable, active trade routes that attract space piracy and interceptors'
    ],
    visualTheme: 'from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-emerald-400 text-zinc-100',
    iconName: 'Package',
    accentColor: 'emerald',
    bannerHeader: 'INTERSTELLAR FREIGHT ECONOMY',
    bannerSub: 'SUPPLY CHARTERS & LOGISTICS',
    bannerTag: 'REDUX OVERHAUL v2.4'
  },
  {
    id: 'trade-wars-community-supply-charter',
    title: 'Trade Wars - Community Supply Charter',
    subtitle: 'Frontier Trade Network & Collaborative Jobs',
    category: 'Trade Wars',
    description:
      'Extend your logistics networks to the independent outer rim systems. This community-driven expansion integrates collaborative cargo contracts, new frontier trade goods, and dynamic shipping jobs from remote mining settlements. Secure the lifelines of developing frontier colonies by delivering key defense equipment and technical scrap.',
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/7d8da2dd-ed05-4035-b8c3-60e266efd96c/Trade_Wars__Community_Supply_Charter',
    nexusLink: '#',
    features: [
      'Dozens of localized dynamic shipping contracts for independent frontiers',
      'Community-designed commodities, trade goods, and technical cargo',
      'Reputation-based unlocks at remote outpost trade boards',
      'Seamless mechanical compatibility with the main Supply Charter economy'
    ],
    visualTheme: 'from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-purple-400 text-zinc-100',
    iconName: 'Users',
    accentColor: 'purple',
    bannerHeader: 'COMMUNITY FRONTIER NETWORK',
    bannerSub: 'COLLABORATIVE COMMODITIES',
    bannerTag: 'OUTER RIM SUPPLY TIERS'
  },
  {
    id: 'trade-wars-gates-of-janus',
    title: 'Trade Wars Gates of Janus (4-in-1)',
    subtitle: 'Consolidated Master Mod Compilation',
    category: 'Trade Wars',
    description:
      'The ultimate compilation of the Trade Wars universe. Gates of Janus seamlessly combines four massive systems—Galaxy At War, Merchant Intelligence Division (M.I.D.), Supply Charter REDUX, and Community Supply Charters—into a single, optimized, conflict-free package. Saves valuable load order slots while ensuring maximum stability and performance.',
    status: 'Available Now',
    creationsLink:
      'https://creations.bethesda.net/en/starfield/details/2920d7ab-8f77-406f-8443-eea597d8da53/Trade_Wars_Gates_of_Janus__4_in_1_combined',
    nexusLink: '#',
    features: [
      'Consolidates four extensive systems into a single slot-saving load file',
      'Optimized script integration and unified space encounter tables',
      'Perfect sync between M.I.D. corporate quests and Supply Charter trade loops',
      'The definitive, conflict-free method to play the Trade Wars overhaul series'
    ],
    visualTheme: 'from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-blue-400 text-zinc-100',
    iconName: 'Layers',
    accentColor: 'blue',
    bannerHeader: '4-IN-1 MASTER COMPILATION',
    bannerSub: 'UNIFIED TRADE WARS ECOSYSTEM',
    bannerTag: 'FLAGSHIP SYSTEM'
  },
  {
    id: 'galaxy-in-flux',
    title: 'Galaxy in Flux',
    subtitle: 'Dynamic Points of Interest & Alive Settled Systems',
    category: 'Galaxy In',
    description:
      'The Settled Systems are no longer static. They’re alive, reactive, and ready to defend themselves. Galaxy in Flux transforms points of interest across the Settled Systems into dynamic, lived‑in locations by populating them with organically placed NPCs drawn from expanded leveled lists. Outposts, research stations, science labs, bio facilities, and remote frontier sites now feel inhabited, and threatened. As you arrive at these POIs, you’ll encounter civilians, workers, guards, scientists, and faction‑aligned personnel actively defending their homes and livelihoods.',
    status: 'Upcoming / Expanded',
    creationsLink: '#',
    nexusLink: '#',
    features: [
      'Dynamic NPC population injected into a wide range of POIs',
      'Outposts and labs that feel inhabited, active, and worth defending',
      'Organic encounters that evolve the tone of exploration',
      'A more reactive, lived‑in Settled Systems',
      'Clean up quest on ref collect aliases runs to avoid save bloat'
    ],
    visualTheme: 'from-blue-950 via-slate-900 to-zinc-900 border-blue-900 hover:border-indigo-400 text-blue-50',
    iconName: 'Orbit',
    accentColor: 'indigo',
    bannerHeader: 'DYNAMIC POI POPULATION',
    bannerSub: 'ORGANIC FACTION SPAWNING',
    bannerTag: 'SETTLED SYSTEMS OVERHAUL'
  }
];
