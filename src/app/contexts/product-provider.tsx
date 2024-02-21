'use client'
 
import { createContext, useState } from 'react'
import { Product, ProductContext as ProductContextInterface } from '@/types'
 
export const ProductContext = createContext<ProductContextInterface>({})
 
export default function ProductProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [ productList, setProductList ] = useState<Product[]>([]);
  const value = { productList, setProductList };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
