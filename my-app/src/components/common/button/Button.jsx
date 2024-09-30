import React from "react";

function Button({ variant, disabled, buttonType, children }) {
  return (
    <button
      className={`text-white cursor-pointer rounded-lg p-[7px] mx-3 my-2
        ${variant === "primary" ? "bg-blue-500" : ""}
        ${variant === "warning" ? "bg-orange-500" : ""}
        ${variant === "error" ? "bg-red-700" : ""}
        ${variant === "success" ? "bg-green-600" : ""}
        ${
          buttonType === "outline" && variant === "primary"
            ? "border-2 border-blue-500 bg-white !text-blue-500"
            : ""
        }
        ${
          disabled
            ? "!bg-gray-200 !text-gray-400 !cursor-not-allowed !border-none"
            : ""
        }`}
    >
      {children}
    </button>
  );
}

export default Button;
