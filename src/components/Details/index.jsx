import React from "react";

import { Img, Text } from "components";

const Details = (props) => {
  return (
    <section id={props.id}>
      <div className={props.className}>
        <div className="flex flex-col gap-[35px] h-[249px] md:h-auto items-center w-full">
          <div className="flex flex-col items-center justify-center max-w-[637px] md:text-center w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 w-[187px]"
              size="txtMontserratRomanExtraBold50"
            >
              Details
            </Text>
          </div>
          <Text
            className="sm:font-bold leading-[27.00px] max-w-[1065px] md:max-w-full md:p-[] md:px-[10%] sm:text-[13px] text-white-A700 text-xl uppercase"
            size="txtRobotoRomanBold20"
          >
            <>
              Since launching my channel in February 2020, I&#39;ve carefully
              selected and recommended 26 cryptocurrencies. If you had invested
              $100 in each when I made the recommendations, your profit today
              would be $10,031.14. Back in February 2022, the total value of
              these 26 coins was an impressive $123,795.75. This track record
              demonstrates the success of my picks and reinforces my commitment
              to transparency in sharing performance results.
            </>
          </Text>
        </div>
        <div className="flex md:flex-col sm:flex-col flex-row gap-[25px] h-[752px] md:h-auto items-center justify-start max-w-[1065px] w-full">
          <div className="flex sm:flex-1 flex-col gap-[9px] h-[751px] md:h-auto items-center justify-start pb-[63px] w-[525px] md:w-[] sm:w-full">
            <Text
              className="text-3xl text-black-900 md:text-center md:text-xl"
              size="txtMontserratRomanBold30Black900"
            >
              Prices at their peak in Feb 2022:
            </Text>
            <Img
              className="h-[627px] md:h-auto object-cover md:w-3/5 w-[525px] sm:w-[70%]"
              src="images/img_screenshot20231213_627x525.png"
              alt="screenshot20231_Six"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-6 h-[752px] md:h-auto items-center md:items-center justify-center w-[515px] sm:w-full">
            <Text
              className="text-3xl text-blue_gray-900 md:text-center sm:text-center md:text-xl"
              size="txtMontserratRomanBold30"
            >
              Prices as of 1st December 2023:
            </Text>
            <Img
              className="h-[690px] md:h-auto object-cover md:w-3/5 w-[515px] sm:w-[70%]"
              src="images/img_screenshot20231213_690x515.png"
              alt="screenshot20231_Seven"
            />
          </div>
        </div>
      </div>
    </ section>
  );
};

Details.defaultProps = {};

export default Details;
