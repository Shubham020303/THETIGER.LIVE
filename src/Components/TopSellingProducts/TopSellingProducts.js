import React from 'react';

//Images
import AmazonBlack from "../../Images/AmazonBlack.png";
import product from "../../Images/product.png";

//Components
import ProductCard from '../ProductCard/ProductCard';


const Products = [
     {
          logo: AmazonBlack,
          productImg: product,
          bestseller: "#4 BESTSELLER",
          brand: "Chemist At Play",
          brandDesc: "Chemist at Play Exfoliating Body Wash for Dry, Rough skin.",
          price: "399/-",
          rewards: "42",
          finalPrice: "357"
     },
     {
          logo: AmazonBlack,
          productImg: product,
          bestseller: "#4 BESTSELLER",
          brand: "Chemist At Play",
          brandDesc: "Chemist at Play Exfoliating Body Wash for Dry, Rough skin.",
          price: "399/-",
          rewards: "42",
          finalPrice: "357"
     },
     {
          logo: AmazonBlack,
          productImg: product,
          bestseller: "#4 BESTSELLER",
          brand: "Chemist At Play",
          brandDesc: "Chemist at Play Exfoliating Body Wash for Dry, Rough skin.",
          price: "399/-",
          rewards: "42",
          finalPrice: "357"
     },
     {
          logo: AmazonBlack,
          productImg: product,
          bestseller: "#4 BESTSELLER",
          brand: "Chemist At Play",
          brandDesc: "Chemist at Play Exfoliating Body Wash for Dry, Rough skin.",
          price: "399/-",
          rewards: "42",
          finalPrice: "357"
     },
     {
          logo: AmazonBlack,
          productImg: product,
          bestseller: "#4 BESTSELLER",
          brand: "Chemist At Play",
          brandDesc: "Chemist at Play Exfoliating Body Wash for Dry, Rough skin.",
          price: "399/-",
          rewards: "42",
          finalPrice: "357"
     },
]

const TopSellingProducts = () => {

     const slideProductsLeft = () => {
          var slider = document.getElementById('productSlider');
          slider.scrollLeft = slider.scrollLeft - 235;
     };

     const slideProductsRight = () => {
          var slider = document.getElementById('productSlider');
          slider.scrollLeft = slider.scrollLeft + 235;
     };

     return (
          <div className='py-5 md:py-10'>
               <div className='flex items-center justify-center'>
                    <svg width="40" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M0.718099 3.55078C0.718099 5.02354 1.91201 6.21745 3.38477 6.21745C4.85752 6.21745 6.05143 5.02354 6.05143 3.55078C6.05143 2.07802 4.85752 0.884115 3.38477 0.884115C1.91201 0.884115 0.718099 2.07802 0.718099 3.55078ZM76.2061 3.05078H3.38477V4.05078H76.2061V3.05078Z" fill="#263238" />
                    </svg>
                    <h1 className='font-ElMessiri text-md font-bold text-[#1A477A] mx-5 md:text-2xl'>Top Selling Beauty Products</h1>
                    <svg width="40" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#263238" />
                    </svg>
               </div>

               <div className='flex items-center justify-around my-5 px-5'>
                    <button className='bg-darkYellow rounded-full flex items-center justify-center text-center' onClick={slideProductsLeft}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='md:w-[30px] md:h-[30px]'>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                   fill="#1A477A" stroke="none">
                                   <path d="M440 665 l-165 -165 165 -165 c130 -131 167 -162 178 -153 11 9 -17 42 -140 165 l-153 153 153 153 c123 123 151 156 140 165 -11 9 -48 -22 -178 -153z" />
                              </g>
                         </svg>
                    </button>
                    <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar flex items-center' id='productSlider'>

                         {Products.map(product => (
                              <ProductCard
                                   logo={product.logo}
                                   productImg={product.productImg}
                                   bestseller={product.bestseller}
                                   brand={product.brand}
                                   brandDesc={product.brandDesc}
                                   price={product.price}
                                   rewards={product.rewards}
                                   finalPrice={product.finalPrice}
                              />
                         ))}

                    </div>
                    <button className='bg-darkYellow rounded-full flex items-center justify-center' onClick={slideProductsRight}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='md:w-[30px] md:h-[30px]'>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                   fill="#1A477A" stroke="none">
                                   <path d="M382 818 c-10 -10 19 -43 140 -165 l153 -153 -153 -153 c-123 -123 -151 -156 -140 -165 11 -9 48 22 178 153 l165 165 -165 165 c-132 132 -168 163 -178 153z" />
                              </g>
                         </svg>
                    </button>
               </div>

               <div className='flex items-center justify-center'>
                    <button className='bg-transparent border-[#1A477A] border-1 py-1 px-3 text-sm text-[#1A477A] transition-all hover:bg-darkBlue hover:text-white md:py-3 md:px-5 md:text-base'>
                         See All Products
                    </button>
               </div>
          </div>
     )
}

export default TopSellingProducts