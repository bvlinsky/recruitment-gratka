<template>
    <button class="button" :class="primary ? 'button--primary' : ''">
        <slot />
    </button>
</template>

<script lang="ts" setup>
const { primary } = defineProps({
    primary: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
@use "assets/scss/_variables";

.button {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid variables.$color-gray-light;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: variables.$color-gray-lightest;
    }

    &--primary {
        background-color: variables.$color-primary;
        border: none;
        color: white;

        &:hover {
            background-color: variables.$color-primary-light;
        }
    }

    &:disabled {
        cursor: not-allowed;
        background-color: variables.$color-gray-lightest;
    }
}
</style>
