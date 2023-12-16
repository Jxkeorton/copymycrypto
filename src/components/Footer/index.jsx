import React from "react";

import { Text } from "components";

const Footer = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1440px] w-full">
          <Text
            className="flex flex-row sm:items-start justify-center sm:leading-[15px] leading-[27.00px] px-[150px] sm:px-[20px] sm:text-[12px] text-black-900 text-left text-xl uppercase"
            size="txtRobotoRomanBold20Black900"
          >
            <>
              Best,
              <br />
              James
              <br />
              <br />
              P.S. As usual you&#39;re protected by my 60 day money back
              guarantee. Either your wealth grows far beyond what you pay as a
              member, or you walk away with a full refund.
              <br />
              <br />
              P.P.S. The $49/month offer expires on Thursday 14th December 2023.
              Once missed it will rise to $99 per month and stay there. To
              secure a $50 discount per month, order now.
            </>
          </Text>
        </div>
        <div className="flex flex-col gap-[-5px] md:h-auto items-center justify-start max-w-[1440px] pb-[15px] pl-[503px] pr-[512px] md:px-10 sm:px-5 w-full">
          <Text
            className="sm:text-[13px] text-center text-white-A700 text-xl underline uppercase w-[108px]"
            size="txtRobotoRomanBold20"
          >
            Affiliates
          </Text>
          <Text
            className="sm:text-[13px] text-black-900 text-center text-xl uppercase w-[356px]"
            size="txtRobotoRomanBold20Black900"
          >
            Copyright © 2022 Copy My Crypto
          </Text>
        </div>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
