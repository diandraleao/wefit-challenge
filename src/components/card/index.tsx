import Image from 'next/image'
import * as S from './style'
import { useContext } from 'react';
import { ProductContext } from '../../app/contexts/product-provider'

import { Card as CardInterface, Product } from '@/types'

export default function Card({product}: CardInterface) {

  const { setProductList, productList } = useContext(ProductContext);

  const handleClick = (newProduct: Product) => {
    let newProductList = productList?.map(product => {
      if(product.id === newProduct.id) {
        return { ...newProduct, isSelected: true }
      }
      return product
    })
    if(newProductList?.length)setProductList(newProductList);
  }

  return (
    <S.Card>
        <Image
        src={product.image}
        alt={`Movie cover image ${product.title}`}
        loading="lazy"
        decoding="async"
        width={147}
        height={188}/>
        <S.Title key={product.id}>{product.title}</S.Title>
        <S.Price>{product.price}</S.Price>
        <S.Button onClick={()=>handleClick(product)} isSelected={product.isSelected}>
          <Image src="/mdaddshoppingcart.svg"  alt="Icone carrinho para botao do card" width={14} height={14} className='icon' />
          Adicionar ao carrinho
        </S.Button>
    </S.Card>
  );
}
