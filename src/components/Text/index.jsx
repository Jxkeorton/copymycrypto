import React from "react";

const sizeClasses = {
  txtRobotoRomanBold20Gray300: "font-bold font-roboto",
  txtRobotoRomanBold20: "font-bold font-roboto",
  txtMontserratRomanBold30Black900: "font-bold font-montserrat",
  txtMontserratRomanBold30Amber600: "font-bold font-montserrat",
  txtRobotoRomanSemiBold16: "font-roboto font-semibold",
  txtMontserratRomanBold30: "font-bold font-montserrat",
  txtMontserratRomanBold30WhiteA700: "font-bold font-montserrat",
  txtRobotoRomanBold20Black900: "font-bold font-roboto",
  txtMontserratRomanExtraBold50: "font-extrabold font-montserrat",
  txtMontserratRomanExtraBold20: "font-extrabold font-montserrat",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtRobotoRomanSemiBold12: "font-roboto font-semibold",
  txtMontserratRomanExtraBold15: "font-extrabold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
