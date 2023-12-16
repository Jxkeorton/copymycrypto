import React from "react";

import { Img } from "components";

const DesktopOneColumncoin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[390px] relative w-full">
          <Img
            className="h-[390px] m-auto object-cover w-full"
            src="defaultNoData.png"
            alt="coin"
          />
          <div className="absolute h-[390px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[390px] m-auto object-cover w-full"
              src="defaultNoData.png"
              alt="coinmask"
            />
            <div className="absolute h-[390px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[390px] m-auto object-cover w-full"
                src="defaultNoData.png"
                alt="icon"
              />
              <Img
                className="absolute h-[390px] inset-[0] justify-center m-auto object-cover w-full"
                src="defaultNoData.png"
                alt="iconmask"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneColumncoin.defaultProps = {};

export default DesktopOneColumncoin;
