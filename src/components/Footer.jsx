import React from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
 <>
    <footer className="footer xl:px-24 py-10 px-4 text-base-content bg-slate-100 ">
  <aside>
 <img className=' w-56' src={logo} alt="logo" />
 <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Modi aliquid repudiandae dolore quasi? <br /> Reprehenderit, alias?</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>
      
      <footer className="footer footer-center p-4   bg-slate-100  text-base-content">
      <aside>
        <p>Copyright © 2024 - All right reserved by Xrow (^_^) </p>
      </aside>
    </footer>

    </>
  );
}

export default Footer;
