import React from 'react'

const BrandPageTabNavItem = ({ id, title, color, activeTab, setActiveTab }) => {

     const handleClick = () => {
          setActiveTab(id);
     };

     return (
          <li onClick={handleClick} className={"py-2 md:px-5 px-2 md:mx-3 mx-2 text-sm font-medium cursor-pointer z-10 " + (activeTab === id ? "border-t-2 border-b-2 border-[#FFA412]" : "") + (color === "white" ? " text-" + color : " text-[" + color + "]") + (id === "signin" ? " border-t-[#1861AA]" : "") + (id === "signup" ? " border-t-[#1861AA]" : "")}>
               {title}
          </li>
     )
}

export default BrandPageTabNavItem