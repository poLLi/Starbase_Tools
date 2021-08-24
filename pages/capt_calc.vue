<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">{{ $t('CAPT_SHIP.HEADLINE_TITLE') }}</h2>
                <p class="desc pl-4">{{ $t('CAPT_SHIP.HEADLINE_SUB') }}</p>
            </div>

            <div class="info">
                <h2 class="title text-monospace">
                    <span class="text-primary">{{ $t('CAPT_SHIP.WIP') }}</span>
                </h2>
            </div>
        </b-container>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.info {
    margin-top: 20px;
}
</style>
