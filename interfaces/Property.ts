export interface Property {
  id: string;
  locationShort: string[];
  numberOfRooms: number;
  totalArea: string;
  price: null | {
    amount: string;
    currency: string;
  };
  priceM2: null | {
    amount: string;
    currency: string;
  };
}
