import { BackstoryResult } from "../types";

// 100 Starfield lore friendly first names
export const STARFIELD_FIRST_NAMES = [
  "Vance", "Kaelen", "Rook", "Sarah", "Jaxon", "Cade", "Marlowe", "Sloane", "Valery", "Dax", 
  "Aria", "Cassian", "Lyra", "Talon", "Rhys", "Nova", "Zane", "Harlan", "Briggs", "Freya",
  "Garek", "Orion", "Selene", "Silas", "Theron", "Keira", "Bastian", "Rhea", "Vesper", "Finn",
  "Wyatt", "Amos", "Jax", "Walter", "Vladimir", "Matteo", "Andreja", "Sam", "Cora", "Ronald",
  "Lillian", "Elias", "Helena", "Victor", "Percival", "Hadley", "Walker", "Roy", "Cass", "Gideon",
  "Muriel", "Estelle", "Genevieve", "Donald", "Arthur", "Duncan", "Charles", "Evelyn", "Franklin", "Gregory",
  "Henry", "Isaac", "Julian", "Marcus", "Nathaniel", "Oliver", "Peter", "Quentin", "Raymond", "Thomas",
  "Vincent", "Warren", "Zachary", "Alistair", "Beatrice", "Clara", "Dorothy", "Eleanor", "Flora", "Hazel",
  "Irene", "Josephine", "Katherine", "Louisa", "Margaret", "Nora", "Ophelia", "Penelope", "Rosalind", "Sylvia",
  "Theresa", "Ursula", "Winifred", "Zeke", "Logan", "Kaidan", "Serena", "Cyrus", "Kira", "Caelum"
];

// 100 Starfield lore friendly last names
export const STARFIELD_LAST_NAMES = [
  "Sterling", "Voss", "Blackwood", "Rye", "Kincaid", "Cross", "Chen", "Hawthorne", "Valdez", "Gantry",
  "Ryder", "Corelli", "Stark", "Hale", "Renoir", "Keane", "Drury", "Colt", "Sundance", "Mercer",
  "Wren", "Sovereign", "Banner", "West", "Devlin", "Kerr", "Vane", "Stryker", "Gale", "Locke",
  "Coe", "Morgan", "Victus", "Delgado", "Naeva", "Shinya", "Rokov", "Adler", "Toft", "Kibwe",
  "Ikande", "Woodard", "Yasin", "Cartwright", "Blake", "Wilcox", "Keala", "Kane", "Mason", "Logan",
  "Shepard", "Miller", "Smith", "Jones", "Johnson", "Williams", "Brown", "Davis", "Wilson", "Moore",
  "Taylor", "Anderson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark",
  "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright",
  "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell",
  "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Lovelace", "Vaughn", "Caven", "Russo", "Tate"
];

// 300 Agnostic Nicknames / Callsigns
export const STARFIELD_NICKNAMES = [
  "Trigger Happy", "Dusty", "Rusty", "Zero-G", "Blackout", "Gasket", "Apex", "Cipher", "Slick", "Anchor",
  "Beacon", "Breaker", "Drift", "Static", "Titan", "Phantom", "Sovereign", "Specter", "Void", "Hedge",
  "Contraband", "Fuse", "Chalk", "Frost", "Burner", "Stitch", "Hardpoint", "Rebound", "Echo", "Whisper",
  "Viper", "Cobra", "Rattler", "Copper", "Gravel", "Lead", "Volt", "Amp", "Friction", "Crank",
  "Piston", "Hammer", "Nail", "Spike", "Blade", "Shadow", "Ghost", "Wraith", "Banshee", "Ghoul",
  "Zombie", "Cadaver", "Bones", "Skull", "Grin", "Smirk", "Sneer", "Jester", "Clown", "Fool",
  "Trickster", "Sly", "Fox", "Wolf", "Hound", "Jackal", "Coyote", "Dingo", "Hyena", "Badger",
  "Weasel", "Ferret", "Stoat", "Mink", "Otter", "Beaver", "Squirrel", "Gopher", "Mole", "Rat",
  "Mouse", "Shrew", "Bat", "Owl", "Hawk", "Falcon", "Eagle", "Vulture", "Buzzard", "Raven",
  "Crow", "Magpie", "Jay", "Shrike", "Kestrel", "Merlin", "Osprey", "Kite", "Harrier", "Goshawk",
  "Sparrowhawk", "Caracara", "Condor", "Albatross", "Petrel", "Shearwater", "Stormy", "Breeze", "Gale", "Gust",
  "Zephyr", "Sirocco", "Mistral", "Chinook", "Monsoon", "Typhoon", "Hurricane", "Cyclone", "Tornado", "Twister",
  "Whirlwind", "Vortex", "Maelstrom", "Tempest", "Storm", "Thunder", "Lightning", "Bolt", "Flash", "Spark",
  "Ember", "Ash", "Coal", "Soot", "Smoke", "Fog", "Mist", "Haze", "Smog", "Cloud", "Shadowy",
  "Shade", "Darkness", "Gloom", "Murk", "Dusk", "Dawn", "Twilight", "Midnight", "Noon", "Daylight",
  "Sunbeam", "Ray", "Beam", "Laser", "Phaser", "Blaster", "Cannon", "Gunner", "Sniper", "Scout",
  "Ranger", "Sheriff", "Marshal", "Deputy", "Warden", "Guard", "Sentry", "Watchman", "Patrol", "Vanguard",
  "Pioneer", "Explorer", "Surveyor", "Miner", "Salvager", "Scavenger", "Wrecker", "Breaker", "Cutter", "Welder",
  "Rigger", "Deckhand", "Mate", "Captain", "Pilot", "Navigator", "Helmsman", "Driver", "Rider", "Runner",
  "Courier", "Smuggler", "Pirate", "Corsair", "Buccaneer", "Privateer", "Raider", "Marauder", "Plunderer", "Looter",
  "Thief", "Burglar", "Robber", "Bandit", "Outlaw", "Fugitive", "Exile", "Refugee", "Survivor", "Castaway",
  "Hermit", "Recluse", "Wanderer", "Drifter", "Nomad", "Vagrant", "Tramp", "Hobo", "Gypsy", "Roamer",
  "Rambler", "Wayfarer", "Pilgrim", "Seeker", "Finder", "Hunter", "Trapper", "Stalker", "Tracker", "Bounty",
  "Mercenary", "Soldier", "Warrior", "Fighter", "Brawler", "Slugger", "Bruiser", "Crusher", "Mauler", "Basher",
  "Smasher", "Heavy", "Tank", "Shield", "Wall", "Fortress", "Bastion", "Rampart", "Citadel", "Keep",
  "Tower", "Silo", "Hangar", "Dock", "Port", "Gate", "Key", "Lock", "Chain", "Gear",
  "Rocket", "Boost", "Thruster", "Burn", "Scorch", "Singe", "Char", "Blaze", "Flare", "Glitter",
  "Gleam", "Shine", "Glow", "Beast", "Monster", "Demon", "Devil", "Fiend", "Ogre", "Giant",
  "Goliath", "Colossus", "Titan", "Atlas", "Hercules", "Samson", "Goliath", "Nimrod", "Gorgon", "Hydra",
  "Kraken", "Dragon", "Wyvern", "Basilisk", "Phoenix", "Griffin", "Chimera", "Sphinx", "Minotaur", "Cyclops",
  "Siren", "Harpy", "Fury", "Valkyrie", "Amazon", "Gladiator", "Spartan", "Knight", "Paladin", "Squire",
  "Rook", "Bishop", "King", "Queen", "Ace", "Jack", "Joker", "Wildcard", "Deuce", "Spade"
];

// 15 Truly Randomized Alternate Endings / Wildcard auxiliary dossiers (True RNG)
export const WILDCARD_ENDINGS = [
  "A specialized auxiliary sub-dossier suggests this subject has been spotted conducting high-risk smuggling runs through the radioactive remnants of the Cheyenne system's outer belt, running entirely without standard transponder beacons.",
  "Unconfirmed local reports indicate the subject has established contact with an underground cybernetic hacking ring in Ebbside, upgrading their neural links to process complex star-chart telemetry in real-time.",
  "A classified Trade Authority internal audit shows a trail of ghost accounts with small, recurring deposits originating from automated gas-siphons on the outer rim, indicating a steady source of untraceable passive income.",
  "Local orbital security sweeps flagged a ship matching the subject's grav-signature conducting precision orbits around the massive basalt rings of an unmapped gas giant, completely ignoring all corporate hail requests.",
  "A decrypted black-market transmission reveals a major bounty was temporarily placed on the subject's head by an anonymous Ryujin executive, though the contract was abruptly and mysteriously cancelled under priority-one clearance.",
  "Eyewitnesses at the Red Mile claim to have seen the subject betting heavily on risky courier routes, sporting a customized pressurized flight visor marked with micro-scars of near-fatal zero-g decompression.",
  "A stray sector-scanning log captured their vessel performing an incredibly complex series of triple-axis slips in empty space, as though navigating a phantom gravity-well visible only to the helmsman.",
  "Whispers in Akila City suggest the subject keeps a heavily-shielded container in a localized cargo compartment, containing a collection of glowing, anomalous mineral shards that emit a constant low-frequency spatial hum.",
  "A regional security bulletin warns that the subject has been sharing encrypted Starborn hyper-coordinates with trusted freelance salvagers, sparking a minor gold-rush into unmapped deep-space sectors.",
  "An old Vanguard flight instructor noted that the subject's tactical combat telemetry perfectly mirrors the dogfighting maneuvers of a legendary, decommissioned Colony War ace long thought lost to the drift.",
  "Intriguingly, their private flight deck log is filled with thousands of lines of unformatted quantum telemetry, suggesting they are mapping gravitational anomalies rather than carrying standard commercial freight.",
  "A piece of intercepted spacer chatter warns that the subject's ship has been modified with illegal high-yield scrap-compactors, capable of crushing heavy hull-plating into easily transportable raw alloys.",
  "Dossier updates show the subject has acquired military-grade decryption keys for decommissioned United Colonies listening posts, allowing them to dock and restock reactor fuel without triggering local sector alerts.",
  "A deep-range survey station reported a brief, high-intensity grav-wave resonance near their last logged coordinates that does not match any known standard engine or grav-drive model currently on the market.",
  "Underground informants on Neon claim the subject has been anonymously funding a small, independent clinic in the lower levels of Ebbside, distributing food-packs and medical supplies while keeping their face fully hidden."
];

// Seeded determinism helper
function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Procedural generator
export function generateProceduralBackstory(
  name: string,
  originId: string,
  traitId: string,
  choiceId: string,
  factionId: string
): BackstoryResult {
  const charName = name.trim() || "Classified Subject";
  const seed = getHash(charName);

  // Generate unique dynamic ID
  const logNum = (seed % 900000) + 100000;
  const sector = ["Alpha Centauri", "Cheyenne", "Volii", "Kryx", "Sol", "Narion", "Charybdis", "Porrima"][(seed + 3) % 8];
  const stationNum = (seed % 99) + 1;

  // Custom log header depending on selected faction
  let logHeader = `SETTLED-SYSTEMS // SECURE DOSSIER #SS-${logNum}-${stationNum}`;
  const facLower = factionId.toLowerCase();
  if (facLower.includes("merchant") || facLower.includes("m.i.d")) {
    logHeader = `MID-DATABANK // CLASSIFIED INTEL #SS-${logNum}-${stationNum}`;
  } else if (facLower.includes("crimson") || facLower.includes("pirate")) {
    logHeader = `CRIMSON-FLEET // DECRYPTED LOG #CF-${logNum}-${stationNum}`;
  } else if (facLower.includes("constellation")) {
    logHeader = `CONSTELLATION // EXPLORATION DOSSIER #CO-${logNum}-${stationNum}`;
  } else if (facLower.includes("ryujin")) {
    logHeader = `RYUJIN-CORP // CONFIDENTIAL CONTRACT #RJ-${logNum}-${stationNum}`;
  } else if (facLower.includes("freestar") || facLower.includes("ranger")) {
    logHeader = `FREESTAR-REGISTRY // FIELD ARCHIVE #FC-${logNum}-${stationNum}`;
  } else if (facLower.includes("sysdef")) {
    logHeader = `SYSDEF-TACTICAL // MILITARY RECORD #SD-${logNum}-${stationNum}`;
  } else if (facLower.includes("marine")) {
    logHeader = `UC-MARINES // COMBAT EXPOSURE LOG #UM-${logNum}-${stationNum}`;
  } else if (facLower.includes("vanguard")) {
    logHeader = `UC-VANGUARD // RECRUIT REGISTRY #UV-${logNum}-${stationNum}`;
  } else if (facLower.includes("starborn")) {
    logHeader = `UNITY-ANOMALY // QUANTUM EXPOSURE LOG #SB-${logNum}-${stationNum}`;
  }

  // 1. ORIGIN PARAGRAPH TEMPLATES (3 versions per origin)
  const originTemplates: Record<string, string[]> = {
    "Neon Street Rat": [
      `Raised in the wet, neon-blurred underbelly of Ebbside, ${charName} spent early years running chits for minor street crews. In Neon, survival isn't about strength—it's about holding the right access codes and knowing when to dive into the ventilation ducts before Ryujin corporate sweeps clean the platforms.`,
      `The oil-slicked docks of Neon were ${charName}'s nursery. Surviving on stolen Aurora vials and discarded dry-packs, they carved a reputation for lightning-fast lock picking and an uncanny ability to slip past the neon-drenched gaze of the Neon Security Force.`,
      `Before the stars, there was the Rain. ${charName} remembers the rhythmic thrum of Neon's heavy lightning generators and the constant, high-stakes threat of corporate wet-work teams. Learning the hard way that every human has a credit value, they learned to trust nothing but a fully charged stun-baton.`
    ],
    "Cargo Salvager": [
      `Cutting radioactive bulkheads in the graveyard orbits of Narion taught ${charName} the true weight of space. Surrounded by the cold metal ribs of shattered Colony War capital ships, they learned that a single loose seal or a failing pressure regulator is the only boundary between scrap-riches and an icy death.`,
      `For ${charName}, the Settled Systems are just one massive junk heap waiting for a plasma torch. Spending years in zero-g fields pry-barring high-yield hyperconductors from derelict cruisers, their skin bears the unmistakable micro-scarring of containment-breach radiation.`,
      `The groan of twisting steel and the absolute silence of the vacuum are ${charName}'s oldest memories. Scrap-hunting on debris fields taught them how to navigate weightless environments with heavy equipment and find value in things the core systems declared lost.`
    ],
    "UC Vanguard recruit": [
      `Taking the Vanguard oath under Jemison's blue skies, ${charName} looked up at the towering skyscrapers of New Atlantis and saw a path to citizenship. Yet, beneath the clean recruitment posters lay the gritty reality of patrol runs in unmapped systems where political rules dissolve.`,
      `With a freshly stamped flight certification and a standardized military laser, ${charName} joined the Vanguard to escape a dead-end logistics job. They quickly learned that Jemison's high ideals look very different when your shield regulators are melting under pirate fire.`,
      `The Vanguard promised adventure, honor, and citizenship. Instead, ${charName} found themselves logging countless hours in the Jemison flight simulators and running security escort for grumpy Trade Authority freighters through hostile spacer territory.`
    ],
    "Freestar Drifter": [
      `Born in the dusty, windswept canyons of Akila City, ${charName} grew up listening to tales of the Freestar Collective's rugged independence. But when the local mayors started taking corporate payouts, they took to the stars, preferring the honest cold of deep space to Akila's corrupt boardrooms.`,
      `With nothing but a worn-out magnetic pistol and a flight suit held together by duct tape, ${charName} drifted from star-system to star-system, taking odd security jobs. They learned that out past the Ranger outposts, justice is whatever you can pull from your holster first.`,
      `Akila's walls protect you from Ashta, but they can't protect you from the creeping influence of corporate greed. ${charName} chose the drifter life, tracking rogue signals and salvage claims across the independent frontier where nobody asks for your registry chits.`
    ]
  };

  const originList = Object.keys(originTemplates);
  const selectedOriginKey = originList.find(k => originId.toLowerCase().includes(k.toLowerCase())) || "Cargo Salvager";
  const oIdx = seed % 3;
  let originParagraph = originTemplates[selectedOriginKey][oIdx];
  originParagraph = originParagraph.replace(/Vance/g, charName);

  // 2. TRAIT INSERT SENTENCES (3 versions per trait)
  const traitInserts: Record<string, string[]> = {
    "High-Stress Tolerance": [
      `Physiologically, ${charName} is a statistical anomaly: while under intense target locks, their heart rate drops to a steady fifty beats per minute, allowing near-perfect combat calculus.`,
      `In high-stress situations where standard pilots freeze, their cold, deliberate focus takes over, turning high-g evasive maneuvers into muscle-memory exercises.`,
      `Years of surviving explosive decompression have left them with an iron-clad nervous system; when alarms scream red, ${charName} calmly reroutes auxiliary shield power.`
    ],
    "Cybernetic Enhancements": [
      `An illicit military-grade neuro-link runs directly down their spine, boosting their starship interface response times by 15% at the cost of persistent static migraines.`,
      `They possess hacked neural processors that tap directly into their visor's HUD, painting enemy lead-targets in brilliant orange, though they must constantly calibrate the sensory feedback.`,
      `Synthetic reflex boosters are spliced into their nervous system, giving them an incredibly fast trigger-finger, though their cybernetic joints occasionally hum when exposed to strong electromagnetic fields.`
    ],
    "Wanted": [
      `This cold precision is vital, given the active five-figure bounty placed on their head by a volatile Neon syndicate eager to collect on their unpaid debts.`,
      `A shadow contract hangs over their coordinate log; trackers are constantly hunting their ship's grav-signature, ensuring ${charName} never sleeps without an armed mag-pistol by the bunk.`,
      `Having crosshairs painted on their back by mercenaries has made them incredibly vigilant, viewing every incoming warp signature as a potential execution squad.`
    ],
    "Alien DNA": [
      `Their physical endurance is augmented by classified alien genetic splicing, which dramatically accelerates cell regeneration but leaves them with a permanent metallic taste in their mouth.`,
      `A covert genetic experiment has fused their lung tissue with alien biomechanical strands, allowing them to survive on minimal oxygen for hours, though core gravity feels heavy.`,
      `They carry the legacy of a dark lab experiment, giving them heightened kinetic reaction times and denser bone structure, though medical scanners flag their blood as non-human.`
    ]
  };

  const traitList = Object.keys(traitInserts);
  const selectedTraitKey = traitList.find(k => traitId.toLowerCase().includes(k.toLowerCase())) || "High-Stress Tolerance";
  const tIdx = (seed + 1) % 3;
  const traitSentence = traitInserts[selectedTraitKey][tIdx];

  // Weave origin and trait paragraph together
  const p1 = `${originParagraph} ${traitSentence}`;

  // 3. DEFINING CHOICE PARAGRAPH (3 versions per choice)
  const choiceTemplates: Record<string, string[]> = {
    "Betrayed corporate handler": [
      `Everything changed during a routine run to a classified debris zone in the ${sector} system. Instructed to log a crate of military-grade grav-coils as scrap-waste, ${charName} instead cut a side deal with an independent buyer. The payoff bought their first ship, but left a ruthless Trade Authority liaison swearing blood-vengeance.`,
      `The turning point arrived when their corporate handler ordered them to dump a cargo hold of toxic chemical waste onto an inhabited homestead moon. ${charName} refused, rerouted the high-grade components to the black market, and erased their ship's registry before the corporate auditors could trace the transmission.`,
      `Faced with an executive order to surrender an encrypted salvage claim, ${charName} chose betrayal. Siphoning the coordinates of a high-value military cruiser wreck, they sold the data to independent salvagers and vanished into the drift before the company's tactical enforcers could lock down the sector.`
    ],
    "Recovered classified blueprint": [
      `During a solo salvage dive on a shattered Colony War battleship in ${sector}, ${charName} bypassed a locked vault and pulled an encrypted data-slab from a dead Admiral's hand. The drive contained secret blueprints for experimental tactical warp-scramblers—a packet of data worth more than an entire star-system's annual cargo run.`,
      `While cutting through the reactor core of a derelict dreadnought, ${charName} stumbled upon a black-box recorder. Bypassing the security subroutines, they uncovered a classified weapon schematic that could disrupt entire orbital defense grids, hiding the physical drive in their suit's primary coolant tank.`,
      `A routine junk-haul turned historic when ${charName} excavated an intact military research pod. Inside lay an un-redacted star-chart outlining classified industrial research outposts; keeping this data-slab secret has been a lethal game of hide-and-seek ever since.`
    ],
    "Defended independent outpost": [
      `When a Crimson Fleet vanguard landed on a defenseless mining colony in ${sector}, ${charName} didn't run. Instead, they hotwired an obsolete industrial mining laser and targeted the raiders' landing thrusters, single-handedly trapping the pirates on the surface until a regional militia crew could arrive.`,
      `Faced with a pirate boarding action on a remote frontier silo, ${charName} bypassed the safety clamps, vented the cargo bay to vacuum, and took up a defensive bottleneck position. Armed with only a modified cutter, they held the line and saved a dozen homesteaders.`,
      `They proved their mettle when spacer raiders breached the perimeter of a frontier research outpost. Using their knowledge of heavy industrial wiring, ${charName} rigged the base's scrap-compactors to overload, creating tactical shockwaves that shattered the raiders' advance.`
    ],
    "Stole Ryujin trade secrets": [
      `Using their clearance to access the executive servers at Ryujin tower, ${charName} downloaded the chemical formulas for a highly-guarded neuro-stimulant. They managed to slip the data-pad past biometric scanners inside a hollowed-out grav-drive capacitor, sparking an underground corporate bidding war.`,
      `In the shadows of Neon's corporate suites, ${charName} executed a perfect cyber-heist. Infiltrating the database of Ryujin's primary logistics network, they copied the trade schedules and secure routing keys, selling them to independent salvagers to break the megacorporation's monopoly.`,
      `They crossed a lethal line by copying Ryujin's experimental armor alloy designs. Slipping the optical storage chips into their suit's primary helmet visor, they walked out of the lab just minutes before security forces went on lockdown.`
    ],
    "Humming Artifact Discovery": [
      `A routine shift in an active titanium mine shattered their reality. When ${charName}'s mining laser struck a strange, non-natural metallic deposit, a blinding shockwave of light flared, rendering them unconscious. Since that day, they have been plagued by vivid, gravity-warping dreams and a persistent low humming sound in their skull.`,
      `Deep in the basalt tunnels of an uncharted moon, their cutter unearthed a metallic ring that defied physical analysis. Touching the artifact filled their mind with an overwhelming cascade of alien geometries and starmaps, leaving them with strange sensory anomalies and a persistent connection to gravity wells.`,
      `They uncovered a humming metallic shard that floated inches above the stone floor. The moment they touched it, the mine's emergency sirens failed, and ${charName} experienced a temporary state of absolute spatial weightlessness, a secret they have kept guarded from corporate surveyors.`
    ]
  };

  const choiceList = Object.keys(choiceTemplates);
  const selectedChoiceKey = choiceList.find(k => choiceId.toLowerCase().includes(k.toLowerCase())) || "Betrayed corporate handler";
  const cIdx = (seed + 2) % 3;
  let p2 = choiceTemplates[selectedChoiceKey]?.[cIdx] || choiceTemplates["Betrayed corporate handler"][0];
  p2 = p2.replace(/Vance/g, charName);

  // 4. FACTION PARAGRAPH - 15 Balanced Faction Options
  const factionTemplates: Record<string, string[]> = {
    "Merchant Intelligence Division (M.I.D.)": [
      `Today, ${charName} operates as a trusted asset of the Merchant Intelligence Division (M.I.D.). Utilizing their gritty past to navigate the gray areas of corporate law, they secure high-value salvage claims, intercept rival cargo runs, and enforce corporate trade loops across the Settled Systems.`,
      `Aligned with the shadow ops of the M.I.D., ${charName} lives on the corporate ledger's knife-edge. Splicing their technical expertise with M.I.D. intelligence assets, they hunt down illegal salvage claims and run covert enforcement actions that the United Colonies' regular forces refuse to touch.`,
      `Operating under M.I.D. black-budget contracts, ${charName} has become a legendary shadow in the trade lanes. They trade in high-grade salvage secrets and secure vulnerable freight routes, ensuring that corporate assets are protected at any cost.`
    ],
    "Crimson Fleet": [
      `Seeking shelter from corporate retaliation, ${charName} swore the pirate oath at the Key. Now, aligned with the Crimson Fleet, they use their knowledge of trade lanes to raid corporate haulers, claim disputed salvage, and ensure that the skull-and-bones emblem of Kryx remains a terrifying specter in deep space.`,
      `Living by the Fleet's code, ${charName} has turned their back on corporate law. They navigate the black-market routes of the outer rim, translating high-value cargo data into raw pirate raids and showing zero mercy to corporate enforcers who try to defend their cargo silos.`,
      `The Crimson Fleet offered freedom and a heavy share of the spoils. Aligned with Delgado's outlaw captains, ${charName} targets high-yield Trade Authority freighters, boarding vessels with cold efficiency and claiming the Settled Systems' riches as their own.`
    ],
    "Constellation Enthusiasts": [
      `Sensing a deeper purpose to the stars, ${charName} joined Constellation. Backed by the explorers of New Atlantis, they look past the corporate warfare and regional skirmishes, dedicating their ship and skills to tracking down the remaining metallic artifacts and mapping anomalous grav-fields.`,
      `Leaving corporate politics behind, ${charName} aligned with Constellation to solve the galaxy's ultimate puzzle. Guided by strange grav-wave anomalies, they lead expeditions into dangerous, uncharted star-systems, looking for the ancient alien architecture that holds the key to humanity's future.`,
      `Constellation offered a sanctuary where discovery is the only currency. Operating from the Lodge, ${charName} utilizes their past survival skills to explore hostile worlds, hunting for mysterious artifacts that whisper of an advanced, ancient cosmic origin.`
    ],
    "Ryujin Industries": [
      `Now fully integrated into the operations of Ryujin Industries, ${charName} serves as a high-stakes corporate operative. They specialize in high-yield industrial acquisitions, asset liquidation, and shadow operations that ensure Ryujin remains the undisputed ruler of the neon platforms.`,
      `Operating with Ryujin's massive credit pool at their back, ${charName} executes high-stakes corporate espionage. They treat the Settled Systems as a giant chessboard, securing market share, intercepting rival research shipments, and liquidating corporate threats with cold, methodical efficiency.`,
      `As a senior tactical operative for Ryujin, ${charName} enforces corporate contracts with an iron hand. They oversee black-market trade networks and asset recovery operations, proving that spreadsheets and silent mag-pistols are the ultimate weapons of modern commerce.`
    ],
    "Freestar Collective": [
      `Now working as an independent deputy with the Freestar Collective, ${charName} patrols the vast, open frontier of the Cheyenne system. Armed with a heavy Mag-Shear and an unshakable sense of survival, they protect small mining claims from greedy corporate syndicates.`,
      `Aligned with the Freestar Collective's militia, ${charName} brings hard-boiled frontier justice to the outer colonies. They defend independent homesteaders against Crimson Fleet raids, ensuring the ideals of individual liberty are preserved on the galactic rim.`,
      `They have sworn to uphold the freedom of the Freestar Collective, serving as a tactical scout through hostile systems. They guide independent trade convoys through spacer-infested hyper-lanes, asking for nothing but a full fuel cell and a clear target.`
    ],
    "Trade Authority": [
      `Operating under the gray banner of the Trade Authority, ${charName} handles high-yield cargo verification and contraband transit. They turn a blind eye to corporate politics, focusing purely on the profit margins and ensuring that every transit chit is signed in blood.`,
      `As a trusted contractor for the Trade Authority, ${charName} has mastered the art of spaceborne trade. Sifting through corporate bankruptcies and orbital salvage records, they secure rare military-grade scrap before regional inspectors can register the loss.`,
      `Aligned with the Trade Authority's shadow division, ${charName} specializes in high-value asset recovery. They know exactly how to slip restricted resources past planetary customs, serving as a vital link in the Settled Systems' black-market supply line.`
    ],
    "UC SysDef": [
      `Enlisting in United Colonies System Defense, ${charName} has dedicated their tactical flight expertise to bringing down pirate syndicates. Working from the command deck of the UC Vigilance, they lead high-risk deep-space interdictions and sting operations against Crimson Fleet ships.`,
      `Now a specialized operative for UC SysDef, ${charName} conducts covert operations under the direct command of Commander Kibwe Ikande. They slip into hostile pirate territory, tracking illegal weapons shipments and charting pirate hideouts with clinical precision.`,
      `They serve as a vital defensive asset for UC SysDef, protecting critical colonial shipping lanes. Armed with heavy military shields and military-grade scanning arrays, they hunt down rogue spacers and pirate squads before they can disrupt civilian colonies.`
    ],
    "UC Marine": [
      `As a battle-tested UC Marine, ${charName} is a master of heavy planetary drops and high-risk orbital breaches. They thrive in the high-gravity battlefields of the Settled Systems, leading armed squads into spacer outposts and clearing hostiles with heavy laser fire.`,
      `The military discipline of the UC Marines has hardened ${charName} into a perfect frontline weapon. Specializing in zero-g boarding actions and tactical weapon proficiency, they are the first to breach a hijacked corporate freighter.`,
      `Now operating as an elite planetary security officer for the UC Marines, ${charName} secures remote colonial research sites. They protect high-value scientific assets from merc syndicates, proving that the United Colonies' reach is both deep and lethal.`
    ],
    "UC Vanguard": [
      `Taking the Vanguard oath, ${charName} has earned the right to fly under the flag of New Atlantis. As a volunteer pilot, they run critical escort operations, clear planetary sectors of spacer threats, and build up their citizenship credits with every successful combat tour.`,
      `Now an active recruit in the UC Vanguard, ${charName} patrols the dangerous independent frontiers of deep space. Splicing their raw piloting skills with Vanguard military hardware, they defend remote outpost clusters from pirate boarding parties.`,
      `The Vanguard offered them a path to citizenship, and ${charName} has paid for it in spacer blood. Operating as a freelance protector for the United Colonies, they run high-stakes exploration missions into sectors where regular forces fear to tread.`
    ],
    "Starborn": [
      `Having stepped through the shimmering veil of the Unity, ${charName} is reborn as Starborn. No longer bound by the petty political struggles of mortal factions, they view the Settled Systems as a temporary testing ground, using their gravity-warping cosmic powers to hunt down remaining artifacts.`,
      `As an enigmatic Starborn, ${charName} exists outside of linear time and space. They navigate the star-systems with a silent, hyper-advanced starship, manipulating local gravity fields and watching mortal corporations squabble over scrap metal with cold, cosmic amusement.`,
      `The Unity transformed them, granting ${charName} a permanent link to the quantum fabric of the universe. They trace artifact energy signatures across hostile worlds, manipulating space-time to outmaneuver the factions of the Settled Systems with terrifying grace.`
    ],
    "LIST (League of Independent Settlers)": [
      `Believing in the dream of simple, independent colonization, ${charName} acts as a vital protector for LIST homesteaders. They clear frozen tundra and hostile native wildlife, helping families build secure lives far away from the heavy taxes of New Atlantis.`,
      `Now aligned with the League of Independent Settlers (LIST), ${charName} serves as a frontier guide and security scout. They locate mineral-rich moons for new colonies, setting up defensive perimeters and protecting vulnerable homesteads from spacer raiders.`,
      `They dedicate their ship and survival skills to the LIST collective, serving as an orbital defender for remote farming outposts. They build automated turrets and repair defensive arrays, ensuring that independent settlers can live without fear of corporate takeover.`
    ],
    "House Va'ruun": [
      `Aligned with the enigmatic seekers of House Va'ruun, ${charName} interprets the stars through the whispers of the Great Serpent. They navigate the dark, unmapped sectors of the galaxy, believing that the coming cosmic alignment will purge the corrupt factions of the core systems.`,
      `Following the sacred teachings of Jinan Va'ruun, ${charName} has become a shadow in the outer rim. Operating with secret energy weapons and grav-shroud technology, they hunt corporate scouts who trespass on sacred planetary ruins.`,
      `To ${charName}, the galaxy is a canvas of sacred space-time ripples waiting for the Great Serpent's return. They live on the dark fringes, using high-yield particle weapons to defend sacred sites and salvage ancient technological secrets.`
    ],
    "Ebbside Strikers": [
      `Claiming the wet, neon-slicked alleys of Ebbside as their home, ${charName} fights under the banner of the Strikers. Armed with customized mag-pistols and street-smart cybernetics, they protect their block from Ryujin operatives and corporate sweep teams.`,
      `Now a trusted enforcer for the Ebbside Strikers, ${charName} runs Neon's underground smuggling networks. They slip contraband past the Neon Security Force, using their lockpicking skills to siphon credits from corporate bank terminals.`,
      `They live by the code of the Ebbside streets, standing as a direct threat to Ryujin's corporate greed. They run tactical asset acquisitions in the lower sectors, proving that Neon's street rats can hold their own against the biggest boardrooms in the galaxy.`
    ],
    "United Colonies": [
      `As a registered citizen of the United Colonies, ${charName} believes in the power of centralized law, security, and scientific progress. Operating from the clean towers of New Atlantis, they help coordinate supply chains that keep the core systems unified and peaceful.`,
      `Fully aligned with the United Colonies' administrative division, ${charName} works to secure stable trade routes between Jemison and remote outposts. They believe that a unified galaxy is a safe galaxy, coordinating defense networks to keep piracy at bay.`
    ],
    "Independent": [
      `Refusing to pledge allegiance to any flag or corporate executive, ${charName} lives as a truly independent mercenary. Selling their piloting and salvage services to the highest bidder, they navigate the Settled Systems on their own terms with a charged laser pistol under their bunk.`,
      `To ${charName}, flags are just targets and contracts are just credit markers. They run cargo, salvage wrecks, and hunt bounties across the independent frontier, trusting only their ship's shields and their own lightning-fast reflexes.`,
      `They operate in the deep black as a legendary freelance pilot, avoiding corporate registries and regional custom scans. They carve their own path through the Trade Wars, taking on the high-risk salvage runs that regular factions are too terrified to touch.`
    ]
  };

  // Safe faction match or true RNG selection from all keys
  const factionList = Object.keys(factionTemplates);
  const matchedKey = factionList.find(k => factionId.toLowerCase().includes(k.toLowerCase()));
  
  // If matched, use it; otherwise, pick a random faction as fallback (true RNG!)
  const selectedFactionKey = matchedKey || factionList[Math.floor(Math.random() * factionList.length)];
  const fIdx = (seed + 3) % 3;
  const factionPool = factionTemplates[selectedFactionKey];
  let p3 = factionPool[fIdx % factionPool.length];
  p3 = p3.replace(/Vance/g, charName);

  // TRUE RNG: Append a randomized "Alternate Fate" from the wildcard pool
  const wildcardIndex = Math.floor(Math.random() * WILDCARD_ENDINGS.length);
  const wildcardText = WILDCARD_ENDINGS[wildcardIndex];

  // Compile full backstory with the randomized auxiliary sub-log
  const fullBackstory = `${p1}\n\n${p2}\n\n${p3}\n\n[ACCESSING AUXILIARY SUB-LOG DATA...]\n${wildcardText}`;

  // 5. ARCHETYPE SUMMARIES - 15 Balanced Faction Options
  const summaries: Record<string, string[]> = {
    "Merchant Intelligence Division (M.I.D.)": [
      `A calculated M.I.D. operative utilizing clinical focus to secure high-value corporate salvage.`,
      `A covert corporate contractor specializing in shadow logistics and asset recovery.`,
      `An elite corporate intelligence asset haunted by high-stakes scrap-enforcement runs.`
    ],
    "Crimson Fleet": [
      `A ruthless outlaw raider slicing through corporate hulls to claim forbidden black-market riches.`,
      `A seasoned pirate captain who lives by the code of the Key and targets wealthy Trade Authority haulers.`,
      `A hardened space mercenary who turned their back on the core systems to raid corporate networks.`
    ],
    "Constellation Enthusiasts": [
      `An intrepid Constellation explorer tracing mysterious grav-jump resonance patterns across uncharted moons.`,
      `A dedicated cosmic surveyor looking past corporate greed to solve the ancient mystery of the artifacts.`,
      `A spacefaring pilgrim whose mind was permanently altered by a humming metallic relic.`
    ],
    "Ryujin Industries": [
      `A cold-blooded corporate operative specializing in high-stakes espionage and competitor liquidation.`,
      `A brilliant Ryujin analyst who transitioned from spreadsheets to tactical shadow-ops in deep space.`,
      `A high-stakes corporate executor who views the Settled Systems as a board of assets waiting to be claimed.`
    ],
    "Freestar Collective": [
      `A rugged frontier deputy standing as a barrier against corporate expansion on the outer moons.`,
      `An independent Freestar scout bringing hard-boiled frontier justice to rogue spacers.`,
      `A fearless Cheyenne marksman who prefers the honest cold of space to corporate boardrooms.`
    ],
    "Trade Authority": [
      `A cynical Trade Authority specialist who views the Settled Systems purely through profit margins.`,
      `A high-yield contraband runner who knows exactly how to bypass planetary orbital customs.`,
      `A neutral trade broker trading in classified military scrap and corporate trade secrets.`
    ],
    "UC SysDef": [
      `An elite SysDef tactical commander leading covert sting operations to eradicate deep-space piracy.`,
      `A disciplined military pilot tracking high-risk weapons shipments in spacer-infested systems.`,
      `A spaceborne hunter dedicated to defending United Colonies freight lanes from pirate clans.`
    ],
    "UC Marine": [
      `A battle-hardened UC Marine specializing in zero-g boarding actions and heavy laser breaches.`,
      `An elite frontline soldier who secures remote research outposts under intense combat fire.`,
      `A decorated military vanguard veteran with permanent micro-scars from orbital planetary drops.`
    ],
    "UC Vanguard": [
      `A heroic UC Vanguard volunteer pilot earning citizenship through high-risk deep-space patrols.`,
      `A dedicated New Atlantis citizen patrolling independent sectors to defend frontier outposts.`,
      `An adventurous freelance escort pilot backed by the United Colonies' advanced flight hardware.`
    ],
    "Starborn": [
      `An enigmatic Starborn spacefarer who has stepped through the Unity, reborn with cosmic gravity powers.`,
      `A mysterious quantum traveller who views corporate wars as temporary ripples in an infinite sea.`,
      `A cosmic guardian tracing ancient artifact signatures across unmapped planetary basalt tunnels.`
    ],
    "LIST (League of Independent Settlers)": [
      `A humble LIST pathfinder helping independent families survive and build lives on frozen moons.`,
      `A frontier surveyor clearing hostile wildlife and setting up automated outpost defense turrets.`,
      `An orbital defender dedicated to protecting remote agricultural homesteads from corporate greed.`
    ],
    "House Va'ruun": [
      `An enigmatic Va'ruun Seeker navigating unmapped systems guided by the whispers of the Great Serpent.`,
      `A shadow pilot utilizing secret particle weaponry and grav-shrouds to defend ancient cosmic ruins.`,
      `A spacefaring mystic who views linear time as a minor detail before the coming cosmic reset.`
    ],
    "Ebbside Strikers": [
      `A street-smart Ebbside Striker protecting lower-sector territories with modified mag-pistols.`,
      `A cybernetic street rat running contraband and hacking corporate bank terminals on the platforms.`,
      `A Neon rebel standing as a persistent digital threat to Ryujin's corporate expansion plans.`
    ],
    "United Colonies": [
      `A civic United Colonies administrator coordinating stable trade loops and colonial expansion.`,
      `A dedicated New Atlantis contractor mapping planetary resource sectors for peaceful commerce.`,
      `A colonial coordinator who believes in unified interstellar law, security, and progress.`
    ],
    "Independent": [
      `A freelance mercenary and salvage specialist who sleeps with a charged laser pistol under their bunk.`,
      `A high-risk cargo runner who sells their expert flight skills exclusively to the highest bidder.`,
      `A lone deep-black survivalist who refuses to pledge allegiance to any flag or corporate ledger.`
    ]
  };

  const summaryList = Object.keys(summaries);
  const matchedSummaryKey = summaryList.find(k => factionId.toLowerCase().includes(k.toLowerCase()));
  
  // Pick matching key if found, otherwise do a true RNG pick across all possible summaries
  const summaryKey = matchedSummaryKey || summaryList[Math.floor(Math.random() * summaryList.length)];
  const sIdx = seed % 3;
  const summaryPool = summaries[summaryKey];
  const characterSummary = summaryPool[sIdx % summaryPool.length];

  // 6. REDDIT READY SHARABLE TEXT
  const redditReadyText = `**[${factionId.toUpperCase()} PERSONNEL LOG DOSSIER]**

*"They wanted a standard recruit. What they got was a survivor who knows the exact weight of a human life in cargo chits."*

Meet **${charName}**, starting as a **${originId}** marked by **${traitId}**. After a fateful turning point—**${choiceId}**—their trajectory was permanently altered. Today, aligned with **${factionId}**, they navigate the high-stakes salvage lanes of the Settled Systems.

**Full Archive Dossier:**
${fullBackstory}

#Starfield #TradeWars #SettledSystems #Gamerroundup #Roleplay #${factionId.replace(/[^a-zA-Z0-9]/g, "")}`;

  return {
    logHeader,
    fullBackstory,
    redditReadyText,
    characterSummary
  };
}
