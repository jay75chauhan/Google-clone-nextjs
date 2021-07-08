import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/outline";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import ThemeSwitch from "../components/ThemeSwitch";
function Header() {
  const router = useRouter();
  const serchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = serchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 z-10 overflow-hidden bg-white shadow-md dark:bg-[#292A2D]">
      <div className="flex w-full sm:p-6 py-4 px-2 items-center ">
        <Image
          src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer hover:animate-pulse mr-auto "
        />

        <form className="flex flex-grow sm:px-6 sm:py-3 px-3 py-2 ml-3 sm:ml-10 sm:mr-5 mr-2 border border-gray-200  rounded-full shadow-md max-w-3xl items-center hover:shadow-lg focus-within:shadow-xl">
          <input
            ref={serchInputRef}
            type="text"
            className="sm:flex-grow w-full focus:outline-none bg-transparent"
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={() => (serchInputRef.current.value = "")}
            className="h-7 sm:mr-3 text-gray-500 dark:text-white cursor-pointer transition duration-100 transform hover:scale-90"
          />

          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 dark:text-white" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 dark:text-white" />
          <button hidden type="submit" onClick={search}></button>
        </form>

        <ViewGridIcon className=" hidden ml-auto sm:inline-flex items-center mr-5 h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer dark:hover:bg-white dark:hover:text-black" />
        <Avatar className="m" />
      </div>

      {/* headeroptions */}

      <HeaderOptions />
    </header>
  );
}

export default Header;
