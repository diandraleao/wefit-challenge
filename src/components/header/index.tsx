import * as S from './style'
import Link from 'next/link';

import Minicart from "@/components/minicart";

export default function Header() {
  return (
    <S.Header>
      <Link href="/" prefetch={true}>
        <S.Logo>WeMovies</S.Logo>
      </Link>
      <Link href="/cart" prefetch={true}>
        <Minicart />
      </Link>
    </S.Header>
  );
}
