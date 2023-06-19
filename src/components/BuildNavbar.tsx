import React, { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { MdOutlineDesignServices } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import {IoLogoGoogle} from 'react-icons/io5';
// import dynamic from 'next/dynamic';
// const LoginModal = dynamic(() => import('./module/loginModal'), { ssr: false });
import LoginModal from './module/loginModal';
const Logo = () => {
  return (
    <img src="/logo1.png" className="object-cover w-40 h-8" alt="Logo" />
  );
};
const RegenerateButton = () => {
  return (
    <button className="rounded-full btn">
      <FiRefreshCw className="w-6 h-6" />
      <span className='hidden md:block'>Regenerate</span>
    </button>
  );
};
const ModalButton = () => {
  const [isMdVisible, setIsMdVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
  }
  const toggleMdVisibility = () => {
    setIsMdVisible(!isMdVisible);
  };
  const closeModal = () => {
    setIsMdVisible(false);
  };
  return (
    <>
      <label htmlFor="my_modal_6" className="flex ml-2 rounded-full cursor-pointer btn" >
          <span className='hidden md:block'>customize</span>
          <span><MdOutlineDesignServices className="w-6 h-6" /></span>
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn" style={{
    position: 'absolute',
    right: '5px',
    top: '5px'
  }}>X</label>
      <LoginModal/>
    </div>
  </div>
</div>
    </>
  );
};
const BuildNavbar = () => {
  return (
    <header className='sticky inset-0 z-10 max-w-full px-4 py-2 mx-auto border border-black h-max lg:px-8 lg:py-4 bg-blue-gray-50 md:rounded-sm'>
      <nav className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <ul className="flex items-center">
            <ModalButton />
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default BuildNavbar;






