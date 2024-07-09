<template>
    <div class="filters-menu">
        <FiltersPrice v-model:from="priceFrom" v-model:to="priceTo" />
        <FiltersRooms v-model:from="roomsFrom" v-model:to="roomsTo" />
        <Button primary @click="commit">Szukaj</Button>
    </div>
</template>

<script lang="ts" setup>
import { useFiltersStore } from "~/store/filters";

const priceFrom = ref<undefined | string>();
const priceTo = ref<undefined | string>();
const roomsFrom = ref<undefined | string>();
const roomsTo = ref<undefined | string>();

const { setFilters } = useFiltersStore();

const commit = () => {
    setFilters(priceFrom.value, priceTo.value, roomsFrom.value, roomsTo.value);
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
</script>

<style lang="scss" scoped>
.filters-menu {
    display: flex;
    gap: 0.5rem;
}
</style>
