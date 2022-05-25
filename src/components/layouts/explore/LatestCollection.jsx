import React from 'react';
import { Link } from 'react-router-dom'

const LatestCollection = props => {
 
    const data = props.data
  return (
    <section className="tf-section our-latest-page">
    <div className="container">
        <div className="row">
            {
                data.slice(0,3).map((item,index)=> (
                    <div key={index} className={item.col}>
                    <div className="sc-product-item style-4">
                        <div className="product-img flex">
                            <div className="img-left">
                                <img src={item.img} alt="Maximo" />
                                <label>{item.tags}</label>
                            </div>
                            <div className="img-right">
                                <div className="top-img flex">
                                    <img src={item.img1} alt="Maximo" />
                                    <img src={item.img2} alt="Maximo" />
                                </div>
                                <div className="bottom-img">
                                    <img src={item.img3} alt="Maximo" />
                                </div>
                            </div>
                        </div>
                        <div className="product-content">
                            <h5 className="title"><Link to="/item-details">{item.title}</Link> </h5>
                            <div className="product-author flex mg-bt-0">
                                <div className="left flex">
                                    <div className="avatar">
                                        <img src={item.imgAuthor} alt="Maximo" />
                                    </div>
                                    <div className="infor">
                                        <div className="author-name"><Link to="/authors">{item.name}</Link>
                                        </div>
                                        <span>Creator</span>
                                    </div>
                                </div>
                                <div className="button-wishlish">
                                    <Link to="#" className=" wishlish"><i className="fas fa-heart"></i></Link>
                                    <span>{item.wishlist}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }

        </div>
    </div>
</section>
    );
};

export default LatestCollection;
