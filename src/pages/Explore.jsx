import React from 'react';
import Header from '../components/header/Header';
import PopularCollection from '../components/layouts/explore/PopularCollection';
import dataTrendingCollections from '../assets/site-data/dataTrendingCollections'
import { Newsletters } from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Explore = () => {
  return <div>
    <Header />
      <PopularCollection data={dataTrendingCollections} />
      <Newsletters />
      <Footer />
  </div>;
};

export default Explore;
