import React from 'react';
import Services from './Services';
import Navigation from './Navigation';
import Property from './Property';
import Landing from './Landing';
import Info from './Info';
import Footer from './Footer'
import Action from './Action';
import Contact from './Contact';
import bg_main from "/bg_main.png"

function Main() {

  return (
    <>

      <div className='mt-6  mr-10 bg-cover h-screen' style={{backgroundImage:`url(${bg_main})`}} >
        <div className='flex bg-white-600 h-16 w-full items-center p-4'>
          <div className='flex items-centerc'>
            <img src="logo.png" alt="Osumare logo" className='h-16 w-auto' />
          </div>
       
          <div className='ml-auto text-black border-2 border-black rounded-full w-[70vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[16vw] h-7 pl-14 mb-8'>
            Contact Us
          </div>
        

        </div>



        <div className='text-center mt-20' style={{ backgroundImage: "url('Ellipse.png')" }}>
          <p className='text-2xl font-medium mt-[12%]'>Elevate  <span className='text-blue-600 font-bold'> Real Estate Success </span> with  <br />
            Osumare's Digital Expertise</p>


          <p className='text-sm'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
          <button className=' bg-blue-500  p-1.5  rounded-full mt-3 text-white ' style={{ width: "15rem" }}>Get Started </button>
        </div>


        <div className='flex items-center justify-center mt-[5%] w-[41vw] ml-[25%]'>
          <img src="home.png" alt="home image" style={{ height: "20rem", width: "25rem" }} />
        </div>
        <br />


        <p className='flex justify-center items-center p-12 text-2xl '> <b> Real Estate-Focused Digital Mastery</b></p>


        <div className='flex justify-start ml-[12%]' style={{ width: "100%", height: "100%", justifyContent: "space-around" }}>
          <img src="design.png" alt="Landing Logo" style={{ width: "20rem", height: "15rem" }} />


          <div className=' justify-center mr-[15%] '>
            <p className='flex font-bold  '>Unlock the Potential of Digital <br /> Real Estate Excellence</p>
            <p className=' mt-6 '>At Osumare, we understand that the real estate landscape  <br />
              demands a digital presence that aligns with the intricacies of <br /> property marketing. Our range of specialized services is <br /> meticulously designed to catapult your brand's success in the <br /> ever-evolving digital property market.</p>
            <button className='bg-blue-500 rounded-xl p-2 w-[10vw] m-2 text-white'>Get Started</button>
          </div>


        </div>



        <Services />

        <Navigation />

        <Property />

        <Landing />

        <Action />

        <Info />

        <Contact />

        <Footer />
<div>
  
</div>
        



      </div>
    </>
  );
}

export default Main;
