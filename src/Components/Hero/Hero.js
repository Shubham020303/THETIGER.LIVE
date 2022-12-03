import React, { useEffect, useState, useRef } from 'react';

//Styles
import "./Hero.css";

//Images
import hero1 from "../../Images/hero1.png";
import hero2 from "../../Images/hero2.png";
import hero3 from "../../Images/hero3.png";
import subHero1 from "../../Images/subHero1.png";
import subHero2 from "../../Images/subHero2.png";

const offers = [
     hero1,
     hero2,
     hero3,
];

let count = 0;
let slideInterval;

const Hero = () => {

     const [currentIndex, setCurrentIndex] = useState(0);

     const slideRef = useRef();

     const removeAnimation = () => {
          slideRef.current.classList.remove('sliderContainer');
     }

     useEffect(() => {
          slideRef.current.addEventListener('animationend', removeAnimation);
          startsliding();
          return () => {
               clearInterval(slideInterval);
          }
     }, [])

     const startsliding = () => {
          slideInterval = setInterval(() => {
               count = (count + 1) % offers.length;
               setCurrentIndex(count);
               slideRef.current.classList.add('sliderContainer');
          }, 3000);
     }

     return (
          <div className='w-full flex items-center justify-evenly pb-10'>
               <div className='w-[65%] flex items-center justify-center' ref={slideRef}>
                    <div className=''>
                         <img src={offers[currentIndex]} className='w-full h-full'/>
                    </div>
               </div>
               <div className='w-[30%] flex flex-col items-center justify-between'>
                    <div className='mb-10'>
                         <img src={subHero1} />
                    </div>
                    <div>
                         <img src={subHero2} />
                    </div>
               </div>
          </div>
     )
}

export default Hero