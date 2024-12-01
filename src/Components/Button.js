import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 m-2 font-semibold bg-gray-200 rounded-lg py-1  hover:bg-black hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
