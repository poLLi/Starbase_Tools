<template>
    <div>
        <header class="mainhead">
            <b-container class="h-100">
                <b-row class="h-100 text-center mt-4" align-h="center" align-content="center">
                    <b-col lg="10">
                        <img src="~/assets/images/sb_logo.png" alt="Starbase Tools" class="mainhead-logo img-fluid" />
                        <h2 class="text-uppercase text-white font-weight-medium">{{ $t('START.HEADLINE_TITLE') }}</h2>
                        <p>{{ $t('START.HEADLINE_SUB') }}</p>
                        <hr class="my-4" />
                    </b-col>
                    <b-col lg="8" class="text-white mb-5">
                        <p>{{ $t('START.HEADLINE_DESCRIPTION') }}</p>
                    </b-col>
                    <b-col lg="12 mt-5">
                        <p class="font-weight-light m-0">
                            {{ $t('START.DEVELOPER_NOTE') }} <b-icon icon="heart" class="text-primary"></b-icon>
                            {{ $t('START.DEVELOPER_NOTE_BY') }}
                            <span class="underline">PoLLi</span>
                        </p>
                        <p class="font-weight-light">
                            {{ $t('START.DEVELOPER_NOTE_LIKE') }}
                            <a class="" href="https://paypal.me/TPollerhof" target="_blank" rel="noopener">
                                {{ $t('START.DEVELOPER_NOTE_COFFEE') }}
                            </a>
                        </p>
                        <a
                            class="btn btn-primary"
                            href="https://discord.com/invite/starbase"
                            target="_blank"
                            rel="noopener"
                        >
                            Discord
                        </a>
                        <a
                            class="btn btn-secondary"
                            href="https://github.com/poLLi/SB_Tools_Localization"
                            target="_blank"
                            rel="noopener"
                        >
                            Github
                        </a>
                    </b-col>
                </b-row>
            </b-container>
        </header>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mainhead {
    padding-top: 10vh;
    background: linear-gradient(to bottom, rgba(25, 25, 25, 0.35) 20%, #222831 100%),
        url(~assets/images/background-highres.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
    min-height: 40rem;
    height: 100vh;
}

.mainhead-logo {
    max-width: 850px;
}

@media (max-width: 576px) {
    .mainhead-logo {
        max-width: 350px;
    }
}

.underline {
    text-decoration: underline;
}
</style>
