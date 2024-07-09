<template>
    <div class="popover">
        <slot />
        <div
            class="popover__panel"
            :class="open ? '' : 'popover__panel--hidden'"
        >
            <slot name="panel" />
        </div>
        <div v-if="open" @click="open = false" class="popover__overlay"></div>
    </div>
</template>

<script lang="ts" setup>
const open = defineModel({ default: false });
</script>

<style lang="scss" scoped>
@use "assets/scss/_variables";

.popover {
    position: relative;

    &__panel {
        position: absolute;
        top: 40px;
        left: 0;
        z-index: 3;
        padding: 1rem;
        border-radius: 0.5rem;
        background: white;
        box-shadow: variables.$shadow;

        &--hidden {
            display: none;
        }
    }

    &__overlay {
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.1);
    }
}
</style>
