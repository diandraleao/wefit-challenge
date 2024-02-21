'use client'

import S from 'styled-components'


export const CartPage = S.div `
  padding: var(--stack-md);
`

export const ListCard = S.div `
  display: block;
`

export const Card = S.div `
  display: grid;
  background-color: var(--base-light);
  border-radius: var(--border-radius);
  margin: var(--stack-md) 0px;
`

export const Header = S.div `
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`
export const Content = S.div `
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`

export const Product = S.div `
  display: flex;
  align-items: center;
  font-size: var(--font-sm);
  font-weight: var(--font-bold);

  span::first-of-type {
    margin-bottom: 5px;
  }
`

export const Title = S.span `
  text-transform: uppercase;
  color: var(--light-gray);
  font-weight: var(--font-bold);
`

export const Button = S.button`
  background-color: var(--button-background);
  color: var(--base-light);
  padding: var(--stack-xs);
  border-radius: 4px;
`

export const Quantity = S.div `
  display: flex;
  align-items: center;

  span {
    margin: 0 11px;
  }
`

export const Subtotal = S.div `
  display: flex;
  align-items: center;
  font-size: var(--font-sm);
  font-weight: var(--font-bold);
  justify-content: space-between;
`
export const ButtonTrash = S.button`
  background-color: transparent;
`

export const Footer = S.div`
  display: flex;
  justify-content: space-between;
  padding: var(--stack-md);

  .button {
    background-color:var(--button-background);
    color: var(--base-light);
    padding: var(--stack-xs);
    border-radius: var(--border-radius);
    width: 235px;
    font-size: var(--font-xs);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    text-align: center;
  }
`
export const Total = S.div`
  span:first-of-type{
    color: var(--light-gray);
    text-transform: uppercase;
    font-size: var(--font-sm);
    font-weight: var(--font-bold);
    margin-right: var(--stack-xs);
  }
  span:last-of-type{
    color: var(--dark-blue);
    font-size: var(--font-xlg);
    font-weight: var(--font-bold);
  }
`
