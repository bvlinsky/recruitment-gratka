<template>
    <input class="input" v-model="model" />
</template>

<script lang="ts" setup>
const model = defineModel();
</script>

<style lang="scss" scoped>
@use "assets/scss/_variables";

.input {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid variables.$color-gray-light;
    border-radius: 0.5rem;
    gap: 0.5rem;
}
</style>
