import React from 'react';

const ProductCard = ({ logo, productImg, bestseller, brand, brandDesc, price, rewards, finalPrice }) => {
     return (
          <div className='flex flex-col items-center bg-white rounded-2xl min-w-[210px] w-[210px] my-3 mx-3 py-3 md:min-w-[270px] md:mx-5 md:w-[270px]'
               style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>

               {/* Brand Image Div Starts */}

               <div className='w-[100px] md:w-[140px]'>
                    <img src={logo} className='w-full h-full object-contain' />
               </div>

               {/* Brand Image Div Ends */}

               {/* Product Image Div Starts */}

               <div className='my-3 w-[100px] min-w-[100px] min-h-[100px] md:w-[150px] md:min-w-[150px] md:min-h-[150px]'>
                    <img src={productImg} className='w-full h-full object-cover' />
               </div>

               {/* Product Image Div Ends */}

               {/* Bestseller Div Starts */}

               <div className='border-b border-[#BCBEC080] mb-1 w-full flex items-center justify-center md:mb-3'>
                    <div className='bg-[#D72F47] w-4/5 text-center rounded-t-xl px-3 py-1 md:w-1/2'>
                         <p className='text-white text-xs md:text-sm'>{bestseller}</p>
                    </div>
               </div>

               {/* Bestseller Div Ends */}

               {/* Brand Name & Description Div Starts */}

               <div className='w-full my-1 flex flex-col items-center justify-center md:my-3'>
                    <h1 className='font-medium max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap mb-1 md:font-semibold md:mb-2'>Brand: {brand}</h1>
                    <p className='w-[85%] text-xs max-w-[200px] text-ellipsis overflow-hidden whitespace-nowrap text-justify md:text-center '>{brandDesc}</p>
               </div>

               {/* Brand Name & Description Div Ends */}

               {/* Price Div Starts */}

               <div>
                    <h1 className='text-[#1A477A] font-semibold text-lg'><span className='text-xs'>₹</span>{price}</h1>
               </div>

               {/* Price Div Ends */}

               {/* Rewards Div Starts */}

               <div className='bg-darkYellow w-full text-center py-1 my-2'>
                    <p className='text-[#1A477A] font-bold italic text-sm'>+ {rewards} Rewards</p>
               </div>

               {/* Rewards Div Ends */}

               {/* Final Price Div Starts */}

               <div>
                    <p className='text-[#1A477A] font-semibold text-sm'>Final Price ₹{finalPrice}</p>
               </div>

               {/* Final Price Div Ends */}

          </div>
     )
}

export default ProductCard