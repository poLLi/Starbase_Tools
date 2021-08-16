<template>
    <section class="full-height">
        <b-container>
            <div class="mb-3">
                <h2 class="title text-primary">{{ $t('MENU.DATABASE') }}</h2>
            </div>

            <b-alert
                :show="alert.dismissSecs"
                dismissible
                fade
                variant="warning"
                @dismissed="alert.dismissCountDown = 0"
                @dismiss-count-down="countDownChanged"
            >
                <b-icon icon="exclamation-circle" variant="danger" font-scale="1.5" class="mr-2"></b-icon>
                <strong>WARNING:</strong> This Tool is still in Development, only Test items available right now!
                <small>Current Verion: Alpha</small>
                <b-progress
                    variant="danger"
                    :max="alert.dismissSecs"
                    :value="alert.dismissCountDown"
                    height="4px"
                    class="mt-2 ml-4"
                ></b-progress>
            </b-alert>

            <b-card class="shadow mb-5">
                <b-form-input
                    v-model="input"
                    type="text"
                    debounce="500"
                    autocomplete="off"
                    placeholder="Search for Item / Weapon / Equipment Name..."
                ></b-form-input>
                <ul v-if="searchResaults.length > 0" class="searchResaults">
                    <nuxt-link
                        v-for="res in searchResaults"
                        :key="res.uid"
                        :to="localePath(`/database/detail/${res.uid}`)"
                        class="searchResLink"
                    >
                        <li class="searchResItem d-flex">
                            <div class="flex-fill">{{ res.name }}</div>
                            <div>
                                <b-badge
                                    v-for="cat in res.categories"
                                    :key="cat.category"
                                    variant="primary"
                                    class="searchResCategory"
                                >
                                    {{ cat.category }}
                                </b-badge>
                            </div>
                        </li>
                    </nuxt-link>
                </ul>
            </b-card>

            <b-row>
                <b-col sm="12" lg="4">
                    <b-card class="shadow mb-5 category-card">
                        <b-card-title class="text-center p-2 category-title">
                            Weapons
                        </b-card-title>
                        <ul>
                            <li><nuxt-link :to="localePath('/database')">Ranged Weapons</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Melee Weapons</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Throwables</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Attachments</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Ammunition</nuxt-link></li>
                        </ul>
                    </b-card>
                </b-col>
                <b-col sm="12" lg="4">
                    <b-card class="shadow mb-5 category-card">
                        <b-card-title class="text-center p-2 category-title">
                            Items
                        </b-card-title>
                        <ul>
                            <li><nuxt-link :to="localePath('/database')">Consumables</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Materials</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Medicals</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Containers</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Miscellaneous</nuxt-link></li>
                        </ul>
                    </b-card>
                </b-col>
                <b-col sm="12" lg="4">
                    <b-card class="shadow mb-5 category-card">
                        <b-card-title class="text-center p-2 category-title">
                            Equipment
                        </b-card-title>
                        <ul>
                            <li><nuxt-link :to="localePath('/database')">Backpacks</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Upper Body</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Lower Body</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Hats</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Glovs</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Vests</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Shoes</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Gear</nuxt-link></li>
                        </ul>
                    </b-card>
                </b-col>
                <b-col sm="12" lg="4">
                    <b-card class="shadow mb-5 category-card">
                        <b-card-title class="text-center p-2 category-title">
                            Vehicles
                        </b-card-title>
                        <ul>
                            <li><nuxt-link :to="localePath('/database')">Land</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Air</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Sea</nuxt-link></li>
                        </ul>
                    </b-card>
                </b-col>
                <b-col sm="12" lg="4">
                    <b-card class="shadow mb-5 category-card">
                        <b-card-title class="text-center p-2 category-title">
                            Factions
                        </b-card-title>
                        <ul>
                            <li><nuxt-link :to="localePath('/database')">Trader</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Bandits</nuxt-link></li>
                        </ul>
                    </b-card>
                </b-col>
                <b-col sm="12" lg="4">
                    <b-card class="shadow mb-5 category-card">
                        <b-card-title class="text-center p-2 category-title">
                            Creatures
                        </b-card-title>
                        <ul>
                            <li><nuxt-link :to="localePath('/database')">Wildlife</nuxt-link></li>
                            <li><nuxt-link :to="localePath('/database')">Zombies</nuxt-link></li>
                        </ul>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            searchResaults: [],
            alert: {
                dismissSecs: 8,
                dismissCountDown: 8
            }
        };
    },

    watch: {
        input(newInput) {
            if (newInput === '') {
                this.searchResaults = [];
                return;
            }
            this.searchDB(newInput);
        }
    },

    methods: {
        searchDB(input) {
            this.$axios
                .$get(`/items?name_contains=${input}&_limit=5`)
                .then((res) => {
                    if (res.length > 0) {
                        this.searchResaults = res;
                    } else {
                        this.searchResaults = [];
                    }
                })
                .catch((err) => {
                    this.$swal({
                        icon: 'error',
                        title: '<i>ERROR!</i>',
                        html: `Something went wrong :( <br />Please contact a Developer about it <br /><br /><code>${err}</code>`,
                        confirmButtonText: 'Close',
                        focusConfirm: false
                    }).then((res) => {
                        this.input = '';
                    });
                });
        },

        countDownChanged(dismissCountDown) {
            this.alert.dismissCountDown = dismissCountDown;
        }
    }
};
</script>

<style lang="scss" scoped>
.info {
    margin-top: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    .title {
        text-decoration: underline;
    }
}

.category-card {
    min-height: 310px;
}

.category-title {
    border-bottom: 2px solid #5c6166;
}

.searchResaults {
    list-style: none;
    background: #5c6166;
    border-radius: 0.25rem;
    margin: 10px;
    padding: 0;

    .searchResLink {
        color: #fff;
        font-weight: 600;

        &:hover {
            text-decoration: none;
        }
    }

    .searchResItem {
        padding: 6px 15px 6px 15px;
        border-bottom: 1px solid #000;
        transition: all 0.2s ease-out;

        &:hover {
            background: #212121;
            padding: 6px 15px 6px 25px;
        }
    }

    .searchResCategory {
        margin-left: 5px;
    }
}
</style>
