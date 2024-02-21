'use client'

import S from 'styled-components'

export const CardList = S.div `
    display: flex;
    flex-direction: column;
    background-color: var(--dark-blue);


  div{
    margin-top: 16px;
  }
  @media (min-width: 768px) { 
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      div{
        width: 33%
        margin: 16px;
      }
  }
`

export const Title = S.p `
  color: var(--base-light);
`

export const Button = S.button `
  background-color: var(--button-background);
  color: var(--base-light);
  padding: var(--stack-xs);
  border-radius: 4px;
`
