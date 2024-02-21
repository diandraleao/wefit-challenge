import * as S from './style'

import Header from '../header';

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
}
