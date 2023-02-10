import React, { useEffect, useState } from 'react'

import filter from "../../Images/filter.png"

const BrandPageFilters = () => {

     const [selected, setSelected] = useState("");
     const [inputValue, setInputValue] = useState("");
     const [colorValue, setColorValue] = useState("");
     const [typeValue, setTypeValue] = useState("");
     const [technologyValue, setTechnologyValue] = useState("");


     const [open, setOpen] = useState(false);
     const [BrandOpen, setBrandOpen] = useState(false);
     const [PriceOpen, setPriceOpen] = useState(false);
     const [ColorOpen, setColorOpen] = useState(false);
     const [TypeOpen, setTypeOpen] = useState(false);
     const [TechnologyOpen, setTechnologyOpen] = useState(false);

     const data = [
          {
               offer: "Headphone Offers"
          },
          {
               offer: "Earbuds & Airpods (198)"
          },
          {
               offer: "Neckbands (152)"
          },
          {
               offer: "Earphones (224)"
          },
     ]

     const brand = [
          {
               brand: "Boat (96)"
          },
          {
               brand: "JBL (17)"
          },
          {
               brand: "Boult (15)"
          },
          {
               brand: "Sony (10)"
          },
          {
               brand: "OnePlus (8)"
          },
          {
               brand: "Noise (6)"
          },
          {
               brand: "Realme (6)"
          },
          {
               brand: "pTron (6)"
          },
          {
               brand: "PTron (5)"
          },
          {
               brand: "Sennheiser (5)"
          },
          {
               brand: "ptron (5)"
          },
          {
               brand: "MI (4)"
          },
          {
               brand: "Mivi (4)"
          },
          {
               brand: "Oppo (4)"
          },
          {
               brand: "Truke (4)"
          },
          {
               brand: "Zebronics (4)"
          },
          {
               brand: "Ambrane (3)"
          },
          {
               brand: "Apple (2)"
          },
          {
               brand: "Bose (2)"
          },
          {
               brand: "Motorola (2)"
          },
          {
               brand: "Philips (2)"
          },
          {
               brand: "Reconnect (2)"
          },
          {
               brand: "Redmi (2)"
          },
          {
               brand: "Honor (1)"
          },
          {
               brand: "Jabra (1)"
          },
          {
               brand: "Leaf (1)"
          },
          {
               brand: "Oneplus (1)"
          },
          {
               brand: "Portronics (1)"
          },
          {
               brand: "Redgear (1)"
          },
     ]

     const colors = [
          {
               color: "Black (133)"
          },
          {
               color: "Blue (12)"
          },
          {
               color: "White (9)"
          },
          {
               color: "Active Black (6)"
          },
          {
               color: "Green (4)"
          },
          {
               color: "Red (3)"
          },
          {
               color: "Black / Red (2)"
          },
          {
               color: "Gray (2)"
          },
          {
               color: "Admiral (1)"
          },
          {
               color: "Aqua Blue (1)"
          },
          {
               color: "Black / Blue (1)"
          },
          {
               color: "Black / Silver (1)"
          },
          {
               color: "Black / Yellow (1)"
          },
          {
               color: "Bold Black (1)"
          },
          {
               color: "Carbon Black (1)"
          },
          {
               color: "Gold / Black (1)"
          },
          {
               color: "Gun Metal (1)"
          },
          {
               color: "Jet Black (1)"
          },
          {
               color: "Light Pink (1)"
          },
          {
               color: "Nord Blue (1)"
          },
          {
               color: "Obsidian Black (1)"
          },
          {
               color: "Orange (1)"
          },
          {
               color: "Pearl White (1)"
          },
          {
               color: "Raging Red (1)"
          },
          {
               color: "Royal Blue (1)"
          },
          {
               color: "Silver (1)"
          },
          {
               color: "Steel Blue (1)"
          },
          {
               color: "White / Blue (1)"
          },
          {
               color: "Yellow / Green (1)"
          },
          {
               color: "Blue (1)"
          },
     ]

     const types = [
          {
               type: "Airpods / EarBuds (66)"
          },
          {
               type: "Earphones (48)"
          },
          {
               type: "Neckband (43)"
          },
          {
               type: "Headphones (41)"
          },
     ]

     const technologies = [
          {
               technology: "True Wireless (74)"
          },
          {
               technology: "Bluetooth (70)"
          },
          {
               technology: "Wired (53)"
          },
     ]

     return (
          <div className='md:w-[20vw] w-0 flex flex-col items-center overflow-hidden border-r border-[#DEDFDF]'>
               <div className='flex items-center px-5 bg-[#DEDFDF] w-full gap-4'>
                    <img src={filter} className='w-[25px] h-[25px]' />
                    <p className='text-[#1A477A] py-2.5 text-sm uppercase'>FILTER BY</p>
               </div>
               <div className="w-full px-6 pt-5 font-medium border-b border-[#DEDFDF]">
                    <div onClick={() => setOpen(!open)} className={`bg-white w-full flex gap-4 items-center rounded cursor-pointer`}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className={`${open && "rotate-90"} transition-all duration-300`}>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#FFA412" stroke="none">
                                   <path d="M153 936 l-28 -24 -3 -379 c-2 -208 1 -396 5 -417 10 -47 50 -81 85 -73 27 7 602 368 636 400 30 28 30 86 0 114 -23 21 -557 362 -610 389 -38 19 -53 18 -85 -10z" />
                              </g>
                         </svg>
                         <p className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>{selected ? selected?.length > 25 ? selected?.substring(0, 25) + "..." : selected : "Headphone Offers"}</p>
                    </div>
                    <ul className={`bg-white my-2 pl-7 overflow-y-auto no-scrollbar ${open ? "max-h-60" : "max-h-0"} transition-all duration-300`}>
                         {data?.map((item) => (
                              <li
                                   key={item?.offer}
                                   className={`p-2 text-sm hover:bg-darkYellow hover:text-white cursor-pointer ${item?.offer?.toLowerCase() === selected?.toLowerCase() && "bg-darkYellow text-white"}`}
                                   onClick={() => {
                                        if (item?.offer?.toLowerCase() !== selected.toLowerCase()) {
                                             setSelected(item?.offer);
                                             setOpen(false);
                                        }
                                   }}
                              >
                                   {item?.offer}
                              </li>
                         ))}
                    </ul>
               </div>

               <div className="w-full px-6 pt-5 font-medium border-b border-[#DEDFDF]">
                    <div onClick={() => setPriceOpen(!PriceOpen)} className={`bg-white w-full flex gap-4 items-center rounded cursor-pointer`}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className={`${PriceOpen && "rotate-90"} transition-all duration-300`}>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#FFA412" stroke="none">
                                   <path d="M153 936 l-28 -24 -3 -379 c-2 -208 1 -396 5 -417 10 -47 50 -81 85 -73 27 7 602 368 636 400 30 28 30 86 0 114 -23 21 -557 362 -610 389 -38 19 -53 18 -85 -10z" />
                              </g>
                         </svg>
                         <p className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>Price</p>
                    </div>
                    <div className={`bg-white my-2 pl-7 overflow-y-auto no-scrollbar ${PriceOpen ? "max-h-60" : "max-h-0"} transition-all duration-300`}>
                         <p className='w-full px-2 py-1 mb-2 text-sm text-gray-700'>Enter a Price range</p>
                         <div className='flex items-center gap-2 px-2 mb-1'>
                              <div className='flex items-center w-full'>
                                   <input placeholder='0' className='placeholder:text-gray-700 px-2 py-1 w-[45%] text-sm outline-none border border-[#FFA412]' />
                                   <hr className='w-[10px] border-[#6b6b6b] mx-1' />
                                   <input placeholder='5000' className='placeholder:text-gray-700 px-2 py-1 w-[45%] text-sm outline-none border border-[#FFA412]' />
                              </div>
                              <button className='bg-darkYellow outline-none border-none text-white text-sm px-1.5 py-[5px]'>GO</button>
                         </div>
                    </div>
               </div>

               <div className="w-full px-6 pt-5 font-medium border-b border-[#DEDFDF]">
                    <div onClick={() => setBrandOpen(!BrandOpen)} className={`bg-white w-full flex gap-4 items-center rounded cursor-pointer`}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className={`${BrandOpen && "rotate-90"} transition-all duration-300`}>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#FFA412" stroke="none">
                                   <path d="M153 936 l-28 -24 -3 -379 c-2 -208 1 -396 5 -417 10 -47 50 -81 85 -73 27 7 602 368 636 400 30 28 30 86 0 114 -23 21 -557 362 -610 389 -38 19 -53 18 -85 -10z" />
                              </g>
                         </svg>
                         <p className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>Brand</p>
                    </div>

                    <ul className={`bg-white my-2 pl-9 overflow-y-auto no-scrollbar ${BrandOpen ? "max-h-60" : "max-h-0"} transition-all duration-300`}>

                         <div className="flex items-center sticky top-0 bg-white">
                              <input
                                   type="text"
                                   value={inputValue}
                                   onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                   placeholder="Enter Brand Name"
                                   className="placeholder:text-gray-700 w-full px-2 py-1 mb-2 text-sm outline-none border border-[#FFA412]"
                              />
                         </div>

                         {brand.map((item, index) => (
                              <li
                                   key={index}
                                   className={`flex items-center text-sm gap-2 my-1 ${item.brand.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
                                   onClick={() => {
                                        if (item.brand.toLowerCase() !== selected.toLowerCase()) {
                                             setInputValue("");
                                        }
                                   }}
                              >
                                   <input type="checkbox" id="brand1" name={item.brand} value={item.brand} className='accent-[#FFA412] cursor-pointer' />
                                   <label htmlFor={item.brand} className='#FFA412'>{item.brand}</label>
                              </li>
                         ))}
                    </ul>
               </div>

               <div className="w-full px-6 pt-5 font-medium border-b border-[#DEDFDF]">
                    <div onClick={() => setColorOpen(!ColorOpen)} className={`bg-white w-full flex gap-4 items-center rounded cursor-pointer`}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className={`${ColorOpen && "rotate-90"} transition-all duration-300`}>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#FFA412" stroke="none">
                                   <path d="M153 936 l-28 -24 -3 -379 c-2 -208 1 -396 5 -417 10 -47 50 -81 85 -73 27 7 602 368 636 400 30 28 30 86 0 114 -23 21 -557 362 -610 389 -38 19 -53 18 -85 -10z" />
                              </g>
                         </svg>
                         <p className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>Color</p>
                    </div>

                    <ul className={`bg-white my-2 pl-9 overflow-y-auto no-scrollbar ${ColorOpen ? "max-h-60" : "max-h-0"} transition-all duration-300`}>

                         <div className="flex items-center sticky top-0 bg-white">
                              <input
                                   type="text"
                                   value={colorValue}
                                   onChange={(e) => setColorValue(e.target.value.toLowerCase())}
                                   placeholder="Enter Color Name"
                                   className="placeholder:text-gray-700 w-full px-2 py-1 mb-2 text-sm outline-none border border-[#FFA412]"
                              />
                         </div>

                         {colors.map((item, index) => (
                              <li
                                   key={index}
                                   className={`flex items-center text-sm gap-2 my-1 ${item.color.toLowerCase().startsWith(colorValue) ? "block" : "hidden"}`}
                                   onClick={() => {
                                        if (item.color.toLowerCase() !== selected.toLowerCase()) {
                                             setColorValue("");
                                        }
                                   }}
                              >
                                   <input type="checkbox" id="brand1" name={item.color} value={item.color} className='accent-[#FFA412] cursor-pointer' />
                                   <label htmlFor={item.color} className='#FFA412'>{item.color}</label>
                              </li>
                         ))}
                    </ul>
               </div>

               <div className="w-full px-6 pt-5 font-medium border-b border-[#DEDFDF]">
                    <div onClick={() => setTypeOpen(!TypeOpen)} className={`bg-white w-full flex gap-4 items-center rounded cursor-pointer`}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className={`${TypeOpen && "rotate-90"} transition-all duration-300`}>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#FFA412" stroke="none">
                                   <path d="M153 936 l-28 -24 -3 -379 c-2 -208 1 -396 5 -417 10 -47 50 -81 85 -73 27 7 602 368 636 400 30 28 30 86 0 114 -23 21 -557 362 -610 389 -38 19 -53 18 -85 -10z" />
                              </g>
                         </svg>
                         <p className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>Type</p>
                    </div>

                    <ul className={`bg-white my-2 pl-9 overflow-y-auto no-scrollbar ${TypeOpen ? "max-h-60" : "max-h-0"} transition-all duration-300`}>

                         <div className="flex items-center sticky top-0 bg-white">
                              <input
                                   type="text"
                                   value={typeValue}
                                   onChange={(e) => setTypeValue(e.target.value.toLowerCase())}
                                   placeholder="Enter Type"
                                   className="placeholder:text-gray-700 w-full px-2 py-1 mb-2 text-sm outline-none border border-[#FFA412]"
                              />
                         </div>

                         {types.map((item, index) => (
                              <li
                                   key={index}
                                   className={`flex items-center text-sm gap-2 my-1 ${item.type.toLowerCase().startsWith(typeValue) ? "block" : "hidden"}`}
                                   onClick={() => {
                                        if (item.type.toLowerCase() !== selected.toLowerCase()) {
                                             setTypeValue("");
                                        }
                                   }}
                              >
                                   <input type="checkbox" id="brand1" name={item.type} value={item.type} className='accent-[#FFA412] cursor-pointer' />
                                   <label htmlFor={item.type} className='#FFA412'>{item.type}</label>
                              </li>
                         ))}
                    </ul>
               </div>

               <div className="w-full px-6 pt-5 font-medium border-b border-[#DEDFDF]">
                    <div onClick={() => setTechnologyOpen(!TechnologyOpen)} className={`bg-white w-full flex gap-4 items-center rounded cursor-pointer`}>
                         <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" className={`${TechnologyOpen && "rotate-90"} transition-all duration-300`}>
                              <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#FFA412" stroke="none">
                                   <path d="M153 936 l-28 -24 -3 -379 c-2 -208 1 -396 5 -417 10 -47 50 -81 85 -73 27 7 602 368 636 400 30 28 30 86 0 114 -23 21 -557 362 -610 389 -38 19 -53 18 -85 -10z" />
                              </g>
                         </svg>
                         <p className='font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-full'>Technology</p>
                    </div>

                    <ul className={`bg-white my-2 pl-9 overflow-y-auto no-scrollbar ${TechnologyOpen ? "max-h-60" : "max-h-0"} transition-all duration-300`}>

                         <div className="flex items-center sticky top-0 bg-white">
                              <input
                                   type="text"
                                   value={technologyValue}
                                   onChange={(e) => setTechnologyValue(e.target.value.toLowerCase())}
                                   placeholder="Enter Technology"
                                   className="placeholder:text-gray-700 w-full px-2 py-1 mb-2 text-sm outline-none border border-[#FFA412]"
                              />
                         </div>

                         {technologies.map((item, index) => (
                              <li
                                   key={index}
                                   className={`flex items-center text-sm gap-2 my-1 ${item.technology.toLowerCase().startsWith(technologyValue) ? "block" : "hidden"}`}
                                   onClick={() => {
                                        if (item.technology.toLowerCase() !== selected.toLowerCase()) {
                                             setTechnologyValue("");
                                        }
                                   }}
                              >
                                   <input type="checkbox" id="brand1" name={item.technology} value={item.technology} className='accent-[#FFA412] cursor-pointer' />
                                   <label htmlFor={item.technology} className='#FFA412'>{item.technology}</label>
                              </li>
                         ))}
                    </ul>
               </div>

          </div>
     )
}

export default BrandPageFilters