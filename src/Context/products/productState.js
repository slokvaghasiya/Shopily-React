import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productContext from "./productContext";


const ProductState = (props) => {

    const navigate = useNavigate();

    const productInitial = []
    const cartInitial = []

    const [products, setProducts] = useState(productInitial);
    const [oneProduct, setOneProduct] = useState();
    const [cartData, setCartData] = useState(cartInitial);

    const getAllProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=10`, {
            method: "GET",
        })
        const json = await res.json();
        setProducts(json.products)
        console.log("data...........", json);

    }

    const searchProduct = async (name) => {
        await fetch(`https://dummyjson.com/products/search?q=${name}`, {
            method: 'GET'
        }).then((res) => {
            // const json = res.json();
        }).then(data => {
            console.log("one data", data);
            setProducts(data)
        })
    }

    const getOneProduct = async (id) => {
        await fetch(`https://dummyjson.com/products/${id}`, {
            method: "GET"
        }).then((res) => {
            const json = res.json();
            return json
        }).then(data => {
            console.log("one data", data);
            setOneProduct(data)
            navigate('/Product-detail')
        })
    }

    
    const addToCart = (product) => {
        setCartData(cartData.concat(product))
    }
    const deleteCart = (id) =>{
        const newCart = cartData.filter((product)=>{
            return product.id !== id
        })
        setCartData(newCart)
    }
    return (
        <productContext.Provider value={{ products, oneProduct, cartData, getAllProduct, getOneProduct, searchProduct, addToCart ,deleteCart}}>
            {props.children}
        </productContext.Provider>
    )

}


export default ProductState;