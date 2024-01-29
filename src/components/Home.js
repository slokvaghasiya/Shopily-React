import React from 'react'
import { Link } from 'react-router-dom'
import style from '../CSS/Home.module.css'

function Home() {
    return (
        <>
            <div className={style.header}>
                <div className='container'>
                    <div className={style.row}>
                        <div className={style.col_2}>
                            <h1>Give Your Workout <br /> A New style!</h1>
                            <p>Success isn't about greatness. It's about consistency.
                                consistent <br /> hard work gains success. Greatness will come.
                            </p>
                            <Link to="/Product" className="btn">Explore Now  &#8594;</Link>
                        </div>
                        <div className={style.col_2}>
                            <img alt='' src="https://shopilyhub.co/cdn/shop/files/Shopily_Logo.png?v=1685132222&width=3017" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.testimonial}>
                <div className='small-container'>
                    <div className={style.row}>
                        <div className={style.col_3}>
                            <i className="fa fa-quote-left"></i>
                            <p>Nike has established itself as a global brand and household name, with a strong presence in sportswear and a reputation for quality products</p>
                            <div className='rating'>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                            <img alt='' src='https://image.cnbcfm.com/api/v1/image/101341880-159543969.jpg?v=1532564551'></img>
                            <h3>Phil Knight</h3>
                        </div>
                        <div className={style.col_3}>
                            <i className="fa fa-quote-left"></i>
                            <p>It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike.</p>
                            <div className='rating'>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                            <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GwAZFRFfHF_TbHnd8TPV6El4rP8wEutcjw&usqp=CAU'></img>
                            <h3>Adi Dassler</h3>
                        </div>
                        <div className={style.col_3}>
                            <i className="fa fa-quote-left"></i>
                            <p>Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Brand.</p>
                            <div className='rating'>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                            <img alt='' src='https://qph.cf2.quoracdn.net/main-qimg-b74d469196e66e5abf8d016382976d76-lq'></img>
                            <h3>Air Jordan</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.brands}>
                <div className='small-container'>
                    <div className={style.row}>
                        <div className={style.col_5}>
                            <img alt='' src='https://images.firstpost.com/wp-content/uploads/2021/08/XiaomiLogoNew2.jpg'></img>
                        </div>
                        <div className={style.col_5} style={{ mixBlendMode: 'hard-light' }} >
                            <img alt='' src='https://www.pngitem.com/pimgs/m/59-591019_apple-logo-png-photos-apple-logo-and-name.png'></img>
                        </div>
                        <div className={style.col_5}>
                            <img alt='' src='https://assets.gadgets360cdn.com/pricee/assets/brand/og-oppo-logo.png'></img>
                        </div>
                        <div className={style.col_5}>
                            <img alt='' src='https://liliputing.com/wp-content/uploads/2010/12/asus-logo.jpg'></img>
                        </div>
                        <div className={style.col_5}>
                            <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/640px-Coca-Cola_logo.svg.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
