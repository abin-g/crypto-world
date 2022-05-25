import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import LatestCollection from '../components/layouts/explore/LatestCollection'
import dataCollections from '../assets/site-data/dataCollections'

const Home = () => {
    const [users, setUsers] = useState([])   
    const [isLoading, setIsLoading] = useState(false)
    const STRAPI_BASE_URL = process.env.REACT_APP_STRAPI_APIURL;
    
    const fetchData = () => {
        setIsLoading(true)
        fetch(`${STRAPI_BASE_URL}/api/add-articles?populate=*`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setIsLoading(false)
            setUsers(data)
          })
      }
    

      useEffect(() => {
        fetchData()
      }, [])

      const blodata = users.data; console.log(blodata)
      if (!blodata) return null;

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
        
                    {blodata.length > 0 && ( 
                        <>
                        {blodata.slice(0, 6).map(data => (
                            <div key={data.id} className="col-lg-4 col-md-6">
                                <article className="sc-card-article">
                                    <div className="card-media">
                                        <Link to="/blog-details"><img src={`${STRAPI_BASE_URL}${data.attributes.Thumbnail.data.attributes.url}`} loader="lazy" style={{height:'240px'}} alt="Maximo" /></Link>
                                    </div>
                                    <div className="content">
                                        <div className="meta-info">
                                            <div className="item author">
                                                <Link to="/authors">{data.attributes.Author}</Link>
                                            </div>
                                            <div className="item date">{data.attributes.createdAt}</div>
                                        </div>
                                        <div className="text-article">
                                            <h5><Link to="/blog-details">{data.attributes.Title}</Link></h5>
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
