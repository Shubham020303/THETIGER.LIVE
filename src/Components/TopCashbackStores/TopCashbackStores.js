import React from 'react';

//Images
import AjioWhite from "../../Images/Ajio_White.png";
import Myntra from "../../Images/Myntra.png";
import mamaearth from "../../Images/mamaearth.png";
import puma from "../../Images/puma.png";
import FlipkartWhite from "../../Images/Flipkart_White.png";
import PharmeasyWhite from "../../Images/Pharmeasy_White.png";
import Dell from "../../Images/Dell.png";
import Firstcry from "../../Images/Firstcry.png";
import Nykaa from "../../Images/Nykaa.png";
import Amazon from "../../Images/Amazon.png";

const Stores = [

     {
          upperBGStyle: { background: "#2E4255" },
          upperShapeTextColor: "black",
          upperShapeBGStyle: { background: "#FFFFFF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#2E4255" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#2E4255" },
          upperImg: AjioWhite,
          upperBorderColor: { borderColor: "#FFFFFF" },
          upperTextColor: { color: "#FFFFFF" },
          lowerBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #318C74 0%, #0E8F6D 100%)" },
          lowerShapeTextColor: "black",
          lowerShapeBGStyle: { background: "#FFFFFF" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#318C74" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#318C74" },
          lowerImg: PharmeasyWhite,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8E8E8 100%)" },
          upperShapeTextColor: "white",
          upperShapeBGStyle: { background: "#F41CB2" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #F41CB2", background: "#E8E8E8" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #F41CB2", background: "#E8E8E8" },
          upperImg: Myntra,
          upperBorderColor: { borderColor: "#2E4255" },
          upperTextColor: { color: "#2E4255" },
          lowerBGStyle: { background: "#007DB8" },
          lowerShapeTextColor: "black",
          lowerShapeBGStyle: { background: "#FFFFFF" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#007DB8" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#007DB8" },
          lowerImg: Dell,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8E8E8 100%)" },
          upperShapeTextColor: "white",
          upperShapeBGStyle: { background: "#00AEEF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #00AEEF", background: "#E8E8E8" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #00AEEF", background: "#E8E8E8" },
          upperImg: mamaearth,
          upperBorderColor: { borderColor: "#2E4255" },
          upperTextColor: { color: "#2E4255" },
          lowerBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8E8E8 100%)" },
          lowerShapeTextColor: "white",
          lowerShapeBGStyle: { background: "#C45A9F" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #C45A9F", background: "#E8E8E8" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #C45A9F", background: "#E8E8E8" },
          lowerImg: Firstcry,
          lowerBorderColor: { borderColor: "#2E4255" },
          lowerTextColor: { color: "#2E4255" }
     },
     {
          upperBGStyle: { background: "#FE0000" },
          upperShapeTextColor: "black",
          upperShapeBGStyle: { background: "#FFFFFF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#FE0000" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#FE0000" },
          upperImg: puma,
          upperBorderColor: { borderColor: "#FFFFFF" },
          upperTextColor: { color: "#FFFFFF" },
          lowerBGStyle: { background: "#FC2779" },
          lowerShapeTextColor: "black",
          lowerShapeBGStyle: { background: "#FFFFFF" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#FC2779" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#FC2779" },
          lowerImg: Nykaa,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #6BA9E7 0%, #1861AA 100%)" },
          upperShapeTextColor: "black",
          upperShapeBGStyle: { background: "#FFFFFF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#1861AA" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#1861AA" },
          upperImg: FlipkartWhite,
          upperBorderColor: { borderColor: "#FFFFFF" },
          upperTextColor: { color: "#FFFFFF" },
          lowerBGStyle: { background: "#233448" },
          lowerShapeTextColor: "white",
          lowerShapeBGStyle: { background: "#F79B34" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #F79B34", background: "#233448" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #F79B34", background: "#233448" },
          lowerImg: Amazon,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "#2E4255" },
          upperShapeTextColor: "black",
          upperShapeBGStyle: { background: "#FFFFFF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#2E4255" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#2E4255" },
          upperImg: AjioWhite,
          upperBorderColor: { borderColor: "#FFFFFF" },
          upperTextColor: { color: "#FFFFFF" },
          lowerBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #318C74 0%, #0E8F6D 100%)" },
          lowerShapeTextColor: "black",
          lowerShapeBGStyle: { background: "#FFFFFF" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#318C74" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#318C74" },
          lowerImg: PharmeasyWhite,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8E8E8 100%)" },
          upperShapeTextColor: "white",
          upperShapeBGStyle: { background: "#F41CB2" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #F41CB2", background: "#E8E8E8" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #F41CB2", background: "#E8E8E8" },
          upperImg: Myntra,
          upperBorderColor: { borderColor: "#2E4255" },
          upperTextColor: { color: "#2E4255" },
          lowerBGStyle: { background: "#007DB8" },
          lowerShapeTextColor: "black",
          lowerShapeBGStyle: { background: "#FFFFFF" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#007DB8" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#007DB8" },
          lowerImg: Dell,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8E8E8 100%)" },
          upperShapeTextColor: "white",
          upperShapeBGStyle: { background: "#00AEEF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #00AEEF", background: "#E8E8E8" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #00AEEF", background: "#E8E8E8" },
          upperImg: mamaearth,
          upperBorderColor: { borderColor: "#2E4255" },
          upperTextColor: { color: "#2E4255" },
          lowerBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #E8E8E8 100%)" },
          lowerShapeTextColor: "white",
          lowerShapeBGStyle: { background: "#C45A9F" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #C45A9F", background: "#E8E8E8" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #C45A9F", background: "#E8E8E8" },
          lowerImg: Firstcry,
          lowerBorderColor: { borderColor: "#2E4255" },
          lowerTextColor: { color: "#2E4255" }
     },
     {
          upperBGStyle: { background: "#FE0000" },
          upperShapeTextColor: "black",
          upperShapeBGStyle: { background: "#FFFFFF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#FE0000" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#FE0000" },
          upperImg: puma,
          upperBorderColor: { borderColor: "#FFFFFF" },
          upperTextColor: { color: "#FFFFFF" },
          lowerBGStyle: { background: "#FC2779" },
          lowerShapeTextColor: "black",
          lowerShapeBGStyle: { background: "#FFFFFF" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#FC2779" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#FC2779" },
          lowerImg: Nykaa,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
     {
          upperBGStyle: { background: "radial-gradient(50% 50% at 50% 50%, #6BA9E7 0%, #1861AA 100%)" },
          upperShapeTextColor: "black",
          upperShapeBGStyle: { background: "#FFFFFF" },
          upperShapeSVGTopBorder: { borderTop: "24px solid #FFFFFF", background: "#1861AA" },
          upperShapeSVGBottomBorder: { borderBottom: "24px solid #FFFFFF", background: "#1861AA" },
          upperImg: FlipkartWhite,
          upperBorderColor: { borderColor: "#FFFFFF" },
          upperTextColor: { color: "#FFFFFF" },
          lowerBGStyle: { background: "#233448" },
          lowerShapeTextColor: "white",
          lowerShapeBGStyle: { background: "#F79B34" },
          lowerShapeSVGTopBorder: { borderTop: "24px solid #F79B34", background: "#233448" },
          lowerShapeSVGBottomBorder: { borderBottom: "24px solid #F79B34", background: "#233448" },
          lowerImg: Amazon,
          lowerBorderColor: { borderColor: "#FFFFFF" },
          lowerTextColor: { color: "#FFFFFF" }
     },
]


const allStores = Stores.map((store, index) => {
     return (
          <div className='flex flex-col items-center' key={index}>
               <div className={'w-52 h-[185px] flex flex-col items-center p-3 rounded-xl mx-[10px] my-[10px] md:h-52 md:mx-5'} style={store.upperBGStyle}>
                    <div className={'w-4/5 text-center relative py-[4px] md:py-[2px]'} style={store.upperShapeBGStyle}>
                         <div className={'border-r-[12px] border-r-transparent bg-[' + store.upperShapeBorder + '] absolute right-0 top-0'} style={store.upperShapeSVGTopBorder}></div>
                         <p className={'text-xs md:text-sm text-' + store.upperShapeTextColor}>UPTO 80% OFF</p>
                         <div className={'border-l-[10px] border-l-transparent bg-[' + store.upperShapeBorder + '] absolute left-0 top-0'} style={store.upperShapeSVGBottomBorder}></div>
                    </div>
                    <div className='w-3/5 min-h-[80px] flex items-center md:w-4/5 md:min-h-[100px]'>
                         <div className='w-full'>
                              <img src={store.upperImg} className='w-full h-full' />
                         </div>
                    </div>
                    <div className='w-4/5 border-b border-dashed mb-3' style={store.upperBorderColor}></div>
                    <p className='text-xs mb-2 md:text-sm' style={store.upperTextColor}>EARN UPTO 10.5% REWARDS</p>
                    <p className='text-xs' style={store.upperTextColor}>Rewards Rates & Terms</p>
               </div>
               <div className={'w-52 h-[185px] flex flex-col items-center p-3 rounded-xl mx-[10px] my-[10px] md:h-52 md:mx-5'} style={store.lowerBGStyle}>
                    <div className={'w-4/5 text-center relative py-[4px] md:py-[2px]'} style={store.lowerShapeBGStyle}>
                         <div className={'border-r-[12px] border-r-transparent bg-[' + store.lowerShapeBorder + '] absolute right-0 top-0'} style={store.lowerShapeSVGTopBorder}></div>
                         <p className={'text-xs md:text-sm text-' + store.lowerShapeTextColor}>UPTO 80% OFF</p>
                         <div className={'border-l-[10px] border-l-transparent bg-[' + store.lowerShapeBorder + '] absolute left-0 top-0'} style={store.lowerShapeSVGBottomBorder}></div>
                    </div>
                    <div className='w-3/5 min-h-[80px] flex items-center md:w-4/5 md:min-h-[100px]'>
                         <div className='w-full'>
                              <img src={store.lowerImg} className='w-full h-full' />
                         </div>
                    </div>
                    <div className='w-4/5 border-b border-dashed mb-3' style={store.lowerBorderColor}></div>
                    <p className='text-xs mb-2 md:text-sm' style={store.lowerTextColor}>EARN UPTO 10.5% REWARDS</p>
                    <p className='text-xs' style={store.lowerTextColor}>Rewards Rates & Terms</p>
               </div>
          </div>
     )
})


const TopCashbackStores = () => {

     const slideStoresLeft = () => {
          var slider = document.getElementById('storeSlider');
          slider.scrollLeft = slider.scrollLeft - 228;
     };

     const slideStoresRight = () => {
          var slider = document.getElementById('storeSlider');
          slider.scrollLeft = slider.scrollLeft + 228;
     };

     return (
          <div className='py-5 md:py-10'>
               <div className='flex items-center justify-center'>
                    <svg width="50" height="7" className='md:w-[70px]' viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M0.718099 3.55078C0.718099 5.02354 1.91201 6.21745 3.38477 6.21745C4.85752 6.21745 6.05143 5.02354 6.05143 3.55078C6.05143 2.07802 4.85752 0.884115 3.38477 0.884115C1.91201 0.884115 0.718099 2.07802 0.718099 3.55078ZM76.2061 3.05078H3.38477V4.05078H76.2061V3.05078Z" fill="#263238" />
                    </svg>
                    <h1 className='font-ElMessiri text-md font-bold text-[#1A477A] mx-5 md:text-2xl'>Top Cashback Stores</h1>
                    <svg width="50" height="7" className='md:w-[70px]' viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#263238" />
                    </svg>
               </div>
               <div className='flex items-center justify-around mt-5 px-5'>
                    <button className='bg-darkYellow rounded-full flex items-center justify-center text-center' onClick={slideStoresLeft}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='md:w-[30px] md:h-[30px]'>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                   fill="#1A477A" stroke="none">
                                   <path d="M440 665 l-165 -165 165 -165 c130 -131 167 -162 178 -153 11 9 -17 42 -140 165 l-153 153 153 153 c123 123 151 156 140 165 -11 9 -48 -22 -178 -153z" />
                              </g>
                         </svg>
                    </button>

                    <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar flex items-center' id='storeSlider'>

                         {allStores}

                    </div>

                    <button className='bg-darkYellow rounded-full flex items-center justify-center' onClick={slideStoresRight}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='md:w-[30px] md:h-[30px]'>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                   fill="#1A477A" stroke="none">
                                   <path d="M382 818 c-10 -10 19 -43 140 -165 l153 -153 -153 -153 c-123 -123 -151 -156 -140 -165 11 -9 48 22 178 153 l165 165 -165 165 c-132 132 -168 163 -178 153z" />
                              </g>
                         </svg>
                    </button>
               </div>
          </div>
     )
}

export default TopCashbackStores