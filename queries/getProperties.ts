export const getPropertiesQuery = gql`
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
        id
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
