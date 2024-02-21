'use client'

import ProductProvider from '../../app/contexts/product-provider';

export function Providers({
  children,
}: {children: React.ReactNode}) {
  return (
  <ProductProvider> {children} </ProductProvider>
  )
}