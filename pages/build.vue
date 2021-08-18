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
                        <div class="h3">{{ $t('DESIGNER.THRUSTER.FORWARD_THRUSTER') }}</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'forwardThruster_' + i">
                            <b-col sm="8">{{ $t(thruster.title) }}</b-col>
                            <b-col sm="4">
                                <b-form-input type="number" v-model="thrusters[i].forwardCount" min="0"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                    <hr />
                    <div class="backwardThruster">
                        <div class="h3">{{ $t('DESIGNER.THRUSTER.BACKWARD_THRUSTER') }}</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'backwardThruster_' + i">
                            <b-col
                                sm="8"
                                v-if="
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_BODY' &&
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_RING'
                                "
                                >{{ $t(thruster.title) }}</b-col
                            >
                            <b-col
                                sm="4"
                                v-if="
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_BODY' &&
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_RING'
                                "
                            >
                                <b-form-input type="number" v-model="thrusters[i].backwardCount" min="0"></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                    <hr />
                    <div class="maneuverThruster">
                        <div class="h3">{{ $t('DESIGNER.THRUSTER.MANEUVER_THRUSTER') }}</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'maneuverThruster_' + i">
                            <b-col
                                sm="8"
                                v-if="
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_BODY' &&
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_RING'
                                "
                                >{{ $t(thruster.title) }}</b-col
                            >
                            <b-col
                                sm="4"
                                v-if="
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_BODY' &&
                                    thruster.title != 'DESIGNER.THRUSTER.PLASMA_RING'
                                "
                            >
                                <b-form-input type="number" v-model="thrusters[i].maneuverCount" min="0"></b-form-input>
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
                                <div class="h3">{{ $t('DESIGNER.PROPELLANT.PROPELLANT_HEADLINE') }}</div>
                                <b-row v-for="(tank, i) in propellantTanks" :key="'propellantTank_' + i">
                                    <b-col sm="8">{{ $t(tank.title) }}</b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="tank.count" min="0"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <hr />
                            <div class="fuelList">
                                <div class="h3">{{ $t('DESIGNER.FUEL_CHAMBER.FUEL_CHAMBER_HEADLINE') }}</div>
                                <b-row v-for="(chamber, i) in fuelChambers" :key="'chamber_' + i">
                                    <b-col sm="8">{{ $t(chamber.title) }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="chamber.count" min="0"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <hr />
                            <div class="genList">
                                <div class="h3">{{ $t('DESIGNER.GENERATOR.GENERATOR_HEADLINE') }}</div>
                                <b-row v-for="(generator, i) in generators" :key="'generator_' + i">
                                    <b-col sm="8">{{ $t(generator.title) }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="generator.count" min="0"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                            <hr />
                            <div class="batList">
                                <div class="h3">{{ $t('DESIGNER.BATTERY.BATTERY_HEADLINE') }}</div>
                                <b-row v-for="(battery, i) in batteries" :key="'battery_' + i">
                                    <b-col sm="8">{{ $t(battery.title) }} </b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="battery.count" min="0"></b-form-input>
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
                                    <b-col sm="8">{{ $t('DESIGNER.WEIGHT_CARGO.WEIGHT') }}</b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="shipMass" min="0"></b-form-input>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col sm="8">{{ $t('DESIGNER.WEIGHT_CARGO.CRATES') }}</b-col>
                                    <b-col sm="4">
                                        <b-form-input type="number" v-model="oreCrates" min="0"></b-form-input>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>

                <!-- <b-row class="mb-4">
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
                                            <b-form-input type="number" v-model="tool.count" min="0"></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row v-if="tool.title == 'Ore Collector'">
                                        <b-col sm="8">{{ tool.title }} </b-col>
                                        <b-col sm="4">
                                            <b-form-input type="number" v-model="tool.count" min="0"></b-form-input>
                                        </b-col>
                                    </b-row>
                                    <b-row v-if="tool.title == 'Ore Collector' && tool.count >= 1">
                                        <b-col sm="8">{{ tool.title }} Power </b-col>
                                        <b-col sm="4">
                                            <b-form-input type="number" v-model="tool.energy" min="0"></b-form-input>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                </b-row> -->
            </b-col>

            <b-col lg="4" class="no-select mb-4">
                <b-card class="shadow">
                    <b-card-title class="text-center p-2 title-rounded">
                        {{ $t('DESIGNER.CARD.CALCULATION_TITLE') }}
                    </b-card-title>

                    <div class="resList">
                        <div class="h3">{{ $t('DESIGNER.CALCULATION.SPEED') }}</div>

                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FORWARD_SPEED') }}</b-col>
                            <b-col sm="4">{{ maxSpeed }} m/s</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.BACKWARD_SPEED') }}</b-col>
                            <b-col sm="4">{{ maxSpeedBackwards }} m/s</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FORWARD_SPEED_HALF') }}</b-col>
                            <b-col sm="4">{{ maxSpeedHalf }} m/s</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FORWARD_SPEED_FULL') }}</b-col>
                            <b-col sm="4">{{ maxSpeedFull }} m/s</b-col>
                        </b-row>
                        <hr />

                        <div class="h3">
                            {{ $t('DESIGNER.CALCULATION.FLIGHT_TIME_HEAD') }}
                            <small class="text-muted">{{ $t('DESIGNER.CALCULATION.FLIGHT_TIME_SUB') }}</small>
                        </div>
                        <!-- <b-row>
                            <b-col sm="8">Forward Flight Time: </b-col>
                            <b-col sm="4">{{ forwardFlightTime }} h</b-col>
                        </b-row> -->
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FLIGHT_TIME') }}</b-col>
                            <b-col sm="4">
                                {{ forwardManeuverFlightTime }} h
                                <span class="float-right">
                                    <b-icon
                                        id="flightTimeTooltip"
                                        icon="ExclamationTriangle"
                                        class="text-primary"
                                    ></b-icon>
                                </span>
                                <b-tooltip
                                    v-if="isDesktop"
                                    target="flightTimeTooltip"
                                    placement="left"
                                    boundary="viewport"
                                    noninteractive
                                    :delay="tooltip.delay"
                                >
                                    <p class="m-0 p-1">
                                        {{ $t('DESIGNER.CALCULATION.FLIGHT_TIME_TOOLTIP') }}
                                    </p>
                                </b-tooltip>
                            </b-col>
                        </b-row>
                        <hr />
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FLIGHT_LENGTH') }}</b-col>
                            <b-col sm="4">{{ forwardFlightLength }} km</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FLIGHT_LENGTH_HALF') }}</b-col>
                            <b-col sm="4">{{ forwardFlightLengthHalf }} km</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FLIGHT_LENGTH_FULL') }}</b-col>
                            <b-col sm="4">{{ forwardFlightLengthFull }} km</b-col>
                        </b-row>
                        <hr />

                        <div class="h3">{{ $t('DESIGNER.CALCULATION.THRUST') }}</div>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.FORWARD_THRUST') }}</b-col>
                            <b-col sm="4">{{ totalForwardThrust }}</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.BACKWARD_THRUST') }}</b-col>
                            <b-col sm="4">{{ totalBackwardThrust }}</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.MANEUVER_THRUST') }}</b-col>
                            <b-col sm="4">{{ totalManeuverThrust }}</b-col>
                        </b-row>
                        <hr />

                        <div class="h3">{{ $t('DESIGNER.CALCULATION.FUEL_ENERGY') }}</div>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.TOTAL_PROPELLANT') }}</b-col>
                            <b-col sm="4">{{ totalPropellant }}</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">{{ $t('DESIGNER.CALCULATION.TOTAL_FUEL') }}</b-col>
                            <b-col sm="4">{{ totalFuelRod }}</b-col>
                        </b-row>
                        <!-- <b-row>
                            <b-col sm="8">Total Energy Output: </b-col>
                            <b-col sm="4">{{ totalEnergyOutput }} e/s</b-col>
                        </b-row>
                        <b-row>
                            <b-col sm="8">Total Fuel Consumption: </b-col>
                            <b-col sm="4">{{ totalGenFuelInput }} /s</b-col>
                        </b-row> -->
                        <b-row>
                            <b-col sm="8"
                                >{{ $t('DESIGNER.CALCULATION.TOTAL_HEAT_HEAD') }}
                                <small class="text-muted">{{ $t('DESIGNER.CALCULATION.TOTAL_HEAT_SUB') }}</small>
                            </b-col>
                            <b-col sm="4">
                                {{ totalHeat }} °C
                                <span class="float-right">
                                    <b-icon
                                        id="totalHeatTooltip"
                                        icon="ExclamationTriangle"
                                        class="text-primary"
                                    ></b-icon>
                                </span>
                                <b-tooltip
                                    v-if="isDesktop"
                                    target="totalHeatTooltip"
                                    placement="left"
                                    boundary="viewport"
                                    noninteractive
                                    :delay="tooltip.delay"
                                >
                                    <p class="m-0 p-1">
                                        {{ $t('DESIGNER.CALCULATION.TOTAL_HEAT_TOOLTIP') }}
                                    </p>
                                </b-tooltip>
                            </b-col>
                        </b-row>
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
                    title: 'DESIGNER.THRUSTER.BOX_T1',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 210,
                    propellant: 31,
                    thrust: 500000,
                    mass: 18884
                },
                {
                    title: 'DESIGNER.THRUSTER.BOX_T2',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 183.6,
                    propellant: 29.97,
                    thrust: 550000,
                    mass: 18527
                },
                {
                    title: 'DESIGNER.THRUSTER.BOX_T3',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 297,
                    propellant: 39.2,
                    thrust: 650000,
                    mass: 18527
                },
                {
                    title: 'DESIGNER.THRUSTER.TRIANGLE_T1',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 96,
                    propellant: 27.8,
                    thrust: 300000,
                    mass: 11515
                },
                {
                    title: 'DESIGNER.THRUSTER.TRIANGLE_T2',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 84.2,
                    propellant: 24.3,
                    thrust: 330000,
                    mass: 11515
                },
                {
                    title: 'DESIGNER.THRUSTER.TRIANGLE_T3',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 136.1,
                    propellant: 35.2,
                    thrust: 390000,
                    mass: 11515
                },
                {
                    title: 'DESIGNER.THRUSTER.MANEUVER_T1',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 40,
                    propellant: 17.5,
                    thrust: 40000,
                    mass: 11515
                },
                {
                    title: 'DESIGNER.THRUSTER.MANEUVER_T2',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 36,
                    propellant: 15.7,
                    thrust: 44000,
                    mass: 11515
                },
                {
                    title: 'DESIGNER.THRUSTER.MANEUVER_T3',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 60,
                    propellant: 21,
                    thrust: 52000,
                    mass: 11515
                },
                {
                    title: 'DESIGNER.THRUSTER.PLASMA_BODY',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 913.3,
                    propellant: 290,
                    thrust: 4000000,
                    mass: 687479
                },
                {
                    title: 'DESIGNER.THRUSTER.PLASMA_RING',
                    forwardCount: 0,
                    backwardCount: 0,
                    maneuverCount: 0,
                    energy: 880,
                    propellant: 386,
                    thrust: 7000000,
                    mass: 687479
                }
            ],
            propellantTanks: [
                {
                    title: 'DESIGNER.PROPELLANT.PROPELLANT_T1',
                    count: 0,
                    propellant: 1000000,
                    mass: 4638
                },
                {
                    title: 'DESIGNER.PROPELLANT.PROPELLANT_T2',
                    count: 0,
                    propellant: 4000000,
                    mass: 10984
                },
                {
                    title: 'DESIGNER.PROPELLANT.PROPELLANT_T3',
                    count: 0,
                    propellant: 9000000,
                    mass: 24413
                }
            ],
            fuelChambers: [
                {
                    title: 'DESIGNER.FUEL_CHAMBER.FUEL_CHAMBER_T1',
                    count: 0,
                    fuel: 300000,
                    input: 135,
                    output: 75,
                    mass: 13842
                },
                {
                    title: 'DESIGNER.FUEL_CHAMBER.FUEL_CHAMBER_T2',
                    count: 0,
                    fuel: 300000,
                    input: 60,
                    output: 75,
                    mass: 14135
                },
                {
                    title: 'DESIGNER.FUEL_CHAMBER.FUEL_CHAMBER_T3',
                    count: 0,
                    fuel: 300000,
                    input: 60,
                    output: 75,
                    mass: 14135
                }
            ],
            generators: [
                {
                    title: 'DESIGNER.GENERATOR.GENERATOR_T1',
                    count: 0,
                    output: 1000,
                    input: 25,
                    heat: 100,
                    mass: 4525
                },
                {
                    title: 'DESIGNER.GENERATOR.GENERATOR_T2',
                    count: 0,
                    output: 1000,
                    input: 25,
                    heat: 90,
                    mass: 4495
                },
                {
                    title: 'DESIGNER.GENERATOR.GENERATOR_T3',
                    count: 0,
                    output: 1250,
                    input: 25,
                    heat: 80,
                    mass: 4081
                }
            ],
            batteries: [
                {
                    title: 'DESIGNER.BATTERY.BATTERY_T1',
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
                    show: 100,
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
        // --------------------------------------------------------------------------------------------
        // ---- THRUST CALCULATIONS
        // --------------------------------------------------------------------------------------------
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

        // --------------------------------------------------------------------------------------------
        // ---- FUEL, PROP, ENERGY CALCULATIONS
        // --------------------------------------------------------------------------------------------
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

        totalHeat() {
            let res = 0;
            for (let i = 0; i < this.generators.length; i++) {
                res += this.generators[i].heat * this.generators[i].count;
                if (this.generators[i].count > 1) {
                    res += this.generators[i].count * 25;
                }
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

        totalGenFuelInput() {
            let res = 0;
            for (let i = 0; i < this.generators.length; i++) {
                res += this.generators[i].input * this.generators[i].count;
            }
            return res;
        },

        totalUsedPropellantThrusterF() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].propellant * this.thrusters[i].forwardCount;
            }

            return res;
        },

        totalUsedPropellantThrusterFM() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].propellant * this.thrusters[i].forwardCount;
                res += (this.thrusters[i].propellant * this.thrusters[i].maneuverCount) / 2;
            }

            return res;
        },

        totalUsedEnergyThrusterF() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].energy * this.thrusters[i].forwardCount;
            }

            return res;
        },

        totalUsedEnergyThrusterFM() {
            let res = 0;
            for (let i = 0; i < this.thrusters.length; i++) {
                res += this.thrusters[i].energy * this.thrusters[i].forwardCount;
                res += (this.thrusters[i].energy * this.thrusters[i].maneuverCount) / 2;
            }

            return res;
        },

        // --------------------------------------------------------------------------------------------
        // ---- Flight Tmes CALCULATIONS
        // --------------------------------------------------------------------------------------------
        forwardFlightTime() {
            let res = (this.totalPropellant / this.totalUsedPropellantThrusterF / 60 / 60).toFixed(2);
            if (isNaN(res)) {
                return 0;
            } else {
                return res;
            }
        },

        forwardManeuverFlightTime() {
            let res = (this.totalPropellant / this.totalUsedPropellantThrusterFM / 60 / 60).toFixed(2);
            if (isNaN(res)) {
                return 0;
            } else {
                return res;
            }
        },

        forwardFlightLength() {
            let res = (this.forwardManeuverFlightTime * 60 * 60 * this.maxSpeed) / 1000;
            if (isNaN(res)) {
                return 0;
            } else {
                return Math.round(res);
            }
        },

        forwardFlightLengthHalf() {
            let res = (this.forwardManeuverFlightTime * 60 * 60 * this.maxSpeedHalf) / 1000;
            if (isNaN(res)) {
                return 0;
            } else {
                return Math.round(res);
            }
        },

        forwardFlightLengthFull() {
            let res = (this.forwardManeuverFlightTime * 60 * 60 * this.maxSpeedFull) / 1000;
            if (isNaN(res)) {
                return 0;
            } else {
                return Math.round(res);
            }
        },

        // --------------------------------------------------------------------------------------------
        // ---- SPEED CALCULATIONS
        // --------------------------------------------------------------------------------------------
        maxSpeed() {
            if (this.totalForwardThrust == 0) return 0;
            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / this.shipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / this.shipMass, 8.0), 2);

            let res = (a - b + 4.625).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                return res;
            }
        },

        maxSpeedHalf() {
            if (this.oreCrates == 0) return 0;
            let oreCrateMass = this.oreCrates * 14;
            let totalShipMass = oreCrateMass + new Number(this.shipMass);

            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0), 2);

            let res = (a - b + 4.625).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                return res;
            }
        },

        maxSpeedFull() {
            if (this.oreCrates == 0) return 0;
            let oreCrateMass = this.oreCrates * 26;
            let totalShipMass = oreCrateMass + new Number(this.shipMass);

            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0), 2);

            let res = (a - b + 4.625).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                return res;
            }
        },

        maxSpeedBackwards() {
            if (this.totalBackwardThrust == 0) return 0;
            let a = 36.96 * Math.min(this.totalBackwardThrust / 1000.0 / this.shipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalBackwardThrust / 1000.0 / this.shipMass, 8.0), 2);

            let res = (a - b + 4.625).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                return res;
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
