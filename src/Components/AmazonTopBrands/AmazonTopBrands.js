import React from 'react';

//Images
import subHero1 from "../../Images/subHero1.png";
import subHero2 from "../../Images/subHero2.png";

const AmazonTopBrands = () => {
     return (
          <div className='py-10'>
               <div className='flex items-center justify-center'>
                    <svg width="70" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M0.718099 3.55078C0.718099 5.02354 1.91201 6.21745 3.38477 6.21745C4.85752 6.21745 6.05143 5.02354 6.05143 3.55078C6.05143 2.07802 4.85752 0.884115 3.38477 0.884115C1.91201 0.884115 0.718099 2.07802 0.718099 3.55078ZM76.2061 3.05078H3.38477V4.05078H76.2061V3.05078Z" fill="#263238" />
                    </svg>
                    <h1 className='font-ElMessiri text-2xl font-bold text-[#1A477A] mx-5'>Amazon Top Brands</h1>
                    <svg width="70" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#263238" />
                    </svg>
               </div>

               <div className='flex items-center justify-around mt-5 px-5'>
                    <div className='w-[32%]'>
                         <img src={subHero1} className='w-full h-full' />
                    </div>
                    <div className='w-[32%]'>
                         <img src={subHero2} className='w-full h-full' />
                    </div>
                    <div className='w-[32%]'>
                         <img src={subHero1} className='w-full h-full' />
                    </div>
               </div>
          </div>
     )
}

export default AmazonTopBrands