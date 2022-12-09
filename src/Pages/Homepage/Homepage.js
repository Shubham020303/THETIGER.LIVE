import React from 'react';

//Components
import Hero from '../../Components/Hero/Hero'
import TopCashbackStores from '../../Components/TopCashbackStores/TopCashbackStores';
import TopCategories from '../../Components/TopCategories/TopCategories';
import TopSellingProducts from '../../Components/TopSellingProducts/TopSellingProducts';
import AmazonTopBrands from '../../Components/AmazonTopBrands/AmazonTopBrands';
import TopSellingMobilePhone from '../../Components/TopSellingMobilePhone/TopSellingMobilePhone';

const Homepage = () => {
     return (
          <div>
               <Hero />
               <TopCategories />
               <TopCashbackStores />
               <TopSellingProducts />
               <AmazonTopBrands />
               <TopSellingMobilePhone />
          </div>
     )
}

export default Homepage