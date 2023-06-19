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
              'https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-14026.jpg?w=740&t=st=1686834604~exp=1686835204~hmac=2a0cc9e223e1313ece7e00da8daead4d4a03baa27fe12a343fe4ee70d6f03e6b',
            image_2:
              'https://img.freepik.com/free-photo/basic-white-tee-women-s-apparel-rear-view_53876-108033.jpg?w=740&t=st=1686834670~exp=1686835270~hmac=95c4ed8f1804cde4ff576f04ddaff50940aa01eedbed23975715227cb56aff1a',
            image_3:
              'https://img.freepik.com/free-photo/shirt-hanger-with-green-background_23-2150264156.jpg?w=360&t=st=1686834891~exp=1686835491~hmac=aeccb062035dcf4b70ef5f135a394cab6f31995ec5e57fe50a1c8b7ea1a996b9',
            image_4:
              'https://img.freepik.com/free-psd/mens-ringers-t-shirt-mockup_126278-115.jpg?w=740&t=st=1686835040~exp=1686835640~hmac=e23a181c39445481fb0015d107e33dbd4a3705d808f3b8df59bfdb8002caae88',
            image_5:
              'https://img.freepik.com/free-photo/man-brown-long-sleeve-tee-men-s-fashion-studio-portrait_53876-102827.jpg?w=360&t=st=1686835110~exp=1686835710~hmac=5e28da353a3aa28d1789b2d1d6490feca05fb146e87a61a6621e9f869f332f3e',
          },
        },
        {
          id: 2,
          name: 'Pants',
          images: {
            image_1:
              'https://img.freepik.com/free-photo/pants-hanger-with-green-background_23-2150264166.jpg?w=360&t=st=1686835169~exp=1686835769~hmac=72745429f79643e3237f37a85be0bb9c5bbad11525ca758fd2b286ac9fbd3462',
            image_2:
              'https://img.freepik.com/free-photo/jeans_1203-8094.jpg?w=740&t=st=1686835211~exp=1686835811~hmac=203097b5354d8927a5cd9059718cab64258dcfaaeb6f75e68b552e7a16eff84e',
            image_3:
              'https://img.freepik.com/free-photo/pants-hanger-with-green-background_23-2150264163.jpg?w=360&t=st=1686835244~exp=1686835844~hmac=42efd899df971fa6f4695da123f59c3f3c0c71b2667046cffcaa85de7b09c0a1',
            image_4:
              'https://img.freepik.com/free-photo/pants-hanger-with-green-background_23-2150264165.jpg?w=360&t=st=1686835292~exp=1686835892~hmac=83a4de4205795d35be5e3f1373cbe78d2e1e73251f97d95b7e281332b82e8c2a',
            image_5:
              'https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1686835358~exp=1686835958~hmac=24d038704077134bd669a1fe15d97854e6b27220fd5e3ba19d90d17021eb999e',
          },
        },
        {
          id: 3,
          name: 'Shoes',
          images: {
            image_1:
              'https://img.freepik.com/free-photo/white-high-top-sneakers-unisex-footwear-fashion_53876-106036.jpg?w=1060&t=st=1686835643~exp=1686836243~hmac=716a285a6de48b3215200804f60ac4ce6906cc1faad39d4bbcec3bab01242c01',
            image_2:
              'https://img.freepik.com/free-psd/sport-shoe-mockup-isolated_1310-1632.jpg?w=1060&t=st=1686835714~exp=1686836314~hmac=8b71ab1fe7d54f8b6f76e4153870076ac490afa310ba16fe2010822fa2c807d7',
            image_3:
              'https://img.freepik.com/free-photo/new-black-sneakers-isolated-white-background_93675-135051.jpg?w=1060&t=st=1686835750~exp=1686836350~hmac=b85de09ecdd8edd3bd893591852900cc8ea6630e4c172dcf5e65c338eaca9a2a',
            image_4:
              'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=1060&t=st=1686835982~exp=1686836582~hmac=4ef5f16f31143b3e30cfc67c24d185f34737816f1d19c3ea0a77cd70c6c2113c',
            image_5:
              'https://img.freepik.com/free-photo/colorful-slip-unisex-streetwear-sneakers-fashion_53876-101518.jpg?w=1060&t=st=1686836024~exp=1686836624~hmac=56479f997fe72589c874f534e9cd7b6d003326f208627b81658564d9e8a98a9a',
          },
        },
        {
          id: 4,
          name: 'Scarfs',
          images: {
            image_1:
              'https://img.freepik.com/free-photo/woman-s-hand-holding-patterned-scarf-fashion_53876-102091.jpg?w=360&t=st=1686836082~exp=1686836682~hmac=6c8918c30e90ad9e382333ef0c4017a954319c971d5c8949b1b4d0dc5c741900',
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
            <h5 className="text-xl tracking-tight text-slate-900 pb-3">{subcategory.name}</h5>
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