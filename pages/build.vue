<template>
    <b-container class="first-container mb-5">
        <b-row>
            <b-col sm="12">
                <b-alert
                    :show="alert.dismissSecs"
                    dismissible
                    fade
                    variant="warning"
                    @dismissed="alert.dismissCountDown = 0"
                    @dismiss-count-down="countDownChanged"
                >
                    <b-icon icon="exclamation-circle" variant="danger" font-scale="1.5" class="mr-2"></b-icon>
                    <strong>WARNING:</strong> Almost everything is subject to change.
                    <small>Current Verion: Closed-Alpha</small>
                    <b-progress
                        variant="danger"
                        :max="alert.dismissSecs"
                        :value="alert.dismissCountDown"
                        height="4px"
                        class="mt-2 ml-4"
                    ></b-progress>
                </b-alert>
            </b-col>
            <b-col lg="4" class="no-select mb-4">
                <b-card class="shadow">
                    <b-card-title class="text-center p-2 title-rounded">
                        {{ $t('BUILDER.CARD.OCCUPATION_TITLE') }}
                    </b-card-title>

                    <div class="occupationList">
                        <div v-for="occupation in occupations" :key="occupation.id">
                            <b-card
                                :id="occupation.id"
                                :class="{ 'occupation-active': occupation.id === acvtivOccupation }"
                                class="occupation"
                                @click="changeOccupation(occupation)"
                            >
                                <b-card-title>
                                    {{ $t('BUILDER.OCCUPATION.' + occupation.title) }}
                                </b-card-title>

                                <b-tooltip
                                    v-if="isDesktop"
                                    :target="occupation.id"
                                    placement="right"
                                    boundary="viewport"
                                    noninteractive
                                    :delay="tooltip.delay"
                                >
                                    <p class="m-0 p-1">{{ $t('BUILDER.OCCUPATION.' + occupation.description) }}</p>
                                </b-tooltip>

                                <b-card-text>
                                    <span class="small text-secondary m-0 pb-2">
                                        {{ $t('BUILDER.CARD.OCCUPATION_BENEFIT') }}:
                                        {{ $t('BUILDER.OCCUPATION.' + occupation.benefit) }}
                                    </span>
                                    <b-badge v-if="occupation.perkType == 'neutral'" class="float-right">
                                        {{ $t('BUILDER.CARD.PERK_POINTS') }}: {{ occupation.perkPoints }}
                                    </b-badge>
                                    <b-badge
                                        v-if="occupation.perkType == 'positive'"
                                        class="float-right"
                                        variant="success"
                                    >
                                        {{ $t('BUILDER.CARD.PERK_POINTS') }}: +{{ occupation.perkPoints }}
                                    </b-badge>
                                    <b-badge
                                        v-if="occupation.perkType == 'negative'"
                                        class="float-right"
                                        variant="danger"
                                    >
                                        {{ $t('BUILDER.CARD.PERK_POINTS') }}: -{{ occupation.perkPoints }}
                                    </b-badge>
                                </b-card-text>
                            </b-card>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" class="no-select">
                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center p-2 title-rounded">
                                {{ $t('BUILDER.CARD.CHARACTER_DATA_TITLE') }}
                            </b-card-title>

                            <h3 class="section">{{ $t('BUILDER.CARD.CHARACTER_DATA_ATTRIBUTES_TITLE') }}</h3>
                            <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_ATTRIBUTES_AGILITY') }}</span>
                            <b-progress
                                :value="character.attributes.agility"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_ATTRIBUTES_CHARISMA') }}</span>
                            <b-progress
                                :value="character.attributes.charisma"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_ATTRIBUTES_ENDURANCE') }}</span>
                            <b-progress
                                :value="character.attributes.endurance"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE') }}</span>
                            <b-progress
                                :value="character.attributes.intelligence"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_ATTRIBUTES_STRENGTH') }}</span>
                            <b-progress
                                :value="character.attributes.strength"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>

                            <hr />
                            <h3 class="section">{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_TITLE') }}</h3>
                            <div class="d-flex justify-content-between">
                                <div class="flex-fill p-1">
                                    <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_COOKING') }}</span>
                                    <b-progress
                                        :value="character.skills.cooking"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_FARMING') }}</span>
                                    <b-progress
                                        :value="character.skills.farming"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_MECHANIC') }}</span>
                                    <b-progress
                                        :value="character.skills.mechanic"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                </div>
                                <div class="flex-fill p-1">
                                    <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_CRAFTING') }}</span>
                                    <b-progress
                                        :value="character.skills.crafting"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_LOCKPICKING') }}</span>
                                    <b-progress
                                        :value="character.skills.lockpicking"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>{{ $t('BUILDER.CARD.CHARACTER_DATA_SKILLS_MEDICAL') }}</span>
                                    <b-progress
                                        :value="character.skills.medical"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center p-2 title-rounded">
                                {{ $t('BUILDER.CARD.PERK_POINTS') }}: {{ perkPoints }}
                            </b-card-title>
                            <p class="small pb-1">
                                {{ $t('BUILDER.CARD.PERK_POINTS_DESCRIPTION') }}
                            </p>
                            <b-button variant="secondary" @click="resetBuild">
                                <b-icon icon="gear"></b-icon> {{ $t('BUILDER.CARD.PERK_POINTS_RESET_BUTTON') }}
                            </b-button>
                            <b-button v-if="perkPoints >= 0" class="float-right" variant="success" @click="saveBuild">
                                <b-icon icon="clipboard-plus"></b-icon> {{ $t('BUILDER.CARD.PERK_POINTS_SAVE_BUTTON') }}
                            </b-button>
                            <b-button v-if="perkPoints < 0" class="float-right" variant="primary" disabled>
                                <b-icon icon="clipboard-plus"></b-icon> {{ $t('BUILDER.CARD.PERK_POINTS_SAVE_BUTTON') }}
                            </b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="4" class="no-select mb-4">
                <b-card class="shadow">
                    <b-card-title class="text-center p-2 title-rounded">
                        {{ $t('BUILDER.CARD.PERK_SELECTION_TITLE') }}
                    </b-card-title>
                    <div class="perkList">
                        <div v-for="perk in perks" :key="perk.id">
                            <b-card
                                :id="perk.id"
                                :class="{ 'perk-active': activePerks.includes(perk.id) }"
                                class="perk mb-1"
                                body-class="pt-2 pb-2 pl-3 pr-3"
                                @click="togglePerk(perk)"
                            >
                                <div class="d-flex justify-content-between">
                                    <div class="flex-grow-1 font-weight-bold">
                                        {{ $t('BUILDER.PERK.' + perk.title) }}
                                    </div>
                                    <div class="mr-3">
                                        <b-badge>{{ $t('BUILDER.CARD.' + perk.type) }}</b-badge>
                                    </div>
                                    <div>
                                        <b-badge v-if="perk.perkType == 'positive'" variant="success">
                                            {{ $t('BUILDER.CARD.PERK_SELECTION_COST') }}: +{{ perk.perkPoints }}
                                        </b-badge>
                                        <b-badge v-if="perk.perkType == 'negative'" variant="danger">
                                            {{ $t('BUILDER.CARD.PERK_SELECTION_COST') }}: -{{ perk.perkPoints }}
                                        </b-badge>
                                    </div>
                                </div>
                                <p class="m-0 p-1 small text-secondary">{{ $t('BUILDER.PERK.' + perk.description) }}</p>
                            </b-card>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-card class="shadow no-select">
                    <b-button v-b-toggle:extendedStats block variant="outline-secondary">
                        <span class="h5 when-open">
                            {{ $t('BUILDER.CARD.EXTENDED_STATS_BUTTON_CLOSE') }}
                        </span>
                        <span class="h5 when-closed">
                            {{ $t('BUILDER.CARD.EXTENDED_STATS_BUTTON_OPEN') }}
                        </span>
                        <br />
                        <small class="font-weight-light">
                            {{ $t('BUILDER.CARD.EXTENDED_STATS_BUTTON_WIP') }}
                        </small>
                    </b-button>

                    <b-collapse id="extendedStats" class="mt-3" accordion="extendedStats" role="tabpanel">
                        <div v-for="activeStat in activeStats" :key="activeStat" class="pl-2">
                            <b-badge class="text-monospace p-2 mt-2">{{ activeStat }}</b-badge>
                        </div>
                    </b-collapse>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import occupations from '~/assets/data/player/occupations.json';
import perks from '~/assets/data/player/perks.json';

export default {
    data() {
        return {
            perkPoints: 0,
            acvtivOccupation: '1',
            activePerks: [],
            activeStats: [],
            character: {
                attributes: {
                    agility: 4,
                    charisma: 4,
                    endurance: 4,
                    intelligence: 4,
                    strength: 4
                },
                skills: {
                    cooking: 10,
                    farming: 10,
                    mechanic: 10,
                    crafting: 10,
                    lockpicking: 10,
                    medical: 10
                }
            },
            occupations,
            perks,
            tooltip: {
                delay: {
                    show: 500,
                    hide: 10
                }
            },
            alert: {
                dismissSecs: 8,
                dismissCountDown: 8
            },
            isDesktop: false
        };
    },

    mounted() {
        if (typeof window !== 'undefined') {
            this.isDesktop = window.innerWidth > 576;
        }

        if (this.$route.query.b) {
            const codec = require('json-url')('lzw');
            codec.decompress(this.$route.query.b).then((resault) => {
                if (resault.v !== 1) return;

                this.activePerks = resault.perks;
                this.acvtivOccupation = resault.occupation;

                // Add Perk Stats
                resault.perks.forEach((perk) => {
                    const obj = this.perks.filter((p) => p.id === perk);
                    this.addStat(obj[0]);
                });

                this.calculatePoints();
                this.calculateAttributes();
                this.calculateSkills();
            });
        } else {
            this.calculatePoints();
        }
    },

    methods: {
        changeOccupation(target) {
            this.acvtivOccupation = target.id;
            this.calculatePoints();
            this.calculateAttributes();
            this.calculateSkills();
            this.compressBuild();
        },

        togglePerk(target) {
            if (this.activePerks.includes(target.id)) {
                this.activePerks = this.activePerks.filter((e) => e !== target.id);
            } else {
                this.activePerks.push(target.id);
            }

            this.addStat(target);
            this.calculatePoints();
            this.calculateAttributes();
            this.calculateSkills();
            this.compressBuild();
        },

        addStat(target) {
            // Add stats
            if (target.effect.stat !== '') {
                if (this.activeStats.includes(target.effect.stat)) {
                    this.activeStats = this.activeStats.filter((e) => e !== target.effect.stat);
                } else {
                    this.activeStats.push(target.effect.stat);
                }
            }
        },

        calculatePoints() {
            // default Perkpoint value
            this.perkPoints = 0;

            // 1st - calc active occupation
            const occupation = this.occupations.filter((o) => o.id === this.acvtivOccupation);
            if (occupation[0].perkType === 'positive') {
                this.perkPoints += occupation[0].perkPoints;
            } else {
                this.perkPoints -= occupation[0].perkPoints;
            }

            // 2nd - calc active perks
            this.activePerks.forEach((perk) => {
                const obj = this.perks.filter((p) => p.id === perk);

                if (obj[0].perkType === 'positive') {
                    this.perkPoints += obj[0].perkPoints;
                } else {
                    this.perkPoints -= obj[0].perkPoints;
                }
            });
        },

        calculateAttributes() {
            // default Attribut Values
            const defaultAttributes = {
                agility: 4,
                charisma: 4,
                endurance: 4,
                intelligence: 4,
                strength: 4
            };
            this.character.attributes = defaultAttributes;

            // 1st - calc active occupation
            const occupation = this.occupations.filter((o) => o.id === this.acvtivOccupation);
            const newAttributes = {
                agility: occupation[0].attributes.agility,
                charisma: occupation[0].attributes.charisma,
                endurance: occupation[0].attributes.endurance,
                intelligence: occupation[0].attributes.intelligence,
                strength: occupation[0].attributes.strength
            };
            this.character.attributes = newAttributes;

            // 2nd - calc active perks
            this.activePerks.forEach((perk) => {
                const obj = this.perks.filter((p) => p.id === perk);

                if (obj[0].effect.attribut.length > 0) {
                    obj[0].effect.attribut.forEach((attr) => {
                        if (attr.type === 'positive') {
                            const key = Object.keys(attr);
                            this.character.attributes[key[0]] += attr[key[0]];
                            if (this.character.attributes[key[0]] < 0) this.character.attributes[key[0]] = 0;
                        } else {
                            const key = Object.keys(attr);
                            this.character.attributes[key[0]] -= attr[key[0]];
                            if (this.character.attributes[key[0]] < 0) this.character.attributes[key[0]] = 0;
                        }
                    });
                }
            });
        },

        calculateSkills() {
            // default Skills value
            const defaultSkills = {
                cooking: 10,
                farming: 10,
                mechanic: 10,
                crafting: 10,
                lockpicking: 10,
                medical: 10
            };
            this.character.skills = defaultSkills;

            // 1st - calc active occupation
            const occupation = this.occupations.filter((o) => o.id === this.acvtivOccupation);
            const newSkills = {
                cooking: occupation[0].skills.cooking,
                farming: occupation[0].skills.farming,
                mechanic: occupation[0].skills.mechanic,
                crafting: occupation[0].skills.crafting,
                lockpicking: occupation[0].skills.lockpicking,
                medical: occupation[0].skills.medical
            };
            this.character.skills = newSkills;

            // 2nd calc active perks
            this.activePerks.forEach((perk) => {
                const obj = this.perks.filter((p) => p.id === perk);

                if (obj[0].effect.skill.length > 0) {
                    obj[0].effect.skill.forEach((skill) => {
                        if (skill.type === 'positive') {
                            const key = Object.keys(skill);
                            this.character.skills[key[0]] += skill[key[0]];
                            if (this.character.skills[key[0]] < 0) this.character.skills[key[0]] = 0;
                        } else {
                            const key = Object.keys(skill);
                            this.character.skills[key[0]] -= skill[key[0]];
                            if (this.character.skills[key[0]] < 0) this.character.skills[key[0]] = 0;
                        }
                    });
                }
            });
        },

        compressBuild() {
            const build = {
                occupation: this.acvtivOccupation,
                perks: this.activePerks,
                v: 1
            };

            const codec = require('json-url')('lzw');
            codec.compress(build).then((resault) => {
                if (this.$route.path[this.$route.path.length - 1] === '/') {
                    this.$router.push({
                        query: { b: resault }
                    });
                } else {
                    this.$router.push({
                        query: { b: resault }
                    });
                }
            });
        },

        saveBuild() {
            const build = {
                occupation: this.acvtivOccupation,
                perks: this.activePerks,
                v: 1
            };

            const codec = require('json-url')('lzw');
            codec.compress(build).then((resault) => {
                const buildUrl = `https://dm.just-look.net/build?b=${resault}`;
                this.$swal({
                    icon: 'success',
                    title: '<i>SAVED!</i>',
                    html: this.$t('BUILDER.CARD.PERK_POINTS_SAVE_TEXT'),
                    confirmButtonText: this.$t('BUILDER.CARD.PERK_POINTS_COPY_CLIPBOARD'),
                    focusConfirm: false
                }).then((res) => {
                    this.$copyText(buildUrl);
                });
            });
        },

        resetBuild() {
            this.acvtivOccupation = '1';
            this.activePerks = [];
            this.activeStats = [];

            this.calculatePoints();
            this.calculateAttributes();
            this.calculateSkills();
            this.compressBuild();
        },

        countDownChanged(dismissCountDown) {
            this.alert.dismissCountDown = dismissCountDown;
        }
    }
};
</script>

<style lang="scss" scoped>
.collapsed > .when-open,
.not-collapsed > .when-closed {
    display: none;
}

.no-select {
    user-select: none;
}

.title-rounded {
    border-bottom: 2px solid #5c6166;
}

.stat {
    border-radius: 5px;
}

.attribute {
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.occupationList {
    max-height: 790px;
    overflow-y: scroll;
    padding-left: 6px;
    direction: rtl;

    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }

    &::-webkit-scrollbar {
        width: 4px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 2px;
    }

    .occupation {
        margin-bottom: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        direction: ltr;
        transition: all 0.2s ease-out;
        margin-right: 4px;

        &.occupation-active {
            background-color: rgba(0, 0, 0, 0.45);
            box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.85);
            margin-right: 0;
        }
    }
}

.perkList {
    max-height: 790px;
    overflow-y: scroll;
    padding-right: 6px;

    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }

    &::-webkit-scrollbar {
        width: 4px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 2px;
    }

    .perk {
        margin-bottom: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.2s ease-out;
        margin-left: 4px;

        &.perk-active {
            background-color: rgba(0, 0, 0, 0.45);
            box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.85);
            margin-left: 0;
        }
    }
}
</style>
