<template>
  <div class="pagination">
    <Button :primary="page > 1" :disabled="page <= 1" @click="changeRouteQuery({ page: page - 1 })">
      Poprzednia strona
    </Button>
    <Button primary @click="changeRouteQuery({ page: page + 1 })"> Następna strona </Button>
  </div>
</template>

<script lang="ts" setup>
import { changeRouteQuery } from '~/utils/changeRouteQuery';

const route = useRoute();
const page = ref<number>(Number(route.query.page ?? 1));

watch(
  () => route.query,
  () => (page.value = Number(route.query.page ?? 1)),
);
</script>

<style lang="scss" scoped>
.pagination {
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
</style>
