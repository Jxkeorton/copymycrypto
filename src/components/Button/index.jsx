import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[31px]" };
const variants = {
  fill: {
    blue_gray_900: "bg-blue_gray-900 text-indigo-50",
    indigo_50: "bg-indigo-50 text-black-900",
  },
};
const sizes = { xs: "p-[18px]", sm: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900", "indigo_50"]),
};

export { Button };
