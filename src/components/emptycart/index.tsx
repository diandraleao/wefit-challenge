'use client'
import Link from 'next/link';
import * as S from './style'

import Image from "next/image"; 

export default function EmptyCart() {
  return (
    <S.Aside>
      <S.TextContainer>
        <S.Title>Parece que não há nada por aqui :(</S.Title>
        <Image src="/emptyCart.svg"  alt="Imagem para carrinho vazio" width={447} height={265} />

        <Link href="/" prefetch={false} className='button'>
          Voltar
        </Link>
      </S.TextContainer>
    </S.Aside>
  );
}
