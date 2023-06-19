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
        name: "t-shirts",
        images: {
          image_1: "https://images.pexels.com/photos/3029796/pexels-photo-3029796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_2: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_3: " https://images.pexels.com/photos/2382255/pexels-photo-2382255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_4: " https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_5: " https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      },
      {
        id: 2,
        name: "pants",
        images: {
          image_1: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_2: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_3: "https://images.pexels.com/photos/7787186/pexels-photo-7787186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_4: "https://images.pexels.com/photos/10133276/pexels-photo-10133276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_5: "https://images.pexels.com/photos/8989485/pexels-photo-8989485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      },
      {
        id: 3,
        name: "shoes",
        images: {
          image_1: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_2: "https://images.pexels.com/photos/11324524/pexels-photo-11324524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_3: "https://images.pexels.com/photos/1019345/fashion-footwear-style-sport-1019345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_4: "https://images.pexels.com/photos/6050925/pexels-photo-6050925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_5: "https://images.pexels.com/photos/293405/pexels-photo-293405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      },
      {
        id: 4,
        name: "Scarfs",
        images: {
          image_1: "https://images.pexels.com/photos/2120584/pexels-photo-2120584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_2: "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_3: "https://images.pexels.com/photos/16098945/pexels-photo-16098945/free-photo-of-pretty-young-woman-in-jacket-and-scarf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_4: "https://images.pexels.com/photos/6805801/pexels-photo-6805801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          image_5: "https://source.unsplash.com/random/200x200?sig=5&trousers"
        }
      },
    ]
  }
];
const PrvCategory = () => {
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
  return (
    <section
      className={`bg-white dark:bg-gray-900 max-w-full mx-auto relative pt-10  ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 md:pb-10 mx-auto">
        <h3 className="text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 text-heading">
          Shop By Category
        </h3>
      </div>
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
          {categories[0].subcategories.map((subcategory:any , index:any) => (
            <div className="flex flex-col justify-center" key={index}>
              <div className="flex justify-center w-full">
                <img
                  src={
                    randomImages[subcategory.id] || subcategory.images.image_1
                  }
                  alt=""
                  width={200}
                  height={200}
                  className="object-cover rounded-lg w-52 h-36"
                />
              </div>
              <div className="pt-3">
                <p className="font-semibold tracking-wider text-center text-black">
                  {subcategory.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isHovered && (
        <div
          className="flex items-center justify-center bg-gray-800 overlay bg-opacity-80"
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
        }
      `}</style>
    </section>
  );
};
export default PrvCategory;