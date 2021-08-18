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
                    <small>Current Version: EA BUILD 556</small>
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

                    <div class="efficiency">
                        <div class="h3">
                            Efficiency
                            <span class="float-right">
                                <b-icon
                                    id="efficiencyTooltip"
                                    icon="ExclamationTriangle"
                                    class="text-primary"
                                    font-scale="0.85"
                                ></b-icon>
                            </span>
                            <b-tooltip
                                v-if="isDesktop"
                                target="efficiencyTooltip"
                                placement="left"
                                boundary="viewport"
                                noninteractive
                                :delay="tooltip.delay"
                            >
                                <p class="m-0 p-1">
                                    {{ $t('DESIGNER.THRUSTER.EFFICIENCY_TOOLTIP') }}
                                </p>
                            </b-tooltip>
                        </div>
                        <b-row>
                            <b-col sm="5">Thruster Efficiency: </b-col>
                            <b-col sm="2 text-primary">{{ efficiency }}%</b-col>
                            <b-col sm="5">
                                <b-form-input
                                    v-model="efficiency"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                ></b-form-input>
                            </b-col>
                        </b-row>
                    </div>
                    <hr />
                    <div class="forwardThruster">
                        <div class="h3">{{ $t('DESIGNER.THRUSTER.FORWARD_THRUSTER') }}</div>
                        <b-row v-for="(thruster, i) in thrusters" :key="'forwardThruster_' + i">
                            <b-col sm="12" v-if="thruster.title == 'DESIGNER.THRUSTER.PLASMA_BODY'"><hr /></b-col>
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
                        <hr />
                        <b-row>
                            <b-col>
                                <b-button class="float-right" variant="success" @click="saveBuild">
                                    <b-icon icon="clipboard-plus"></b-icon> {{ $t('DESIGNER.SAVE.BUTTON') }}
                                </b-button>
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
                    id: 'TB1',
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
                    id: 'TB2',
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
                    id: 'TB3',
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
                    id: 'TT1',
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
                    id: 'TT2',
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
                    id: 'TT3',
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
                    id: 'TM1',
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
                    id: 'TM2',
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
                    id: 'TM3',
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
                    id: 'TPB',
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
                    id: 'TPR',
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
                    id: 'PT1',
                    title: 'DESIGNER.PROPELLANT.PROPELLANT_T1',
                    count: 0,
                    propellant: 1000000,
                    mass: 4638
                },
                {
                    id: 'PT2',
                    title: 'DESIGNER.PROPELLANT.PROPELLANT_T2',
                    count: 0,
                    propellant: 4000000,
                    mass: 10984
                },
                {
                    id: 'PT3',
                    title: 'DESIGNER.PROPELLANT.PROPELLANT_T3',
                    count: 0,
                    propellant: 9000000,
                    mass: 24413
                }
            ],
            fuelChambers: [
                {
                    id: 'FC1',
                    title: 'DESIGNER.FUEL_CHAMBER.FUEL_CHAMBER_T1',
                    count: 0,
                    fuel: 300000,
                    input: 135,
                    output: 75,
                    mass: 13842
                },
                {
                    id: 'FC2',
                    title: 'DESIGNER.FUEL_CHAMBER.FUEL_CHAMBER_T2',
                    count: 0,
                    fuel: 300000,
                    input: 60,
                    output: 75,
                    mass: 14135
                },
                {
                    id: 'FC3',
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
                    id: 'G1',
                    title: 'DESIGNER.GENERATOR.GENERATOR_T1',
                    count: 0,
                    output: 1000,
                    input: 25,
                    heat: 100,
                    mass: 4525
                },
                {
                    id: 'G2',
                    title: 'DESIGNER.GENERATOR.GENERATOR_T2',
                    count: 0,
                    output: 1000,
                    input: 25,
                    heat: 90,
                    mass: 4495
                },
                {
                    id: 'G3',
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
                    id: 'B1',
                    title: 'DESIGNER.BATTERY.BATTERY_T1',
                    count: 0,
                    energy: 10000,
                    mass: 3236
                }
            ],
            tools: [
                {
                    id: 'ML',
                    title: 'DESIGNER.TOOLS.MINING_LASER',
                    count: 0,
                    energy: 6000,
                    mass: 2155
                },
                {
                    id: 'OC',
                    title: 'DESIGNER.TOOLS.ORE_COLLECTOR',
                    count: 0,
                    energy: 1000,
                    mass: 2159
                },
                {
                    id: 'MPS',
                    title: 'DESIGNER.TOOLS.MATERIAL_SCANNER',
                    count: 0,
                    energy: 300,
                    mass: 1569
                },
                {
                    id: 'LD',
                    title: 'DESIGNER.TOOLS.LASER_DESIGNATOR',
                    count: 0,
                    energy: 0,
                    mass: 500
                },
                {
                    id: 'RF',
                    title: 'DESIGNER.TOOLS.RANGEFINDER',
                    count: 0,
                    energy: 1,
                    mass: 282
                }
            ],
            efficiency: 96,
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
                res += this.thrusters[i].thrust * this.thrusters[i].forwardCount * (this.efficiency / 100);
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
            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / this.shipMass, 7.8);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / this.shipMass, 7.8), 2);

            let res = (a - b + 6.4).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                if (res > 150) res = 150;
                return res;
            }
        },

        maxSpeedHalf() {
            if (this.totalForwardThrust == 0) return 0;
            if (this.oreCrates == 0) return 0;

            let oreCrateMass = this.oreCrates * 14;
            let totalShipMass = oreCrateMass + new Number(this.shipMass);

            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0), 2);

            let res = (a - b + 6.4).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                if (res > 150) res = 150;
                return res;
            }
        },

        maxSpeedFull() {
            if (this.totalForwardThrust == 0) return 0;

            if (this.oreCrates == 0) return 0;
            let oreCrateMass = this.oreCrates * 26;
            let totalShipMass = oreCrateMass + new Number(this.shipMass);

            let a = 36.96 * Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalForwardThrust / 1000.0 / totalShipMass, 8.0), 2);

            let res = (a - b + 6.4).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                if (res > 150) res = 150;
                return res;
            }
        },

        maxSpeedBackwards() {
            if (this.totalBackwardThrust == 0) return 0;
            let a = 36.96 * Math.min(this.totalBackwardThrust / 1000.0 / this.shipMass, 8.0);
            let b = 2.375 * Math.pow(Math.min(this.totalBackwardThrust / 1000.0 / this.shipMass, 8.0), 2);

            let res = (a - b + 6.4).toFixed(2);

            if (isNaN(res)) {
                return 0;
            } else {
                if (res > 150) res = 150;
                return res;
            }
        }
    },

    mounted() {
        if (typeof window !== 'undefined') {
            this.isDesktop = window.innerWidth > 576;
        }

        if (this.$route.query.d) {
            const codec = require('json-url')('lzma');
            codec.decompress(this.$route.query.d).then((res) => {
                if (res.v !== 1) return;

                if (res.TB1) {
                    this.thrusters.filter((data) => data.id == 'TB1')[0].forwardCount = res.TB1.F;
                    this.thrusters.filter((data) => data.id == 'TB1')[0].backwardCount = res.TB1.B;
                    this.thrusters.filter((data) => data.id == 'TB1')[0].maneuverCount = res.TB1.M;
                }

                if (res.TB2) {
                    this.thrusters.filter((data) => data.id == 'TB2')[0].forwardCount = res.TB2.F;
                    this.thrusters.filter((data) => data.id == 'TB2')[0].backwardCount = res.TB2.B;
                    this.thrusters.filter((data) => data.id == 'TB2')[0].maneuverCount = res.TB2.M;
                }

                if (res.TB3) {
                    this.thrusters.filter((data) => data.id == 'TB3')[0].forwardCount = res.TB3.F;
                    this.thrusters.filter((data) => data.id == 'TB3')[0].backwardCount = res.TB3.B;
                    this.thrusters.filter((data) => data.id == 'TB3')[0].maneuverCount = res.TB3.M;
                }

                if (res.TT1) {
                    this.thrusters.filter((data) => data.id == 'TT1')[0].forwardCount = res.TT1.F;
                    this.thrusters.filter((data) => data.id == 'TT1')[0].backwardCount = res.TT1.B;
                    this.thrusters.filter((data) => data.id == 'TT1')[0].maneuverCount = res.TT1.M;
                }

                if (res.TT2) {
                    this.thrusters.filter((data) => data.id == 'TT2')[0].forwardCount = res.TT2.F;
                    this.thrusters.filter((data) => data.id == 'TT2')[0].backwardCount = res.TT2.B;
                    this.thrusters.filter((data) => data.id == 'TT2')[0].maneuverCount = res.TT2.M;
                }

                if (res.TT3) {
                    this.thrusters.filter((data) => data.id == 'TT3')[0].forwardCount = res.TT3.F;
                    this.thrusters.filter((data) => data.id == 'TT3')[0].backwardCount = res.TT3.B;
                    this.thrusters.filter((data) => data.id == 'TT3')[0].maneuverCount = res.TT3.M;
                }

                if (res.TM1) {
                    this.thrusters.filter((data) => data.id == 'TM1')[0].forwardCount = res.TM1.F;
                    this.thrusters.filter((data) => data.id == 'TM1')[0].backwardCount = res.TM1.B;
                    this.thrusters.filter((data) => data.id == 'TM1')[0].maneuverCount = res.TM1.M;
                }

                if (res.TM2) {
                    this.thrusters.filter((data) => data.id == 'TM2')[0].forwardCount = res.TM2.F;
                    this.thrusters.filter((data) => data.id == 'TM2')[0].backwardCount = res.TM2.B;
                    this.thrusters.filter((data) => data.id == 'TM2')[0].maneuverCount = res.TM2.M;
                }

                if (res.TM3) {
                    this.thrusters.filter((data) => data.id == 'TM3')[0].forwardCount = res.TM3.F;
                    this.thrusters.filter((data) => data.id == 'TM3')[0].backwardCount = res.TM3.B;
                    this.thrusters.filter((data) => data.id == 'TM3')[0].maneuverCount = res.TM3.M;
                }

                if (res.TPB) {
                    this.thrusters.filter((data) => data.id == 'TPB')[0].forwardCount = res.TPB.F;
                    this.thrusters.filter((data) => data.id == 'TPB')[0].backwardCount = res.TPB.B;
                    this.thrusters.filter((data) => data.id == 'TPB')[0].maneuverCount = res.TPB.M;
                }

                if (res.TPR) {
                    this.thrusters.filter((data) => data.id == 'TPR')[0].forwardCount = res.TPR.F;
                    this.thrusters.filter((data) => data.id == 'TPR')[0].backwardCount = res.TPR.B;
                    this.thrusters.filter((data) => data.id == 'TPR')[0].maneuverCount = res.TPR.M;
                }

                if (res.PT1) {
                    this.propellantTanks.filter((data) => data.id == 'PT1')[0].count = res.PT1;
                }
                if (res.PT2) {
                    this.propellantTanks.filter((data) => data.id == 'PT2')[0].count = res.PT2;
                }
                if (res.PT3) {
                    this.propellantTanks.filter((data) => data.id == 'PT3')[0].count = res.PT3;
                }

                if (res.FC1) {
                    this.fuelChambers.filter((data) => data.id == 'FC1')[0].count = res.FC1;
                }
                if (res.FC2) {
                    this.fuelChambers.filter((data) => data.id == 'FC2')[0].count = res.FC2;
                }
                if (res.FC3) {
                    this.fuelChambers.filter((data) => data.id == 'FC3')[0].count = res.FC3;
                }

                if (res.G1) {
                    this.generators.filter((data) => data.id == 'G1')[0].count = res.G1;
                }
                if (res.G2) {
                    this.generators.filter((data) => data.id == 'G2')[0].count = res.G2;
                }
                if (res.G3) {
                    this.generators.filter((data) => data.id == 'G3')[0].count = res.G3;
                }

                if (res.B1) {
                    this.batteries.filter((data) => data.id == 'B1')[0].count = res.B1;
                }

                if (res.ML) {
                    this.tools.filter((data) => data.id == 'ML')[0].count = res.ML;
                }
                if (res.OC) {
                    this.tools.filter((data) => data.id == 'OC')[0].count = res.OC;
                }
                if (res.MPS) {
                    this.tools.filter((data) => data.id == 'MPS')[0].count = res.MPS;
                }
                if (res.LD) {
                    this.tools.filter((data) => data.id == 'LD')[0].count = res.LD;
                }
                if (res.RF) {
                    this.tools.filter((data) => data.id == 'RF')[0].count = res.RF;
                }

                if (res.MASS) {
                    this.shipMass = res.MASS;
                }
                if (res.CRATES) {
                    this.oreCrates = res.CRATES;
                }
                if (res.EFFI) {
                    this.efficiency = res.EFFI;
                }
            });
        }
    },

    methods: {
        countDownChanged(dismissCountDown) {
            this.alert.dismissCountDown = dismissCountDown;
        },

        saveBuild() {
            let save = {
                v: 1
            };

            for (let i = 0; i < this.thrusters.length; i++) {
                if (this.thrusters[i].id == 'TB1') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TB1: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }

                if (this.thrusters[i].id == 'TB2') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TB2: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }

                if (this.thrusters[i].id == 'TB3') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TB3: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }

                if (this.thrusters[i].id == 'TT1') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TT1: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }

                if (this.thrusters[i].id == 'TT2') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TT2: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }

                if (this.thrusters[i].id == 'TT3') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TT3: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }
                if (this.thrusters[i].id == 'TM1') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TM1: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }
                if (this.thrusters[i].id == 'TM2') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TM2: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }
                if (this.thrusters[i].id == 'TM3') {
                    if (
                        this.thrusters[i].forwardCount > 0 ||
                        this.thrusters[i].backwardCount > 0 ||
                        this.thrusters[i].maneuverCount > 0
                    ) {
                        let newSave = Object.assign(save, {
                            TM3: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }
                if (this.thrusters[i].id == 'TPB') {
                    if (this.thrusters[i].forwardCount > 0) {
                        let newSave = Object.assign(save, {
                            TPB: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }
                if (this.thrusters[i].id == 'TPR') {
                    if (this.thrusters[i].forwardCount > 0) {
                        let newSave = Object.assign(save, {
                            TPR: {
                                F: this.thrusters[i].forwardCount,
                                B: this.thrusters[i].backwardCount,
                                M: this.thrusters[i].maneuverCount
                            }
                        });
                    }
                }
            }

            for (let i = 0; i < this.propellantTanks.length; i++) {
                if (this.propellantTanks[i].id == 'PT1') {
                    if (this.propellantTanks[i].count > 0) {
                        let newSave = Object.assign(save, {
                            PT1: this.propellantTanks[i].count
                        });
                    }
                }
                if (this.propellantTanks[i].id == 'PT2') {
                    if (this.propellantTanks[i].count > 0) {
                        let newSave = Object.assign(save, {
                            PT2: this.propellantTanks[i].count
                        });
                    }
                }
                if (this.propellantTanks[i].id == 'PT3') {
                    if (this.propellantTanks[i].count > 0) {
                        let newSave = Object.assign(save, {
                            PT3: this.propellantTanks[i].count
                        });
                    }
                }
            }

            for (let i = 0; i < this.fuelChambers.length; i++) {
                if (this.fuelChambers[i].id == 'FC1') {
                    if (this.fuelChambers[i].count > 0) {
                        let newSave = Object.assign(save, {
                            FC1: this.fuelChambers[i].count
                        });
                    }
                }
                if (this.fuelChambers[i].id == 'FC2') {
                    if (this.fuelChambers[i].count > 0) {
                        let newSave = Object.assign(save, {
                            FC2: this.fuelChambers[i].count
                        });
                    }
                }
                if (this.fuelChambers[i].id == 'FC3') {
                    if (this.fuelChambers[i].count > 0) {
                        let newSave = Object.assign(save, {
                            FC3: this.fuelChambers[i].count
                        });
                    }
                }
            }

            for (let i = 0; i < this.generators.length; i++) {
                if (this.generators[i].id == 'G1') {
                    if (this.generators[i].count > 0) {
                        let newSave = Object.assign(save, {
                            G1: this.generators[i].count
                        });
                    }
                }
                if (this.generators[i].id == 'G2') {
                    if (this.generators[i].count > 0) {
                        let newSave = Object.assign(save, {
                            G2: this.generators[i].count
                        });
                    }
                }
                if (this.generators[i].id == 'G3') {
                    if (this.generators[i].count > 0) {
                        let newSave = Object.assign(save, {
                            G3: this.generators[i].count
                        });
                    }
                }
            }

            for (let i = 0; i < this.batteries.length; i++) {
                if (this.batteries[i].id == 'B1') {
                    if (this.batteries[i].count > 0) {
                        let newSave = Object.assign(save, {
                            B1: this.batteries[i].count
                        });
                    }
                }
            }

            for (let i = 0; i < this.tools.length; i++) {
                if (this.tools[i].id == 'ML') {
                    if (this.tools[i].count > 0) {
                        let newSave = Object.assign(save, {
                            ML: this.tools[i].count
                        });
                    }
                }
                if (this.tools[i].id == 'OC') {
                    if (this.tools[i].count > 0) {
                        let newSave = Object.assign(save, {
                            OC: this.tools[i].count
                        });
                    }
                }
                if (this.tools[i].id == 'MPS') {
                    if (this.tools[i].count > 0) {
                        let newSave = Object.assign(save, {
                            MPS: this.tools[i].count
                        });
                    }
                }
                if (this.tools[i].id == 'LD') {
                    if (this.tools[i].count > 0) {
                        let newSave = Object.assign(save, {
                            LD: this.tools[i].count
                        });
                    }
                }
                if (this.tools[i].id == 'RF') {
                    if (this.tools[i].count > 0) {
                        let newSave = Object.assign(save, {
                            RF: this.tools[i].count
                        });
                    }
                }
            }

            if (this.shipMass > 0) {
                let newSave = Object.assign(save, {
                    MASS: this.shipMass
                });
            }

            if (this.oreCrates > 0) {
                let newSave = Object.assign(save, {
                    CRATES: this.oreCrates
                });
            }

            if (this.efficiency != 95) {
                let newSave = Object.assign(save, {
                    EFFI: this.efficiency
                });
            }

            const codec = require('json-url')('lzma');
            codec.compress(save).then((resault) => {
                const buildUrl = `https://starbase.codes/ship_calc?d=${resault}`;
                this.$swal({
                    icon: 'success',
                    title: '<i>SAVED!</i>',
                    html: this.$t('DESIGNER.SAVE.SHIP_CALC_SAVE_TEXT'),
                    confirmButtonText: this.$t('DESIGNER.SAVE.SHIP_CALC_COPY_CLIPBOARD'),
                    focusConfirm: false
                }).then((res) => {
                    this.$copyText(buildUrl);
                });
            });
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
