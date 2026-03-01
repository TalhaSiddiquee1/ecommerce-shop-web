import React from 'react';
import Container from '@/components/Container';
import HomeBanner from '@/components/HomeBanner';
import ProductGrid from '@/components/ProductGrid';
import HomeCategories from '@/components/HomeCategories';
import { getCategories } from '@/sanity/queries';

const Home = async() => {
  const categories = await getCategories(6);
  console.log(categories);
  return (
    <Container>
      <HomeBanner />
      <div className='py-10'>
        <ProductGrid />
        <HomeCategories/>
      </div>
    </Container>
  );
};

export default Home;
