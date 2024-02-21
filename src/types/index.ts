
export interface Product {
  id: string;
  image: string;
  price: number;
  title: string;
  isSelected: boolean;
  quantity: number;
  priceTotal: number;
}

export interface Card {
  product: Product;
}

export interface ProductContext {
  productList? : Product[];
  setProductList : React.Dispatch<React.SetStateAction<Product[]>>;
}
