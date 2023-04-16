export interface IProducts {
  products: INodes
}

interface INodes {
  nodes: IProduct[]
}

export interface IProduct {
  id: string;
  title: string;
  tags: string[];
  totalInventory: number;
  tracksInventory: boolean;
  featuredImage: FeaturedImage;
  prices: Prices;
}

interface FeaturedImage {
  url: string;
}

export interface Prices {
  max: Price;
  min: Price;
}

interface Price {
  amount: string;
  currencyCode: string;
}
