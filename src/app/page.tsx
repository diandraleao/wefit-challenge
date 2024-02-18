'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import GetInitialProps from 'next'



export default function Home() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      console.log(data, 'data')
      setProducts(data)
    }

    fetchData();

  },[])

  console.log('products', products)
  
  return (
    <></>
  );
}

const getProducts = async () => {
  const response = await fetch('http://localhost:8080/products')
  const movies = await response.json()
  return movies

}
