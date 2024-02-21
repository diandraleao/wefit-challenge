import Image from 'next/image'
import Card from '../card';
import * as S from './style'

export default function CardList({products}: any) {
  return (
    <S.CardList>
      {products.map((product: any) => (
        <Card product={product} key={product.id} />
      ))}
    </S.CardList>
  );
}
