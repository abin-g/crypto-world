import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import LatestCollection from '../components/layouts/explore/LatestCollection'
import dataCollections from '../assets/site-data/dataCollections'

const Home = () => {
    const [blogData, setBlogData] = useState([])   
    const [isLoading, setIsLoading] = useState(false)
    const STRAPI_API      = process.env.REACT_APP_STRAPI_API;
    const STRAPI_BASE_URL = "https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site";
    const API_ENDPOINT    = "https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site/add-articles?_limit=6"


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

      const blogdata = blogData; console.log("daaa",blogdata)
      if (!blogdata) return null;

    return <div>
        <Header />
        <LatestCollection data={dataCollections} />
        <div className="tf-section sc-card-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{marginBottom:'50px'}}>
                        <div className="sc-heading style-2 has-icon">
                            <div className="content-left">

                                <div className="inner">
                                    <div className="group">
                                        <div className="icon"><i className="ripple"></i></div>
                                        <h3>Featured Articles</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLoading && <p><center>Loading...</center></p>}
                    {blogdata.length > 0 && ( 
                         <>
                         {blogdata.map(data => (
                             <div key={data.id} className="col-lg-4 col-md-6">
                                 <article className="sc-card-article">
                                     <div className="card-media">
                                         <Link to="/blog-details"><img src={`${STRAPI_BASE_URL}${data.Thumbnail.url}`} loader="lazy" style={{height:'240px'}} alt={data.alternativeText} /></Link>
                                     </div>
                                     <div className="content">
                                         <div className="meta-info">
                                             <div className="item author">
                                                 <Link to="/authors">{data.Author}</Link>
                                             </div>
                                             <div className="item date">{data.Date}</div>
                                         </div>
                                         <div className="text-article">
                                             <h5><Link to="/blog-details">{data.Title}</Link></h5>
                                         </div>
                                         <Link to="/blog-details"
                                             className="sc-button btn-bordered-white style letter"><span>Read More</span></Link>
                                     </div>
                                 </article>
                             </div>

                        ))} </>

                        )}
                       
                </div>
            </div>
        </div>
        <Newsletters />
        <Footer />
    </div>;
};

export default Home;
