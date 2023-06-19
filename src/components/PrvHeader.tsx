import { button } from "@material-tailwind/react";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";



export default function Header({ businessName}:any) {
    interface PrvHeaderProps {
        businessName: string;
      }
      

    return (
        <>
            <header>
                <div className="bg-white border-b border-gray-100">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="flex items-center justify-between h-16 lg:h-[72px]">
                            <button type="button" className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                                <a href="#" title="" className="inline-flex rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                    {/* <span className="sr-only"> Rareblocks logo </span> */}
                                    <h1 className="text-lg md:text-3xl font-semibold">{businessName}</h1>
                                </a>
                            </div>
                            <div className="flex items-center justify-end ml-auto">
                                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                                </div>
                                <div className="flex items-center justify-end">
                                    <button type="button" className="p-2  text-gray-900 transition-all duration-200 hover:text-gray-700">
                                        <BiSearch className="md:w-6 md:h-6 w-5 h-5" />
                                    </button>
                                    <button type="button" className="p-2  text-gray-900 transition-all duration-200 hover:text-gray-700">
                                        <BiHeart className="md:w-6 md:h-6 w-5 h-5" />
                                    </button>
                                    <button type="button" className="inline-flex items-center  text-gray-900 transition-all duration-200  hover:text-gray-700">
                                        <BiCart className="md:w-6 md:h-6 w-5 h-5" />
                                        <span className="inline-flex items-center justify-center w-5 h-5  text-xs font-bold text-white bg-gray-600 rounded-full"> 2 </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};
