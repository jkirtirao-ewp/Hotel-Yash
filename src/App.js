import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import BookOnline from "./Pages/Booking/BookOnline";
import BookingForm from './Pages/Booking/components/bookingForm';
import Checkout from './Pages/Booking/components/checkout';
import Successful from './Pages/Booking/components/successful';
import "./index.css";
import Scroll from './components/Scroll';



function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bookonline" element={<BookOnline />} />
        <Route path="/bookingform" element={<BookingForm />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/successful" element={<Successful />}/>
      </Routes>
     <Scroll/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
