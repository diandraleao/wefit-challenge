'use client'
import { useContext, useState, useEffect } from 'react';
import { ProductContext as ProductContextInterface } from '../../app/contexts/product-provider'
import Image from 'next/image'
import Link from 'next/link';
import { Product } from '@/types'
import EmptyCart from '@/components/emptycart'
import * as S from './style'

export default function Cart() {
  
  const [items, setItems] = useState<Product[]>([])
  const { productList, setProductList } = useContext(ProductContextInterface);
  useEffect(() => {if(productList)setItems(productList)}, [productList]);

  const totalPrice = productList?.filter(prod => prod.isSelected).reduce((acc, prod) => acc + (prod.quantity * prod.price),0);
  const isEmptyCart = productList?.some((prod) => prod.isSelected)
  

  const handleRemove = (product: Product) => {
    const newProductList = productList?.map(prod => {
      if (prod.id === product.id) {
        return { ...prod, isSelected: false }
      }
      return prod
    })

    if(setProductList  && newProductList) {
      setProductList(newProductList)
    }
  }

  const handleQuantityChange = (product: Product, typeOperation: string) => {
    if (typeOperation === 'decrease') {
      if(product.quantity === 1) {
        return handleRemove(product);
      }
    }
    const productToChange = productList?.map(prod => {
      if (prod.id === product.id) {
        return { ...prod, quantity: typeOperation === 'decrease' ? prod.quantity-- :  prod.quantity++ }
      }
      return prod
    })
    if(setProductList  && productToChange) {
      setProductList((prev: any) => [...prev, productToChange])
    }
  }

  const formatPrice = (price: number) => {
    return parseFloat(price.toFixed(2))
  }
  
  return (
    <>
    { !isEmptyCart ?
      <EmptyCart></EmptyCart> : 
      <S.CartPage>
        <S.Header>
          <S.Title>Produto</S.Title>
          <S.Title>Qtd</S.Title>
          <S.Title>Subtotal</S.Title>
        </S.Header>  
        <S.ListCard>
          {items?.filter(p => p.isSelected).map((product: Product) => (
            <S.Card key={product.id}>
              <S.Content>
                <S.Product>
                  <Image
                  src={product.image}
                  alt={`Poster do filme ${product.title}`}
                  loading="lazy"
                  decoding="async"
                  width={147}
                  height={188}/>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                </S.Product>
                <S.Quantity>
                <button type='button' onClick={() => handleQuantityChange(product, 'decrease')}>
                  <Image
                  src='/minusIcon.svg'
                  alt={`Decrease item icon`}
                  loading="lazy"
                  decoding="async"
                  width={18}
                  height={18}/></button>
                <span>{product.quantity}</span>
                <button type='button' onClick={() => handleQuantityChange(product, 'increase')}>
                  <Image
                  src='/plusIcon.svg'
                  alt={`Increase item icon`}
                  loading="lazy"
                  decoding="async"
                  width={18}
                  height={18}/></button>
                </S.Quantity>
                <S.Subtotal>
                  <span>{formatPrice(product.quantity * product.price)}</span>
                  <S.ButtonTrash onClick={() => handleRemove(product)}>
                    <Image
                    src='/trashIcon.svg'
                    alt={`Delete item icon`}
                    loading="lazy"
                    decoding="async"
                    width={18}
                    height={18}/></S.ButtonTrash>
                </S.Subtotal>
              </S.Content>
          </S.Card>
          ))}
          <S.Footer>
              <Link href="/success" prefetch={false} className='button'>
                Finalizar pedido
              </Link>
            <S.Total>
            <span>Total</span> <span>{totalPrice}</span>
            </S.Total>
          </S.Footer>
        </S.ListCard>
      </S.CartPage>
    }
    </>
  );
}

