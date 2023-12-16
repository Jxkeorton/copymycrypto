import React from "react";
import ReactPlayer from 'react-player/wistia'
import { Text } from "components";

const VideoProof = (props) => {
  
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[37px] h-[100%] md:h-auto max-w-[1066px] w-full">
          <Text
            className="max-w-[1066px] md:max-w-full text-3xl text-center text-white-A700 md:text-xl"
            size="txtMontserratRomanBold30WhiteA700"
          >
            <>
              And unlike other &quot;experts&quot; I begin my videos by showing
              how all 26 have performed
            </>
          </Text>
          
          <div className="h-[376px] flex justify-center items-center md:h-[376px] object-cover">
            <ReactPlayer 
              url='https://fast.wistia.com/embed/iframe/i3dyfjkw84' 
              width="100%"
              height="100%" 
            />
          </div>

        </div>

        <div className="flex flex-col gap-[37px] h-auto md:h-auto max-w-[1066px] w-full">
          <div className="flex flex-col items-center justify-center">
              <Text
                className="md:text-3xl text-[30px] text-white-A700 md:w-auto text-center"
                size="txtMontserratRomanExtraBold50"
              >
                <>
                  My Famous
                  <br />
                  Fantom Prediction
                </>
              </Text>
              <Text
                className="leading-[27.00px] sm:text-[13px] mt-5 md:text-base text-white-A700 text-xl uppercase"
                size="txtRobotoRomanBold20"
              >
                <>
                  On 2nd June 2020, I singled out Fantom as “The best
                  cryptocurrency of the year” when it was just half a cent per
                  coin...
                  <br />
                  <br />
                  On 28th Oct 2021, Fantom hit $3.46 per coin - 692 times more
                  than when I first said
                </>
              </Text> 
          </div>

          <div className=" flex flex-col w-full gap-[37px] h-[100%] md:h-auto max-w-[1066px]">
            <div className="h-[376px] flex justify-center items-center md:h-[376px] object-cover">
              <ReactPlayer url='https://fast.wistia.com/embed/iframe/41p461xou5' height="100%" width="100%" />
            </div>

            <Text
                className="text-base text-white-A700 md:text-xs md:w-full uppercase w-[80%] text-center"
                size="txtRobotoRomanSemiBold16"
            >
                Recorded in March 2021 when Fantom had only hit 84 cents
            </Text>
          </div>
            
         
        </div>
      </div>
    </>
  );
};

VideoProof.defaultProps = {};

export default VideoProof;
