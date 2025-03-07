import React from "react";

const Button = ({ btnText, btnStyle, btnFunc }) => {
  return (
    <button
    onClick={btnFunc}
      className={`${btnStyle} cursor-pointer overflow-hidden duration-300 ease-in-out hover:shadow-md`}
    >
      {btnText}
    </button>
  );
};

export default Button;
