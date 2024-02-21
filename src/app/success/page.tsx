'use client'
import Link from 'next/link';
import * as S from './style'

import Image from "next/image"; 

export default function EmptyCart() {
  return (
    <S.Aside>
      <S.TextContainer>
        <S.Title>Compra realizada com sucesso!</S.Title>
        <Image src="/success.svg"  alt="Imagem de compra realizada com sucesso" width={447} height={265} />

        <Link href="/" prefetch={false} className='button'>
          Voltar
        </Link>
      </S.TextContainer>
    </S.Aside>
  );
}
