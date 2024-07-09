<template>
    <div class="property">
        <div class="property__img">
            <div></div>
        </div>
        <div class="property__details">
            <div>
                <div class="property__title">
                    {{ property.locationShort.join(", ") }}
                </div>
                <div class="property__details-list">
                    <div v-if="property.totalArea">
                        {{ property.totalArea }} m²
                    </div>
                    <div v-if="property.numberOfRooms">
                        {{ rooms(property.numberOfRooms) }}
                    </div>
                </div>
            </div>
            <div>
                <div v-if="property.price" class="property__price">
                    {{ price(property.price.amount, property.price.currency) }}
                </div>
                <div v-else class="property__price">Zapytaj o cenę</div>
                <small v-if="property.priceM2" class="property__price-m2">
                    {{
                        price(
                            property.priceM2.amount,
                            property.priceM2.currency,
                        )
                    }}/m²
                </small>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Property } from "~/interfaces/Property";
import { rooms, price } from "~/utils/format";

const { property } = defineProps<{
    property: Property;
}>();
</script>

<style lang="scss" scoped>
@use "assets/scss/_variables";

.property {
    font-family: variables.$font;
    box-shadow: variables.$shadow;
    border-radius: 1rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 192px 1fr;
    gap: 1rem;

    @media (max-width: variables.$break-point) {
        grid-template-columns: 1fr;
    }

    &__img {
        border-radius: 0.5rem;
        height: 144px;
        background-image: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
    }

    &__title {
        font-size: variables.$size-title;
    }

    &__details-list {
        margin: 0.5rem 0;
        list-style-type: none;
        padding: 0;
        color: variables.$color-gray;
        font-size: variables.$size-text;
        display: flex;
        gap: 1rem;
    }

    &__price {
        font-size: variables.$size-title;
        font-weight: bold;
    }

    &__price-m2 {
        color: variables.$color-gray;
    }

    &__details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>
