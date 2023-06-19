import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { IoLogoGoogle } from 'react-icons/io5'

const loginModal = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

    const handleSubmit = () => {
    }
    return (
        <Fragment>
            {/* modal start */}
            <div className={`flex items-center flex-col w-full md:max-w-[500px]`}>
                <div className="text-center">
                    <div className="text-3xl font-bold">
                    Login to Your Account
                    </div>
                    <div className="mt-3 text-c3">
                    Connect and customize your ecommerce store
                    </div>
                </div>
                <div className="flex items-center gap-2 w-full mt-10 mb-5">
                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-14 rounded-md cursor-pointer p-[1px]">
                        <div className="flex items-center justify-center gap-3 text-white font-semibold  w-full h-full ">
                            <IoLogoGoogle size={24} />
                            <span>Login with Google</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-20 h-[1px] bg-black"></span>
                    <span className="text-gray-800 font-semibold">OR</span>
                    <span className="w-20 h-[1px] bg-black"></span>
                </div>
                <form className="flex flex-col items-center gap-3 w-full mt-5" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full h-14  border-2 rounded-md border-gray-600 px-5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-14 border-2 rounded-md border-gray-600 px-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-14 rounded-md border-2 border-gray-600 px-5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="text-right w-full text-c3">
                        <span className="cursor-pointer">Forgot Password?</span>
                    </div>
                    <button className="mt-4 w-full text-white h-14 outline-none text-base font-semibold rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Login to Your Account
                    </button>
                </form>
                <div className="flex justify-center gap-1 text-c3 mt-5">
                    <span>Not a member yet?</span>
                    <Link href="/register">
                        <p className="font-semibold text-black underline underline-offset-2 cursor-pointer">
                        Register Now
                        </p>
                    </Link>
                </div>
            </div>
            {/* modal end */}
        </Fragment>
    )
}

export default loginModal