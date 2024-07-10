<template>
  <div class="filters-menu">
    <FiltersPrice v-model:from="priceFrom" v-model:to="priceTo" />
    <FiltersRooms v-model:from="roomsFrom" v-model:to="roomsTo" />
    <Button primary @click="changeRouteQuery({ priceFrom, priceTo, roomsFrom, roomsTo })">
      Szukaj
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { changeRouteQuery } from '~/utils/changeRouteQuery';

const { query } = useRoute();

const priceFrom = ref<undefined | number>(Number(query.priceFrom));
const priceTo = ref<undefined | number>(Number(query.priceTo));
const roomsFrom = ref<undefined | number>(Number(query.roomsFrom));
const roomsTo = ref<undefined | number>(Number(query.roomsTo));
</script>

<style lang="scss" scoped>
.filters-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
