import React, { useContext } from 'react'
import style from '../CSS/Product.module.css'
import productContext from '../Context/products/productContext'
function ProductItem(props) {

    const { products } = props
    const context = useContext(productContext);
    const { getOneProduct } = context;
    const checkProduct = () => {
        getOneProduct(products.id);
    }

    return (
        <>
            <div className={style.col_4}>
                <img src={products.thumbnail} alt='' onClick={checkProduct} ></img>
                <h4>{products.title}</h4>
                <div className='rating'>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button type="button" key={index} >
                                <i className="fa fa-star"></i>
                            </button>
                        );
                    })}
                    </div>
                <p>&#x20B9;{products.price}</p>
            </div>
        </>
    )
}

export default ProductItem
