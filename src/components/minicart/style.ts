'use client'

import S from 'styled-components'

export const Aside = S.aside `
  display: grid;
  grid-template-columns: 1fr 32px;
  gap: (--stack-xs);

  .icon {
    margin-left: var(--stack-xs);
  }
`
export const TextContainer = S.div `
  text-align: right;
  display: grid;
`
export const Counter = S.span `
  display: inline;
`

export const CartText = S.span `
  display: inline;
  color: var(--base-light);
  font-weight: var(--font-semibold);
`
export const ItemText = S.span `
  display: inline;
  color: var(--light-gray);
  font-weight: var(--font-semibold);
`