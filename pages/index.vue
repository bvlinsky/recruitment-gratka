<template>
  <div class="index">
    <div class="index__content">
      <MainTitle />
    </div>
    <Header>
      <FiltersMenu />
      <template #info>
        <span v-if="data">{{ data.searchProperties.totalCount }} nieruchomości</span>
        <span v-else>Wczytywanie...</span>
      </template>
    </Header>
    <div class="index__content">
      <div class="index__list">
        <Property
          v-for="property in data?.searchProperties.nodes ?? []"
          :key="property.id"
          :property="property"
        />
      </div>
      <Pagination v-model="page" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import type { PropertiesResults } from '~/interfaces/PropertiesResults';
import { useFiltersStore } from '~/store/filters';
import { getPropertiesQuery } from '~/queries/getProperties';

const page = ref(1);
const filtersStore = useFiltersStore();
const { priceFrom, priceTo, roomsFrom, roomsTo } = storeToRefs(filtersStore);

const { data } = await useAsyncQuery<PropertiesResults>(getPropertiesQuery, {
  priceFrom,
  priceTo,
  roomsFrom,
  roomsTo,
  page,
});
</script>

<style lang="scss" scoped>
@use 'assets/scss/_variables';

.index {
  margin: 100px 0;

  &__content {
    max-width: variables.$break-point;
    margin: 0 auto;
    padding: 20px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
