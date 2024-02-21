'use client'

import S from 'styled-components'

export const Aside = S.aside `
  display: grid;
  grid-template-columns: 1fr 32px;
  gap: (--stack-xs);
  border-radius: var(--border-radius);

`
export const TextContainer = S.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--stack-xlg) 0;

  img {
    display: inline-block;
    margin-bottom: var(--stack-lg);
  }

  .button {
    background-color: var(--button-background);
    color: var(--base-light);
    padding: var(--stack-xs);
    border-radius: var(--border-radius);
    display: block;
    width: 180px;
    text-align: center;
  }
`
export const Title = S.h3 `
  display: block;
  font-size: var(--font-lg);
  color: var(--dark-blue);
  font-weight: var(--font-bold);
  text-align: center;
  margin-bottom: var(--stack-lg);
`

export const Button = S.button `
  background-color: var(--button-background);
  color: var(--base-light);
  padding: var(--stack-xs);
  border-radius: var(--border-radius);
`