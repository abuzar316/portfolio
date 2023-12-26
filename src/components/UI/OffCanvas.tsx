import { navigationData, themeMode } from "@/constants/constants";
import { offCanvasProps } from "@/interface/interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { PiMoonStarsFill } from "react-icons/pi";
import useDarkMode from "@/hooks/useDarkMode";

const OffCanvas = (props: offCanvasProps) => {
  const { opanOffCanvas, hanldeOffCanvas } = props;
  const [, setTheme] = useDarkMode();
  const router = useRouter();

  const handleGotoPage = (to: string) => () => {
    router.push(to);
    hanldeOffCanvas();
  };

  const handleSetTheme = (val: string) => () => {
    hanldeOffCanvas();
    setTheme(val);
  };

  return (
    <>
      <div
        className={`absolute top-0 ${
          opanOffCanvas ? "left-0" : "left-[-60%]"
        } h-[100vh] w-[60%] bg-black ease-in-out duration-500 z-10 p-6`}
      >
        <ul>
          {navigationData.map((nav) => {
            return (
              <li
                key={nav.to}
                className="text-white inline-block w-[100%] p-2 rounded bg-primary mb-2 cursor-pointer hover:bg-white hover:text-primary"
                onClick={handleGotoPage(nav.to)}
              >
                {nav.title}
              </li>
            );
          })}
          <li className="pt-5">
            <div className="flex justify-center">
              <span className="cursor-pointer p-2 border border-secondary rounded">
                <Link href={"https://github.com/abuzar316"} target="_blank">
                  <FaGithub className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                </Link>
              </span>
              <span className="cursor-pointer p-2 border border-secondary rounded ms-1">
                <Link
                  href={`https://www.linkedin.com/in/abuzar316/`}
                  target="_blank"
                >
                  <FaLinkedinIn className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                </Link>
              </span>
              <span className="cursor-pointer p-2 border border-secondary rounded ms-1">
                <Link
                  href={`https://www.instagram.com/abuzar.one`}
                  target="_blank"
                >
                  <FaInstagram className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                </Link>
              </span>
            </div>
          </li>
          <li className="pt-5">
            <div className="flex justify-center">
              <span
                className="cursor-pointer p-2 border border-secondary rounded"
                onClick={handleSetTheme(themeMode.light)}
              >
                <IoSunny />
              </span>
              <span
                className="cursor-pointer p-2 border border-secondary rounded ms-1"
                onClick={handleSetTheme(themeMode.dark)}
              >
                <PiMoonStarsFill />
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`w-[40%] fixed top-0 ${
          opanOffCanvas ? "left-[60%]" : "left-[-60%]"
        } h-[100vh] bg-offCanvas ease-in-out duration-500 z-10`}
        onClick={hanldeOffCanvas}
      ></div>
    </>
  );
};

export default OffCanvas;
