// "use client";
// import React, { useEffect, useState } from 'react'
// import { FiArrowRight } from 'react-icons/fi';
// import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
// import { Inter } from 'next/font/google';
// import axios from 'axios';
// import Link from 'next/link';
// import ImageCarousel from '@/components/ImageCarosule';
// import router, { useRouter } from 'next/router';





// export default function tertiary() {

//     const router = useRouter();
//     const { categoryImage } = router.query;
//     console.log('Category Image:', categoryImage);
    
//     return (
//         <>
//             <div className={`bg-white h-screen `}>
//                 <div className="md:flex md:flex-row w-full h-screen">
//                     {/* map component */}
//                     <div className="md:flex block h-1/2 md:h-full  md:max-w-2xl w-full order-1 md:order-2" >
//                         <ImageCarousel />
//                     </div>
//                     {/* Main Content */}
//                     <div className="flex flex-1 flex-col items-center justify-center relative h-1/2 md:w-1/2  md:pt-0 md:h-full order-2 md:order-1">
//                         <div className="flex flex-1 flex-col items-center justify-center px-5 md:px-10 relative w-full">
//                             <div className="flex flex-1 flex-col justify-center space-y-5 max-w-full">
//                                 <div className="flex flex-col space-y-2 text-center w-full">
//                                     {/*sub content */}
//                                     <button className="">
//                                         <Link href="/startingPage/secondary">
//                                             <HiOutlineArrowNarrowLeft className="text-2xl" />
//                                         </Link>
//                                     </button>
//                                     {/* sub content end */}
//                                     <h2 className="text-xl md:text-3xl pt-5 font-bold text-start">How Would You Describe Your Business Name ? </h2>
//                                 </div>
//                                 <div className="flex flex-col space-y-5 pt-5 max-w-3xl">
//                                     {/* Business Name input field */}
//                                     <div className="form-control w-full max-w-full">
//                                         <label className="label">
//                                             <span className="label-text">Enter Business Name</span>                     
//                                         </label>
//                                         <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
//                                     </div>

//                                     <button className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
//                                         <Link href="/webgenerate" className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
//                                             Next
//                                         </Link>
//                                         <FiArrowRight className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
