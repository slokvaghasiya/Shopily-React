import React, { useContext } from 'react'
import Style from '../CSS/Cart.module.css'
import productContext from '../Context/products/productContext'

function Cart() {

  const context = useContext(productContext);
  const { cartData, deleteCart } = context;

  const deleteProduct = (e)=>{
    deleteCart(cartData.id)
  }
  
  return (
    <>
      <div className='small-container'>
        <div className={Style.cart_page}>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </tbody>
          </table>
          {
            cartData.map((item) => {
              return (
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className={Style.cart_info}>
                          <img alt='' src={item.thumbnail} />
                          <div className='product-info'>
                            <p>{cartData.title}</p>
                            <small>Price : &#x20B9;{item.price}</small>
                            <br></br>
                            <i className="fa-solid fa-trash" onClick={deleteProduct}></i><h6 onClick={deleteProduct}>Remove</h6>
                          </div>
                        </div>
                      </td>
                      <td><input type='number' defaultValue={1} min={1} ></input></td>
                      <td>&#x20B9;{item.price}</td>
                    </tr>
                  </tbody>
                </table>
              )
            })
          }
          <div className={Style.total_price}>
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>&#x20B9;100</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>&#x20B9;100</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>&#x20B9;200</td>
                </tr>
                <tr>
                  <td><a href="/" className="btn"> Check Out &#8594;</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
