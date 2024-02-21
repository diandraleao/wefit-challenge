'use client'

import S from 'styled-components'

export const Header = S.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-blue);
  color: var(--base-light);
  padding: 18px 10px;
`

export const Logo = S.div `
  color: var(--base-light);
  font-weight: var(--font-bold);
  font-size: var(--font-logo);
`