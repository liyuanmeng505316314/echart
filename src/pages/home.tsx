import React from 'react';
import './home.scss';
import headerPng from '../image/header.png'

export const Home = () => {
  return (
      <div className="home" >
        <header style={{backgroundImage:`url(${headerPng})`} } /> 
        <main>
           <section className="section1"></section>
           <section className="section2"></section>
           <section className="section3"></section>
           <section className="section4"></section>
           <section className="section5"></section>
        </main> 
      </div>
  )
};
