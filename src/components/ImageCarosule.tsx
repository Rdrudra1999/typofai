import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function ImageCarousel(props: any) {
  if (!props.imageList) {
    return null;
  }

  const cat_images = props.imageList.category_images;

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const carouselHeight = windowWidth < 720 ? '50vh' : '100%';

  return (
    <div className="carousel-container" >
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        className="carousel"
        transitionTime={700}
      >
        {cat_images.map((item: any) => (
          <div key={item} className="lg:w-full h-1/2 lg:h-screen carousel-slide">
            <div className="absolute top-0 left-0 p-4 block  md:hidden z-50">
                      <img src="/logo2.svg" alt="Logo" className="w-32 h-10 " />
                    </div>
            <img src={`https://typof-ai.typof.co/images/categoryimages/${item}`} alt="" className="content-center object-cover w-full h-full" height={0} width={0} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
