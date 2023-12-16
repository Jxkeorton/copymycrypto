import React from "react";
import { Button, Text } from "components";

const NavBar = (props) => {

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log("Section ID:", sectionId);
    if (section) {
      console.log("Section Element:", section);
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Section not found!");
    }
  };

  return (
    <>
      <header className={props.className}>
        <Text
          className="text-white-A700 text-xl uppercase w-48"
          size="txtMontserratRomanExtraBold20"
        >
          copy my crypto{" "}
        </Text>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[61px] h-[62px] md:h-auto items-center justify-start w-[552px] sm:w-full">
          <div className="flex flex-row gap-[30px] h-[62px] md:h-auto items-center justify-start w-[226px]">
          <button
              onClick={() => handleNavLinkClick("why")}
              className="text-center text-white-A700 text-xl uppercase w-auto hover"
            >
              Why me?
            </button>
            <button
              className="text-white-A700 text-xl uppercase w-auto hover"
              size="txtMontserratRomanSemiBold20"
              onClick={() => handleNavLinkClick("details")}
            >
              Details{" "}
            </button>
          </div>
          <Button
            className="hover__button cursor-pointer font-extrabold font-montserrat h-[62px] leading-[normal] text-center text-xl w-[265px]"
            shape="round"
            color="blue_gray_900"
            size="xs"
            variant="fill"
            onClick={() => handleNavLinkClick("signup")}
          >
            Sign Up
          </Button>
        </div>
      </header>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
