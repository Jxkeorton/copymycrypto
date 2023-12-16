import React from "react";

import CTA from "components/CTA";
import Details from "components/Details";
import Footer from "components/Footer";
import Hero from "components/Hero";
import LargeTestimonial from "components/LargeTestimonial";
import NavBar from "components/NavBar";
import Testimonials from "components/Testimonials";
import VideoProof from "components/VideoProof";
import Why from "components/Why";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-orange-400__gradient font-montserrat gap-[22px] items-center justify-center mx-0 pt-[46px] w-[100vw]">
        <div className="flex flex-col items-center justify-center md:w-full md:px-10 sm:px-5 px-[76px] w-full">
          <NavBar className="flex md:flex-col flex-row md:gap-10 h-[62px] md:h-auto items-center justify-between ml-2 md:ml-[0] w-full" /> 
          <Hero className="flex md:flex-col sm:flex-col flex-row md:gap-5 h-[582px] md:h-auto items-center justify-start md:m-[] max-w-[1176px] ml-2 md:ml-[0] md:mt-10 mt-[70px] w-full" />
          <Testimonials className="flex flex-col gap-11 h-[481px] md:h-auto items-start justify-end max-w-[1072px] ml-1 md:ml-[0] mt-[72px] w-full" />
          <Why id="why" className="flex md:flex-col flex-row gap-[54px] h-auto md:h-auto items-center justify-start max-w-[1065px] md:ml-[0] ml-[7px] mt-32 w-full" />
          <LargeTestimonial className="mt-5 md:mx-3 py-5 bg-gradient flex flex-row md:flex-col-reverse gap-[18px] h-[auto] md:h-auto items-end md:items-center justify-start max-w-[1065px] md:px-5 px-[43px] rounded-[50px] w-full" />
          <Details id="details" className="flex flex-col gap-7 h-auto md:h-auto items-center justify-center mt-[69px] w-full" />
          <VideoProof className="flex flex-col md:gap-10 gap-[90px] h-auto py-2 max-w-[1066px] mt-[50px] w-full" />
        </div>
        <div className="flex flex-col md:gap-10 gap-[62px] items-center w-full">
          <CTA id="signup" className="mt-5 sm:pt-5 bg-gradient flex flex-col gap-[18px] h-[386px] md:h-auto max-w-[1065px] md:px-5 px-[43px] rounded-[50px] w-full" />
          <Footer className="flex flex-col font-roboto gap-[25px] h-[315px] md:h-auto items-center justify-start max-w-[1440px] w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
