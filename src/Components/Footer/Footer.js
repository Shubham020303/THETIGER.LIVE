import React from 'react';

//Images
import logo from "../../Images/logo.png";
import partner from "../../Images/partner.png";
import help from "../../Images/help.png";
import facebook from "../../Images/facebook.png";
import twitter from "../../Images/twitter.png";
import instagram from "../../Images/instagram.png";
import linkedin from "../../Images/linkedin.png";
import youtube from "../../Images/youtube.png";

const Footer = () => {
     return (
          <div className='bg-[#F1F1F1] py-4 px-4 md:px-0'>
               <div className='flex flex-col items-start justify-around py-4 px-5 gap-4 bg-[#F1F1F1] md:flex-row'>
                    <div className='flex flex-col items-start'>
                         <h1 className='text-[#1A477A] font-semibold'>About Tiger.live</h1>
                         <svg width="75" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2'>
                              <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#FFA412" />
                         </svg>
                         <ul>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>About us</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Press</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Blog</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Testimonials</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>FAQ</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Sitemap</a></li>
                         </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                         <h1 className='text-[#1A477A] font-semibold'>Useful Reads</h1>
                         <svg width="75" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2'>
                              <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#FFA412" />
                         </svg>
                         <ul>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Terms and Conditions</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Privacy & Cookie Policy</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Anti-Spam Policy</a></li>
                         </ul>
                    </div>
                    <div className='flex flex-col items-center justify-around h-[250px]'>
                         <div className='w-[220px]'>
                              <img src={logo} className='w-full h-full' />
                         </div>
                         <div className='w-[250px]'>
                              <img src={partner} className='w-full h-full' />
                         </div>
                    </div>
                    <div className='flex flex-col items-start'>
                         <h1 className='text-[#1A477A] font-semibold'>Special Pages</h1>
                         <svg width="75" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2'>
                              <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#FFA412" />
                         </svg>
                         <ul>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Refer and Earn</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Careers</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Become our Partner</a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>Student Program</a></li>
                         </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                         <h1 className='text-[#1A477A] font-semibold'>Connect With Us</h1>
                         <svg width="75" height="7" viewBox="0 0 77 7" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-2'>
                              <path d="M76.2819 3.55078C76.2819 2.07802 75.088 0.884114 73.6152 0.884115C72.1425 0.884115 70.9486 2.07802 70.9486 3.55078C70.9486 5.02354 72.1425 6.21745 73.6152 6.21745C75.088 6.21745 76.2819 5.02354 76.2819 3.55078ZM0.793945 4.05079L73.6152 4.05078L73.6152 3.05078L0.793945 3.05079L0.793945 4.05079Z" fill="#FFA412" />
                         </svg>
                         <ul>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>
                                   <div className='flex items-center'>
                                        <div className='w-6 h-6 mr-3'>
                                             <img src={help} className='w-full h-full' />
                                        </div>
                                        <p>Get Help</p>
                                   </div>
                              </a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>
                                   <div className='flex items-center'>
                                        <div className='w-6 h-6 mr-3'>
                                             <img src={facebook} className='w-full h-full' />
                                        </div>
                                        <p>Facebook</p>
                                   </div>
                              </a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>
                                   <div className='flex items-center'>
                                        <div className='w-6 h-6 mr-3'>
                                             <img src={twitter} className='w-full h-full' />
                                        </div>
                                        <p>Twitter</p>
                                   </div>
                              </a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>
                                   <div className='flex items-center'>
                                        <div className='w-6 h-6 mr-3'>
                                             <img src={instagram} className='w-full h-full' />
                                        </div>
                                        <p>Instagram</p>
                                   </div>
                              </a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>
                                   <div className='flex items-center'>
                                        <div className='w-6 h-6 mr-3'>
                                             <img src={linkedin} className='w-full h-full' />
                                        </div>
                                        <p>LinkedIn</p>
                                   </div>
                              </a></li>
                              <li className='text-[#1A477A] font-medium my-3'><a href='#'>
                                   <div className='flex items-center'>
                                        <div className='w-6 h-6 mr-3'>
                                             <img src={youtube} className='w-full h-full' />
                                        </div>
                                        <p>YouTube</p>
                                   </div>
                              </a></li>
                         </ul>
                    </div>
               </div>
               <div className='w-full h-1 border-t border-t-[#1A477A80] mx-auto my-4 md:w-[90%]'></div>
               <div className='flex items-center justify-center'>
                    <p className='text-[#1A477A] font-medium text-center md:text-left'>(©) Copyright 2022 Thetiger.live All Rights Reserved.</p>
               </div>
          </div>
     )
}

export default Footer