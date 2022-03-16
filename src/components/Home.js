import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Product from './Product';
import './Home.css'
import Solucoes from './Solucoes';
import Contact from './Contact';
import Footer from './Footer';
export default function Home() {
  return (
    <div className="bg-gradient-to-l from-yellow-600 to-blue-900">
      <Header />
      <Hero />
      <img src="https://imgix.tractian.com/images/ondas.svg" alt="" />
      <Product/>
      <Solucoes />
      <Contact />
      <Footer />
    </div>
  );
}
