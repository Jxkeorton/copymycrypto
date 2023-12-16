import React from "react";

import { Img } from "components";

const DesktopOneColumncoinOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[556px] relative w-full">
          <Img
            className="h-[556px] m-auto object-cover w-full"
            src="defaultNoData.png"
            alt="coin_One"
          />
          <div className="absolute h-[556px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[556px] m-auto object-cover w-full"
              src="defaultNoData.png"
              alt="coinmask_One"
            />
            <div className="absolute h-[556px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[556px] m-auto object-cover w-full"
                src="defaultNoData.png"
                alt="icon_One"
              />
              <Img
                className="absolute h-[556px] inset-[0] justify-center m-auto object-cover w-full"
                src="defaultNoData.png"
                alt="iconmask_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneColumncoinOne.defaultProps = {};

export default DesktopOneColumncoinOne;
