export interface OriginNode {
  id: string;
  title: string;
  description: string;
}

export interface TacticalChoice {
  id: string;
  label: string;
  actionText: string;
  strategy: 'COMBAT' | 'COVERT' | 'COMMERCE' | 'EXPLORE';
  outcomeSuccess: {
    narrative: string;
    hullDelta: number;
    creditsDelta: number;
    intelDelta: number;
    itemReward: string;
  };
}

export interface TacticalEncounter {
  id: string;
  act: 1 | 2 | 3;
  title: string;
  sector: string;
  system: string;
  threatLevel: 'LOW' | 'ELEVATED' | 'HIGH' | 'CRITICAL';
  visualGraphic: 'combat' | 'derelict' | 'station' | 'intel' | 'contraband';
  briefing: string;
  situation: string;
  intelTip: string;
  choices: TacticalChoice[];
}

export interface GeneratedDossier {
  logHeader: string;
  fullBackstory: string;
  redditReadyText: string;
  characterSummary: string;
}

export const STARSHIP_CALLSIGNS: string[] = [
  'Vanguard Ghost-7',
  'Razorleaf Mark-II',
  'Chimera-9 Heavy Cruiser',
  'Cheyenne Sun-Hauler',
  'Ebbside Shadow-Runner',
  'Volii Apex-Interdictor',
  'Frontier Wanderer IV',
  'Cerberus Salvage Skiff'
];

export const ORIGIN_NODES: OriginNode[] = [
  {
    id: 'Neon Street Rat',
    title: 'Neon Street Rat',
    description:
      'You grew up on the rain-slicked, drug-fueled platforms of Neon. You know how Ryujin operates, how the gangs fight, and how to survive with nothing but credit chits and quick wit.'
  },
  {
    id: 'Cargo Salvager',
    title: 'Cargo Salvager',
    description:
      'You spent your youth cutting through radioactive bulkheads of shattered bulk-carriers. Debris fields of the Colony War are your graveyard, your playground, and your pantry.'
  },
  {
    id: 'UC Vanguard recruit',
    title: 'UC Vanguard Recruit',
    description:
      'You took the oath under the gleaming towers of New Atlantis. Trained in atmospheric dogfighting and tactical boarding, you look for honor but usually find red tape.'
  },
  {
    id: 'Freestar Drifter',
    title: 'Freestar Drifter',
    description:
      'Born under the wide-open skies of Akila. You trust your laser rifle, your crew, and nobody else. You believe the Collective is getting soft and corporate.'
  },
  {
    id: 'Ryujin Junior Analyst',
    title: 'Ryujin Junior Analyst',
    description:
      'A desk in the executive tower was your throne. You learned that spreadsheets can destroy a rival outpost faster than a squadron of starfighters.'
  },
  {
    id: 'Drifting Ship Hand',
    title: 'Drifting Ship Hand',
    description:
      'A space-faring nomad who drifted from cargo vessel to bulk-carrier, cleaning corrosive coolant tubes and surviving multiple explosive decompressions.'
  },
  {
    id: 'Traveling Asteroid Miner',
    title: 'Traveling Asteroid Miner',
    description:
      'An outskirts youth digging for Helium-3 and titanium in deep-space belts. You know how to operate heavy drilling lasers and hope to strike a motherlode.'
  },
  {
    id: 'Spacer Orphan',
    title: 'Spacer Orphan',
    description:
      "Spacers raided your parents' research outpost, leaving you as the sole survivor in the frozen wreckage. You grew up fueled by survival instincts and cold fury."
  },
  {
    id: 'Homestead Pioneer',
    title: 'Homestead Pioneer',
    description:
      'Raised in a struggling agricultural outpost on a hostile, radiation-baked world. You know how to coax food out of frozen soil and defend the perimeter from local predators.'
  },
  {
    id: 'UC Navy Dropout',
    title: 'UC Navy Dropout',
    description:
      "You washed out of the prestigious officer academy on Jemison after questioning a superior's tactical sacrifice. Your training is elite, but your discharge was bitter."
  },
  {
    id: 'Black-Market Smuggler',
    title: 'Black-Market Smuggler',
    description:
      'You spent years running forbidden contraband past United Colonies orbit scans until a rival smuggler tipped off security and your ship was seized.'
  },
  {
    id: 'Cyber-Runner Renegade',
    title: 'Cyber-Runner Renegade',
    description:
      "A rogue deck-hacker who stole high-value corporate data pads from Ryujin executives. You're always looking over your shoulder for cyber-extraction teams."
  },
  {
    id: 'Xenobiologist Outcast',
    title: 'Xenobiologist Outcast',
    description:
      "You studied lethal alien fauna on remote wilderness moons, until a classified research project went horribly wrong and you were blamed for the lab's destruction."
  },
  {
    id: 'Freestar Militia Veteran',
    title: 'Freestar Militia Veteran',
    description:
      'Fought in a brutal brush-fire colony dispute. You left the service with a scarred chest, a decommissioned mag-rifle, and a deep distrust of politicians.'
  },
  {
    id: 'Sanctum Universum Seeker',
    title: 'Sanctum Universum Seeker',
    description:
      'A pilgrim seeking spiritual truths hidden within the grav-wave resonance patterns of the outer rim. You look at the stars as a divine puzzle.'
  },
  {
    id: 'Colony War Scavenger',
    title: 'Colony War Scavenger',
    description:
      'You sift through ancient wreckage to salvage high-grade hyperconductors, selling tech relics to the highest bidder on the black-market.'
  },
  {
    id: 'Ecliptic Mercenary Ex-Gun',
    title: 'Ecliptic Mercenary Ex-Gun',
    description:
      'Formerly a hired weapon for Charybdis contracts, you walked away after refusing an order to liquidate an unarmed research outpost. Now you work solo.'
  },
  {
    id: 'Luxe Cruise Escort',
    title: 'Luxe Cruise Escort',
    description:
      'Accompanied wealthy oligarchs on pleasure yachts until a violent Crimson Fleet boarding party forced you to take the helm and fight back.'
  },
  {
    id: "Va'ruun Zealot Fugitive",
    title: "Va'ruun Zealot Fugitive",
    description:
      "Escaped from the isolationist clutches of the fanatical House Va'ruun. You live in hiding, knowing the Great Serpent's shadow agents seek your silence."
  },
  {
    id: 'Red Mile Survivor',
    title: 'Red Mile Survivor',
    description:
      'You ran the notorious Red Mile gauntlet on Porrima III and actually crossed the finish line alive. You have the scars and the local reputation to prove it.'
  },
  {
    id: 'Astral Lounge Bouncer',
    title: 'Astral Lounge Bouncer',
    description:
      "Threw out unruly aurora-addled corporate heirs from Neon's premier club, until you threw the wrong Ryujin director's son down the elevator shaft."
  },
  {
    id: 'Independent Surveyor',
    title: 'Independent Surveyor',
    description:
      "Spent lonely months mapping radiation-baked, uncharted worlds for commercial developers. You talk to your suit's AI more than you talk to humans."
  },
  {
    id: 'Frontier Combat Medic',
    title: 'Frontier Combat Medic',
    description:
      'Patched up wounded cargo haulers under intense pirate plasma fire. You know exactly how the human body works, and how to put it back together.'
  },
  {
    id: 'Industrial Outpost Fabricator',
    title: 'Industrial Outpost Fabricator',
    description:
      'Spent a decade managing heavy automated manufacturing silos on desolate moons, designing starship frames and specialized mining equipment.'
  }
];

export const FIRST_NAMES: string[] = [
  'Vance', 'Kaelen', 'Rook', 'Sarah', 'Jaxon', 'Cade', 'Marlowe', 'Sloane', 'Valery', 'Dax',
  'Aria', 'Cassian', 'Lyra', 'Talon', 'Rhys', 'Nova', 'Zane', 'Harlan', 'Briggs', 'Freya',
  'Garek', 'Orion', 'Selene', 'Silas', 'Theron', 'Keira', 'Bastian', 'Rhea', 'Vesper', 'Finn',
  'Wyatt', 'Amos', 'Jax', 'Walter', 'Vladimir', 'Matteo', 'Andreja', 'Sam', 'Cora', 'Ronald',
  'Lillian', 'Elias', 'Helena', 'Victor', 'Percival', 'Hadley', 'Walker', 'Roy', 'Cass', 'Gideon',
  'Muriel', 'Estelle', 'Genevieve', 'Donald', 'Arthur', 'Duncan', 'Charles', 'Evelyn', 'Franklin', 'Gregory',
  'Henry', 'Isaac', 'Julian', 'Marcus', 'Nathaniel', 'Oliver', 'Peter', 'Quentin', 'Raymond', 'Thomas',
  'Vincent', 'Warren', 'Zachary', 'Alistair', 'Beatrice', 'Clara', 'Dorothy', 'Eleanor', 'Flora', 'Hazel',
  'Irene', 'Josephine', 'Katherine', 'Louisa', 'Margaret', 'Nora', 'Ophelia', 'Penelope', 'Rosalind', 'Sylvia',
  'Theresa', 'Ursula', 'Winifred', 'Zeke', 'Logan', 'Kaidan', 'Serena', 'Cyrus', 'Kira', 'Caelum'
];

export const LAST_NAMES: string[] = [
  'Sterling', 'Voss', 'Blackwood', 'Rye', 'Kincaid', 'Cross', 'Chen', 'Hawthorne', 'Valdez', 'Gantry',
  'Ryder', 'Corelli', 'Stark', 'Hale', 'Renoir', 'Keane', 'Drury', 'Colt', 'Sundance', 'Mercer',
  'Wren', 'Sovereign', 'Banner', 'West', 'Devlin', 'Kerr', 'Vane', 'Stryker', 'Gale', 'Locke',
  'Coe', 'Morgan', 'Victus', 'Delgado', 'Naeva', 'Shinya', 'Rokov', 'Adler', 'Toft', 'Kibwe',
  'Ikande', 'Woodard', 'Yasin', 'Cartwright', 'Blake', 'Wilcox', 'Keala', 'Kane', 'Mason', 'Logan',
  'Shepard', 'Miller', 'Smith', 'Jones', 'Johnson', 'Williams', 'Brown', 'Davis', 'Wilson', 'Moore',
  'Taylor', 'Anderson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark',
  'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright',
  'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell',
  'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Lovelace', 'Vaughn', 'Caven', 'Russo', 'Tate'
];

export const CALLSIGNS: string[] = [
  'Trigger Happy', 'Dusty', 'Rusty', 'Zero-G', 'Blackout', 'Gasket', 'Apex', 'Cipher', 'Slick', 'Anchor',
  'Beacon', 'Breaker', 'Drift', 'Static', 'Titan', 'Phantom', 'Sovereign', 'Specter', 'Void', 'Hedge',
  'Contraband', 'Fuse', 'Chalk', 'Frost', 'Burner', 'Stitch', 'Hardpoint', 'Rebound', 'Echo', 'Whisper',
  'Viper', 'Cobra', 'Rattler', 'Copper', 'Gravel', 'Lead', 'Volt', 'Amp', 'Friction', 'Crank',
  'Piston', 'Hammer', 'Nail', 'Spike', 'Blade', 'Shadow', 'Ghost', 'Wraith', 'Banshee', 'Wolf',
  'Hound', 'Jackal', 'Coyote', 'Falcon', 'Eagle', 'Raven', 'Kestrel', 'Merlin', 'Osprey', 'Harrier',
  'Zephyr', 'Sirocco', 'Tempest', 'Vortex', 'Maelstrom', 'Thunder', 'Lightning', 'Ember', 'Twilight', 'Midnight',
  'Vanguard', 'Pioneer', 'Surveyor', 'Salvager', 'Corsair', 'Privateer', 'Raider', 'Outlaw', 'Wanderer', 'Nomad'
];

export const ACT1_ENCOUNTERS: TacticalEncounter[] = [
  {
    id: 'act1_hyperion_derelict',
    act: 1,
    title: "Derelict Bulk Hauler 'Hyperion-IV'",
    sector: 'Narion Asteroid Belt',
    system: 'Narion System',
    threatLevel: 'ELEVATED',
    visualGraphic: 'derelict',
    briefing:
      'Long-range scanners lock onto a shattered HopeTech bulk freighter drifting between high-density iron asteroids. Its emergency beacon is pulsing an old Trade Wars corporate distress cipher.',
    situation:
      'Two Spacer scavenger skiffs are actively cutting into the starboard cargo hold while the main reactor core fluctuates toward a thermal breach.',
    intelTip: 'The freighter carries an unlogged M.I.D. diplomatic courier vault in its secondary bridge.',
    choices: [
      {
        id: 'act1_1_board_fight',
        label: 'Engage Pirate Scavengers with Particle Turrets',
        actionText: 'Power up forward particle batteries, scatter the Spacer skiffs, and force-dock with the burning hull.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your particle cannons shred the lead scavenger skiff. You hard-dock through the debris cloud and secure the M.I.D. courier locker before the reactor vents.',
          hullDelta: -10,
          creditsDelta: 4500,
          intelDelta: 25,
          itemReward: 'Encrypted M.I.D. Transponder'
        }
      },
      {
        id: 'act1_1_covert_hack',
        label: 'Broadcast False Trade Authority Quarantine IFF',
        actionText: 'Spoof a Class-4 biological containment warning across local channels to scare off the scavengers without firing a shot.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'The Spacers panic at the bio-hazard telemetry and burn hard out of the asteroid belt. You glide in silently and strip the bridge databanks clean.',
          hullDelta: 0,
          creditsDelta: 3200,
          intelDelta: 40,
          itemReward: 'Quarantine Override Cipher'
        }
      },
      {
        id: 'act1_1_salvage_siphon',
        label: 'Deploy High-Yield Plasma Cutters to Siphon Reactor Core',
        actionText: 'Ignore the firefight and extract the military-grade Helium-3 fuel rods and hyperconductors from the stern.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'While the scavengers fight over empty crew lockers, your salvage drones extract pristine hyperconductors worth a small fortune on the Neon exchange.',
          hullDelta: -5,
          creditsDelta: 5800,
          intelDelta: 10,
          itemReward: 'HopeTech Hyperconductor Array'
        }
      }
    ]
  },
  {
    id: 'act1_neon_sting',
    act: 1,
    title: 'Ebbside Smuggling Sting at Sub-Level 04',
    sector: 'Ebbside Industrial Canal',
    system: 'Volii Alpha (Neon)',
    threatLevel: 'HIGH',
    visualGraphic: 'contraband',
    briefing:
      'Your contact in Neon’s underbelly signals an urgent cargo handoff beneath the fishing platforms, but Neon Security tactical drones are sweeping the sector.',
    situation:
      'A crate of prototype neural-interfaces is pinned inside a flooded maintenance bay guarded by corrupt syndicate enforcers.',
    intelTip: 'The power junction box above the gantry can black out the entire sub-level for ninety seconds.',
    choices: [
      {
        id: 'act1_2_breach_charge',
        label: 'Detonate Breaching Charges through Ceiling Grate',
        actionText: 'Drop flash-charges from the upper catwalk and clear the bay with close-quarters mag-fire.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'The shockwave drops two enforcers instantly. You secure the neural-interface crates and boost back to your landing bay before Neon Security locks the blast doors.',
          hullDelta: -5,
          creditsDelta: 6200,
          intelDelta: 30,
          itemReward: 'Prototype Neural-Amp Case'
        }
      },
      {
        id: 'act1_2_jam_comms',
        label: 'Deploy Cyberwarfare Signal Jammer',
        actionText: 'Loop the security drone feeds and slip through the drainage conduit under thermal camo.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Your signal jammer loops their HUD telemetry. You walk out with both the contraband and a backup of the syndicate’s off-world shipping schedule.',
          hullDelta: 0,
          creditsDelta: 4800,
          intelDelta: 50,
          itemReward: 'Ebbside Smuggler Ledger'
        }
      },
      {
        id: 'act1_2_buy_informant',
        label: 'Offer GalBank Credstick Payoff to Lead Guard',
        actionText: 'Cut a direct side-deal with the underpaid syndicate lieutenant to flip the cargo manifest.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'The lieutenant pockets the credstick, looks the other way, and even throws in a crate of high-purity Aurora components for your trouble.',
          hullDelta: 0,
          creditsDelta: 3500,
          intelDelta: 20,
          itemReward: 'Syndicate Trade Pass'
        }
      }
    ]
  },
  {
    id: 'act1_cydonia_collapse',
    act: 1,
    title: 'Cydonia Deep-Shaft Seismic Breach',
    sector: 'Sub-Level 12 Excavation',
    system: 'Sol System (Mars)',
    threatLevel: 'ELEVATED',
    visualGraphic: 'derelict',
    briefing:
      'An unregulated deep-crust fracking operation beneath Cydonia has triggered a massive cavern collapse, exposing a pre-Colony War military storage vault.',
    situation:
      'Deimos corporate security is en route to seal the shaft permanently, while trapped miners broadcast frantic SOS pings.',
    intelTip: 'Seismic telemetry indicates the vault holds intact pre-war planetary survey cores.',
    choices: [
      {
        id: 'act1_3_excavate_drill',
        label: 'Overclock Industrial Mining Lasers to Clear Rubble',
        actionText: 'Cut a rescue corridor to free the miners and claim first salvage rights on the exposed bunker.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Your heavy cutters vaporize the Martian basalt. The grateful miners hand over an ancient UC military cache they uncovered in the rubble.',
          hullDelta: -10,
          creditsDelta: 5400,
          intelDelta: 35,
          itemReward: 'Martian Deep-Core Laser Module'
        }
      },
      {
        id: 'act1_3_salvage_vault',
        label: 'Extract Pre-War Prototype Cores Before Collapse',
        actionText: 'Send heavy cargo loaders straight into the unstable vault before Deimos security arrives.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Rockfalls dent your hull plating on liftoff, but your cargo hold is packed with rare pre-war titanium alloys and military ordnance.',
          hullDelta: -15,
          creditsDelta: 7000,
          intelDelta: 25,
          itemReward: 'Pre-War UC Ordnance Crate'
        }
      },
      {
        id: 'act1_3_hack_geosensors',
        label: 'Splice Mars Central Geological Survey Mainframe',
        actionText: 'Tap the exposed fiber-optic trunk line to download classified rare-earth deposits across the Martian crust.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'You download a treasure trove of uncatalogued platinum veins across Mars. Corporate scouts buy the scan data immediately upon landing.',
          hullDelta: 0,
          creditsDelta: 4000,
          intelDelta: 60,
          itemReward: 'Cydonia Rare Mineral Survey Map'
        }
      }
    ]
  },
  {
    id: 'act1_kryx_ambush',
    act: 1,
    title: 'Crimson Fleet Disruption at Kryx Gateway',
    sector: 'The Lock High Orbit',
    system: 'Kryx System',
    threatLevel: 'HIGH',
    visualGraphic: 'combat',
    briefing:
      'Three Crimson Fleet raider interceptors have deployed electromagnetic cluster mines around an unarmed Freestar merchant convoy.',
    situation:
      'The lead merchant freighter has suffered complete reactor shutdown and is being dragged toward a pirate boarding barge.',
    intelTip: 'The pirate mines use an unencrypted friend-or-foe transponder frequency.',
    choices: [
      {
        id: 'act1_4_full_salvo',
        label: 'Execute Broadside Particle Cannon Barrage',
        actionText: 'Dive straight into the minefield, guns blazing, to break the pirate boarding clamp.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your broadside shatters the boarding barge. The surviving raiders scatter into the ice rings, leaving behind rich combat salvage.',
          hullDelta: -15,
          creditsDelta: 6500,
          intelDelta: 25,
          itemReward: 'Crimson Fleet Tactical Targeting Chip'
        }
      },
      {
        id: 'act1_4_emp_mines',
        label: 'Reprogram Pirate EM Mines with Cyber-Spike',
        actionText: 'Flip the minefield IFF signatures so the cluster mines lock onto the Crimson Fleet interceptors.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'The reprogrammed mines detonate against the pirate wingmen, disabling their engines instantaneously while you collect the convoy’s encrypted logs.',
          hullDelta: 0,
          creditsDelta: 5200,
          intelDelta: 45,
          itemReward: 'Encrypted Kryx Nav-Beacon'
        }
      },
      {
        id: 'act1_4_salvage_derelict',
        label: 'Tow Damaged Merchant Hull to Orbital Staryard',
        actionText: 'Lock magnetic tow-cables onto the disabled freighter and haul it out under heavy shield cover.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Your shields absorb a punishing volley, but you successfully haul the freighter to safety and claim a massive maritime salvage commission.',
          hullDelta: -10,
          creditsDelta: 8000,
          intelDelta: 15,
          itemReward: 'Supply Charter Salvage Bond'
        }
      }
    ]
  },
  {
    id: 'act1_starstation_delta',
    act: 1,
    title: 'Automated Defense Mutiny at Starstation Delta-9',
    sector: 'Olympus High Orbit',
    system: 'Olympus System',
    threatLevel: 'ELEVATED',
    visualGraphic: 'station',
    briefing:
      'A decommissioned United Colonies weapons research outpost has suffered an AI logic-lock, activating military combat sentries against all approaching vessels.',
    situation:
      'Automated railgun turrets track your approach. The staryard hangar houses an experimental sub-light drive prototype, but boarding requires breaching the defense grid.',
    intelTip: "The station's central logic node has a diagnostic maintenance bypass accessible from the secondary solar array.",
    choices: [
      {
        id: 'act1_5_destroy_turrets',
        label: 'Precision Missile Strike on Defense Emplacements',
        actionText: "Lock seeker missiles onto the station's cooling radiators to disable the automated turrets.",
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your missiles blow the radiator fins off Starstation Delta-9, forcing the railguns offline and clearing the hangar for immediate extraction.',
          hullDelta: -10,
          creditsDelta: 5500,
          intelDelta: 30,
          itemReward: 'Experimental Sub-Light Thruster Coil'
        }
      },
      {
        id: 'act1_5_eva_override',
        label: 'Zero-G EVA Infiltration through Solar Array',
        actionText: 'Perform a silent spacewalk through the solar truss and manually bypass the AI terminal with an override datapad.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'You slip through the zero-G vents and upload the maintenance override. The AI deactivates safely, granting you access to classified defense blueprints.',
          hullDelta: 0,
          creditsDelta: 4500,
          intelDelta: 55,
          itemReward: 'UC Defense AI Source Code'
        }
      },
      {
        id: 'act1_5_strip_reactors',
        label: 'Dismantle Experimental Solar Core for High-Tech Scrap',
        actionText: 'Cut away the high-efficiency monocrystalline solar matrix for resale to commercial shipyard brokers.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You strip the outer power arrays clean and sell the high-grade power converters to a waiting Stroud-Eklund procurement barge.',
          hullDelta: -5,
          creditsDelta: 6800,
          intelDelta: 20,
          itemReward: 'Monocrystalline Power Matrix'
        }
      }
    ]
  },
  {
    id: 'act1_deimos_sabotage',
    act: 1,
    title: 'Deimos Staryard Sabotage Attempt',
    sector: 'Deimos Capital Staryard',
    system: 'Sol System',
    threatLevel: 'HIGH',
    visualGraphic: 'station',
    briefing:
      'Mercenary saboteurs hired by a rival shipbuilder have infiltrated Deimos Staryard Dock 03 and planted thermite charges on an armored military frigate.',
    situation:
      'Station security is pinned down outside the airlock while the countdown timer hits three minutes.',
    intelTip: 'The saboteurs are coordinating their detonation signals through a nearby relay tug.',
    choices: [
      {
        id: 'act1_6_assault_airlock',
        label: 'Board the Airlock with Vanguard Tactical Shock-Troops',
        actionText: 'Blow the inner airlock seal and lead a direct firefight to disarm the charges by hand.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'You storm the frigate engineering deck, eliminate the mercenary squad, and rip the thermite detonators free with seconds to spare.',
          hullDelta: -5,
          creditsDelta: 7500,
          intelDelta: 35,
          itemReward: 'Deimos Armored Hull Plating Voucher'
        }
      },
      {
        id: 'act1_6_remote_defuse',
        label: "Remote Hack the Saboteurs' Detonation Frequency",
        actionText: 'Intercept the relay tug’s encrypted burst transmission and send a kill-code to brick the detonators.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Your kill-code renders every charge inert and exposes the corporate shell company that financed the attack.',
          hullDelta: 0,
          creditsDelta: 5000,
          intelDelta: 60,
          itemReward: 'Corporate Sabotage Dossier'
        }
      },
      {
        id: 'act1_6_salvage_gear',
        label: "Confiscate Saboteurs' Advanced Military Demolitions Kit",
        actionText: 'Trap the mercenary team inside the cargo lift and seize their high-grade ordnance and getaway vessel.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'With the mercenaries locked in containment, you strip their custom stealth skiff and sell the military hardware back to Deimos quartermasters.',
          hullDelta: 0,
          creditsDelta: 6000,
          intelDelta: 25,
          itemReward: 'Spec-Ops Breaching Kit'
        }
      }
    ]
  },
  {
    id: 'act1_eridani_siege',
    act: 1,
    title: 'Outpost Zeta Siege: Eridani-II',
    sector: 'Frontier Ridge Outpost',
    system: 'Eridani System',
    threatLevel: 'ELEVATED',
    visualGraphic: 'combat',
    briefing:
      'An independent frontier research colony on Eridani-II is surrounded by Ecliptic mercenaries demanding their atmospheric processor prototypes.',
    situation:
      'A blinding silicate dust storm is rolling across the ridge, cutting visibility and interfering with orbital targeting.',
    intelTip: 'The colony’s automated defense turrets only need a fresh fusion cell to come back online.',
    choices: [
      {
        id: 'act1_7_drop_turrets',
        label: 'Deploy Automated Combat Drones & Flank',
        actionText: 'Hot-drop into the perimeter trench, restore the fusion grid, and catch the Ecliptic squad in a crossfire.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'The restored laser turrets tear through the mercenary line. The colonists reward you with rare atmospheric data and salvage rights.',
          hullDelta: -10,
          creditsDelta: 5200,
          intelDelta: 30,
          itemReward: 'Ecliptic Commander Dogtags'
        }
      },
      {
        id: 'act1_7_evac_speed',
        label: 'Hot-LZ Evacuation Run in Heavy Dust Storm',
        actionText: 'Fly below radar through the canyon gale to extract the chief scientists and their research cores.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Abrasive silicate winds scour your hull, but your precision flying saves the entire research team and their prototype data.',
          hullDelta: -15,
          creditsDelta: 4400,
          intelDelta: 45,
          itemReward: 'Atmospheric Processor Blueprints'
        }
      },
      {
        id: 'act1_7_ransom_intel',
        label: 'Secure the Research Database for Commercial Licensing',
        actionText: 'Negotiate a defensive charter with the colonists in exchange for exclusive off-world distribution rights.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You drive off the raiders and sign a lucrative Community Supply Charter with Outpost Zeta that pays dividends across the frontier.',
          hullDelta: -5,
          creditsDelta: 6900,
          intelDelta: 40,
          itemReward: 'Frontier Supply Charter Contract'
        }
      }
    ]
  },
  {
    id: 'act1_akila_breach',
    act: 1,
    title: 'Akila City Perimeter Ashta Breach',
    sector: 'Akila Badlands Outskirts',
    system: 'Cheyenne System',
    threatLevel: 'ELEVATED',
    visualGraphic: 'derelict',
    briefing:
      'A pack of apex Ashta predators has overrun a supply convoy just outside Akila City’s defensive walls after someone tampered with the sonic repulsor pylons.',
    situation:
      'Freestar Rangers are stretched thin, and an armored cargo crawler loaded with Laredo Firearms prototypes is stranded in the canyon.',
    intelTip: 'An ultrasonic lure hidden near the canyon rim is intentionally drawing the Ashta toward the convoy.',
    choices: [
      {
        id: 'act1_8_hunt_alpha',
        label: 'Engage the Ashta Alpha with Heavy MagPulse Rifles',
        actionText: 'Provide low-altitude gunship support and eliminate the alpha predators threatening the crawler.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your precision fire drops the Ashta Alpha. Laredo Firearms awards you a generous bounty and a custom weapon crate.',
          hullDelta: -5,
          creditsDelta: 5000,
          intelDelta: 20,
          itemReward: 'Laredo Custom Mag-Pistol'
        }
      },
      {
        id: 'act1_8_disable_beacon',
        label: 'Track & Disable Smuggler Acoustic Lure',
        actionText: 'Trace the ultrasonic signal to the ridge and catch the smugglers who staged the ambush.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'You ambush the saboteurs at their ridge hideout, shut down the lure, and confiscate their hidden stash of black-market chits.',
          hullDelta: 0,
          creditsDelta: 4200,
          intelDelta: 50,
          itemReward: 'Acoustic Predator Lure Schematic'
        }
      },
      {
        id: 'act1_8_harvest_bio',
        label: 'Harvest Exotic Venom Glands for Pharmaceutical Resale',
        actionText: 'Extract rare biological samples from the downed creatures and haul the stranded Laredo cargo to port.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Reliant Medical pays top credit for the rare biological enzymes, plus a hefty hauling bonus from the convoy master.',
          hullDelta: 0,
          creditsDelta: 6100,
          intelDelta: 25,
          itemReward: 'Reliant Bio-Sample Canister'
        }
      }
    ]
  },
  {
    id: 'act1_bessel_deaddrop',
    act: 1,
    title: 'Freestar Smuggler Dead-Drop in the Bessel Belt',
    sector: 'Asteroid Field 301',
    system: 'Bessel System',
    threatLevel: 'LOW',
    visualGraphic: 'contraband',
    briefing:
      'An encrypted beacon hidden inside a hollowed-out carbonaceous asteroid signals an abandoned M.I.D. supply cache from the early Trade Wars.',
    situation:
      'A lone Crimson Fleet scout corvette is sweeping the belt looking for the same signal.',
    intelTip: 'Powering down non-essential systems lets your ship blend into the asteroid’s magnetic shadow.',
    choices: [
      {
        id: 'act1_9_ambush_scout',
        label: 'Ambush the Pirate Scout with Missile Volley',
        actionText: 'Burst out from behind the asteroid shadow and eliminate the scout before it can call reinforcements.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Caught completely off-guard, the pirate corvette disintegrates under your opening salvo. You claim both the dead-drop and the scout’s nav-core.',
          hullDelta: -5,
          creditsDelta: 5800,
          intelDelta: 30,
          itemReward: 'Bessel Dead-Drop Cache'
        }
      },
      {
        id: 'act1_9_silent_grapple',
        label: 'Stealth Micro-Thrust Approach & Magnetic Grapple',
        actionText: 'Run cold on thrusters, grapple the container from the asteroid cavity, and jump out undetected.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Like a ghost in the dark, you extract the sealed M.I.D. container while the pirate scout passes within two kilometers of your hull.',
          hullDelta: 0,
          creditsDelta: 4900,
          intelDelta: 40,
          itemReward: 'Stealth Grapple Telemetry Unit'
        }
      },
      {
        id: 'act1_9_asteroid_mining',
        label: 'Mine Asteroid Core for Pure Gold & Rare Metals',
        actionText: 'Use industrial cutting beams to harvest both the cache and the rich palladium vein surrounding it.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Your cargo bays fill with high-purity palladium ore alongside the vintage Trade Wars supply crate.',
          hullDelta: 0,
          creditsDelta: 6500,
          intelDelta: 20,
          itemReward: 'Bessel Palladium Ingot'
        }
      }
    ]
  }
];

export const ACT2_ENCOUNTERS: TacticalEncounter[] = [
  {
    id: 'act2_ta_blockade',
    act: 2,
    title: 'The Trade Authority Orbital Blockade',
    sector: 'Volii Orbit // Neon Approach',
    system: 'Volii System',
    threatLevel: 'HIGH',
    visualGraphic: 'station',
    briefing:
      'Corrupt Trade Authority regional directors have established an unauthorized orbital customs blockade using heavy mercenary gunboats to shake down independent haulers.',
    situation:
      'Three heavy gunboats lock weapons on your vessel, demanding a 40% tariff inspection fee or immediate cargo forfeiture.',
    intelTip: 'M.I.D. intercepts reveal the blockade commander is skimming tariffs into a private GalBank account.',
    choices: [
      {
        id: 'act2_1_bribe_bluff',
        label: 'Counter-Blackmail with M.I.D. Decrypted Ledger',
        actionText: 'Transmit the commander’s secret GalBank embezzlement records directly to his flagship bridge.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Stunned by the classified M.I.D. dossier, the blockade commander immediately clears your vessel for priority orbit and transfers hush money.',
          hullDelta: 0,
          creditsDelta: 6000,
          intelDelta: 35,
          itemReward: 'Trade Authority VIP Clearance Key'
        }
      },
      {
        id: 'act2_1_burn_escape',
        label: 'Overcharge Grav-Drives & Atmospheric Dive',
        actionText: 'Divert all power to sub-light engines and execute a high-G dive through Volii’s upper lightning clouds.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Atmospheric lightning scorches your outer hull, but the heavy gunboats dare not follow your daring plunge toward Neon’s landing pads.',
          hullDelta: -15,
          creditsDelta: 2000,
          intelDelta: 20,
          itemReward: 'Ionized Storm Capacitor'
        }
      },
      {
        id: 'act2_1_fight_corrupt',
        label: 'Full Combat Flank with EMP Disruptors',
        actionText: 'Target the lead gunboat’s shield generator with EMP bursts and board their customs tender.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'You cripple the flagship gunboat in a blazing orbital dogfight and liberate a cargo hold full of confiscated contraband.',
          hullDelta: -20,
          creditsDelta: 8000,
          intelDelta: 30,
          itemReward: 'Confiscated Contraband Vault'
        }
      }
    ]
  },
  {
    id: 'act2_ryujin_infiltration',
    act: 2,
    title: 'Ryujin Black-Ops at Generdyne Labs',
    sector: 'Generdyne Research Spire',
    system: 'Volii Alpha (Neon)',
    threatLevel: 'HIGH',
    visualGraphic: 'intel',
    briefing:
      'A covert corporate espionage war has erupted on the top floors of the Generdyne Spire over a stolen quantum-encryption algorithm.',
    situation:
      'Ryujin operatives and private cyber-mercenaries are locked in a standoff on the executive skybridge while the server core purges its memory.',
    intelTip: 'The building’s automated defense drones can be slaved to a single master security terminal.',
    choices: [
      {
        id: 'act2_2_heavy_breach',
        label: 'Breach Combat Cyborg Line with Explosive Shotguns',
        actionText: 'Blast through the skybridge barricade and extract the physical server blade by force.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Under heavy crossfire, you rip the quantum server blade from its rack and jet-boost off the spire roof to your waiting ship.',
          hullDelta: -15,
          creditsDelta: 9500,
          intelDelta: 40,
          itemReward: 'Generdyne Quantum Server Blade'
        }
      },
      {
        id: 'act2_2_cyber_override',
        label: 'Hack Generdyne Sub-Grid to Re-Target Defense Drones',
        actionText: 'Turn the spire’s security turrets against both corporate teams while you download the core silently.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'While the drones keep both factions pinned down, you siphon the complete quantum encryption algorithm without being seen.',
          hullDelta: 0,
          creditsDelta: 7500,
          intelDelta: 75,
          itemReward: 'Ryujin Black-Ops Encryption Key'
        }
      },
      {
        id: 'act2_2_sell_both',
        label: 'Broker Dual Auction to Infinity and Ryujin',
        actionText: 'Clone the drive and sell decryption keys to both rival executives simultaneously.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Your double-deal nets an extraordinary corporate payout from both boardrooms before either realizes the data was duplicated.',
          hullDelta: 0,
          creditsDelta: 12000,
          intelDelta: 50,
          itemReward: 'Executive Bearer Bonds'
        }
      }
    ]
  },
  {
    id: 'act2_varuun_interdiction',
    act: 2,
    title: "House Va'ruun Zealot Crusader Interdiction",
    sector: 'Kazaal Void Rift',
    system: 'Nirah System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'combat',
    briefing:
      "Pulling out of a grav-jump in the war-torn Nirah system, your ship is caught in a grav-inhibition net deployed by a House Va'ruun Zealot prophecy cruiser.",
    situation:
      'Particle beams lash across the void as Zealot boarding pods launch toward your airlock, chanting prophecies of the Great Serpent.',
    intelTip: 'Their cruiser uses an ancient liturgical subspace frequency to coordinate shield harmonics.',
    choices: [
      {
        id: 'act2_3_focus_flagship',
        label: 'Ram Through Grav-Shields with He-3 Overdrive',
        actionText: 'Overcharge forward shields, incinerate the boarding pods, and hammer the cruiser’s bridge.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your particle barrage cracks the Zealot cruiser’s spine. You salvage their exotic particle weaponry from the glowing wreckage.',
          hullDelta: -25,
          creditsDelta: 11000,
          intelDelta: 45,
          itemReward: "Va'ruun Inflictor Particle Array"
        }
      },
      {
        id: 'act2_3_hymn_harmonize',
        label: "Transmit Encrypted Va'ruun Liturgical Cipher",
        actionText: 'Broadcast a forbidden High-Council serpent scripture over subspace to disrupt their command hierarchy.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Believing your ship carries an Envoy of the High Council, the Zealots lower their weapons and transmit sacred outer-rim star charts.',
          hullDelta: 0,
          creditsDelta: 8500,
          intelDelta: 70,
          itemReward: "Va'ruun Sacred Star Chart"
        }
      },
      {
        id: 'act2_3_warp_sling',
        label: 'Gravitational Slingshot Around Kazaal Star',
        actionText: 'Use the local stellar gravity well to snap the inhibition net and slingshot into deep orbit.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Solar radiation blisters your outer sensors, but the gravitational whip-crack tears the Zealot net apart and yields rare stellar telemetry.',
          hullDelta: -15,
          creditsDelta: 4000,
          intelDelta: 30,
          itemReward: 'Solar Grav-Lens Telemetry'
        }
      }
    ]
  },
  {
    id: 'act2_darwin_terrormorph',
    act: 2,
    title: "Derelict Xenobiology Lab 'Darwin-IX'",
    sector: 'Jemison Outer Orbit',
    system: 'Alpha Centauri',
    threatLevel: 'CRITICAL',
    visualGraphic: 'derelict',
    briefing:
      'A secret black-site orbital research vessel drifting in Alpha Centauri’s outer belt has gone dark after an illicit xeno-warfare containment breach.',
    situation:
      'An apex Terrormorph specimen stalks the zero-G corridors while the station’s orbital decay pulls it toward burn-up.',
    intelTip: 'The lab’s cryo-ventilation system can flash-freeze the main bio-dome if routed from engineering.',
    choices: [
      {
        id: 'act2_4_incinerate_all',
        label: 'Sterilize Chamber with High-Temperature Plasma Jets',
        actionText: 'Purge the central bio-dome with thruster plasma and engage the creature head-on.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'The Terrormorph falls beneath concentrated plasma fire. You extract the black-site genetic logs before the station burns up.',
          hullDelta: -10,
          creditsDelta: 10500,
          intelDelta: 50,
          itemReward: 'Xeno-Warfare Genetic Sample'
        }
      },
      {
        id: 'act2_4_extract_stealth',
        label: 'Infiltrate via Maintenance Grate with Sonic Dampeners',
        actionText: 'Mask your neural pheromones, flash-freeze the specimen in cryo-mist, and slip out with the research core.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'With the apex predator frozen solid in liquid nitrogen, you recover the entire classified UC Xeno-Division archive unscathed.',
          hullDelta: 0,
          creditsDelta: 9000,
          intelDelta: 65,
          itemReward: 'Classified Xeno-Division Datacore'
        }
      },
      {
        id: 'act2_4_quarantine_scuttle',
        label: 'Salvage Lab Hardware and Scuttle Station to Sol Orbit',
        actionText: 'Detach the high-value medical synthesis modules and auction them to off-world biotech buyers.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You detach the entire modular biotech wing and sell the advanced gene-sequencers for a massive payout.',
          hullDelta: -5,
          creditsDelta: 13000,
          intelDelta: 35,
          itemReward: 'Orbital Gene-Sequencer Array'
        }
      }
    ]
  },
  {
    id: 'act2_redmile_gauntlet',
    act: 2,
    title: 'The Red Mile High-Stakes Bounty Gauntlet',
    sector: 'Porrima-III Crater Basin',
    system: 'Porrima System',
    threatLevel: 'HIGH',
    visualGraphic: 'combat',
    briefing:
      'At the notorious Red Mile on Porrima-III, an elusive syndicate broker holding the keys to an outer-rim supply network agrees to meet—right as Ecliptic bounty hunters storm the casino.',
    situation:
      'Laser fire shatters the neon bar while the broker flees toward the predator-infested crater floor.',
    intelTip: 'The casino’s high-roller vault security grid is wired into the beacon tower controls.',
    choices: [
      {
        id: 'act2_5_standoff_shootout',
        label: 'Gunfight Standoff at the High-Rollers Lounge',
        actionText: 'Clear the bounty hunter squad in a brutal crossfire and escort the broker out at gunpoint.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'You drop the Ecliptic hit-squad across the casino floor. Mei Devine clears your departure and the broker hands over his entire route portfolio.',
          hullDelta: -10,
          creditsDelta: 11500,
          intelDelta: 30,
          itemReward: 'Red Mile Champion Crest'
        }
      },
      {
        id: 'act2_5_hack_casino',
        label: 'Siphon Casino Vault Security Network',
        actionText: 'Use the chaos to slice the Red Mile betting mainframe and extract the broker via VIP shuttle tube.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'You spirit the broker out through the service tunnels while siphoning a tidy sum from the high-roller wagering pool.',
          hullDelta: 0,
          creditsDelta: 9500,
          intelDelta: 55,
          itemReward: 'Porrima Syndicate Cipher'
        }
      },
      {
        id: 'act2_5_buy_hunters',
        label: 'Counter-Hire the Bounty Hunters to Turn on Their Employer',
        actionText: 'Outbid their Ecliptic contract on the spot and recruit their gunship as a convoy escort.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Mercenaries respect cold credits above all else. They flip contracts immediately and escort your cargo haul across the Porrima sector.',
          hullDelta: 0,
          creditsDelta: 7000,
          intelDelta: 40,
          itemReward: 'Ecliptic Escort Transponder'
        }
      }
    ]
  },
  {
    id: 'act2_stroud_prototype',
    act: 2,
    title: 'Stroud-Eklund Prototype Hijacking',
    sector: 'Deep Space Staryard 12',
    system: 'Narion System',
    threatLevel: 'HIGH',
    visualGraphic: 'station',
    briefing:
      'Rogue corporate privateers have hijacked Stroud-Eklund’s newest experimental Class-C stealth corvette during its maiden shakedown cruise.',
    situation:
      'The stolen prototype is charging its experimental grav-drive for an untraceable jump into the outer rim.',
    intelTip: 'The prototype’s cloaking field drops for 4.2 seconds whenever its capacitor vents heat.',
    choices: [
      {
        id: 'act2_6_emp_engine',
        label: 'Target Stealth Engines with High-Yield EMP Torpedoes',
        actionText: 'Time your torpedo salvo to the exact millisecond the thermal vents open.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your EMP torpedoes strike the open thermal exhaust, collapsing the stealth field and locking the prototype dead in space.',
          hullDelta: -10,
          creditsDelta: 12500,
          intelDelta: 40,
          itemReward: 'Stroud-Eklund Stealth Capacitor'
        }
      },
      {
        id: 'act2_6_board_bridge',
        label: 'Execute Zero-G Boarding Action via Cockpit Canopy',
        actionText: 'Match velocity during cloak-venting and breach the monochrome tactical bridge directly.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'You take the bridge in a textbook zero-G breach and download the experimental stealth avionics package.',
          hullDelta: -5,
          creditsDelta: 10000,
          intelDelta: 60,
          itemReward: 'Monochrome Tactical Cockpit HUD'
        }
      },
      {
        id: 'act2_6_claim_salvage',
        label: 'Invoke Settled Systems Maritime Salvage Law on Stolen Vessel',
        actionText: 'Disable the hijackers and negotiate a percentage-of-hull value recovery fee with Walter Stroud’s adjusters.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Stroud-Eklund’s board pays an extraordinary recovery commission to keep the hijacking out of the public news feeds.',
          hullDelta: 0,
          creditsDelta: 15000,
          intelDelta: 20,
          itemReward: 'Stroud-Eklund Executive Writ'
        }
      }
    ]
  },
  {
    id: 'act2_crucible_fortress',
    act: 2,
    title: "Crimson Fleet Asteroid Fortress 'The Crucible'",
    sector: 'Phobos Drift Asteroid',
    system: 'Sol System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'combat',
    briefing:
      'Intelligence reveals the Crimson Fleet has hollowed out a drifted Martian asteroid into a heavily fortified drydock raiding Trade Wars shipping lanes.',
    situation:
      'Heavy point-defense batteries guard the main hangar bay where stolen Supply Charter bulk containers are stockpiled.',
    intelTip: 'An old mining exhaust shaft runs straight to the fortress’s central munition magazine.',
    choices: [
      {
        id: 'act2_7_torpedo_silo',
        label: 'Precision Torpedo Run on Exhaust Ventilation Trench',
        actionText: 'Skim the asteroid surface under heavy flak and fire proton torpedoes down the exhaust shaft.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'A chain reaction rips through the pirate magazine, cracking the asteroid fortress open and spilling high-value cargo containers into orbit.',
          hullDelta: -20,
          creditsDelta: 14000,
          intelDelta: 35,
          itemReward: 'Crucible Warlord Armory Crate'
        }
      },
      {
        id: 'act2_7_hack_docking',
        label: 'Transmit Counterfeit Crimson Fleet Captain Code',
        actionText: 'Land inside the main hangar under a spoofed pirate transponder and raid the command vault.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'The pirate deck crew refuels your ship before realizing the deception—by then you’ve already emptied their central intelligence safe.',
          hullDelta: 0,
          creditsDelta: 11000,
          intelDelta: 70,
          itemReward: 'Crimson Fleet Master Route Matrix'
        }
      },
      {
        id: 'act2_7_fence_cargo',
        label: 'Negotiate Black-Market Alliance with Pirate Quartermaster',
        actionText: 'Trade surplus industrial modules for the safe release of all captured Supply Charter freight.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You turn a massive profit fencing restricted ship components while recovering the stolen corporate freight intact.',
          hullDelta: 0,
          creditsDelta: 13500,
          intelDelta: 45,
          itemReward: 'Black-Market Quartermaster Seal'
        }
      }
    ]
  },
  {
    id: 'act2_sysdef_blacksite',
    act: 2,
    title: 'UC SysDef Covert Extraction',
    sector: 'Procyon Outer Rim',
    system: 'Procyon-A System',
    threatLevel: 'HIGH',
    visualGraphic: 'intel',
    briefing:
      'An undercover M.I.D. double-agent embedded inside a rogue SysDef reconnaissance flotilla needs immediate extraction after uncovering an illegal war-chest.',
    situation:
      'SysDef patrol interceptors are sweeping the nebula grid with deep-spectrum tachyon scanners.',
    intelTip: 'The nebula’s ionized gas pockets can reflect false ship signatures if seeded with decoy probes.',
    choices: [
      {
        id: 'act2_8_flank_interceptors',
        label: 'Engage Patrol Interceptors with Particle Cannons',
        actionText: 'Punch through the outer picket line and dock with the agent’s stealth shuttle at full burn.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'You disable two patrol interceptors in a lightning skirmish and pull the M.I.D. operative aboard with the classified war-chest files.',
          hullDelta: -15,
          creditsDelta: 9000,
          intelDelta: 60,
          itemReward: 'SysDef Tactical Transponder'
        }
      },
      {
        id: 'act2_8_decoy_probe',
        label: 'Deploy High-Frequency Sensor Decoy Probe',
        actionText: 'Lure the entire patrol wing into the deep nebula while extracting the operative unseen.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'The patrol wing chases a ghost echo ten thousand kilometers away while you extract the agent and every classified file.',
          hullDelta: 0,
          creditsDelta: 8000,
          intelDelta: 80,
          itemReward: 'M.I.D. Black-File Archive'
        }
      },
      {
        id: 'act2_8_bribe_patrol',
        label: 'Transmit Vanguard Special Operations Clearance Token',
        actionText: 'Requisition the operative under forged high-command military transfer orders.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Bureaucracy triumphs over firepower—the patrol commander signs off on the transfer and even supplies fuel rations.',
          hullDelta: 0,
          creditsDelta: 7000,
          intelDelta: 50,
          itemReward: 'High-Command Requisition Seal'
        }
      }
    ]
  },
  {
    id: 'act2_starborn_anomaly',
    act: 2,
    title: 'Gravitational Distortion at the Buried Temple',
    sector: 'Indum Deep Ice Canyons',
    system: 'Indum-III',
    threatLevel: 'CRITICAL',
    visualGraphic: 'derelict',
    briefing:
      'A massive gravitational anomaly on Indum-III has unearthed a floating crystalline structure surrounded by distorted time-dilation fields.',
    situation:
      'A Starborn Guardian vessel shimmers into existence above the canyon, charging a quantum torpedo.',
    intelTip: 'The temple rings resonate at a harmonic frequency that amplifies grav-drive shields.',
    choices: [
      {
        id: 'act2_9_supercharge_turrets',
        label: 'Supercharge Particle Turrets with He-3 Overdrive',
        actionText: 'Engage the Starborn Guardian in an intense high-altitude duel among the floating monoliths.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your overcharged particle beams shatter the Guardian’s quantum wing, leaving behind pure cosmic essence and an ancient relic.',
          hullDelta: -25,
          creditsDelta: 20000,
          intelDelta: 90,
          itemReward: 'Starborn Quantum Shard'
        }
      },
      {
        id: 'act2_9_commune_waves',
        label: 'Harmonize Grav-Wave Scanner Frequencies',
        actionText: 'Sync your ship’s grav-drive to the temple rings to phase through the Starborn barrage.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Space-time bends around your hull. The Guardian ceases fire in awe as your computers record multidimensional star coordinates.',
          hullDelta: 0,
          creditsDelta: 16000,
          intelDelta: 110,
          itemReward: 'Multidimensional Anomaly Codex'
        }
      },
      {
        id: 'act2_9_quantum_harvest',
        label: 'Harvest Quantum Gravitational Essence Crystals',
        actionText: 'Deploy automated collector drones into the zero-G distortion vortex for corporate black-budget buyers.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You extract three containment canisters of Caelumite and quantum essence worth an astronomical sum to high-tech labs.',
          hullDelta: -10,
          creditsDelta: 22000,
          intelDelta: 80,
          itemReward: 'Refined Caelumite Core'
        }
      }
    ]
  }
];

export const ACT3_ENCOUNTERS: TacticalEncounter[] = [
  {
    id: 'act3_gates_of_janus',
    act: 3,
    title: 'The Gates of Janus: Sovereign Prototype Standoff',
    sector: 'Deep Space Sector 0-71',
    system: 'Cheyenne Frontier',
    threatLevel: 'CRITICAL',
    visualGraphic: 'combat',
    briefing:
      'Your journey converges at the legendary Gates of Janus—a massive orbital stargate relay where a rogue corporate syndicate is activating an autonomous dreadnought to monopolize all Settled Systems trade routes.',
    situation:
      'M.I.D. strike teams, corporate freighters, and pirate raiders clash around the relay while the Sovereign Prototype powers up its main axial laser.',
    intelTip: 'The dreadnought’s central AI core is linked to the Gates of Janus master logistics transceiver.',
    choices: [
      {
        id: 'act3_1_overload_core',
        label: 'Coordinate Heavy Torpedo Salvo on Coolant Manifold',
        actionText: 'Lead the allied vanguard straight through the flak curtain and rupture the dreadnought’s primary core.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your flagship weaves through walls of point-defense fire and lands a direct hit on the axial manifold. The Sovereign dreadnought detonates in a blinding violet nova, cementing your legend across the Settled Systems!',
          hullDelta: -25,
          creditsDelta: 28000,
          intelDelta: 100,
          itemReward: 'Gates of Janus Sovereign Crest'
        }
      },
      {
        id: 'act3_1_override_ai',
        label: 'Upload M.I.D. Zero-Day Cyberwarfare Payload',
        actionText: 'Slice the Gates of Janus master relay and commandeer the Sovereign Prototype’s AI core remotely.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Your M.I.D. zero-day payload seizes total control of the dreadnought! Its turrets stand down and transfer the syndicate’s entire encrypted treasury into your accounts.',
          hullDelta: -5,
          creditsDelta: 32000,
          intelDelta: 150,
          itemReward: 'Sovereign Mainframe AI Core'
        }
      },
      {
        id: 'act3_1_salvage_coup',
        label: 'Infiltrate Hull with Combat Breaching Pods',
        actionText: 'Board the dreadnought command deck, seize the Supply Charter master registry, and claim the flagship as salvage.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You storm the bridge, capture the syndicate directors, and claim ownership of the most lucrative interstellar trade hub in the galaxy!',
          hullDelta: -30,
          creditsDelta: 38000,
          intelDelta: 120,
          itemReward: 'Master Supply Charter Registry'
        }
      }
    ]
  },
  {
    id: 'act3_battle_for_the_key',
    act: 3,
    title: 'The Battle for The Key: Mainframe Showdown',
    sector: 'Kryx Orbit Station Ring',
    system: 'Kryx System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'combat',
    briefing:
      'All-out fleet warfare erupts around The Key as SysDef dreadnoughts, Crimson Fleet corsairs, and M.I.D. privateers clash over Legacy wealth.',
    situation:
      'The station’s defensive grid is failing, and billions in GalBank credits are unlocked inside the central spire mainframe.',
    intelTip: 'The docking ring’s auxiliary power conduit leads straight to the command vault.',
    choices: [
      {
        id: 'act3_2_lead_fleet_charge',
        label: 'Lead Allied Flagship Assault on the Command Spire',
        actionText: 'Spearhead the orbital offensive and crush the defending capital ships in an epic fleet engagement.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your guns shatter the defensive ring around The Key, deciding the fate of the Kryx system in an unforgettable blaze of glory.',
          hullDelta: -25,
          creditsDelta: 30000,
          intelDelta: 110,
          itemReward: "Kryx's Legacy Command Medal"
        }
      },
      {
        id: 'act3_2_siphon_galbank',
        label: 'Infiltrate Central Mainframe & Siphon GalBank Vaults',
        actionText: 'Dock under the radar during the orbital bombardment and drain the Legacy data cores.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'While two fleets tear each other apart outside, you walk out of the central spire with the decrypted GalBank Legacy fortune.',
          hullDelta: -10,
          creditsDelta: 40000,
          intelDelta: 160,
          itemReward: 'GalBank Legacy Master Credtank'
        }
      },
      {
        id: 'act3_2_freighter_salvage',
        label: 'Deploy Fleet Tugboats to Salvage Sunken Warship Keels',
        actionText: 'Coordinate a massive battle-salvage operation to harvest capital-ship reactors from the combat zone.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Your salvage fleet harvests three intact Class-M capital ship cores from the battlefield, making you the wealthiest broker in the sector.',
          hullDelta: -15,
          creditsDelta: 35000,
          intelDelta: 90,
          itemReward: 'Class-M Capital Reactor Core'
        }
      }
    ]
  },
  {
    id: 'act3_legacy_stormfront',
    act: 3,
    title: 'Legacy of the Settled Systems: Storm of Bannoc IV',
    sector: 'Bannoc IV Electromagnet Superstorm',
    system: 'Bannoc System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'derelict',
    briefing:
      'Deep inside the lethal electromagnetic superstorm of Bannoc IV lies a lost Colony War command dreadnought containing an intact experimental grav-weapon.',
    situation:
      'A rival mercenary dreadnought has arrived simultaneously, firing through the lightning clouds to claim the wreck.',
    intelTip: 'The storm’s lightning bolts can be channeled into your shield grid using conduction rods.',
    choices: [
      {
        id: 'act3_3_ram_dreadnought',
        label: 'Engage Rival Dreadnought in the Lightning Eye',
        actionText: 'Duel the mercenary flagship inside the magnetic vortex with full broadsides.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'You outmaneuver the rival dreadnought inside the maelstrom and send it plunging into the gas giant’s core.',
          hullDelta: -30,
          creditsDelta: 35000,
          intelDelta: 100,
          itemReward: 'Bannoc Storm-Forged Particle Cannon'
        }
      },
      {
        id: 'act3_3_dock_conduction',
        label: 'Ground Ship Hull with High-Yield Conduction Rods',
        actionText: 'Ride the electromagnetic current straight into the derelict hangar and extract the prototype weapon.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'Harnessing the storm’s raw gigawatts, your ship docks seamlessly and extracts the pre-war grav-weapon intact!',
          hullDelta: -10,
          creditsDelta: 45000,
          intelDelta: 120,
          itemReward: 'Colony War Grav-Singularity Core'
        }
      },
      {
        id: 'act3_3_hack_vault_door',
        label: 'Bypass Biometric Vault Locks with Quantum Decryption Tool',
        actionText: 'Infiltrate the flagship’s black-box archive and vanish into the EM storm before sensors clear.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'You ghost out of the storm carrying the most sought-after military black-box archive in Settled Systems history.',
          hullDelta: -5,
          creditsDelta: 42000,
          intelDelta: 140,
          itemReward: 'Armistice Black-Box Archive'
        }
      }
    ]
  },
  {
    id: 'act3_infinity_override',
    act: 3,
    title: 'Infinity LTD Cyberwarfare Nexus Override',
    sector: 'New Atlantis Orbital Spire',
    system: 'Alpha Centauri',
    threatLevel: 'CRITICAL',
    visualGraphic: 'intel',
    briefing:
      'A rogue corporate AI conspiracy at Infinity LTD’s orbital relay threatens to hijack neural implants and commercial starships across Alpha Centauri.',
    situation:
      'The orbital satellite is protected by an automated stealth squadron with ninety seconds before full galaxy-wide broadcast.',
    intelTip: 'An M.I.D. counter-neural worm can invert the broadcast signal to expose the conspirators.',
    choices: [
      {
        id: 'act3_4_emp_core_blast',
        label: 'Fire High-Yield EMP Torpedo Salvo into Satellite Core',
        actionText: 'Shatter the stealth escort and vaporize the broadcast dish with pinpoint fire.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'The orbital transmitter explodes in a shower of sparks above Jemison, saving thousands of ships from remote hijacking.',
          hullDelta: -20,
          creditsDelta: 30000,
          intelDelta: 120,
          itemReward: 'UC Medal of Supreme Valor'
        }
      },
      {
        id: 'act3_4_counter_hack',
        label: 'Upload M.I.D. Master Counter-Neural Matrix',
        actionText: 'Hijack the orbital beam to broadcast Infinity LTD’s classified crimes while locking down their assets.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Your counter-hack turns the orbital nexus into your personal intelligence network across the core systems.',
          hullDelta: 0,
          creditsDelta: 34000,
          intelDelta: 180,
          itemReward: 'Neural Nexus Root Access Key'
        }
      },
      {
        id: 'act3_4_corporate_blackmail',
        label: "Auction Infinity LTD's War-Crimes Dossier to Ryujin",
        actionText: 'Seize the corporate databanks and orchestrate the largest acquisition buyout in Neon’s history.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Ryujin Industries wires an astronomical buyout bonus as they absorb Infinity LTD’s entire orbital infrastructure.',
          hullDelta: 0,
          creditsDelta: 38000,
          intelDelta: 130,
          itemReward: 'Ryujin Board Seat Warrant'
        }
      }
    ]
  },
  {
    id: 'act3_unity_trial',
    act: 3,
    title: "The Starborn Emissary's Trial: Unity Gateway",
    sector: 'The Void of Trans-Spacetime',
    system: 'Deep Space Void',
    threatLevel: 'CRITICAL',
    visualGraphic: 'derelict',
    briefing:
      'At the edge of known space, the completed Armillary opens a shimmering rift toward the Unity—guarded by both the Hunter and the Emissary.',
    situation:
      'Two Starborn capital guardians flank the dimensional horizon, challenging your right to define the galaxy’s future.',
    intelTip: 'Your ship’s grav-drive harmonics can anchor the rift without collapsing your timeline.',
    choices: [
      {
        id: 'act3_5_shatter_emissary',
        label: 'Supercharge Particle Cannons with Quantum Resonant Core',
        actionText: 'Defeat both Starborn Guardians in a transcendent void battle to remain master of your universe.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'You defeat both cosmic arbiters in single combat, claiming their Starborn armor and forging your own destiny in the Settled Systems!',
          hullDelta: -25,
          creditsDelta: 35000,
          intelDelta: 150,
          itemReward: 'Venator Starborn Armor Core'
        }
      },
      {
        id: 'act3_5_commune_unity',
        label: 'Harmonize Ship Grav-Drives with the Universal Resonant Frequency',
        actionText: 'Touch the Unity horizon, absorb the knowledge of a thousand multiverse iterations, and return ascendant.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'You gaze across infinite starfields of the multiverse and return with cosmic foresight that makes you unstoppable.',
          hullDelta: 0,
          creditsDelta: 30000,
          intelDelta: 200,
          itemReward: 'Unity Multiverse Astrolabe'
        }
      },
      {
        id: 'act3_5_quantum_matter_hoard',
        label: 'Siphon Infinite Quantum Grav-Matter into Cargo Hold',
        actionText: 'Stabilize the dimensional aperture into a permanent zero-point energy harvest conduit.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You harness the dimensional rift to synthesize limitless zero-point fuel cells, revolutionizing interstellar commerce forever.',
          hullDelta: -10,
          creditsDelta: 50000,
          intelDelta: 120,
          itemReward: 'Zero-Point Singularity Reactor'
        }
      }
    ]
  },
  {
    id: 'act3_titan_dreadnought',
    act: 3,
    title: "The Leviathan Dreadnought 'Titan-X' Standoff",
    sector: 'Wolf System Graveyard',
    system: 'Wolf System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'combat',
    briefing:
      'Near The Den in the Wolf System, an automated Ecliptic super-carrier—Titan-X—has begun blockading all independent trade routes.',
    situation:
      'Waves of autonomous drone fighters swarm from Titan-X’s launch bays while its heavy railguns lock onto The Den.',
    intelTip: 'The carrier’s drone command array is exposed on the dorsal spine during launch cycles.',
    choices: [
      {
        id: 'act3_6_ram_generators',
        label: 'Kamikaze Combat Run with Overclocked Kinetic Torpedoes',
        actionText: 'Punch through the fighter screen and obliterate the dorsal command spine at point-blank range.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your kinetic torpedoes rip through the dorsal spine, triggering a catastrophic core breach that saves The Den!',
          hullDelta: -30,
          creditsDelta: 36000,
          intelDelta: 110,
          itemReward: 'Titan-X Railgun Prototype'
        }
      },
      {
        id: 'act3_6_scramble_telemetry',
        label: 'Inject Cyber-Worm into Dreadnought Target Computers',
        actionText: 'Turn the autonomous drone swarm against Titan-X’s own shield emitters.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'Two hundred combat drones pivot in unison and shred their own mothership’s engines while you board the vault undisturbed.',
          hullDelta: -5,
          creditsDelta: 33000,
          intelDelta: 160,
          itemReward: 'Swarm Master Control Neural Net'
        }
      },
      {
        id: 'act3_6_salvage_fleet',
        label: 'Claim Full Maritime Salvage Rights Over Defeated Fleet',
        actionText: 'Coordinate Supply Charter haulers to strip the disabled super-carrier down to its titanium ribs.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Your logistics fleet strips the super-carrier in record time, yielding the largest single salvage payout in Wolf System history.',
          hullDelta: -10,
          creditsDelta: 40000,
          intelDelta: 100,
          itemReward: 'Super-Carrier Salvage Deed'
        }
      }
    ]
  },
  {
    id: 'act3_cydonia_cleansing',
    act: 3,
    title: 'Trade Authority Central Cleansing Protocol',
    sector: 'Cydonia Central Archive Sub-Level',
    system: 'Sol System (Mars)',
    threatLevel: 'CRITICAL',
    visualGraphic: 'contraband',
    briefing:
      'Deep beneath Mars, the Trade Authority’s shadow directorate has initiated a “Cleansing Protocol” to erase all black-market ledgers and eliminate independent Supply Charter captains.',
    situation:
      'Heavy security mechs patrol the subterranean vault containing fifty years of bullion reserves and secret contracts.',
    intelTip: 'The vault’s fire-suppression system can flood the mech bay with conductive halon gas.',
    choices: [
      {
        id: 'act3_7_storm_vault',
        label: 'Storm the Vault with Mag-Pulse Rifles & Heavy Armor',
        actionText: 'Fight through the security mech phalanx and seize the bullion depository by force.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your mag-pulse rounds short out the heavy mechs. You crack the titanium vault doors and liberate the Martian reserve!',
          hullDelta: -20,
          creditsDelta: 31000,
          intelDelta: 130,
          itemReward: 'Martian Bullion Reserve Bar'
        }
      },
      {
        id: 'act3_7_broadcast_galaxy',
        label: 'Live-Stream Encrypted Audit Data to Every News Terminal',
        actionText: 'Expose the shadow directorate across SSNN while downloading their entire intelligence archive.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'The SSNN broadcast topples the shadow directorate overnight, leaving you holding the keys to every hidden cache in Sol.',
          hullDelta: 0,
          creditsDelta: 36000,
          intelDelta: 190,
          itemReward: 'Directorate Shadow Blackbook'
        }
      },
      {
        id: 'act3_7_seize_bullion_vault',
        label: "Extract the Trade Authority's Central Gold Vault",
        actionText: 'Use heavy cargo grav-sleds to haul the bullion pallets straight up the freight elevator to your ship.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'Your grav-sleds haul tons of pure Sol bullion into your cargo bay before reinforcements can even reach Sub-Level 10.',
          hullDelta: -5,
          creditsDelta: 44000,
          intelDelta: 110,
          itemReward: 'Trade Authority Sovereign Gold Crate'
        }
      }
    ]
  },
  {
    id: 'act3_archon_meltdown',
    act: 3,
    title: 'The Archon Antimatter Reactor Meltdown',
    sector: 'Valo Asteroid Ring Staryard',
    system: 'Valo System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'station',
    briefing:
      'An experimental antimatter power station in orbit above Polvo is suffering a catastrophic magnetic containment failure that could irradiate the entire trade corridor.',
    situation:
      'Plasma arcs across the docking ring while corporate executives abandon the station with the safety override codes.',
    intelTip: 'Liquid cryo-torpedoes or high-yield magnetic siphons can stabilize the antimatter bottle.',
    choices: [
      {
        id: 'act3_8_fire_coolant_torpedoes',
        label: 'Fire Liquid Cryo-Torpedoes Directly into Antimatter Core',
        actionText: 'Thread a precision torpedo shot through the venting reactor shutters to flash-quench the reaction.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your cryo-torpedoes detonate inside the magnetic bottle, stabilizing the core and making you the hero of the Valo System!',
          hullDelta: -25,
          creditsDelta: 32000,
          intelDelta: 120,
          itemReward: 'HopeTech Hero of Valo Commendation'
        }
      },
      {
        id: 'act3_8_magnetic_siphon',
        label: 'Deploy High-Yield Magnetic Siphons to Contain Energy',
        actionText: 'Channel the runaway antimatter plasma directly into superconducting storage pods aboard your ship.',
        strategy: 'EXPLORE',
        outcomeSuccess: {
          narrative:
            'You safely drain the runaway reaction into military containment pods, capturing pure antimatter fuel worth a fortune.',
          hullDelta: -15,
          creditsDelta: 42000,
          intelDelta: 160,
          itemReward: 'Antimatter Containment Cell'
        }
      },
      {
        id: 'act3_8_strip_research',
        label: 'Download Singular Physics Database Before Quenching',
        actionText: 'Extract the complete antimatter synthesis patents and stabilize the station for a massive recovery contract.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            'You secure both the station and the exclusive antimatter propulsion patents, guaranteeing lifetime royalties.',
          hullDelta: -10,
          creditsDelta: 39000,
          intelDelta: 150,
          itemReward: 'Antimatter Propulsion Patent Core'
        }
      }
    ]
  },
  {
    id: 'act3_sovereign_citadel',
    act: 3,
    title: 'The Sovereign Apex Syndicate Citadel',
    sector: 'Hyla Dark Space Citadel',
    system: 'Hyla System',
    threatLevel: 'CRITICAL',
    visualGraphic: 'combat',
    briefing:
      'You have tracked the shadowy architects of the Trade Wars to an unlisted dark-space station in the Hyla system where warlords auction off entire planetary sectors.',
    situation:
      'Elite mercenary cruisers guard the citadel perimeter while the syndicate council convenes inside the armored dome.',
    intelTip: 'The syndicate’s corporate charter contains a hostile takeover clause triggered by majority ledger control.',
    choices: [
      {
        id: 'act3_9_assault_citadel',
        label: 'Launch Full Broadside Heavy Particle Barrage on Citadel Core',
        actionText: 'Smash through the mercenary defense fleet and shatter the syndicate council dome.',
        strategy: 'COMBAT',
        outcomeSuccess: {
          narrative:
            'Your flagship tears through the dark-space perimeter and breaks the syndicate’s grip on the outer rim once and for all!',
          hullDelta: -30,
          creditsDelta: 38000,
          intelDelta: 140,
          itemReward: 'Apex Warlord Plasma Rifle'
        }
      },
      {
        id: 'act3_9_infiltrate_vaults',
        label: 'Transmit Syndicate Master Decryption Virus',
        actionText: 'Hijack the citadel’s life-support and security grid, forcing the council to surrender their entire archive.',
        strategy: 'COVERT',
        outcomeSuccess: {
          narrative:
            'With their defenses turned against them, the council surrenders every black-budget intelligence file in the Settled Systems.',
          hullDelta: -5,
          creditsDelta: 45000,
          intelDelta: 200,
          itemReward: 'Hyla Citadel Master Archive'
        }
      },
      {
        id: 'act3_9_hostile_takeover',
        label: 'Execute a Hostile Corporate Takeover with Extracted Ledgers',
        actionText: 'Present controlling bearer bonds and force the board of directors to name you Chairman of the Conglomerate.',
        strategy: 'COMMERCE',
        outcomeSuccess: {
          narrative:
            "You turn the syndicate's own legal weapons against them, taking command of a trillion-credit interstellar commercial empire!",
          hullDelta: 0,
          creditsDelta: 50000,
          intelDelta: 160,
          itemReward: 'Sovereign Conglomerate Chairman Gavel'
        }
      }
    ]
  }
];

export const AUXILIARY_SUB_LOGS: string[] = [
  "Local orbital security sweeps flagged a ship matching the subject's grav-signature conducting precision orbits around the massive basalt rings of an unmapped gas giant, completely ignoring all corporate hail requests.",
  "Intercepted Trade Authority customs telemetry confirms the subject moved three hundred tons of uncatalogued hyperconductors through The Den without triggering a single automated contraband alarm.",
  "M.I.D. handler voice-print analysis notes the subject exhibits near-zero vocal stress during high-G combat boarding actions in contested Narion space.",
  "Deimos Staryard engineering logs indicate the subject's vessel uses a heavily modified grav-drive intercooler capable of sustained micro-jumps inside dense asteroid fields.",
  "Eyewitness reports from Neon's Ebbside platform describe the subject walking out of a Ryujin executive sweep carrying a sealed quantum server blade and an active stun-baton.",
  "Freestar Ranger patrol beacon #FC-409 recorded the subject single-handedly breaking a three-ship Spacer blockade along the Cheyenne supply corridor.",
  "GalBank forensic auditors discovered an encrypted credit routing loop linking the subject's ship transponder to high-yield salvage payouts across seven outer-rim systems."
];

export function rollDynamicRoute(): TacticalEncounter[] {
  const e1 = ACT1_ENCOUNTERS[Math.floor(Math.random() * ACT1_ENCOUNTERS.length)];
  const e2 = ACT2_ENCOUNTERS[Math.floor(Math.random() * ACT2_ENCOUNTERS.length)];
  const e3 = ACT3_ENCOUNTERS[Math.floor(Math.random() * ACT3_ENCOUNTERS.length)];
  return [e1, e2, e3];
}

export function playSynthSound(freq = 800, type: OscillatorType = 'sine', duration = 0.08) {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.045, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // ignore audio block
  }
}

function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = str.charCodeAt(i) + ((h << 5) - h);
  }
  return Math.abs(h);
}

export function synthesizeCharacterDossier(
  rawName: string,
  origin: string,
  shipName: string,
  trait: string,
  definingChoice: string,
  faction: string,
  credits: number,
  intelUnits: number,
  cargo: string[]
): GeneratedDossier {
  // Fix "Captain Captain Vance" quirk by normalizing any leading "Captain "
  const cleanBaseName = (rawName.trim() || 'Vance').replace(/^Captain\s+/i, '');
  const displayName = `Captain ${cleanBaseName}`;
  const h = hashString(displayName + origin + faction);
  const codeNum = (h % 900000) + 100000;
  const subNum = (h % 99) + 1;

  let logHeader = `SETTLED-SYSTEMS // SECURE DOSSIER #SS-${codeNum}-${subNum}`;
  const fLow = faction.toLowerCase();
  if (fLow.includes('merchant') || fLow.includes('m.i.d')) {
    logHeader = `MID-DATABANK // CLASSIFIED INTEL #SS-${codeNum}-${subNum}`;
  } else if (fLow.includes('crimson') || fLow.includes('pirate')) {
    logHeader = `CRIMSON-FLEET // DECRYPTED LOG #CF-${codeNum}-${subNum}`;
  } else if (fLow.includes('constellation')) {
    logHeader = `CONSTELLATION // EXPLORATION DOSSIER #CO-${codeNum}-${subNum}`;
  } else if (fLow.includes('ryujin')) {
    logHeader = `RYUJIN-CORP // CONFIDENTIAL CONTRACT #RJ-${codeNum}-${subNum}`;
  } else if (fLow.includes('freestar') || fLow.includes('frontier')) {
    logHeader = `FREESTAR-REGISTRY // FIELD ARCHIVE #FC-${codeNum}-${subNum}`;
  } else if (fLow.includes('vanguard') || fLow.includes('uc')) {
    logHeader = `UC-VANGUARD // RECRUIT REGISTRY #UV-${codeNum}-${subNum}`;
  }

  const originNode = ORIGIN_NODES.find((o) => o.id.toLowerCase() === origin.toLowerCase() || o.title.toLowerCase() === origin.toLowerCase());
  const originFlavor = originNode
    ? originNode.description.replace(/^You\s+/i, `${displayName} `)
    : `Emerging from the outer sectors as a seasoned ${origin}, ${displayName} forged a reputation across the Settled Systems for tactical adaptability and cold precision under pressure.`;

  const para1 = `The groan of twisting steel and the absolute silence of deep space are ${displayName}'s oldest companions. ${originFlavor} At the helm of the "${shipName}", their physiological telemetry marks them as a statistical anomaly: while under multiple hostile target locks, their heart rate drops to a steady fifty beats per minute, allowing near-perfect combat and salvage calculus.`;

  const para2 = `Their trajectory across the Trade Wars shifted permanently during a high-stakes 3-act campaign (${definingChoice}). Rather than bowing to corporate coercion or orbital blockades, ${displayName} executed decisive tactical maneuvers—accumulating ${credits.toLocaleString()} CR in liquid operational capital and ${intelUnits} MB of encrypted sector intelligence while securing key artifacts (${cargo.slice(-3).join(', ')}).`;

  const para3 = `Now operating within the sphere of ${faction}, ${displayName} commands the "${shipName}" along the most volatile shipping corridors and contested points of interest in the Settled Systems. Whether negotiating with fully-voiced M.I.D. handlers, enforcing Supply Charters, or defending frontier colonies in Galaxy in Flux, their callsign commands instant respect across every staryard from New Atlantis to Neon.`;

  const auxLog = AUXILIARY_SUB_LOGS[h % AUXILIARY_SUB_LOGS.length];

  const fullBackstory = `${para1}\n\n${para2}\n\n${para3}\n\n[ACCESSING AUXILIARY SUB-LOG DATA...]\n${auxLog}`;

  const summaries = [
    `A calculated ${faction} commander utilizing clinical focus and the starship "${shipName}" to dominate high-value salvage and covert trade corridors.`,
    `A battle-tested ${origin} turned interstellar tactician holding ${credits.toLocaleString()} CR and ${intelUnits} MB of classified sector intelligence.`,
    `An elite Settled Systems operative whose decisive campaign across three contested sectors reshaped the balance of the Trade Wars.`
  ];
  const characterSummary = summaries[h % summaries.length];

  const redditReadyText = `**[${faction.toUpperCase()} PERSONNEL LOG DOSSIER]**\n\n*"${characterSummary}"*\n\nMeet **${displayName}**, starting as a **${origin}** aboard the **${shipName}** (${trait}).\n\n**Campaign Telemetry:** ${credits.toLocaleString()} CR | ${intelUnits} MB Intel | ${cargo.length} Artifacts Secured\n\n**Full Archive Dossier:**\n${fullBackstory}\n\n#Starfield #TradeWars #SettledSystems #GamerroundupStudios #Roleplay`;

  return {
    logHeader,
    fullBackstory,
    redditReadyText,
    characterSummary
  };
}
