import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filterStore", () => {
  const priceFrom = ref<undefined | string>();
  const priceTo = ref<undefined | string>();
  const roomsFrom = ref<undefined | string>();
  const roomsTo = ref<undefined | string>();

  function setFilters(
    priceFromVal: undefined | string,
    priceToVal: undefined | string,
    roomsFromVal: undefined | string,
    roomsToVal: undefined | string,
  ) {
    priceFrom.value = priceFromVal;
    priceTo.value = priceToVal;
    roomsFrom.value = roomsFromVal;
    roomsTo.value = roomsToVal;
  }

  return {
    setFilters,
    priceFrom,
    priceTo,
    roomsFrom,
    roomsTo,
  };
});
