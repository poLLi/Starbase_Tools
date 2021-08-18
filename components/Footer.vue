<template>
    <footer class="footer bg-dark pt-3">
        <b-container>
            <b-row class="d-flex">
                <b-col class="align-self-end">
                    <p class="text-muted font-weight-light small">
                        Starbase is a registered trademark of
                        <a href="https://www.frozenbyte.com" target="_blank" rel="noopener noreferrer">
                            Frozenbyte Oy</a
                        >
                        <br />
                        Just-Look Network is not associated with Frozenbyte Oy. <br />
                        Official Starbase Website:
                        <a href="https://www.starbasegame.com" target="_blank" rel="noopener noreferrer">
                            https://www.starbasegame.com
                        </a>
                    </p>
                </b-col>
                <b-col class="align-self-end">
                    <p class="text-muted font-weight-light text-right">
                        <a href="https://discord.com/invite/starbase" target="_blank" rel="noopener noreferrer">
                            <b-icon icon="chat-right-dots"></b-icon>
                        </a>
                        |
                        <nuxt-link :to="localePath('/imprint')" class="text-muted font-weight-light">Imprint</nuxt-link>
                        |
                        <nuxt-link :to="localePath('/privacy')" class="text-muted font-weight-light">Privacy</nuxt-link>
                        |
                        <nuxt-link :to="localePath('/contact')" class="text-muted font-weight-light">Contact</nuxt-link>
                        <br />
                        Copyright © 2021 Just-Look Network
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style lang="scss" scoped></style>
