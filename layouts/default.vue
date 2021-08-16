<template>
    <div>
        <app-navbar />
        <Nuxt />
        <app-footer />
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default {
    components: {
        appNavbar: Navbar,
        appFooter: Footer
    },
    head() {
        const i18nSeo = this.$nuxtI18nSeo();
        return {
            htmlAttrs: {
                ...i18nSeo.htmlAttrs
            },
            meta: [...i18nSeo.meta],
            link: [...i18nSeo.link]
        };
    }
};
</script>
