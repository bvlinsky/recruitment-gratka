<template>
    <div class="index">
        <div class="index__content">
            <MainTitle />
        </div>
        <Header>
            <FiltersMenu />
            <template #info>
                {{ data.searchProperties.totalCount }} nieruchomości
            </template>
        </Header>
        <div class="index__content">
            <div class="index__list">
                <Property
                    v-for="property in data.searchProperties.nodes"
                    :property="property"
                />
            </div>
            <Pagination v-model="page" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFiltersStore } from "~/store/filters";
import { storeToRefs } from "pinia";

const page = ref(1);

const query = gql`
    query getProperties(
        $page: Int
        $priceFrom: String
        $priceTo: String
        $roomsFrom: Int
        $roomsTo: Int
    ) {
        searchProperties(
            searchFilters: {
                priceFrom: $priceFrom
                priceTo: $priceTo
                numberOfRoomsFrom: $roomsFrom
                numberOfRoomsTo: $roomsTo
            }
            searchOrder: {}
            numberOfResults: 32
            pageNumber: $page
        ) {
            nodes {
                locationShort
                numberOfRooms
                totalArea
                price {
                    amount
                    currency
                }
                priceM2 {
                    amount
                    currency
                }
            }
            totalCount
        }
    }
`;

const filtersStore = useFiltersStore();
const { priceFrom, priceTo, roomsFrom, roomsTo } = storeToRefs(filtersStore);

const route = useRoute();
const { data } = await useAsyncQuery(query, {
    priceFrom,
    priceTo,
    roomsFrom,
    roomsTo,
    page,
});
</script>

<style lang="scss" scoped>
@use "assets/scss/_variables";

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
