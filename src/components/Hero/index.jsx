import React from "react";

import { Img, Text } from "components";

const Hero = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 h-[582px] md:h-auto md:items-center items-start justify-start sm:p-[] md:p-[] md:pb-5 md:pt-20 sm:py-0 py-[146px] w-[595px] md:w-full">
          <Text
            className="max-w-[386px] md:max-w-full sm:text-3xl md:text-[46px] text-[50px] md:text-center text-white-A700"
            size="txtMontserratRomanExtraBold50"
          >
            Know nothing about crypto?{" "}
          </Text>
          <div className="flex flex-col items-end justify-center w-[582px] sm:w-full">
            <Text
              className="md:m-[] max-w-[401px] md:max-w-full md:mt-5 sm:text-3xl md:text-[46px] text-[50px] sm:text-center md:text-center text-white-A700"
              size="txtMontserratRomanExtraBold50"
            >
              Copy Someone Who Does !
            </Text>
          </div>
        </div>
          <Img
            className=" h-[60%] md:h-auto ml-[12%] md:ml-0 object-cover sm:w-1/2 md:w-[30%]"
            src="images/img_210.png"
            alt="crypto coins"
          />
      </div>
    </>
  );
};

Hero.defaultProps = {};

export default Hero;
