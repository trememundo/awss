'use client'

import HeroBanner from '../(components)/HeroBanner';
import Features from '../(components)/Features';
import CuratedPicks from '../(components)/CuratedPicks';
import Brands from '../(components)/Brands';
import Footer from '../(components)/Footer';
import FeaturedProducts from '../(components)/FeaturedProducts';
import Suscribe from '../(components)/Suscribe';
import Head from 'next/head';


const Page = () => {
  return (
    <div>
     
      <Head> 
        <title>NOSTRA - Fashion & Lifestyle</title>
        <meta name="description" content="Discover the latest trends in fashion and lifestyle. Exclusive collections and fast delivery." />
        <meta name="keywords" content="fashion, lifestyle, shopping, curated picks, new arrivals, brands" />
        <meta name="author" content="NOSTRA" />
        </Head>

      <HeroBanner />   
      <Brands /> 
      <Features />   
      <CuratedPicks />
      <FeaturedProducts/>
      <HeroBanner />
      <Suscribe/>    
      <Footer />
    </div>
  );
};

export default Page;
