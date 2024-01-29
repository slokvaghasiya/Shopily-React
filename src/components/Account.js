import React  from 'react'
import { Link } from 'react-router-dom'
import Style from '../CSS/Account.module.css'

function Account() {

  const Register = () => {
    document.getElementById("LoginForm").style.transform = "translateX(0px)";
    document.getElementById("RegForm").style.transform = "translateX(0px)";
    document.getElementById("Indicator").style.transform = "translateX(150px)";
  }
  const login = () => {
    document.getElementById("LoginForm").style.transform = "translateX(300px)";
    document.getElementById("RegForm").style.transform = "translateX(300px)";
    document.getElementById("Indicator").style.transform = "translateX(-150px)";
  }

  return (
    <div className={Style.account_page}>
      <div className='container'>
        <div className={Style.row}>
          <div className={Style.col_2}>
            <img alt='' src='https://shopilyhub.co/cdn/shop/files/Shopily_Logo.png?v=1685132222&width=3017' />
          </div>
          <div className={Style.col_2}>
            <div className={Style.form_container}>
              <div className={Style.form_btn}>
                <span onClick={login}>Login</span>
                <span onClick={Register}>Register</span>
                <hr id='Indicator' className={Style.Indicator} />
              </div>
              <form id='LoginForm' className={Style.LoginForm} >
                <input type='text' placeholder='Username' name='uname' />
                <input type='password' placeholder='Password' name='password'/>
                <button type='submit' className={Style.btn}>Login</button>
                <Link to={''} >Forgot Password</Link>
              </form>
              <form id='RegForm' className={Style.RegForm} >
                <input type='text' placeholder='Username' name='uname'/>
                <input type='email' placeholder='Enter Your Email Id' name='emailId' />
                <input type='password' placeholder='Password' name='password'/>
                <input type='password' placeholder='Confirm Password' name='cpassword'/>
                <button type='submit' className={Style.btn}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
