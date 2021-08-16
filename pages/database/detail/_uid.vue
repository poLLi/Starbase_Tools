<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">Detailed View</h2>
                <p class="desc pl-4">well... yea thats what you would expext here</p>
            </div>

            <b-card v-if="loading" class="shadow text-center">
                <b-spinner
                    style="width: 5rem; height: 5rem;"
                    variant="primary"
                    label="Spinning"
                    class="mt-5 mb-5"
                ></b-spinner>
            </b-card>

            <b-card v-if="!loading" class="shadow">
                <ul v-if="item !== null">
                    <li>UID: {{ item.uid }}</li>
                    <li>Name: {{ item.name }}</li>
                    <li>Desc: {{ item.description }}</li>
                    <br />
                    <li v-for="category in item.categories" :key="category.uid">Category: {{ category.category }}</li>
                    <br />
                    <li>Size: {{ item.size }}</li>
                    <li>Weight: {{ item.weight }}</li>
                    <li>Rarity: {{ item.rarity.rarity }}</li>
                    <br />
                    <li>Image: {{ item.image.url }}</li>
                    <br />
                    <li v-for="ammo in item.ammoTypes" :key="ammo.uid">AmmoType: {{ ammo.name }}</li>
                    <br />
                    <li v-for="magazin in item.magazineTypes" :key="magazin.uid">MagazineTypes: {{ magazin.name }}</li>
                    <br />
                    <li v-for="attachment in item.attachments" :key="attachment.uid">
                        Attachments: {{ attachment.name }}
                    </li>
                </ul>
            </b-card>
        </b-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            item: null
        };
    },

    mounted() {
        if (!this.$route.params.uid) {
            this.$swal({
                icon: 'error',
                title: '<i>ERROR!</i>',
                html: `Something went wrong :( <br />Please contact a Developer about it <br /><br /><code>Error: JLN_NO_UID_PARAM</code>`,
                confirmButtonText: 'Close',
                focusConfirm: false
            }).then((res) => {
                this.$router.push('/database');
            });
        } else {
            this.loadItem(this.$route.params.uid);
        }
    },

    methods: {
        loadItem(param) {
            this.$axios
                .$get(`/items/?uid_eq=${param}`)
                .then((res) => {
                    if (res.length > 0) {
                        this.item = res[0];
                        this.loading = false;
                    } else {
                        this.$swal({
                            icon: 'error',
                            title: '<i>ERROR!</i>',
                            html: `Something went wrong :( <br />Please contact a Developer about it <br /><br /><code>Error: JLN_NO_ITEM_WITH_UID_FOUND</code>`,
                            confirmButtonText: 'Close',
                            focusConfirm: false
                        }).then((res) => {
                            this.$router.push('/database');
                        });
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
                        this.$router.push('/database');
                    });
                });
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
</style>
