import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import dataBlog from '../assets/site-data/dataBlog';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Home = () => {

  return <div>
    <Header />
    <div className="tf-section sc-card-blog">
        <div className="container">
            <div className="row">
                {
                    dataBlog.map((item,index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <article className="sc-card-article">
                                <div className="card-media">
                                    <Link to="/blog-details"><img src={item.img} alt="Maximo" /></Link>
                                </div>
                                <div className="content">
                                    <div className="meta-info">
                                        <div className="item author">
                                            <Link to="/authors">{item.author}</Link>
                                        </div>
                                        <div className="item date">{item.time}</div>
                                    </div>
                                    <div className="text-article">
                                        <h5><Link to="/blog-details">{item.title}</Link></h5>
                                    </div>
                                    <Link to="/blog-details"
                                        className="sc-button btn-bordered-white style letter"><span>Read More</span></Link>
                                </div>
                            </article>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
    <Newsletters />
    <Footer />
  </div>;
};

export default Home;
