"use client";
import React from 'react'
import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
//use cookies to store the user's choice of theme


const PrvFooter = ({businessName}:any) => {


//how to use cookies


  return (
    <footer className={`footer p-10 bg-base-200 text-base-content ${inter.className}`}>
    <div>
      <h1 className='text-3xl font-bold uppercase tracking-wider'>{businessName}</h1>
      <p>ACME Industries Ltd.<br/>Providing reliable tech since 2023</p>
    </div> 
    <div>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Branding</a> 
      <a className="link link-hover">Design</a> 
      <a className="link link-hover">Marketing</a> 
      <a className="link link-hover">Advertisement</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
      <a className="link link-hover">Press kit</a>
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a> 
      <a className="link link-hover">Privacy policy</a> 
      <a className="link link-hover">Cookie policy</a>
    </div>
  </footer>
  )
}

export default PrvFooter;