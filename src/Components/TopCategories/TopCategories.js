import React from 'react';

//Images
import Home from "../../Images/Home.png";
import banking from "../../Images/banking.png";
import FoodDelivery from "../../Images/FoodDelivery.png";
import RechargeBill from "../../Images/Recharge&Bill.png";
import Education from "../../Images/Education.png";
import Travel from "../../Images/Travel_1.png";
import Beauty from "../../Images/Beauty.png";
import Electronics from "../../Images/Electronics.png";
import Hosting from "../../Images/Hosting.png";
import Fashion from "../../Images/Fashion.png";
import Medicine from "../../Images/Medicine.png";
import Grocery from "../../Images/Grocery.png";

// Dummy Data To Be Used In Categories
const Categories = [
     {
          img: Home,
          text: "Home",
     },
     {
          img: banking,
          text: "Banking",
     },
     {
          img: FoodDelivery,
          text: "Food Delivery",
     },
     {
          img: RechargeBill,
          text: "Recharge & Bill",
     },
     {
          img: Education,
          text: "Education",
     },
     {
          img: Travel,
          text: "Travel",
     },
     {
          img: Beauty,
          text: "Beauty",
     },
     {
          img: Electronics,
          text: "Electronics",
     },
     {
          img: Hosting,
          text: "Hosting",
     },
     {
          img: Fashion,
          text: "Fashion",
     },
     {
          img: Medicine,
          text: "Medicine",
     },
     {
          img: Grocery,
          text: "Grocery",
     },
]

const allCategories = Categories.map((category, index) => {
     return (

          // Category Wrapper Div Starts

          <div className='flex flex-col items-center mx-4 md:mx-6' id='category' key={index}>

               {/* Category Image Div Starts */}

               <div className='rounded-full border-[#1A477A] border p-5 md:p-6'>
                    <div className='w-7 h-7 md:w-10 md:h-10'>
                         <img src={category.img} className='w-full h-full' />
                    </div>
               </div>

               {/* Category Image Div Ends */}

               {/* Category Name Starts */}

               <p className='text-xs mt-2'>{category.text}</p>

               {/* Category Name Ends */}

          </div>

          // Category Wrapper Div Ends
     );
})

const TopCategories = () => {

     // To Slide All The Categories To The Left
     const slideLeft = () => {
          var slider = document.getElementById('slider');
          var item = document.getElementById("category").offsetWidth;
          slider.scrollLeft = slider.scrollLeft - (item + 48);
     };

     // To Slide All The Categories To The Right
     const slideRight = () => {
          var slider = document.getElementById('slider');
          var item = document.getElementById("category").offsetWidth;
          slider.scrollLeft = slider.scrollLeft + (item + 48);
     };

     return (
          <div className='py-5 md:py-10'>

               {/* Title Div Starts */}

               <div className='flex items-center justify-center'>
                    <svg width="70" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M0.718099 3.55078C0.718099 5.02354 1.91201 6.21745 3.38477 6.21745C4.85752 6.21745 6.05143 5.02354 6.05143 3.55078C6.05143 2.07802 4.85752 0.884115 3.38477 0.884115C1.91201 0.884115 0.718099 2.07802 0.718099 3.55078ZM76.2061 3.05078H3.38477V4.05078H76.2061V3.05078Z" fill="#263238" />
                    </svg>
                    <h1 className='font-ElMessiri text-md font-bold text-[#1A477A] mx-5 md:text-2xl'>Top Categories</h1>
                    <svg width="70" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#263238" />
                    </svg>
               </div>

               {/* Title Div Ends */}

               {/* Slider Wrapper Div Starts */}

               <div className='flex items-center justify-around mt-5 px-5'>

                    {/* Left Button Starts */}

                    <button className='bg-darkYellow rounded-full flex items-center justify-center text-center' onClick={slideLeft}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='md:w-[30px] md:h-[30px]'>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                   fill="#1A477A" stroke="none">
                                   <path d="M440 665 l-165 -165 165 -165 c130 -131 167 -162 178 -153 11 9 -17 42 -140 165 l-153 153 153 153 c123 123 151 156 140 165 -11 9 -48 -22 -178 -153z" />
                              </g>
                         </svg>
                    </button>

                    {/* Left Button Ends */}

                    {/* Slider Div Starts */}

                    <div className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar flex items-center' id='slider'>
                         {allCategories}
                    </div>

                    {/* Slider Div Ends */}

                    {/* Right Button Starts */}

                    <button className='bg-darkYellow rounded-full flex items-center justify-center' onClick={slideRight}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className='md:w-[30px] md:h-[30px]'>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                   fill="#1A477A" stroke="none">
                                   <path d="M382 818 c-10 -10 19 -43 140 -165 l153 -153 -153 -153 c-123 -123 -151 -156 -140 -165 11 -9 48 22 178 153 l165 165 -165 165 c-132 132 -168 163 -178 153z" />
                              </g>
                         </svg>
                    </button>

                    {/* Right Button Ends */}
                    
               </div>

               {/* Slider Wrapper Div Ends */}

          </div>
     )
}

export default TopCategories