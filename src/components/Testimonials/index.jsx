import React from "react";

import { Img, Text } from "components";

const Testimonials = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="max-w-[1068px] md:max-w-full text-3xl md:text-[28px] text-blue_gray-900 text-center sm:text-xl"
          size="txtMontserratRomanBold30"
        >
          Discover How over 2800 people are building rapid wealth for an early
          retirement{" "}
        </Text>
        <div className="flex sm:grid gap-3 grid-cols-2 sm:grid-rows-2 h-[363px] md:h-auto items-center justify-start max-w-[1072px] w-full">
          <div className="bg-indigo-50 flex flex-1 flex-col gap-1.5 items-center justify-start pb-[5px] rounded-bl-[29px] rounded-br-[29px] rounded-tl-[48px] rounded-tr-[48px] w-full">
            <Img
              className="h-[269px] md:h-auto object-cover rounded-tl-[48px] rounded-tr-[48px] w-full"
              src="images/img_screenshot20231213.png"
              alt="screenshot20231"
            />
            <Text
              className="leading-[27.00px] text-black-900 md:text-center text-xs uppercase w-[86%] sm:w-full"
              size="txtRobotoRomanSemiBold12"
            >
              Art Wagner (Age 38, Bristol, UK) turned $3,100 into $57,133 in 8
              months
            </Text>
          </div>
          <div className="bg-indigo-50 flex flex-1 flex-col gap-1.5 justify-start rounded-bl-[29px] rounded-br-[29px] rounded-tl-[48px] rounded-tr-[48px] w-full">
            <Img
              className="h-[268px] md:h-auto object-cover rounded-tl-[48px] rounded-tr-[48px] w-full"
              src="images/img_screenshot20231213_268x255.png"
              alt="screenshot20231_One"
            />
            <Text
              className="leading-[27.00px] mb-[5px] ml-3 md:ml-[0] text-black-900 md:text-center text-xs uppercase w-[86%] sm:w-full"
              size="txtRobotoRomanSemiBold12"
            >
              Nikolas Studer (Age 48, Lucerne, Switzerland) turned $35,000 into
              $416,346 in 6 months
            </Text>
          </div>
          <div className="bg-indigo-50 flex flex-1 flex-col gap-1.5 justify-start pb-[5px] rounded-bl-[29px] rounded-br-[29px] rounded-tl-[48px] rounded-tr-[48px] w-full">
            <Img
              className="h-[269px] md:h-auto object-cover rounded-tl-[48px] rounded-tr-[48px] w-full"
              src="images/img_screenshot20231213_269x255.png"
              alt="screenshot20231_Two"
            />
            <Text
              className="leading-[27.00px] ml-2.5 md:ml-[0] text-black-900 md:text-center text-xs uppercase w-[86%] sm:w-full"
              size="txtRobotoRomanSemiBold12"
            >
              Jack Sanders (Age 32, Maine, USA) turned $21,500 into $725,266
              over 10 months
            </Text>
          </div>
          <div className="bg-indigo-50 flex flex-1 flex-col gap-[7px] items-center justify-start pb-1.5 rounded-bl-[29px] rounded-br-[29px] rounded-tl-[48px] rounded-tr-[48px] w-full">
            <Img
              className="h-[268px] md:h-auto object-cover rounded-tl-[48px] rounded-tr-[48px] w-full"
              src="images/img_screenshot20231213_1.png"
              alt="screenshot20231_Three"
            />
            <Text
              className="leading-[27.00px] text-black-900 md:text-center text-xs uppercase w-[86%] sm:w-full"
              size="txtRobotoRomanSemiBold12"
            >
              Anya Merza (Age 29, Amstetten, Austria) turned $1,300 into $36,850
              across 9 months
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Testimonials.defaultProps = {};

export default Testimonials;
