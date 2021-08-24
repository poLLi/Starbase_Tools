/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        DESIGNER: 'Ship-Designer',
        CALCULATOR: '> Calculator',
        SHIP_CALCULATOR: 'Normal Ship',
        CAPT_CALCULATOR: 'Capital Ship',
        MAP: 'Map',
        MORE: 'More',
        YOLOL: 'Yolol',
        CONTACT: 'Contact',
        OPTIONS: 'Options',
        OPTIONS_LANGUAGE: '> Change Language',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_SUB: '( unofficial )',
        HEADLINE_DESCRIPTION: 'Everything you need to survive in Starbase!',

        DEVELOPER_NOTE: 'Tools made with ',
        DEVELOPER_NOTE_BY: ' by ',
        DEVELOPER_NOTE_LIKE: 'Like my work?',
        DEVELOPER_NOTE_COFFEE: 'Buy me a Coffee'
    },

    // ---------------------------
    // PAGE: Spaceship-Calculator
    SHIP_CALC: {
        WARNING: {
            HEADLINE: 'WARNING: ',
            SUBLINE: 'Almost everything is subject to change. ',
            VERSION: 'Current Version: '
        },

        CARD: {
            TRUSTER_TITLE: 'Thruster',
            PROP_FUEL_ENERGY_TITLE: 'Fuel and Energy',
            WEIGHT_MISC_TITLE: 'Weight and Cargo',
            TOOLS_TITLE: 'Tools',
            WEAPON_TITLE: 'Weapon',
            CALCULATION_TITLE: 'Calculation'
        },

        SAVE: {
            SHIP_CALC_SAVE_TEXT: 'Your Ship Calculation url is ready.',
            SHIP_CALC_COPY_CLIPBOARD: 'Copy to Clipboard',
            SAVE_BUTTON: 'SAVE DATA',
            RESET_BUTTON: 'RESET'
        },

        THRUSTER: {
            EFFICIENCY_HEADLINE: 'Efficiency',
            EFFICIENCY_THRUSTER: 'Thruster Efficiency',
            EFFICIENCY_TOOLTIP: '100% efficiency is only reachable if your ship is in total symmetry which is almost impossible todo.',
            FORWARD_THRUSTER: 'Forward Thruster',
            BACKWARD_THRUSTER: 'Backward Thruster',
            MANEUVER_THRUSTER: 'Maneuver Thruster',
            BOX_T1: 'Box Thruster T1',
            BOX_T2: 'Box Thruster T2',
            BOX_T3: 'Box Thruster T3',
            TRIANGLE_T1: 'Triangle Thruster T1',
            TRIANGLE_T2: 'Triangle Thruster T2',
            TRIANGLE_T3: 'Triangle Thruster T3',
            MANEUVER_T1: 'Maneuver Thruster T1',
            MANEUVER_T2: 'Maneuver Thruster T2',
            MANEUVER_T3: 'Maneuver Thruster T3',
            PLASMA_BODY: 'Plasma Thruster Body',
            PLASMA_RING: 'Plasma Thruster Ring'
        },

        PROPELLANT: {
            PROPELLANT_HEADLINE: 'Propellant Tank',
            PROPELLANT_T1: 'Small Propellant Tank',
            PROPELLANT_T2: 'Medium Propellant Tank',
            PROPELLANT_T3: 'Large Propellant Tank'
        },

        FUEL_CHAMBER: {
            FUEL_CHAMBER_HEADLINE: 'Fuel Chamber',
            FUEL_CHAMBER_T1: 'Fuel Chamber T1',
            FUEL_CHAMBER_T2: 'Fuel Chamber T2',
            FUEL_CHAMBER_T3: 'Fuel Chamber T3'
        },

        GENERATOR: {
            GENERATOR_HEADLINE: 'Generator',
            GENERATOR_T1: 'Generator T1',
            GENERATOR_T2: 'Generator T2',
            GENERATOR_T3: 'Generator T3'
        },

        BATTERY: {
            BATTERY_HEADLINE: 'Battery',
            BATTERY_T1: 'Small Battery'
        },

        COOLING: {
            COOLING_HEADLINE: 'Cooling',
            RADIATOR_BASE: 'Radiator Base',
            RADIATOR_EXTENSION: 'Radiator Extension',
            COOLING_RACK: 'Cooling Rack'
        },

        WEIGHT_CARGO: {
            WEIGHT: 'Overall weight in tons',
            WEIGHT_TOOLTIP: 'You can see your ship mass if you try to pick it up with [P]. (tons =kg/1000)',
            CRATES: 'Number of Ore Crates'
        },

        TOOLS: {
            MINING_LASER: 'Mining Laser',
            MINING_BATTERY_TIME: 'Battery support time in seconds',
            ORE_COLLECTOR: 'Ore Collector',
            MATERIAL_SCANNER: 'Material Point Scanner',
            LASER_DESIGNATOR: 'Laser Designator',
            RANGEFINDER: 'Rangefinder'
        },

        WEAPON: {
            AUTO_CANNON: 'Auto Cannon',
            LASER_CANNON: 'Laser Cannon',
            PLASMA_CANNON: 'Plasma Cannon',
            RAIL_CANNON: 'Rail Cannon'
        },

        CALCULATION: {
            SPEED: 'Speed',
            FORWARD_SPEED: 'Forward Speed',
            BACKWARD_SPEED: 'Backward Speed',
            FORWARD_SPEED_HALF: 'Forward Speed (half Crates)',
            FORWARD_SPEED_FULL: 'Forward Speed (full Crates)',

            FORWARD_SPEED_HALF_TOOLTIP: 'Half Crates is calculated with the rough average weight of ores (15t/stack)',
            FORWARD_SPEED_FULL_TOOLTIP: 'Full Crates is calculated with the highest weight of ores (26t/stack - Lukium)',

            FLIGHT_TIME_HEAD: 'Flight Times',
            FLIGHT_TIME: 'Flight Time',
            FLIGHT_TIME_FUEL: 'Fuel',
            FLIGHT_TIME_PROP: 'Propellant',
            FLIGHT_TIME_TOOLTIP: 'Flight Time is calculated with full forward thrust as well as half maneuver thrust.',

            FLIGHT_LENGTH: 'Flight Length',
            FLIGHT_LENGTH_HALF: 'Flight Length (half Crates)',
            FLIGHT_LENGTH_FULL: 'Flight Length (full Crates)',

            THRUST: 'Thrust',
            FORWARD_THRUST: 'Total Forward Thrust',
            BACKWARD_THRUST: 'Total Backward Thrust',
            MANEUVER_THRUST: 'Total Maneuver Thrust',

            FUEL_ENERGY: 'Energy / Fuel',
            TOTAL_PROPELLANT: 'Total Propellant',
            TOTAL_FUEL: 'Total Fuel',

            TOTAL_HEAT_HEAD: 'Heat Generation',
            TOTAL_HEAT_SUB: '(estimated)',
            TOTAL_HEAT_TOOLTIP: 'Heat is calculated with one Generator adjacent to another. Basically +25 Heat for every Generator.',
            TOTAL_COOLING: 'Heat Dissipation',

            ENERGY_GEN: 'Energy Generation',
            ENERGY_DRAIN_IDLE: 'Energy Drain (idle)',
            ENERGY_DRAIN_THRUSTER: 'Energy Drain (Thruster)',
            ENERGY_DRAIN_TOOLS: 'Energy Drain (Tools)',
            ENERGY_DRAIN_WEAPONS: 'Energy Drain (Weapons)',

            MINING_BATTERYS: 'Min Batteries for MiningLaser'
        }
    },

    // ---------------------------
    // PAGE: Capital-Calculator
    CAPT_SHIP: {
        HEADLINE_TITLE: 'Capital-Ship Caluclator',
        HEADLINE_SUB: 'Yea... Same as the normal ship calc but for Captital Ships',
        WIP: 'Sorry! Not done yet :)'
    },

    // ---------------------------
    // PAGE: Yolol-Calculator
    YOLOL: {
        HEADLINE_TITLE: 'Yolol Codes',
        HEADLINE_SUB: 'Collection of usefull yolol codes and debug/dev tools',
        WIP: 'Sorry! Not done yet :)'
    },

    // ---------------------------
    // PAGE: Map
    MAP: {
        HEADLINE_TITLE: 'Interactive Map',
        HEADLINE_SUB: 'Full detailed Galaxy map of Starbase',
        WIP: 'Sorry! Not done yet :)'
    },

    // ---------------------------
    // PAGE: Contact
    CONTACT: {
        HEADLINE_TITLE: 'Contact',
        HEADLINE_SUB: 'Yep thats me...',
        ABOUT_TITLE: 'About Me',
        ABOUT_TEXT: 'Hey, I´m PoLLi. I made this somewhat functional website...',
        CONTACT_TEXT: 'If u would like to get in contact with me you can do so by the following details listed below.',
        CHANNELS: 'Channels',
        PERSONAL_DISCORD: 'Personal Discord: ',
        GITHUB: 'Github',
        PERSONAL_GITHUB: 'Personal Github: ',
        NETWORK_GITHUB: 'JLN Github: ',
        SOCIAL: 'Social',
        PERSONAL_SOCIAL: 'Personal: '
    },

    // ---------------------------
    // PAGE: Changelog
    CHANGELOG: {
        HEADLINE_TITLE: 'Changelog',
        HEADLINE_SUB: 'well... yea thats what you would expect here'
    }
};
