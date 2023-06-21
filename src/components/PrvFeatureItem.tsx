import React, { useState } from "react";
import { GiMagicBroom } from "react-icons/gi";
import Image from "next/image";
const categories: {
  id: number;
  name: string;
  subcategories: {
    id: number;
    name: string;
    images: {
      [key: string]: string;
    };
  }[];
}[] = [
  {
    id: 1,
    name: "clothing",
    subcategories: [
        {
          id: 1,
          name: 'T-Shirt',
          images: {
            image_1:
              'https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_2:
              'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            image_3:
              'https://images.unsplash.com/photo-1677709678785-bbe8227262cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            image_4:
              'https://images.pexels.com/photos/3353290/pexels-photo-3353290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        },
        {
          id: 2,
          name: 'Pants',
          images: {
            image_1:
              'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            image_2:
              'https://images.unsplash.com/photo-1604136172384-b2e9c43271ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            image_3:
              'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            image_4:
              'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=397&q=80',
            image_5:
              'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
          },
        },
        {
          id: 3,
          name: 'Shoes',
          images: {
            image_1:
              'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_2:
              'https://images.pexels.com/photos/9777242/pexels-photo-9777242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_3:
              'https://images.pexels.com/photos/12526086/pexels-photo-12526086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_4:
              'https://images.pexels.com/photos/14212622/pexels-photo-14212622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_5:
              'https://images.pexels.com/photos/2738177/pexels-photo-2738177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        },
        {
          id: 4,
          name: 'Scarfs',
          images: {
            image_1:
              'https://images.unsplash.com/photo-1623832101940-647285e32a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80',
            image_2:
              'https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_3:
              'https://images.pexels.com/photos/16098945/pexels-photo-16098945/free-photo-of-pretty-young-woman-in-jacket-and-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            image_4:
              'https://images.pexels.com/photos/6805801/pexels-photo-6805801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
        },
      ],
  }
];
const CategoryInfo = (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
      <p className="mt-4 text-base font-normal leading-7 text-gray-600">
      Unleash Your Fashion Persona: Introducing Our Must-Have Styles!
      </p>
    </div>
  );
const PrvFeatureItem = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [randomImages, setRandomImages] = useState<{ [key: number]: string }>({});
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedRandomImages: { [key: number]: string } = {};
      categories.forEach((category) => {
        category.subcategories.forEach((subcategory) => {
          const imageKeys = Object.keys(subcategory.images);
          const currentIndex = imageKeys.findIndex((key) => subcategory.images[key] === randomImages[subcategory.id]);
          let nextIndex;
          if (currentIndex === -1) {
            // If the current image URL is not found, select a random image
            nextIndex = Math.floor(Math.random() * imageKeys.length);
          } else {
            // Rotate to the next image
            nextIndex = (currentIndex + 1) % imageKeys.length;
          }
          const nextImageKey = imageKeys[nextIndex];
          updatedRandomImages[subcategory.id] = subcategory.images[nextImageKey];
        });
      });
      setRandomImages(updatedRandomImages);
      setIsLoading(false);
    }, 2000); // Simulating a loading delay of 2 seconds
  };
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  return (
    <section
      className={`bg-white dark:bg-gray-900 max-w-full mx-auto relative pt-10  ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 md:pb-10">
      {CategoryInfo}
      </div>
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 md:gap-2 lg:mt-16 lg:gap-4 lg:grid-cols-4" style={{ placeItems: 'center' }}>
          {categories[0].subcategories.map((subcategory:any , index:any) => (
            <div key={index} className="flex flex-col w-full max-w-xs my-10 overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md group">
        <a className="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" href="#">
          <img className="absolute top-0 right-0 object-cover w-full h-full peer" src={randomImages[subcategory.id] || subcategory.images.image_1 }alt="" />
        </a>
        <div className="px-5 pb-5 mt-4">
          <a href="#">
            <h5 className="pb-3 text-xl tracking-tight text-slate-900">{subcategory.name}</h5>
          </a>
          {/* <div className="flex items-center justify-between mt-2 mb-5">
            <p>
              <span className="text-3xl font-bold text-slate-900">$449</span>
              <span className="text-sm line-through text-slate-900">$699</span>
            </p>
          </div> */}
          <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
          ))}
        </div>
      </div>
      {isHovered && (
        <div
          className="flex items-center justify-center overlay bg-opacity-20"
        >
          <div>
            {isLoading ? (
              <button
                className="rounded-sm btn"
              >
                <span className="loading loading-spinner"></span>
                Loading
              </button>
            ) : (
              <button
                className="tracking-wider rounded-sm btn"
                onClick={handleClick}
              >
                <span>
                  <GiMagicBroom className="w-8 h-8" />
                </span>
                Regenerate
              </button>
            )}
          </div>
        </div>
      )}
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};
export default PrvFeatureItem;
