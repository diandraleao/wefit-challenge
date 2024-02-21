'use client'

import S from 'styled-components'

export const Card = S.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--base-light);
  border-radius: var(--border-radius);
  flex-basis: calc(30% - var(--stack-sm));
  padding: 10px;
`

export const Title = S.p `
  color: var(--dark-blue);
  font-size: var(--font-xs);
  margin: 7px 0 0 0;
`
export const Price = S.p `
  color: var(--dark-blue);
  font-weight: var(--font-bold);
  font-size: var(--font-md);
  margin: 0 0 var(--stack-xs) 0;
`
export const Button = S.button<{isSelected:boolean}> `
  background-color: ${ props => props.isSelected ? 'green' : 'var(--button-background)' } ;
  color: var(--base-light);
  padding: var(--stack-xs);
  border-radius: var(--border-radius);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: var(--font-xs);
  font-weight: var(--font-bold);
  text-transform: uppercase;

  .icon {

  }
}
`