import React from "react";

function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent  hover:text-blue-500 dark:hover:text-white cursor-pointer hover:border-blue-500 pb-3 dark:hover:border-white
      
      ${
        selected &&
        "text-blue-500 border-blue-500 dark:text-white dark:border-white"
      }
      
      `}
    >
      <Icon className="h-4 hover:animate-ping sm:hover:animate-none" />
      <p className="hidden sm:inline-flex ">{title}</p>
    </div>
  );
}

export default HeaderOption;
