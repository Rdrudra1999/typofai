import React, { useState } from 'react';
import { GiMagicBroom } from 'react-icons/gi';
const HeroSection = {
  "heroSections": [
    {
      "id": 1,
      "image": "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxM[…]dlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "title": "Shop the Latest Fashion Trends",
      "subtitle": "Discover stylish clothing, accessories, and more"
    },
    {
      "id": 2,
      "image": "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-4.0.3&ixid=M3wxM[…]dlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "title": "Upgrade Your Fashion!",
      "subtitle": "Unleashing Your Fashion Identity"
    },
    {
      "id": 3,
      "image": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3[…]WdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "subtitle": "Where Fashion Dreams Come True"
    },
    {
      "id": 4,
      "image": "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3[…]dlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80",
      "subtitle": "Visit and Explore a vast collection of Clothes"
    },
    {
      "id": 5,
      "image":"https://images.unsplash.com/photo-1529873597343-8dd8429aa148?ixlib=rb-4.0.3&ixid=M3wxM[…]dlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
          <p className="text-base font-bold text-white">{heroSection.title}</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:mt-8 sm:text-5xl xl:text-7xl">
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
