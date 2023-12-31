import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './../Footer/Footer';
import Loading from '../Loading/Loading';

function Mainglaout() {
   const navigation = useNavigation()
  return (
    <div>
      <Header />
      <div style={{margin:'10px 0'}}>{navigation.state==='loading' ? <Loading/>: <Outlet/>}</div>
      <Footer />
    </div>
  );
}

export default Mainglaout