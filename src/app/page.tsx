'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import GetInitialProps from 'next'
import { useContext } from 'react';
import { ProductContext } from '../app/contexts/product-provider'
import { Product } from '@/types'

import CardList from "@/components/cardList";

export default function Home() {
  const { setProductList, productList } = useContext(ProductContext);
  const [ loading , setLoading ] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data =  await getProducts()
      setTimeout(async() => await setProductList(data), 0)
    }
    fetchData().then(() => setLoading(false));

  },[])
  
  return (
    <>
    <CardList products={productList}></CardList>
    </>
  );
}

const getProducts = async () => {
  const response = await fetch('http://localhost:8080/products')
  const movies = await response.json()

  return movies.map((movie: Product) => ({...movie, quantity: 1, priceTotal: movie.price, isSelected: false}))

}
