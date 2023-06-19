import React, { useState } from 'react';
import { GiMagicBroom } from 'react-icons/gi';
const HeroSection = {
  "heroSections": [
    {
      "id": 1,
      "image": "https://img.freepik.com/free-photo/rack-clothes-store_23-2148929537.jpg?w=1060&t=st=1687151913~exp=1687152513~hmac=3f2125dd22dfaebc8e284c59e593e629130be62a0e3ab22ec06f27559c097a2a",
      "title": "Shop the Latest Fashion Trends",
      "subtitle": "Discover stylish clothing, accessories, and more"
    },
    {
      "id": 2,
      "image": "https://img.freepik.com/free-photo/shop-is-now-open_53876-15332.jpg?w=996&t=st=1687151949~exp=1687152549~hmac=01d7d149a91e969f98e0fb8fb489baa1d6309b899bff3b222a1b7ecbdc300f9e",
      "title": "Upgrade Your Fashion!",
      "subtitle": "Unleashing Your Fashion Identity"
    },
    {
      "id": 3,
      "image": "https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=1380&t=st=1687153567~exp=1687154167~hmac=7113754fa610c82172a56048732b04d93a455ca777d29e6f9618dbf10544f106",
      "subtitle": "Where Fashion Dreams Come True"
    },
    {
      "id": 4,
      "image": "https://img.freepik.com/free-photo/portrait-young-couple-yellow_158595-5531.jpg?w=1060&t=st=1687152995~exp=1687153595~hmac=978eabd191ac9e9941ebcc8228682d7b1d079568ebea9cf74af47e18056e5129",
      "subtitle": "Visit and Explore a vast collection of Clothes"
    },
    {
      "id": 5,
      "image":"https://img.freepik.com/free-photo/defocussed-man-choosing-shirt-from-rail-shop_23-2148175633.jpg?w=1060&t=st=1687153155~exp=1687153755~hmac=511ebfc681c43abde33a1376c25454a68236810c5b7b68c58375faf37622575b",
      "subtitle":"Elevating Your Wardrobe, Empowering Your Style"
    }
  ]
};
const PrvBanner = () => {
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
 const [heroStyle, setHeroStyle] = useState('left');
 const generateHeroSection = () => {
  setIsLoading(true);
  setTimeout(() => {
    let nextIndex = (heroIndex + 1) % HeroSection.heroSections.length;
    setHeroIndex(nextIndex);
    setIsLoading(false);
  }, 2000);
};
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };
  const heroSection = HeroSection.heroSections[heroIndex];
  return (
    <div
      className={`relative pt-12 pb-20 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48 flex justify-center flex-col ${
        showButton ? 'h-full' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 lg:block">
        <img className="object-cover object-right w-full h-full blur-sm" src={heroSection.image} alt="" />
      </div>
      {/* hero content */}
      <div className="relative flex flex-col px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className={`max-w-lg mx-auto ${heroStyle} lg:mx-0 lg:max-w-5xl ${heroStyle}`}>
          <p className="text-base font-bold text-gray-600">{heroSection.title}</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:mt-8 sm:text-5xl xl:text-7xl">
            {heroSection.subtitle}
          </h1>
          <div className="mt-8 sm:mt-12">
            <a href="">
              <button className="rounded-lg btn btn-primary md:btn-lg btn-md">Shop Now</button>
            </a>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-600 rounded-sm bg-opacity-80"
        >
          {isLoading ? (
            <button className="rounded-sm btn"
            >
              <span className="loading loading-spinner -tracking-widest"></span>
              Loading
            </button>
          ) : (
            <button className="tracking-widest rounded-sm btn" onClick={generateHeroSection}
            >
              <span>
                <GiMagicBroom className="w-8 h-8" />
              </span>
              Regenerate
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PrvBanner;