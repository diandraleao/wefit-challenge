'use client'
import { useContext } from 'react';
import { ProductContext } from '../../app/contexts/product-provider'
import * as S from './style'

import Image from "next/image"; 

export default function Minicart() {
  
  const { productList } = useContext(ProductContext);
  const productCount = productList?.filter(p => p.isSelected).reduce((acc, curr) => acc + curr.quantity,0) ?? 0;

  return (
    <S.Aside>
      <S.TextContainer>
        <S.CartText>Meu Carrinho</S.CartText>
        <S.ItemText><S.Counter>{productCount}</S.Counter> item</S.ItemText>
      </S.TextContainer>
      <Image src="/cartIcon.svg"  alt="Icone carrinho para cesta de produtos" width={32} height={32} className='icon' />
    </S.Aside>
  );
}
