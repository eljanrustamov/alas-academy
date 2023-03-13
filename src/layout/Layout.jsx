import React from 'react'
import Header from './Header/Header.component';
import Footer from './Footer/Footer.component';
import { Outlet } from 'react-router-dom';
import CtaArea from '../components/CtaArea/CtaArea.component';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout


// const Layout = ({children}) => {
//   return (
//     <>
//     <Header/>
//     {
//         children
//     }
//     <Footer/>
//     </>
//   )
// }