/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        BUILDER: 'Charakter-Builder',
        MAP: 'Karte',
        MORE: 'Mehr',
        DATABASE: 'Database',
        CONTACT: 'Kontakt',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_DESCRIPTION: 'Alles was du benötigst um die Zombie-Apokalypse zu überleben!'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            PERK_POINTS: 'Perk Points',

            OCCUPATION_TITLE: 'Tätigkeit',
            OCCUPATION_BENEFIT: 'Benefit',

            PERK_SELECTION_TITLE: 'Perk Auswahl',
            PERK_SELECTION_COST: 'Cost',
            PERK_SELECTION_TRAIT: 'Trait',
            PERK_SELECTION_HOBBY: 'Hobby',
            PERK_SELECTION_SKILL: 'Skill',
            PERK_SELECTION_STAT: 'Stat',

            CHARACTER_DATA_TITLE: 'Charakter Daten',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Attribute',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Beweglichkeit',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Charisma',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Ausdauer',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Intelligenz',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Stärke',
            CHARACTER_DATA_SKILLS_TITLE: 'Skills',
            CHARACTER_DATA_SKILLS_COOKING: 'Kochen',
            CHARACTER_DATA_SKILLS_FARMING: 'Landwirtschaft',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Mechanisch',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Crafting',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Schlösserknacken',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Medizinisch',

            PERK_POINTS_DESCRIPTION: 'Sie müssen ein Wert von 0 oder mehr Perk Punkten haben um den Build fertig zu stellen.',
            PERK_POINTS_RESET_BUTTON: 'Zurücksetzten',
            PERK_POINTS_SAVE_BUTTON: 'Build Speichern',
            PERK_POINTS_SAVE_TEXT: 'Dein Charakter Build ist fertig.',
            PERK_POINTS_COPY_CLIPBOARD: 'In zwischenablage kopieren',

            EXTENDED_STATS_BUTTON_OPEN: 'Öffne Erweiterte Statistiken',
            EXTENDED_STATS_BUTTON_CLOSE: 'Schließe Erweiterte Statistiken',
            EXTENDED_STATS_BUTTON_WIP: '(Work in Progress)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'Arbeitslos',
            UNEMPLOYED_DESCRIPTION: 'Du warst ein Talentierter und schneller Lerner, der sich gegen eine Beschäftigung entschieden hat.',
            UNEMPLOYED_BENEFIT: 'Spawn mit der Kleidung in deinem Rucksack und einer Nahkampfwaffe.',

            CONSTRUCTION_WORKER_TITLE: 'Bauarbeiter',
            CONSTRUCTION_WORKER_DESCRIPTION: 'Du bist es gewohnt die ganze Zeit auf dem Bau zu arbeiten. Das ist die ideale Wahl, wenn du Strukturen bauen möchtest.',
            CONSTRUCTION_WORKER_BENEFIT: 'Spawn mit deinem Bauarbeiter Outfit ein einer Nahkampfwaffe.',

            REPAIR_MAN_TITLE: 'Handwerker',
            REPAIR_MAN_DESCRIPTION: 'Du warst einmal ein Handwerker mit einer Vielzahl von Fähigkeiten.',
            REPAIR_MAN_BENEFIT: 'Spawn mit Freizeitkleidung und einer zufälligen Nahkampfwaffe.',

            FARMER_TITLE: 'Landwirt',
            FARMER_DESCRIPTION: 'Einen ehrlichen Lebensunterhalt zu verdienen, ist niemals etwas, wofür man sich schämen muss. Jeder muss etwas zu essen haben.',
            FARMER_BENEFIT: 'Spawn mit ein paar einfachen Klamotten und einem Rucksack mit Überlebensausrüstung.',

            CHEF_TITLE: 'Koch',
            CHEF_DESCRIPTION: 'Du warst schon immer gern in der Küche, seit du ein Kind warst. Jetzt musst Du deine Kochkünste einsetzen um zu überleben.',
            CHEF_BENEFIT: 'Spawn mit deinem Koch Outfit und einem Küchenmesser.',

            DOCTOR_TITLE: 'Arzt',
            DOCTOR_DESCRIPTION: 'Theoretisch gilt der hippokratische Eid auch nach dem Zerfall der Gesellschaft noch. Du hast einmal geschworen, den Bedürftigen zu helfen.',
            DOCTOR_BENEFIT: 'Spawn mit deinem Arzt Outfit, einigen medizinischen Hilfsmitteln und einer Nahkampfwaffe.',

            FIRE_FIGHTER_TITLE: 'Feuerwehrmann',
            FIRE_FIGHTER_DESCRIPTION: 'Du warst einmal ein Feuerwehrmann und hast tapfer gegen viele der Feuer gekämpft, die während des Ausbruchs entfacht sind. Du bist einer der wenigen Überlebenden aus der Stadt.',
            FIRE_FIGHTER_BENEFIT: 'Spawn mit deinem Feuerwehr Outfit und einer Axt.',

            POLICE_OFFICER_TITLE: 'Polizist',
            POLICE_OFFICER_DESCRIPTION: 'Du warst einmal Polizist und hast das Gesetz durchgesetzt. Dies ist jetzt eine gesetzlose Welt.',
            POLICE_OFFICER_BENEFIT: 'Spawn mit deinem Polizei Outfit, einer Taschenlampe und einer Dienstwaffe mit weniger als einem halben Magazin.',

            SECURITY_GUARD_TITLE: 'Wachmann',
            SECURITY_GUARD_DESCRIPTION: 'Du hast nachts nie wirklich gut geschlafen, also bist du ein Wachmann im Einkaufszentrum geworden.',
            SECURITY_GUARD_BENEFIT: 'Spawn mit deinem Wachmann Outfit und einer Nahkampfwaffe.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'CPR Training',
            CPR_TRAINING_DESCRIPTION: 'Erhalten Sie die Fähigkeit CPR bei Bewusstlosen Menschen anzuwenden.',
            
            ASTRONOMER_TITLE: 'Astronom',
            ASTRONOMER_DESCRIPTION: 'Zeige nachts einen Kompass auf dem Bildschirm an, wenn die HUD-Taste gerückt wird.',
            
            OBSERVANT_TITLE: 'Aufmerksam',
            OBSERVANT_DESCRIPTION: 'Perks von anderen Spielern werden aufgelistet beim drücken der HUD-Taste',
            
            HERBALIST_TITLE: 'Kräuterkunde',
            HERBALIST_DESCRIPTION: 'Ermöglicht dir einfache giftige Beeren und Pilze zu Identifizieren.',
            
            PEANUT_ALLERGY_TITLE: 'Erdnussallergie',
            PEANUT_ALLERGY_DESCRIPTION: 'Löst beim Verzehr von erdnusshaltigen Lebensmitteln eine schwere allergische Reaktion aus. (Spawn mit einem Epi-Pen).',
            
            PARANOID_TITLE: 'Paranoid',
            PARANOID_DESCRIPTION: 'Du hörst zufällig Schüsse die nicht real sind.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Universal Empfänger',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Setzt deine Blutgruppe auf AB+, wodurch Du blut von jedem anderen Typ erhalten kannst, ohne eine hämolytische Reaktion auszulösen.',
            
            UNIVERSAL_DONOR_TITLE: 'Universal Spender',
            UNIVERSAL_DONOR_DESCRIPTION: 'Setzt deine Blutgruppe auf 0-, wodurch Du jedem anderen Typ eine Transfusion geben kannst wenn er eine benötigt.',
            
            JOGGER_TITLE: 'Jogger',
            JOGGER_DESCRIPTION: 'Du hast es genossen zu laufen, wenn es nur zum Spaß war. Erhalte +2 Beweglichkeit.',
       
            NERD_TITLE: 'Nerd',
            NERD_DESCRIPTION: 'Du hast in deiner Freizeit viele Videospiele gespielt. Verliere -2 Stärke.',
            
            CHESS_PLAYER_TITLE: 'Schachspieler',
            CHESS_PLAYER_DESCRIPTION: 'Du hast früher gerne Schach gespielt. Erhalte +2 Intelligenz.',
            
            PARTY_BOY_TITLE: 'Party Boy',
            PARTY_BOY_DESCRIPTION: 'Du hast früher gefeiert ... viel gefeiert. Verliere -2 Intelligenz.',
            
            RUNNER_TITLE: 'Läufer',
            RUNNER_DESCRIPTION: 'Früher bist du gerne Marathons gelaufen. Erhalte + 300s extra Sprintzeit und +1 Beweglichkeit.',
            
            STRENGTH_TRAINING_TITLE: 'Krafttraining',
            STRENGTH_TRAINING_DESCRIPTION: 'Dein Leben orientiert sich an Gewichte-Heben, wenn du nicht bei der Arbeit bist. Erhalte +2 Stärke.',
            
            WEEKEND_BARTENDER_TITLE: 'Wochenend-Barkeeper',
            WEEKEND_BARTENDER_DESCRIPTION: 'Du hast gerne am Wochenende als Barkeeper gearbeitet, es gab dir einen Einblick in das menschliches Verhalten. Erhalte +2 Chraisma.',
            
            WRESTLER_TITLE: 'Ringer',
            WRESTLER_DESCRIPTION: 'Du warst ein Ringer, als du jünger warst, das hat es ziemlich schwer gemacht, dich zu Fall zu bringen. Erhalte +2 Ausdauer.',
            
            AMATEUR_COOK_TITLE: 'Hobbykoch',
            AMATEUR_COOK_DESCRIPTION: 'Du kochst gerne ausgefallene Mahlzeiten zu Hause und hast keine Angst hinter den Herd zu stehen. Erhalte +25 Kochen.',
            
            AWFUL_COOK_TITLE: 'Schrecklicher Koch',
            AWFUL_COOK_DESCRIPTION: 'Du bist schrecklich hinter dem Herd. Verliere -25 Kochen.',
            
            METALWORKER_TITLE: 'Schlosser',
            METALWORKER_DESCRIPTION: 'Du hast viel an Metallarbeiten und Schlosserarbeiten herumgebastelt. Erhalte +25 Lockpicking.',
            
            GREEN_THUMB_TITLE: 'Grüner Daumen',
            GREEN_THUMB_DESCRIPTION: 'Du genießst es Gartenarbeit zu machen. Erhalte +25 Landwirtschaft.',
            
            HOBBYIST_TITLE: 'Hobbyist',
            HOBBYIST_DESCRIPTION: 'Du genießst es mit Modelleisenbahnen, Raketen und verschiedensten Geräten zu spielen. Erhalte +25 Handwerk',
            
            GEARHEAD_TITLE: 'Getriebe',
            GEARHEAD_DESCRIPTION: 'Du hast viel Zeit damit verbracht alte Autos zu restaurieren. Erhalte +25 Mechaniker.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Freiwillige Feuerwehr',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'Du warst bei der freiwilligen Feuerwehr als Du jünger warst. Erhalten +25 Medical.',
            
            BIG_BONED_TITLE: 'Große Knochen',
            BIG_BONED_DESCRIPTION: 'Du Tier! Erhalte mehr Gesundheit für Gliedmaßen und + 750ml maximales Blut.',
            
            OSTEOPOROSIS_TITLE: 'Osteoporosis',
            OSTEOPOROSIS_DESCRIPTION: 'Du erleidest erhöhten Schaden an Gliedmaßen.',
            
            BRAVE_TITLE: 'Mutig',
            BRAVE_DESCRIPTION: 'Du wirst weniger unterdrückt bei beschuss.',
            
            FEARFUL_TITLE: 'Ängstlich',
            FEARFUL_DESCRIPTION: 'Du wirst mehr unterdrückt bei beschuss.',
            
            NO_FEAR_TITLE: 'Kein Angst',
            NO_FEAR_DESCRIPTION: 'Du hast schon alles gesehen und keine Angst mehr vor dem Tod. Werde 80% weniger unterdrückt bei beschuss.',
            
            FRIGHTFUL_TITLE: 'Schreckhaft',
            FRIGHTFUL_DESCRIPTION: 'Du wirst zusätzliche um 80% mehr unterdrückt bei beschuss.',
            
            FAST_METABOLISM_TITLE: 'Schneller Stoffwechsel',
            FAST_METABOLISM_DESCRIPTION: 'Du metabolisiert Substanzen 50% schneller.',
            
            SLOW_METABOLISM_TITLE: 'Langsamer Stoffwechsel',
            SLOW_METABOLISM_DESCRIPTION: 'Du metabolisiert Substanzen 50% langsamer.',
            
            IRON_STOMACH_TITLE: 'Eisener Magen',
            IRON_STOMACH_DESCRIPTION: 'Du wirst beim Essen und Tricken seltener krank.',
            
            WEAK_STOMACH_TITLE: 'Schwacher Magen',
            WEAK_STOMACH_DESCRIPTION: 'Du wirst beim Essen und Tricken öfter krank.',
            
            SILENT_SEARCH_TITLE: 'Stille Suche',
            SILENT_SEARCH_DESCRIPTION: 'Du machst beim durchsuchen eines Containers 50% weniger Lärm.',
            
            NOISY_SEARCH_TITLE: 'Laute Suche',
            NOISY_SEARCH_DESCRIPTION: 'Du machst beim durchsuchen eines Containers 50% mehr Lärm.',
            
            THICK_SKINNED_TITLE: 'Dickhäutig',
            THICK_SKINNED_DESCRIPTION: 'Du bekommst 15% weniger Schaden durch Nahkampfangriffe.',
            
            THIN_SKINNED_TITLE: 'Dünnhäutig',
            THIN_SKINNED_DESCRIPTION: 'Du bekommst 15% weniger Schaden durch Nahkampfangriffe.',
            
            NIMBLE_FINGERS_TITLE: 'Flinke Finger',
            NIMBLE_FINGERS_DESCRIPTION: 'Du durchsuchst Container 50% schneller.',
            
            SAUSAGE_FINGERS_TITLE: 'Fett Finger',
            SAUSAGE_FINGERS_DESCRIPTION: 'Du durchsuchst Container 50% langsamer.',
            
            HEAVY_WEIGHT_TITLE: 'Schwergewicht',
            HEAVY_WEIGHT_DESCRIPTION: 'Du wirst langsamer betrunken.',
            
            LIGHT_WEIGHT_TITLE: 'Fliegengewicht',
            LIGHT_WEIGHT_DESCRIPTION: 'Du wirst schneller betrunken.',
            
            LIGTH_STEP_TITLE: 'Leichte Füße',
            LIGTH_STEP_DESCRIPTION: 'Du machst 30% weniger geräuche beim bewegen.',
            
            HEAVY_STEP_TITLE: 'Schwere Füße',
            HEAVY_STEP_DESCRIPTION: 'Du machst 30% mehr geräuche beim bewegen.'            
        }
    }
};
