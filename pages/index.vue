<template>
  <div class="index">
    <div class="index__content">
      <MainTitle />
    </div>
    <Header>
      <FiltersMenu />
      <template #info>
        <span v-if="data">{{ data.searchProperties.totalCount }} nieruchomości</span>
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
      <div v-if="error" class="index__error">Nie udało nam się załadować wyników wyszukiwania</div>
      <Pagination v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropertiesResults } from '~/interfaces/PropertiesResults';
import { getPropertiesQuery } from '~/queries/getProperties';

const route = useRoute();

const page = ref<number>(Number(route.query.page ?? 1));
const priceFrom = ref<undefined | number>(Number(route.query.priceFrom));
const priceTo = ref<undefined | number>(Number(route.query.priceTo));
const roomsFrom = ref<undefined | number>(Number(route.query.roomsFrom));
const roomsTo = ref<undefined | number>(Number(route.query.roomsTo));

const { data, error } = await useAsyncQuery<PropertiesResults>(getPropertiesQuery, {
  priceFrom,
  priceTo,
  roomsFrom,
  roomsTo,
  page,
});

// normally I would use the refresh function from useAsyncData but it doesn't work in this library
watch(
  () => route.query,
  () => {
    priceFrom.value = Number(route.query.priceFrom);
    priceTo.value = Number(route.query.priceTo);
    roomsFrom.value = Number(route.query.roomsFrom);
    roomsTo.value = Number(route.query.roomsTo);
    page.value = Number(route.query.page ?? 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
);
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

  &__error {
    font-family: variables.$font;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100px;
  }
}
</style>
