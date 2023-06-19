"use client";
import { Fragment, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import axios from 'axios';
import ImageCarousel from '@/components/ImageCarosule';



interface Category {
  cat_id: string;
  category: string;
  name: string;
}

const BusinessCategorySelect = () => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  let [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [businessName, setBusinessName] = useState<string>('');
  const [categoryImage, setCategoryImage] = useState();

  const handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    const selectedCategoryId = categories.find((category) => category.category === selectedCategory)?.cat_id;
    setSelectedCategory(selectedCategory);
    setSelectedCategoryId(selectedCategoryId || '');
  };

  const [locationInfo, setLocationInfo] = useState({
    city: '',
    state: '',
  });

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidHlwb2YiLCJhIjoiY2xpYWNlcml4MDJjYzNlbzluN2sxejZmMyJ9.bj6RUsjOYq3-OC1xSqcV4w';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/typof/clib33rst007d01pgar1d1hyx',
      center: [-74.5, 40],
      zoom: 9,
      scrollZoom: true,
      attributionControl: false, // Hide the default attribution control
    });

    map.on('load', () => {
      const marker = new mapboxgl.Marker({
        color: 'red',
        draggable: true,
      });

      // Get current location coordinates
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch location information based on coordinates
          fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
          )
            .then((response) => response.json())
            .then((data) => {
              const city = data.features[0].context.find((context: { id: string }) => context.id.includes('place')).text;
              const state = data.features[0].context.find((context: { id: string }) => context.id.includes('region')).text;
              console.log('Current Location:', city, state);
              // Store longitude and latitude
              const lon = data.features[0].center[0];
              const lat = data.features[0].center[1];
              console.log('Current Location:', lon, lat);
              // Set location information in state
              setLocationInfo({
                city: city,
                state: state,
              });

              // Add marker in the current location of the user
              marker.setLngLat([lon, lat]).addTo(map);
              map.flyTo({ center: [lon, lat], zoom: 9 });

              fetch('https://typof-ai.typof.co/api/categories')
                .then((response) => response.json())
                .then((data) => {
                  setCategories(data);
                })
                .catch((error) => {
                  console.log('Error calling API:', error);
                });
            })
            .catch((error) => {
              console.log('Error getting current location:', error);
            });
        },
        (error) => {
          console.log('Error getting current location:', error);
        }
      );
    });

    // Cleanup function to remove the map
    return () => {
      map.remove();
    };
  }, []);

  // image generate and pass to tertial
  const handleCatImageGenerate = () => {
    axios
      .get(`https://typof-ai.typof.co/api/category-images/${selectedCategoryId}`)
      .then((res: { data: any; }) => {
        console.log(res.data);
        setCategoryImage(res?.data)
      })
      .catch((error: any) => {
        console.log('Error calling API:', error);
      });
  };


  const [open, setOpen] = useState(false)

  const handlebBusinessName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const businessName = e.target.value;
    setBusinessName(businessName);
    localStorage.setItem('businessName', businessName);
  }

  return (
    <>
      <div className={`bg-white h-screen ${inter.className}`}>
        <div className="w-full h-screen md:flex md:flex-row">
          {
            <div className="order-1 block w-full md:flex h-1/2 md:h-full md:max-w-2xl md:order-2">
              {
                open ? (
                  <ImageCarousel imageList={categoryImage} />
                ) : (
                  <div className="order-1 block w-full h-full md:flex md:h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 md:max-w-2xl md:order-2" id="map">
                  </div>
                )
              }
            </div>
          }
          <div className="relative flex flex-col items-center justify-center flex-1 order-2 mt-4 md:w-1/2 md:pt-0 md:h-full md:order-1 md:mt-1">
            {
              open ? (
                <div className="relative flex flex-col items-center justify-center flex-1 w-full px-5 md:px-10">
                  <div className="flex flex-col justify-center flex-1 max-w-full space-y-5">
                    <div className="flex flex-col w-full space-y-2 text-center">
                      {/*sub content */}
                      <button className="" onClick={() => {
                        setOpen(!open)
                      }}>
                        <HiOutlineArrowNarrowLeft className="text-2xl" />
                      </button>
                      {/* sub content end */}
                      <h2 className="pt-5 text-xl font-bold md:text-3xl text-start">How Would You Describe Your Business Name ? </h2>
                    </div>
                    <div className="flex flex-col max-w-3xl pt-5 space-y-5">
                      {/* Business Name input field */}
                      <div className="w-full max-w-md form-control">
                        <label className="label">
                          <span className="label-text">Enter Business Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Business Name"
                          className="max-w-full input input-bordered"
                          name="businessName"
                          value={businessName}
                          onChange={handlebBusinessName} // Remove the parentheses here
                        />
                      </div>
                      <button className="flex items-center justify-center px-6 py-2 text-white transition bg-black rounded-md cursor-pointer select-none group w-44" type='button' disabled={!businessName} >
                        <Link href="/webgenerate" className="flex items-center justify-center w-full py-1 font-bold text-center rounded group">
                          Next
                        </Link>
                        <FiArrowRight className="w-0 h-6 ml-4 transition-all flex-0 group-hover:w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative flex flex-col items-center justify-center flex-1 w-full px-5 md:px-10">
                  <div className="flex flex-col justify-center flex-1 max-w-full space-y-5">
                    <div className="flex flex-col w-full space-y-2 text-center">
                      {/*sub content */}
                      <button className="">
                        <a href="/startingPage/initial">
                          <HiOutlineArrowNarrowLeft className="text-2xl" />
                        </a>
                      </button>
                      <p className="text-xl font-bold md:text-xl text-start">
                      It appears that
                        <span className="pl-2 pr-2 font-serif text-xl text-blue-300">
                          {locationInfo.city}, {locationInfo.state}
                        </span>
                         is where you are currently situated.
                        {/* <span className='pl-2'><GrLocation className='text-2xl text-black' /></span> */}
                      </p>
                      {/* sub content end */}
                      <h2 className="pt-5 text-xl font-bold md:text-3xl text-start">What type of commercial endeavor are you involved in ?</h2>
                    </div>
                    <div className="flex flex-col max-w-3xl pt-5 space-y-5">
                      {/* select input field */}
                      <select className="w-full max-w-full rounded-md select select-bordered select-md" onChange={handleCategorySelect} value={selectedCategory || ""}>
                        <option disabled value="">Select Your Business Type</option>
                        {categories.map((item, index) => (
                          <option key={index} value={item.name}>
                            {item.category}
                          </option>
                        ))}
                      </select>
                      <button className={`group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition ${!selectedCategory ? 'btn-warning  cursor-none' : ""}`} disabled={!selectedCategory} onClick={() => {
                        setOpen(!open)
                        handleCatImageGenerate()
                        localStorage.setItem('businessName', businessName);
                      }}>
                        {/* <Link href="/startingPage/tertiary" className="flex items-center justify-center w-full py-1 font-bold text-center rounded group"> */}
                        Next
                        {/* </Link> */}
                        <FiArrowRight className="w-0 h-6 ml-4 transition-all flex-0 group-hover:w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCategorySelect;
