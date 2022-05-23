import React from 'react';
import Header from '../components/header/Header';
import LatestCollection from '../components/layouts/explore/LatestCollection'
import dataCollections from '../assets/site-data/dataCollections'
import PopularCollection from '../components/layouts/explore/PopularCollection';
import dataTrendingCollections from '../assets/site-data/dataTrendingCollections'
import { Newsletters } from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

const Explore = () => {
  return <div>
    <Header />
      <LatestCollection data={dataCollections} />
      <PopularCollection data={dataTrendingCollections} />
      <Newsletters />
      <Footer />
  </div>;
};

export default Explore;
