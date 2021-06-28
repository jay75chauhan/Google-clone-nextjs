import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";

function Avatar({ url, className }) {
  return (
    <UserButton
    // className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    // loading="lazy"

    // alt="profile img"
    ></UserButton>
  );
}

export default Avatar;
