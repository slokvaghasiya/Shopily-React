import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import ProductItem from './ProductItem';
import style from '../CSS/Product.module.css'
import { Vortex } from 'react-loader-spinner'

function Product() {

  const productInitial = []
  const [products, setProducts] = useState(productInitial);
  const [result, setResult] = useState(5)

  const handelSearch = async (name) => {
    await axios.get(`https://dummyjson.com/products/search?q=${name}`)
      .then(function (response) {
        setProducts(response.data.products)
        console.log("name", name);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  const getData = async () => {
    await axios.get(`https://dummyjson.com/products?limit=6`)
      .then(function (response) {
        setProducts(response.data.products)
        console.log('data...', response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  const fetchMoreData = () => {
    setTimeout(async () => {
      await axios.get(`https://dummyjson.com/products?limit=6&skip=${result + 1}`)
        .then(function (response) {
          setProducts(products.concat(response.data.products))
          console.log('More data...', response.data.products);

          setResult(prevResult => prevResult + 5);
          console.log('data...', response.data.products.length);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, 1500);
  };
  useEffect(() => {
    getData()

  }, [setProducts])
  
  return (
    <>
      <div className='small-container'>
        <div className={style.row_2}>
          <div className={style.row}>
            <h2>All Products</h2>
            <select className={style.select}>
              <option>Default Sorting</option>
              <option>Sort By Price</option>
              <option>Sort By Rating</option>
              <option>Sort By Sale</option>
            </select>
            <form className="d-flex">
              <input className="form-control me-1" type="search" style={{ "border": "1px solid red" }} placeholder="Search" aria-label="Search" onChange={(e) => handelSearch(e.target.value)} />
            </form>
          </div>
        </div>
        <InfiniteScroll
          dataLength={products}
          next={fetchMoreData}
          hasMore={true}
          style={{ flex:"1",alignItem: "center" }}
          loader={
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']} />
        } >
          <div className={style.row}>
            {
              products.map((productData) => {
                return <ProductItem key={productData.id} products={productData} />
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}

export default Product
