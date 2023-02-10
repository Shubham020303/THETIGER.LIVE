import React from 'react'

//Components
import BrandPageHero from '../../Components/BrandPageHero/BrandPageHero';
import BrandPageTabs from '../../Components/BrandPageTabs/BrandPageTabs';
import BrandPageFilters from '../../Components/BrandPageFilters/BrandPageFilters';

const Brandpage = () => {
     return (
          <div>
               <BrandPageHero />
               <div className='flex md:justify-between md:gap-4 gap-0'>
                    <BrandPageFilters />
                    <BrandPageTabs />
               </div>
          </div>
     )
}

export default Brandpage