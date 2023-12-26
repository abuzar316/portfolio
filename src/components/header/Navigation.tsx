"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { PiMoonStarsFill } from "react-icons/pi";
import ChangeDarkMode from "../UI/ChangeDarkMode";
import useToggle from "@/hooks/useToggle";
import ClickAwayListener from "../utils/ClickAwayListener";
import useDarkMode from "@/hooks/useDarkMode";
import { navigationData, themeMode } from "@/constants/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import OffCanvas from "../UI/OffCanvas";

export default function Navigation() {
  const [openMode, hanldeOpenMode] = useToggle();
  const [opanOffCanvas, hanldeOffCanvas] = useToggle();
  const [theme, setTheme] = useDarkMode();

  const handleSetTheme = (val: string) => {
    hanldeOpenMode();
    setTheme(val);
  };

  const renderthemeIcon = () => {
    switch (theme) {
      case themeMode.dark:
        return (
          <IoSunny className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
        );

      case themeMode.light:
        return (
          <PiMoonStarsFill className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-primary text-white sticky top-0 left-0 drop-shadow-2xl z-50 w-[100%]">
      <OffCanvas
        opanOffCanvas={opanOffCanvas}
        hanldeOffCanvas={hanldeOffCanvas}
      ></OffCanvas>
      <header className="container">
        <nav className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl">
              <span className="text-secondary">M</span>ohammad{" "}
              <span className="text-secondary ">A</span>buzar
            </h2>
          </div>
          <div className="relative">
            <span
              onClick={hanldeOffCanvas}
              className="block md:hidden text-xl py-3 cursor-pointer"
            >
              <RxHamburgerMenu />
            </span>
            <ul className="flex">
              {navigationData.map((nav) => {
                return (
                  <li key={nav.to}>
                    <Link
                      href={nav.to}
                      className="hidden md:inline-block py-3 text-lg ease-in-out duration-300 px-2 hover:text-secondary cursor-pointer"
                    >
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
              <li className="hidden md:flex items-center">
                <div className="border-s-2 px-2 flex ms-2">
                  <span className="cursor-pointer p-2">
                    <Link href={"https://github.com/abuzar316"} target="_blank">
                      <FaGithub className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                    </Link>
                  </span>
                  <span className="cursor-pointer p-2">
                    <Link
                      href={`https://www.linkedin.com/in/abuzar316/`}
                      target="_blank"
                    >
                      <FaLinkedinIn className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                    </Link>
                  </span>
                  <span className="cursor-pointer p-2">
                    <Link
                      href={`https://www.instagram.com/abuzar.one`}
                      target="_blank"
                    >
                      <FaInstagram className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                    </Link>
                  </span>
                  <span className="cursor-pointer p-2" onClick={hanldeOpenMode}>
                    {renderthemeIcon()}
                  </span>
                </div>
              </li>
            </ul>
            {openMode && (
              <ClickAwayListener clickAway={hanldeOpenMode}>
                <ChangeDarkMode handleSetTheme={handleSetTheme} />
              </ClickAwayListener>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
