<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">{{ $t('CONTACT.HEADLINE_TITLE') }}</h2>
                <p class="desc pl-4">{{ $t('CONTACT.HEADLINE_SUB') }}</p>
            </div>

            <div class="info">
                <h2 class="title">{{ $t('CONTACT.ABOUT_TITLE') }}</h2>
                <p>
                    {{ $t('CONTACT.ABOUT_TEXT') }} <br />
                    {{ $t('CONTACT.CONTACT_TEXT') }}
                </p>
                <h3 class="title mt-5">{{ $t('CONTACT.CHANNELS') }}</h3>
                <p>{{ $t('CONTACT.PERSONAL_DISCORD') }}<span class="text-primary">PoLLi#4969</span><br /></p>
                <hr />
                <h2>{{ $t('CONTACT.GITHUB') }}</h2>
                <p>
                    {{ $t('CONTACT.PERSONAL_GITHUB') }}
                    <a href="https://github.com/poLLi/" target="_blank" rel="noopener noreferrer">
                        github.com/poLLi/
                    </a>
                    <br />
                    {{ $t('CONTACT.NETWORK_GITHUB') }}
                    <a href="https://github.com/Just-Look-Network/" target="_blank" rel="noopener noreferrer">
                        github.com/Just-Look-Network/
                    </a>
                </p>
                <hr />
                <h2 class="title">{{ $t('CONTACT.SOCIAL') }}</h2>
                <p>
                    {{ $t('CONTACT.PERSONAL_SOCIAL') }}
                    <a href="https://twitter.com/JL_PoLLi" target="_blank" rel="noopener noreferrer">
                        twitter.com/JL_PoLLi
                    </a>
                </p>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
