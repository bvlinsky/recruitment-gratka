<template>
  <div class="pagination">
    <Button
      :primary="page !== 1"
      :disabled="page === 1"
      @click="
        page--;
        scroll();
      "
    >
      Poprzednia strona
    </Button>
    <Button
      primary
      @click="
        page++;
        scroll();
      "
      >Następna strona</Button
    >
  </div>
</template>

<script lang="ts" setup>
const page = defineModel<number>({ required: true });

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style lang="scss" scoped>
.pagination {
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
</style>
