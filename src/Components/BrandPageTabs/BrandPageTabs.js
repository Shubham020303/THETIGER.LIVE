import React, { useState } from 'react';

//Images
import AmazonBlack from "../../Images/AmazonBlack.png";
import product from "../../Images/product.png";
import product2 from "../../Images/product2.png";

//Components
import BrandPageTabNavItem from '../BrandPageTabNavItem/BrandPageTabNavItem';
import BrandPageTabContent from '../BrandPageTabContent/BrandPageTabContent';
import ProductCard from '../ProductCard/ProductCard';

const Products = [
     {
          logo: AmazonBlack,
          productImg: product2,
          bestseller: "#4 BESTSELLER",
          brand: "One Plus",
          brandDesc: "Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic",
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
          productImg: product2,
          bestseller: "#4 BESTSELLER",
          brand: "One Plus",
          brandDesc: "Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic",
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
          productImg: product2,
          bestseller: "#4 BESTSELLER",
          brand: "One Plus",
          brandDesc: "Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic",
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

const Products2 = [
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
          productImg: product2,
          bestseller: "#4 BESTSELLER",
          brand: "One Plus",
          brandDesc: "Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic",
          price: "399/-",
          rewards: "42",
          finalPrice: "357"
     },
]

const BrandPageTabs = () => {

     const [activeTab, setActiveTab] = useState("tab1");

     return (
          <div className='md:w-[80vw] w-full overflow-y-scroll overflow-x-hidden'>
               <ul className='flex items-center bg-[#DEDFDF] md:px-3 w-full'>
                    <BrandPageTabNavItem title="Popular" id="tab1" color='#1A477A' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <BrandPageTabNavItem title="Discount" id="tab2" color='#1A477A' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <BrandPageTabNavItem title="High&nbsp;Price" id="tab3" color='#1A477A' activeTab={activeTab} setActiveTab={setActiveTab} />
                    <BrandPageTabNavItem title="Low&nbsp;Price" id="tab4" color='#1A477A' activeTab={activeTab} setActiveTab={setActiveTab} />
               </ul>
               <div>
                    <BrandPageTabContent id="tab1" activeTab={activeTab}>
                         {Products.map((product, index) => (
                              <ProductCard
                                   key={index}
                                   logo={product.logo}
                                   productImg={product.productImg}
                                   bestseller={product.bestseller}
                                   brand={product.brand}
                                   brandDesc={product.brandDesc}
                                   price={product.price}
                                   rewards={product.rewards}
                                   finalPrice={product.finalPrice}
                                   id={"product"}
                              />
                         ))}
                    </BrandPageTabContent>
                    <BrandPageTabContent id="tab2" activeTab={activeTab}>
                         {Products2.map((product, index) => (
                              <ProductCard
                                   key={index}
                                   logo={product.logo}
                                   productImg={product.productImg}
                                   bestseller={product.bestseller}
                                   brand={product.brand}
                                   brandDesc={product.brandDesc}
                                   price={product.price}
                                   rewards={product.rewards}
                                   finalPrice={product.finalPrice}
                                   id={"product"}
                              />
                         ))}
                    </BrandPageTabContent>
                    <BrandPageTabContent id="tab3" activeTab={activeTab}>
                         <p>Tab 3</p>
                    </BrandPageTabContent>
                    <BrandPageTabContent id="tab4" activeTab={activeTab}>
                         <p>Tab 4</p>
                    </BrandPageTabContent>
               </div>
          </div>
     )
}

export default BrandPageTabs