import React from 'react';

const ProductCard = ({ logo, productImg, bestseller, brand, brandDesc, price, rewards, finalPrice }) => {
     return (
          <div className='flex flex-col items-center bg-white rounded-2xl min-w-[270px] w-[270px] mb-1 mx-5 py-3'
               style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
               <div>
                    <img src={logo} />
               </div>
               <div className='py-3 w-[150px] h-[200px]'>
                    <img src={productImg} className='w-full h-full object-cover' />
               </div>
               <div className='border-b border-[#BCBEC080] mb-3 w-full flex items-center justify-center'>
                    <div className='bg-[#D72F47] w-1/2 text-center rounded-t-xl px-3  py-1'>
                         <p className='text-white text-sm'>{bestseller}</p>
                    </div>
               </div>
               <div className='w-full my-3 flex flex-col items-center justify-center'>
                    <h1 className='font-semibold mb-2'>Brand: {brand}</h1>
                    <p className='w-4/5 text-xs whitespace-normal text-center'>{brandDesc}</p>
               </div>
               <div>
                    <h1 className='text-[#1A477A] font-semibold text-lg'><span className='text-xs'>₹</span>{price}</h1>
               </div>
               <div className='bg-darkYellow w-full text-center py-1 my-2'>
                    <p className='text-[#1A477A] font-bold italic text-sm'>+ {rewards} Rewards</p>
               </div>
               <div>
                    <p className='text-[#1A477A] font-semibold text-sm'>Final Price ₹{finalPrice}</p>
               </div>
          </div>
     )
}

export default ProductCard