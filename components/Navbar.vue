<template>
    <b-navbar id="mainNav" toggleable="lg" fixed="top" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand :to="localePath('/')">
                <img
                    src="~/assets/images/jl_logo.png"
                    alt="Just-Look Network Logo"
                    class="d-inlineblock align-top nav-logo"
                />
                | Starbase Tools <small class="text-secondary">(unofficial)</small>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="localePath('/')" exact>{{ $t('MENU.START') }}</b-nav-item>
                    <b-nav-item :to="localePath('/build')">{{ $t('MENU.DESIGNER') }}</b-nav-item>
                    <b-nav-item :to="localePath('/map')">{{ $t('MENU.MAP') }}</b-nav-item>

                    <b-nav-item :to="localePath('/database')">{{ $t('MENU.DATABASE') }}</b-nav-item>

                    <b-nav-item :to="localePath('/contact')">{{ $t('MENU.CONTACT') }}</b-nav-item>

                    <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret right>
                        <template v-slot:button-content>
                            <b-icon icon="tools"></b-icon>
                            <span class="sr-only">Options</span>
                        </template>
                        <b-dropdown-header>Change Language</b-dropdown-header>
                        <b-dropdown-item
                            v-for="locale in availableLocales"
                            :key="locale.code"
                            :to="switchLocalePath(locale.code)"
                        >
                            {{ locale.name }}
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-header>{{ $t('MENU.OPTIONS_EXTRA_TITLE') }}</b-dropdown-header>
                        <b-dropdown-item :to="localePath('/changelog')">Changelog</b-dropdown-item>
                    </b-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
        }
    }
};
</script>

<style lang="scss" scoped>
.nav-logo {
    width: 30px;
}
</style>
