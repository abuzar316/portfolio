"use client";
import { IoSunny } from "react-icons/io5";
import { PiMoonStarsFill } from "react-icons/pi";
import { LuMonitor } from "react-icons/lu";
import { themeMode } from "@/constants/constants";

interface darkMode {
  handleSetTheme: (val: string) => void;
}

const ChangeDarkMode = ({ handleSetTheme }: darkMode) => {
  return (
    <ul className="absolute right-0 bg-primaryLight w-[150px] rounded-lg py-2">
      <li
        className="cursor-pointer hover:bg-primaryLightOP flex items-center px-2 py-1"
        onClick={() => handleSetTheme(themeMode.light)}
      >
        <span className="pe-2">
          <IoSunny />
        </span>
        Light
      </li>
      <li
        className="cursor-pointer hover:bg-primaryLightOP flex items-center px-2 py-1"
        onClick={() => handleSetTheme(themeMode.dark)}
      >
        <span className="pe-2">
          <PiMoonStarsFill />
        </span>
        Dark
      </li>
      {/* <li className="cursor-pointer hover:bg-primaryLightOP flex items-center px-2 py-1">
        <span className="pe-2">
          <LuMonitor />
        </span>
        System
      </li> */}
    </ul>
  );
};

export default ChangeDarkMode;
