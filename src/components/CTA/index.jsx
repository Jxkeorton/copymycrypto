import React from "react";

import { Button, Img, Text } from "components";

const CTA = (props) => {
  return (
    <section id={props.id}>
      <div className={props.className}>
        <div className="flex flex-col gap-[-6px] h-[136px] md:h-auto items-center justify-end max-w-[947px] md:px-10 sm:px-5 px-[100px] w-full">
          <Text
            className="md:text-[40px] text-[50px] text-center text-white-A700 w-[239px]"
            size="txtMontserratRomanExtraBold50"
          >
            Sign Up !
          </Text>
          <Text
            className="max-w-[746px] md:max-w-full text-3xl text-amber-600 text-center md:text-xl sm:text-[18px]"
            size="txtMontserratRomanBold30Amber600"
          >
            $49 Special Offer - Ends Thursday 14th December 2023
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-11 h-[226px] md:h-auto items-center justify-start max-w-[967px] w-full">
          <div className="flex flex-1 flex-row gap-[39px] h-[226px] md:h-auto items-center justify-start max-w-[685px] w-full sm:flex-col">
            <Img
              className="h-[226px] md:h-auto object-cover w-[251px] md:w-[30%]"
              src="images/img_31.png"
              alt="wallet"
            />
            <div className="flex sm:items-center md:flex-1 flex-col gap-[22px] h-[226px] md:h-auto items-end md:items-start justify-start pb-[35px] w-[395px] md:w-full">
              <Text
                className="md:flex md:items-start md:justify-start leading-[200.00%] text-[15px] text-white-A700 md:text-xs"
                size="txtMontserratRomanExtraBold15"
              >
                <>
                  24/7 access to my portfolio in real-time <br />
                  Live updates on when to buy and sell coins <br /> Step-by-step
                  guide for those new to crypto
                </>
              </Text>
              <Button
                className="cursor-pointer hover__BuyButton font-extrabold font-montserrat h-20 md:h-auto leading-[normal] rounded-[40px] text-3xl md:text-[20px] text-center w-[387px] md:w-auto"
                color="indigo_50"
                size="sm"
                variant="fill"
              >
                Buy Now
              </Button>
            </div>
          </div>
          <Img
            className="md:flex-1 h-[226px] md:h-auto md:hidden object-cover w-[238px] md:w-full"
            src="images/img_251.png"
            alt="TwoHundredFiftyOne"
          />
        </div>
      </div>
    </section>
  );
};

CTA.defaultProps = {};

export default CTA;
