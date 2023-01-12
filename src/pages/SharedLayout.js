import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import StyledNavbar from "../component/navbar/StyledNavbar"


const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <StyledNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
