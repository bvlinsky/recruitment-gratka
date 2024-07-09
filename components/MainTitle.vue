<template>
    <h1 class="title">
        Znajdź swój <span class="title__color">nowy</span> <Emoji />
    </h1>
</template>

<style lang="scss" scoped>
@use "assets/scss/_variables";

.title {
    pargin: 0;
    font-family: variables.$font;
    font-size: 64px;
    text-align: center;
    text-transform: uppercase;

    &__color {
        color: variables.$color-primary;
    }
}
</style>
