<template>
  <div class="header">
    <div class="header__content">
      <div>
        <slot />
      </div>
      <div class="header__info">
        <slot name="info" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/scss/_variables';

.header {
  margin: 2rem 0 1rem 0;
  background: white;
  position: sticky;
  top: 0;
  width: 100%;

  &__content {
    padding: 1rem 0;
    max-width: variables.$break-point;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: variables.$break-point) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__info {
    font-family: variables.$font;
    font-size: variables.$size-text;
    color: variables.$color-gray;

    @media (max-width: variables.$break-point) {
      display: none;
    }
  }
}
</style>
