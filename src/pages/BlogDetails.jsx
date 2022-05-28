import React, { useEffect, useState } from "react"
import { Link,useParams } from 'react-router-dom'
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import avt from '../assets/images/avatar/avt-12.jpg'



const BlogDetails = () => {
    
    const [blogData, setBlogData] = useState([])   
    const [imageData, setImageData] = useState([]) 
    const [CatData, setCategoryData] = useState([]) 
    const slug_data       = useParams();
    const slug            = slug_data.slug;
    const STRAPI_API      = process.env.REACT_APP_STRAPI_API;
    const STRAPI_BASE_URL = "https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site";
    const API_ENDPOINT    = `https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site/add-articles/${slug}`;
    const CATEGORY_ENDPOINT    = "https://www.develop-sr3snxi-l2plkcrdxzklc.us-3.platformsh.site/categories";

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
            setBlogData(data);
            setImageData(data.Thumbnail.url);
          })
          .catch(error => {
            console.error(error)
          }
            );
      }

      const fetchCategory = () => {
        fetch(CATEGORY_ENDPOINT, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': STRAPI_API
            },
          })
          .then(response => response.json())
          .then(data => {    
            setCategoryData(data);
          })
          .catch(error => {
            console.error(error)
          }
            );
      }
    
      useEffect(() => {
        fetchData()
        fetchCategory()
      }, [])

      const blogdata = blogData; 
      const image = imageData; 
      console.log("Cat Data:",CatData)

  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Blog Details</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Blog Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="tf-section post-details">
        <div className="container">
            <div className="row">      
                <div className="col-lg-8 col-md-12">
                    <article className="blog-details">
                        <div className="post-media">
                            <img src={`${STRAPI_BASE_URL}${image}`} loader="lazy" alt={blogdata.Title} />
                            <div className="meta">
                                <div className="item author">
                                    <Link to="#">{blogdata.Author}</Link>
                                </div>
                                <div className="item date">
                                    <Link to="#">{blogdata.Date}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="post-content">
                            <h1 className="post-title">{blogdata.Title}</h1>
                            <p>{blogdata.Content}</p>
                        </div>
                        <blockquote className="block-quote">
                            <h4>{blogdata.Quotes}</h4>
                            <div className="author">{blogdata.Author}</div>
                        </blockquote>
                    </article>
                    <div className="post-details">
                        <div className="details-left">
                            <div className="wg-title style-2">
                                Popular Tags
                            </div>
                            <div className="wg-tags style-2">
                                <ul>
                                    <li className="active"><Link to="#">Crypto</Link></li>
                                    <li><Link to="#">Bitcoin</Link></li>
                                    <li><Link to="#">ICO Landing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="details-right">
                            <div className="wg-title style-2">
                                Share Post
                            </div>
                            <div className="widget-social style-3">
                                <ul>
                                    <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="post-author style-2">
                        <div className="avatar">
                            <img src={avt} alt="Maximo" />
                        </div>
                        <div className="content">
                            <h4><Link to="#">Herbert N. Johnson</Link></h4>
                            <div className="job">Author</div>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur must explain to you how all this mistaken idea of denouncing</p>
                            <div className="widget-social style-4">
                                <ul>
                                    <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="widget item widget-post style-2">
                        <div className="wg-title style-2">
                            Related News
                        </div>
                        <ul className="post-new">
                           
                                    <li key="">
                                        <div className="post-img">
                                            <img src="" alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <Link to="/blog-details" className="post-date"><i
                                                    className="far fa-calendar-week"></i> Item</Link>
                                            <h6 className="title"><Link to="/blog-details">Title</Link></h6>
                                        </div>
                                    </li>
                             
                        </ul>
                    </div> 
                </div>



                <div className="col-lg-4 col-md-12">
                    <aside className="side-bar">
                        <div className="widget wg-search">
                            <form action="#" method="get" role="search" className="search-form">
                                <input type="search" className="search-field" placeholder="Search" name="s"
                                    title="Search for" required />
                                <button className="search search-submit" type="submit" title="Search"></button>
                            </form>
                        </div>
                        
                        <div className="widget item wg-category">
                            <div className="wg-title">
                                Category
                            </div>
                            {CatData.length > 0 && ( 
                         <>
                         {CatData.map(data => (
                            <ul style={{paddingBottom:'10px'}}>
                            
                                <li key={data.id}><Link to="#"><span>{data.Name}</span><span>20</span></Link></li>
                                    
                            </ul>
                            ))} </>

                            )}
                        </div>
                      
                        <div className="widget item widget-post style-3">
                            <div className="wg-title">
                                Recent News
                            </div>
                            <ul className="post-new">
                                        <li key="">
                                            <div className="post-img">
                                                <img src="" alt="Post New" />
                                            </div>
                                            <div className="post-content">
                                                <Link to="/blog-details" className="post-date"><i
                                                        className="far fa-calendar-week"></i>Item</Link>
                                                <h6 className="title"><Link to="/blog-details">Title</Link></h6>
                                            </div>
                                        </li>
                            </ul>
                        </div>

                        <div className="widget item wg-tags">
                            <div className="wg-title">
                                Popular Tags
                            </div>
                            <ul>
                                <li key="" className=""><Link to="#">Tag</Link></li>
                            
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
    <Newsletters />
    <Footer />
  </div>;
};

export default BlogDetails;
