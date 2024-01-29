import React, { useState, useContext } from 'react'
import productContext from '../Context/products/productContext'
import style from '../CSS/ProductDetail.module.css'
import { Link } from 'react-router-dom'

function ProductDetail() {

    const context = useContext(productContext);
    const {oneProduct,addToCart} = context;
    
    const [imgSrc, setImg] = useState(oneProduct.thumbnail)

    const changeImg = (e) => {
        setImg(e.target.src)
    }
    const handelClick = ()=>{
        addToCart(oneProduct)
    }
    return (
        <div className='small-container' >
            <div className={style.single_product} >
                <div className={style.row} >
                    <div className={style.col_2}>
                        {/* main Image */}
                        <img src={imgSrc} alt='' style={{ "width": "100%" }} id='productImg' ></img>
                        <div className={style.small_img_row} >
                        {
                        oneProduct.images.map((img)=>{
                            return (
                                <div className={style.small_img_col} key={img}>
                                <img src={img} alt='' style={{ "width": "100%", "boxShadow": "0px 0px 20px" }} className={style.small_img} onClick={changeImg} />
                            </div>
                            )
                        })
                        }
                        </div>
                    </div>
                    <div className={style.col_2} >
                        <h3>{oneProduct.brand}</h3>
                        <h1>{oneProduct.title}</h1>
                        <h4>&#x20B9;{oneProduct.price}</h4>
                        <h4>Available Stock: {oneProduct.stock}</h4>
                        <Link to={'/Cart'} className='btn' onClick={handelClick} >Add To Cart</Link>
                        <h3>Product Details <i className="fa fa-ident"></i></h3>
                        <p>{oneProduct.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
