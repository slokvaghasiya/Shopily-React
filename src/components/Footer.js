import React from 'react'
import Style from '../CSS/footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className={Style.footer}>
      <div className='container'>
        <div className={Style.row}>
          <div className={Style.footer_col_1}>
            <h3 className={Style.h3}>Download Our App</h3>
            <p className={Style.p}>Download Our App For Android And ios Mobile Phone</p>
            <div className={Style.app_logo}>
              <i className="fa-brands fa-google-play fa-fade   fa-xl"  ></i>Play Store
              <br></br>
              <i className="fa-brands fa-app-store-ios fa-fade fa-xl"></i>Apple Store
            </div>
          </div>
          <div className={Style.footer_col_2}>
            <h1>Shopily</h1>
            <p className={Style.p}>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
          </div>
          <div className={Style.footer_col_3}>
            <h3 className={Style.h3}>Useful Links</h3>
            <ul className={Style.ul} >
              <li className={Style.li}>Coupons</li>
              <li className={Style.li}>Blog Post</li>
              <li className={Style.li}>Return Policy</li>
              <li className={Style.li}>Join Affiliate</li>
            </ul>
          </div>

          
          <div className={Style.footer_col_4}>
            <h3 className={Style.h3}>Follow Us</h3>
            <ul>
              <Link className={Style.linkText} to='https://www.facebook.com/login/' ><li>Facebook</li> </Link>
              <Link className={Style.linkText} to='https://twitter.com/' ><li>Twitter</li></Link>
              <Link className={Style.linkText} to='https://www.instagram.com/accounts/login/?__coig_restricted=1' ><li>Instagram</li></Link>
              <Link className={Style.linkText} to='https://in.pinterest.com/login/' ><li>Pinterest</li></Link>
            </ul>
          </div>
        </div>
        <hr className={Style.hr}/>
        <p className={Style.copyright}>Copyright-2022 | Wokiee</p>
      </div>
    </div>
  )
}

export default Footer
