import type { Property } from '~/interfaces/Property';

export interface PropertiesResults {
  searchProperties: {
    totalCount: number;
    nodes: Property[];
  };
}
