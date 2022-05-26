import { constants } from "ethers";
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const PopularCollection = () => {

    const [blogData, setBlogData] = useState([]) 
    const [visible , setVisible] = useState(9);  
    const [isLoading, setIsLoading] = useState(false)
    const STRAPI_API      = process.env.REACT_APP_STRAPI_API;
    const STRAPI_BASE_URL = "https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site";
    const API_ENDPOINT    = "https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site/add-articles";

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    const fetchData = () => {
        fetch(API_ENDPOINT, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': STRAPI_API
            },
          })
          .then(response => response.json())
          .then(data => {
            setIsLoading(false)     
            setBlogData(data);
          })
          .catch(error => {
            console.error(error)
          }
            );
      }
    
      useEffect(() => {
        fetchData()
      }, [])

      const blogdata = blogData; //console.log("daaa",blogdata)
      if (!blogdata) return null;


  return (
    <section className="tf-section trendy-colection-page style-2">
        <div className="container">
            <div className="row">
            {isLoading && <p><center>Loading...</center></p>}
                    {blogdata.length > 0 && ( 
                         <>
                         {blogdata.map(data => ( 
                        <div key={data.id} className='col-lg-4 col-md-6 col-12'>
                            <div className="sc-product-item style-2">
                                    <div className="product-img">
                                        <img src={`${STRAPI_BASE_URL}${data.Thumbnail.url}`} alt={data.Title} style={{height:'275px'}} className="nft-image" />
                                        <Link to="/connect-wallet"
                                            className="sc-button style letter"><span>Buy Article</span></Link>
                                        <label>TECHNOLOGY</label>
                                    </div>
                                    <div className="product-content">
                                        <h5 className="title"><Link to="/item-details">{data.Title}</Link> </h5>
                                        <div className="product-author flex">
                                            <div className="avatar">
                                                <img src={`${STRAPI_BASE_URL}${data.Thumbnail.url}`} alt="Maximo" loader="lazy"/>
                                            </div>
                                            <div className="infor">
                                                <div className="author-name"><Link to="/authors">{data.Author}</Link></div>
                                                <span>Creator</span>
                                            </div>
                                        </div>
                                        <div className="product-price flex">
                                            <div className="title">Own this Blog @</div>
                                            <div className="price">
                                                <span>100 ETH</span>
                                                <span> = (200 INR)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                 ))} </>

                 )}


                {
                    visible < blogdata.length && 
                    <div className="col-md-12">
                        <button id="loadmore" className=" sc-button style letter style-2" onClick={showMoreItems}><span>Explore More</span>
                        </button>
                     </div>
                }
            </div>
        </div>
    </section>
    );
};

export default PopularCollection;
