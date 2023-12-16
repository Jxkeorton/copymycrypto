import React from "react";

import { Img, Text } from "components";

const Why = (props) => {
  return (
    <section id={props.id}>
      <div className={props.className}>
      <div className="flex flex-col md:flex-row md:h-[218px] items-center justify-center pb-[21px] w-[30%] md:w-auto sm:w-full">
        <div className="md:w-[50%]">
          <Img
            className=" md:h-[100%] rounded-[50%] w-full "
            src="images/img_screenshot20231213_252x257.png"
            alt="profile picture"
          />
        </div>
        <div className="md:w-[50%] ">
          <Img
            className="md:h-[100%]  w-full object-cover"
            src="images/img_241.png"
            alt="Money bag"
          />
        </div>
      </div>
        <div className="flex flex-col gap-[33px] h-auto md:h-auto md:items-center items-start justify-start md:text-center w-[552px] sm:w-full">
          <Text
            className="sm:text-[30px] md:text-[46px] text-[50px] md:text-center text-white-A700"
            size="txtMontserratRomanExtraBold50"
          >
            Why copy me ?
          </Text>
          <Text
            className="leading-[27.00px] sm:text-base text-white-A700 text-xl uppercase"
            size="txtRobotoRomanBold20"
          >
            <>
              Hi, I&#39;m James McMahon and I run the “Crypto with James”
              Youtube channel - which has over 45,000 subscribers.
              <br />
              <br />
              As of December 2023, I’ve made 1029 videos with the aim to help
              regular people retire early by knowing which coins to best profit
              from.
              <br />
              <br />I take immense pride in not mincing my words, and have
              recommended 26 coins for my viewers to invest in.Had you invested
              $100 into each coin you would made $123,795 in profit.(See below
              for proof with exact numbers and dates - all which you can verify
              on youtube)
            </>
          </Text>
        </div>
      </div>
    </section>
  );
};

Why.defaultProps = {};

export default Why;
