<template>
    <b-container class="first-container mb-5">
        <b-row>
            <b-col sm="12">
                <b-alert
                    :show="alert.dismissSecs"
                    dismissible
                    fade
                    variant="primary"
                    @dismissed="alert.dismissCountDown = 0"
                    @dismiss-count-down="countDownChanged"
                >
                    <b-icon icon="exclamation-circle" variant="danger" font-scale="1.5" class="mr-2"></b-icon>
                    <strong>WARNING:</strong> Almost everything is subject to change.
                    <small>Current Verion: EA BUILD 550</small>
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
                        {{ $t('DESIGNER.CARD.TRUSTER_TITLE') }}
                    </b-card-title>

                    <div class="forwardThruster">
                        <div class="h3">Forward Thruster</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'forwardThruster_' + i">
                            <b-col sm="8">{{ thruster.title }} </b-col>
                            <b-col sm="4">
                                <b-form-input type="number" v-model="thrusters[i].forwardCount"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                    <hr />
                    <div class="backwardThruster">
                        <div class="h3">Backward Thruster</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'backwardThruster_' + i">
                            <b-col sm="8">{{ thruster.title }} </b-col>
                            <b-col sm="4">
                                <b-form-input type="number" v-model="thrusters[i].backwardCount"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                    <hr />
                    <div class="maneuverThruster">
                        <div class="h3">Maneuver Thruster</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'maneuverThruster_' + i">
                            <b-col sm="8">{{ thruster.title }} </b-col>
                            <b-col sm="4">
                                <b-form-input type="number" v-model="thrusters[i].maneuverCount"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                </b-card>
            </b-col>

            <b-col lg="4" class="no-select">
                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center p-2 title-rounded">
                                {{ $t('DESIGNER.CARD.PROP_FUEL_ENERGY_TITLE') }}
                            </b-card-title>

                            <div class="propList">
                                <div class="h3">Propellant Tank</div>
                                <b-row v-for="(tank, i) in propellantTanks" :key="'propellantTank_' + i">
                                    <b-col sm="8">{{ tank.title }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="tank.count"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <hr />
                            <div class="fuelList">
                                <div class="h3">Fuel Chamber</div>
                                <b-row v-for="(chamber, i) in fuelChambers" :key="'chamber_' + i">
                                    <b-col sm="8">{{ chamber.title }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="chamber.count"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <hr />
                            <div class="genList">
                                <div class="h3">Generator</div>
                                <b-row v-for="(generator, i) in generators" :key="'generator_' + i">
                                    <b-col sm="8">{{ generator.title }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="generator.count"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <hr />
                            <div class="batList">
                                <div class="h3">Battery</div>
                                <b-row v-for="(battery, i) in batteries" :key="'battery_' + i">
                                    <b-col sm="8">{{ battery.title }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="battery.count"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center p-2 title-rounded">
                                {{ $t('DESIGNER.CARD.WEIGHT_MISC_TITLE') }}
                            </b-card-title>

                            <div class="propList">
                                <b-row>
                                    <b-col sm="8">Overall weight in tons </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="shipMass"></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col sm="8">Number of Ore Crates </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="oreCrates"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center p-2 title-rounded">
                                {{ $t('DESIGNER.CARD.TOOLS_TITLE') }}
                            </b-card-title>

                            <div class="toolsList">
                                <div v-for="(tool, i) in tools" :key="'tool_' + i">
                                    <b-row v-if="tool.title != 'Ore Collector'">
                                        <b-col sm="8">{{ tool.title }} </b-col>
                                        <b-col sm="4">
                                            <b-form-input type="number" v-model="tool.count"></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row v-if="tool.title == 'Ore Collector'">
                                        <b-col sm="8">{{ tool.title }} </b-col>
                                        <b-col sm="4">
                                            <b-form-input type="number" v-model="tool.count"></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row v-if="tool.title == 'Ore Collector' && tool.count >= 1">
                                        <b-col sm="8">{{ tool.title }} Power </b-col>
                                        <b-col sm="4">
                                            <b-form-input type="number" v-model="tool.energy"></b-form-input>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>

            <b-col lg="4" class="no-select mb-4">
                <b-card class="shadow">
                    <b-card-title class="text-center p-2 title-rounded">
                        {{ $t('DESIGNER.CARD.ENDRESAULT_TITLE') }}
                    </b-card-title>

                    <div class="resList">
                        Total Forward Thrust: {{ totalForwardThrust }} <br />
                        Total Backward Thrust: {{ totalBackwardThrust }} <br />
                        Total Maneuver Thrust: {{ totalManeuverThrust }} <br /><br />

                        Total Propellant: {{ totalPropellant }} <br />
                        Total Fuel: {{ totalFuelRod }} <br />
                        Total Energy Output: {{ totalEnergyOutput }} e/s<br />
                        Total Fuel Consumption(Gen): {{ totalFuelInput }} <br />
                        Total Heat: {{ totalHeat }} <br /><br />

                        Max Speed: {{ maxSpeed }} m/s<br />
                        Max Speed (half Crates): {{ maxSpeedHalf }} m/s<br />
                        Max Speed (Full Crates): {{ maxSpeedFull }} m/s<br />
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            thrusters: [
                {
                    title: 'Box Thruster T1',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 210,
                    propellant: 31,
                    thrust: 500000,
                    mass: 18884
                },
                {
                    title: 'Box Thruster T2',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 183.6,
                    propellant: 29.97,
                    thrust: 550000,
                    mass: 18527
                },
                {
                    title: 'Box Thruster T3',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 297,
                    propellant: 39.2,
                    thrust: 650000,
                    mass: 18527
                },
                {
                    title: 'Triangle Thruster T1',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 96,
                    propellant: 27.8,
                    thrust: 300000,
                    mass: 11515
                },
                {
                    title: 'Triangle Thruster T2',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 84.2,
                    propellant: 24.3,
                    thrust: 330000,
                    mass: 11515
                },
                {
                    title: 'Triangle Thruster T3',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 136.1,
                    propellant: 35.2,
                    thrust: 390000,
                    mass: 11515
                },
                {
                    title: 'Maneuver Thruster T1',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 40,
                    propellant: 17.5,
                    thrust: 40000,
                    mass: 11515
                },
                {
                    title: 'Maneuver Thruster T2',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 36,
                    propellant: 15.7,
                    thrust: 44000,
                    mass: 11515
                },
                {
                    title: 'Maneuver Thruster T3',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 60,
                    propellant: 21,
                    thrust: 52000,
                    mass: 11515
                }
            ],
            propellantTanks: [
                {
                    title: 'Small Propellant Tank',
                    count: 0,
                    propellant: 1000000,
                    mass: 4638
                },
                {
                    title: 'Medium Propellant Tank',
                    count: 0,
                    propellant: 4000000,
                    mass: 10984
                },
                {
                    title: 'Large Propellant Tank',
                    count: 0,
                    propellant: 9000000,
                    mass: 24413
                }
            ],
            fuelChambers: [
                {
                    title: 'Fuel Chamber T1',
                    count: 0,
                    fuel: 300000,
                    mass: 13842
                },
                {
                    title: 'Fuel Chamber T2',
                    count: 0,
                    fuel: 300000,
                    mass: 14135
                }
            ],
            generators: [
                {
                    title: 'Generator Unit T1',
                    count: 0,
                    output: 1000,
                    input: 25,
                    heat: 100,
                    mass: 4525
                },
                {
                    title: 'Generator Unit T2',
                    count: 0,
                    output: 1000,
                    input: 25,
                    heat: 90,
                    mass: 4495
                },
                {
                    title: 'Generator Unit T2',
                    count: 0,
                    output: 1250,
                    input: 25,
                    heat: 80,
                    mass: 4081
                }
            ],
            batteries: [
                {
                    title: 'Small Battery',
                    count: 0,
                    energy: 10000,
                    mass: 3236
                }
            ],
            tools: [
                {
                    title: 'Mining Laser',
                    count: 0,
                    energy: 6000,
                    mass: 2155
                },
                {
                    title: 'Ore Collector',
                    count: 0,
                    energy: 1000,
                    mass: 2159
                },
                {
                    title: 'Material Point Scanner',
                    count: 0,
                    energy: 300,
                    mass: 1569
                },
                {
                    title: 'Laser Designator',
                    count: 0,
                    energy: 0,
                    mass: 500
                },
                {
                    title: 'Rangefinder',
                    count: 0,
                    energy: 1,
                    mass: 282
                }
            ],
            shipMass: 0,
            oreCrates: 0,
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

    computed: {
        totalForwardThrust() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].thrust * this.thrusters[i].forwardCount;
            }
            return res;
        },

        totalBackwardThrust() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].thrust * this.thrusters[i].backwardCount;
            }
            return res;
        },

        totalManeuverThrust() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].thrust * this.thrusters[i].maneuverCount;
            }
            return res;
        },

        totalPropellant() {
            let res = 0;
            for (let i = 0; i < this.propellantTanks.length; i++) {
                res += this.propellantTanks[i].propellant * this.propellantTanks[i].count;
            }
            return res;
        },

        totalFuelRod() {
            let res = 0;
            for (let i = 0; i < this.fuelChambers.length; i++) {
                res += this.fuelChambers[i].fuel * this.fuelChambers[i].count;
            }
            return res;
        },

        totalEnergyOutput() {
            let res = 0;
            for (let i = 0; i < this.generators.length; i++) {
                res += this.generators[i].output * this.generators[i].count;
            }
            return res;
        },

        totalHeat() {
            let res = 0;
            for (let i = 0; i < this.generators.length; i++) {
                res += this.generators[i].heat * this.generators[i].count;
            }
            return res;
        },

        totalFuelInput() {
            let res = 0;
            for (let i = 0; i < this.generators.length; i++) {
                res += this.generators[i].input * this.generators[i].count;
            }
            return res;
        },

        maxSpeed() {
            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / this.shipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / this.shipMass, 8.0), 2);

            if (this.totalForwardThrust == 0) {
                return (a - b).toFixed(2);
            } else {
                return (a - b + 4.625).toFixed(2);
            }
        },

        maxSpeedHalf() {
            let oreCrateMass = this.oreCrates * 14;
            let totalShipMass = oreCrateMass + new Number(this.shipMass);

            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0), 2);

            if (this.totalForwardThrust == 0) {
                return (a - b).toFixed(2);
            } else {
                return (a - b + 4.625).toFixed(2);
            }
        },

        maxSpeedFull() {
            let oreCrateMass = this.oreCrates * 26;
            let totalShipMass = oreCrateMass + new Number(this.shipMass);

            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0), 2);

            if (this.totalForwardThrust == 0) {
                return (a - b).toFixed(2);
            } else {
                return (a - b + 4.625).toFixed(2);
            }
        }
    },

    mounted() {
        if (typeof window !== 'undefined') {
            this.isDesktop = window.innerWidth > 576;
        }
    },

    methods: {
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
</style>
