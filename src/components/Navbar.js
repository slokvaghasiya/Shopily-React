import React from 'react'
import { Link } from 'react-router-dom'
import style from '../CSS/Navbar.module.css'
import {TfiMenu} from 'react-icons/tfi'
import {FaShoppingCart} from 'react-icons/fa'

function Navbar() {
  
  const toggle = ()=>{
    // document.getElementById('MenuItems').style.maxHeight = "0px";
      if (document.getElementById('MenuItems').style.maxHeight === '0px') {
        document.getElementById('MenuItems').style.maxHeight = "200px"
      } else {
        document.getElementById('MenuItems').style.maxHeight = "0px"
      }
  }
  
  return (
    <div className={style.header}>
      <div className='container'>
        <div className={style.navbar}>
          <div className='logo'>
            <Link className={style.linktext} to='/'><h3>Shopily</h3></Link>
          </div>
          <nav>
            <ul id='MenuItems'>
              <li><Link className={style.linktext} to={'/'}>Home</Link></li>
              <li><Link className={style.linktext} to={'/Product'}>Product</Link></li>
              <li><Link className={style.linktext} to={'/'}>About</Link></li>
              <li><Link className={style.linktext} to={'/'}>Contact</Link></li>
              <li><Link className={style.linktext} to={'/Account'}>Account</Link></li>
            </ul>
            <Link to={'Cart'}><FaShoppingCart style={{"color":"black","fontSize":"27px"}} /></Link>
            <TfiMenu className={style.menuIcon} onClick={toggle} />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
