/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        BUILDER: 'Character-Builder',
        MAP: 'Map',
        MORE: 'More',
        DATABASE: 'Database',
        CONTACT: 'Contact',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_DESCRIPTION: 'Everything you need to survive in Starbase!'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            PERK_POINTS: 'Perk Points',

            OCCUPATION_TITLE: 'Occupation',
            OCCUPATION_BENEFIT: 'Benefit',

            PERK_SELECTION_TITLE: 'Perk Selection',
            PERK_SELECTION_COST: 'Cost',
            PERK_SELECTION_TRAIT: 'Trait',
            PERK_SELECTION_HOBBY: 'Hobby',
            PERK_SELECTION_SKILL: 'Skill',
            PERK_SELECTION_STAT: 'Stat',

            CHARACTER_DATA_TITLE: 'Character Data',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Attributes',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Agility',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Charisma',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Endurance',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Intelligence',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Strength',
            CHARACTER_DATA_SKILLS_TITLE: 'Skills',
            CHARACTER_DATA_SKILLS_COOKING: 'Cooking',
            CHARACTER_DATA_SKILLS_FARMING: 'Farming',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Mechanic',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Crafting',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Lockpicking',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Medical',

            PERK_POINTS_DESCRIPTION:
                'You need to have a balance of 0 or more perk points in order to finish the build.',
            PERK_POINTS_RESET_BUTTON: 'Reset',
            PERK_POINTS_SAVE_BUTTON: 'Save Build',
            PERK_POINTS_SAVE_TEXT: 'Your Character Build url is ready.',
            PERK_POINTS_COPY_CLIPBOARD: 'Copy to Clipboard',

            EXTENDED_STATS_BUTTON_OPEN: 'Open Extended Statistics',
            EXTENDED_STATS_BUTTON_CLOSE: 'Close Extended Statistics',
            EXTENDED_STATS_BUTTON_WIP: '(Work in Progress)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'Unemployed',
            UNEMPLOYED_DESCRIPTION: 'You were a talented but quick learner that decided against pursuing employment.',
            UNEMPLOYED_BENEFIT: 'Spawn with the clothes on your back and a melee weapon.',

            CONSTRUCTION_WORKER_TITLE: 'Construction Worker',
            CONSTRUCTION_WORKER_DESCRIPTION:
                'You used to work on new housing projects all the time. This is the ideal choice if you like to build structures.',
            CONSTRUCTION_WORKER_BENEFIT: 'Spawn with your work outfit and a melee weapon.',

            REPAIR_MAN_TITLE: 'Repairman',
            REPAIR_MAN_DESCRIPTION: 'You were once a repair man with a broad variety of skills.',
            REPAIR_MAN_BENEFIT: 'Spawn with casual attire and a random melee weapon',

            FARMER_TITLE: 'Farmer',
            FARMER_DESCRIPTION:
                'Making an honest living is never something to be ashamed of. Everybody still needs to eat.',
            FARMER_BENEFIT: 'Spawn with some basic clothes and a small backpack with survival gear.',

            CHEF_TITLE: 'Chef',
            CHEF_DESCRIPTION:
                'Your´ve always liked to spend time in the kitchen, ever since you were a child. Now you need to use your cooking skills to survive.',
            CHEF_BENEFIT: 'Spawn with your work outfit and a kitchen knife.',

            DOCTOR_TITLE: 'Doctor',
            DOCTOR_DESCRIPTION:
                'In theory the hippocratic oath still applies even after society has fallen apart. You once swore a duty to help those that are in need.',
            DOCTOR_BENEFIT: 'Spawn with your work clothes, some medical supplies and a melee weapon.',

            FIRE_FIGHTER_TITLE: 'Firefighter',
            FIRE_FIGHTER_DESCRIPTION:
                'You were once a firefighter, bravely battling many of the fires that sprung up during the outbreak. You´re one of the few remaining survivors from the city.',
            FIRE_FIGHTER_BENEFIT: 'Spawn with your work outfit and a fireaxe',

            POLICE_OFFICER_TITLE: 'Police Officer',
            POLICE_OFFICER_DESCRIPTION:
                'You were a police officer, once, enforcing the law. This is now a lawless world.',
            POLICE_OFFICER_BENEFIT:
                'Spawn with your work outfit complete with flashlight and service pistol with a less then half empty magazine.',

            SECURITY_GUARD_TITLE: 'Security Guard',
            SECURITY_GUARD_DESCRIPTION:
                'You never really slept well at night, so you became a security guard at the mall. Might not be a bad thing once the power goes out for good.',
            SECURITY_GUARD_BENEFIT: 'Spawn with your security outfit and a melee weapon.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'CPR Training',
            CPR_TRAINING_DESCRIPTION: 'Gain the ability to bring people out of unconciousness by performing CPR.',

            ASTRONOMER_TITLE: 'Astronomer',
            ASTRONOMER_DESCRIPTION: 'Draws a compass on the screen at night when pressing the HUD prompt key.',

            OBSERVANT_TITLE: 'Observant',
            OBSERVANT_DESCRIPTION: 'Perks are listed when looking at a player with the HUD prompt active',

            HERBALIST_TITLE: 'Herbalist',
            HERBALIST_DESCRIPTION: 'Allows you to easily identify poisonous berries and mushrooms.',

            PEANUT_ALLERGY_TITLE: 'Peanut Allergy',
            PEANUT_ALLERGY_DESCRIPTION:
                'Triggers a severe allergic reaction when consuming foods containing peanuts. (Spawn with one epi-pen).',

            PARANOID_TITLE: 'Paranoid',
            PARANOID_DESCRIPTION: 'You will randomly hear gunshots that are not real.',

            UNIVERSAL_RECEIVER_TITLE: 'Universal Receiver',
            UNIVERSAL_RECEIVER_DESCRIPTION:
                'Forces the blood type to AB+ which allows you to receive blood from anyone without triggering a hemolytic reaction.',

            UNIVERSAL_DONOR_TITLE: 'Universal Donor',
            UNIVERSAL_DONOR_DESCRIPTION:
                'Forces the blood type to O- which anyone can receive when in need of a transfusion.',

            JOGGER_TITLE: 'Jogger',
            JOGGER_DESCRIPTION: 'You used to enjoy running when it was just for fun. Gain +2 Agility',

            NERD_TITLE: 'Nerd',
            NERD_DESCRIPTION: 'You used to play a lot of videogames in your spare time. Lose -2 Strength',

            CHESS_PLAYER_TITLE: 'Chess Player',
            CHESS_PLAYER_DESCRIPTION: 'You used to play competitive chess. Gain +2 Intelligence.',

            PARTY_BOY_TITLE: 'Party Boy',
            PARTY_BOY_DESCRIPTION: 'You used to party... a lot. Lose -2 Intelligence.',

            RUNNER_TITLE: 'Runner',
            RUNNER_DESCRIPTION: 'You used to enjoy running marathons. Gain +300s sprint time and +1 Agility',

            STRENGTH_TRAINING_TITLE: 'Strength Training',
            STRENGTH_TRAINING_DESCRIPTION:
                'Your life orients around lifting when you´re not at work. Gain +2 Strength.',

            WEEKEND_BARTENDER_TITLE: 'Weekend Bartender',
            WEEKEND_BARTENDER_DESCRIPTION:
                'You used to be a bartender on weekends, it  gave you an insight into human behavior. Gain +2 Chraisma.',

            WRESTLER_TITLE: 'Wrestler',
            WRESTLER_DESCRIPTION:
                'You used to be a wrestler when you were younger, it made you pretty hard to bring down. Gain +2 Endurance.',

            AMATEUR_COOK_TITLE: 'Amateur Cook',
            AMATEUR_COOK_DESCRIPTION:
                'You like to cook fancy meals at home and aren´t afraid of getting behind the stove. Gain +25 bonus to Cooking.',

            AWFUL_COOK_TITLE: 'Awful Cook',
            AWFUL_COOK_DESCRIPTION: 'You´re terrible behind the stove. Receive a -25 penalty to Cooking.',

            METALWORKER_TITLE: 'Metalworker',
            METALWORKER_DESCRIPTION:
                'You´ve tinkered around with metalworking and locksmithing. Gain a +25 bonus to Lockpicking.',

            GREEN_THUMB_TITLE: 'Green Thumb',
            GREEN_THUMB_DESCRIPTION: 'You enjoy gardening. Gain a +25 bonus to Farming.',

            HOBBYIST_TITLE: 'Hobbyist',
            HOBBYIST_DESCRIPTION:
                'You enjoy model trains, playing with rockets and all sorts of different gadgets. Gain a +25 bonus to Crafting',

            GEARHEAD_TITLE: 'Gearhead',
            GEARHEAD_DESCRIPTION: 'You spend a lot of time restoring old cars. Gain a +25 bonus to Mechanic.',

            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Volunteer Firefighter',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION:
                'You were a volunteer firefighter when you were younger. Gain a +25 bonus to Medical.',

            BIG_BONED_TITLE: 'Big Boned',
            BIG_BONED_DESCRIPTION: 'Absulute unit. More limb health and +750ml max blood.',

            OSTEOPOROSIS_TITLE: 'Osteoporosis',
            OSTEOPOROSIS_DESCRIPTION: 'You take increased limb damage.',

            BRAVE_TITLE: 'Brave',
            BRAVE_DESCRIPTION: 'Less supression when taking fire.',

            FEARFUL_TITLE: 'Fearful',
            FEARFUL_DESCRIPTION: 'Take more supression when taking fire.',

            NO_FEAR_TITLE: 'No Fear',
            NO_FEAR_DESCRIPTION: 'You´ve seen it all. You do not fear death. -80% supression from taking fire.',

            FRIGHTFUL_TITLE: 'Frightful',
            FRIGHTFUL_DESCRIPTION: 'Additional +80% supression when being attacked.',

            FAST_METABOLISM_TITLE: 'Fast Metabolism',
            FAST_METABOLISM_DESCRIPTION: 'You metabolize food 50% faster.',

            SLOW_METABOLISM_TITLE: 'Slow Metabolism',
            SLOW_METABOLISM_DESCRIPTION: 'You metabolize food 50% more slowly.',

            IRON_STOMACH_TITLE: 'Iron Stomach',
            IRON_STOMACH_DESCRIPTION: 'Get sick less often when drinking and eating.',

            WEAK_STOMACH_TITLE: 'Weak Stomach',
            WEAK_STOMACH_DESCRIPTION: 'Get sick more often when drinking and eating.',

            SILENT_SEARCH_TITLE: 'Silent Search',
            SILENT_SEARCH_DESCRIPTION: 'Make 50% less noise when searching a container.',

            NOISY_SEARCH_TITLE: 'Noisy Search',
            NOISY_SEARCH_DESCRIPTION: 'Make 50% more noise when searching a container.',

            THICK_SKINNED_TITLE: 'Thick Skinned',
            THICK_SKINNED_DESCRIPTION: 'Take 15% less damage from melee attacks.',

            THIN_SKINNED_TITLE: 'Thin Skinned',
            THIN_SKINNED_DESCRIPTION: 'Take 15% more damage from melee attacks.',

            NIMBLE_FINGERS_TITLE: 'Nimble Fingers',
            NIMBLE_FINGERS_DESCRIPTION: 'Search containers 50% faster.',

            SAUSAGE_FINGERS_TITLE: 'Sausage Fingers',
            SAUSAGE_FINGERS_DESCRIPTION: 'Search containers 50% more slowly.',

            HEAVY_WEIGHT_TITLE: 'Heavy Weight',
            HEAVY_WEIGHT_DESCRIPTION: 'You get drunk far less easily.',

            LIGHT_WEIGHT_TITLE: 'Light Weight',
            LIGHT_WEIGHT_DESCRIPTION:
                'Impact of drinking too much alcohol is amplified. Lower threshold to start feeling the effects.',

            LIGTH_STEP_TITLE: 'Light Step',
            LIGTH_STEP_DESCRIPTION: 'Your footsteps are 30% quieter.',

            HEAVY_STEP_TITLE: 'Heavy Step',
            HEAVY_STEP_DESCRIPTION: 'Your footsteps are 30% louder.'
        }
    }
};
