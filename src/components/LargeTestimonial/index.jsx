import React from "react";

import { Img, Text } from "components";

const LargeTestimonial = (props) => {
  return (
    <>
      <div className={props.className}>
          <div className="flex flex-col gap-[39px] justify-start md:mt-10 w-full">
              <Text
                className="md:ml-[0] ml-[11px] text-3xl md:text-[28px] md:text-center text-white-A700 sm:text-xl"
              >
                “ On the brink of retirement at 34 “
              </Text>
              <Text
                className="leading-[27.00px] md:pr-[10%] text-gray-300 text-xl sm:text-xs uppercase"
                size="txtRobotoRomanBold20Gray300"
              >
                <>
                  James (34) is the only crypto expert who is clear on which
                  coins to buy and avoid.
                  <br />
                  <br />
                  The others don’t do this. They review every coin under the
                  sun, but that just confuses me as I don&#39;t know how to pick
                  one coin over another (which is all I care about).
                  <br />
                  <br />I thank the universe I found James’ channel when I did,
                  as his advice has put me on the brink of a very early
                  retirement :)”
                </>
              </Text>
          </div>
          <Img
            className="h-[386px] md:h-auto object-cover md:w-[30%]"
            src="images/img_screenshot20231213_386x351.png"
            alt="screenshot20231_Five"
          />
      </div>
    </>
  );
};

LargeTestimonial.defaultProps = {};

export default LargeTestimonial;
