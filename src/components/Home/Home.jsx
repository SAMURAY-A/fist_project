import React from 'react';
import About from './About';
import Section from './Section';
import Informetion from './Informetion';
import Brends from './brends';
import End from './end';

const Home = () => {
  return (
  <>
    <div className="py-44 bg-[#00000090] container">
      <div  className="text-white">
        <h2 className="text-5xl">Let’s Create Your.</h2>
        <h1 className="text-[78px] font-libre max-w-[700px]">Own Style with K.A.R.A.!</h1>
      </div>
    </div>
    <About />
    <Section/>
    <Informetion/>
    <Brends/>
    <End/>
  </>
    
  );
};

export default Home;
