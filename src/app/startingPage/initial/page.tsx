import React from 'react';
import { Inter } from 'next/font/google';
import { FiArrowRight, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const socialIcons = [
    {
        id: "1",
        link: "https://www.youtube.com/typof",
        icon: <FiYoutube className='w-6 h-6' />
    },
    {
        id: "2",
        link: "https://www.instagram.com/typof.co/",
        icon: <FiInstagram className='w-6 h-6' />
    },
    {
        id: "3",
        link: "https://www.facebook.com/typof.co",
        icon: <FiFacebook className='w-6 h-6' />
    },
    {
        id: "4",
        link: "https://twitter.com/typof_",
        icon: <FiTwitter className='w-6 h-6' />
    },
    {
        id: "5",
        link: "https://www.linkedin.com/company/typof-technologies",
        icon: <FiLinkedin className='w-6 h-6' />
    },
]


const Sidebar = () => {
    return (
        <div className="lg:flex flex-col justify-between lg:p-8 xl:p-12 w-full">
            <div className="flex items-center justify-start space-x-3 h-full w-full">
                <img src="https://uploads-ssl.webflow.com/6344fe0ae449f96ce795b92b/647ec76544a6f43b1d261144_6.webp" alt="typof-logo" className="
                width: 100%;
                max-width: 100px;
                height: auto;
                object-fit: contain;
                " />
            </div>

        </div>
    );
};

const LoginBox = () => {
    return (
        <div className="flex flex-1 flex-col justify-center items-center space-y-5 max-w-3xl">
            <div className="flex flex-col space-y-5 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Revolutionize your online business with our AI-Powered Ecommerce Platform.</h2>
                <div className='w-full flex justify-center pt-5'>
                    <button className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition" >
                        <Link href="/startingPage/secondary" className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Get Started </Link>
                        <FiArrowRight className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200">
            {/* <p className="font-bold mb-1">Built by <a href="#" className="underline dark:text-white">Frank Esteban</a></p> */}
            <p>Contact us on different platforms and social networks</p>
            <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
                {
                    socialIcons.map((item: any, index: number) => {
                        return (
                            <Link href={item.link} key={index} className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700">
                                {item.icon}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

const GetStarted = () => {
    return (
        <>
            <div className="bg-white h-screen">
                <div className="md:flex md:flex-row w-full h-screen">
                    {/* Sidebar */}
                    <div className="md:flex block h-1/2 md:h-full  w-full order-1 md:order-2 bg-black md:max-w-md lg:max-w-xl sm:max-w-md">
                        <Sidebar />
                    </div>
                    <div className="absolute top-0 left-0 p-4">
                        <img src="/logo2.svg" alt="Logo" className="w-32 h-10" />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-1 flex-col items-center justify-center px-3 relative h-1/2 md:w-1/2  pt-10 md:pt-0 md:h-full order-2 md:order-1">
                        {/* Login Box */}
                        <LoginBox />
                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetStarted;
