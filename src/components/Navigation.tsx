import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";


export default function Navigation() {
  return (
    <div className="bg-primary text-white">
      <header className="md:container ">
        <nav className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl">
              <span className="text-secondary">M</span>ohammad{" "}
              <span className="text-secondary">A</span>buzar
            </h2>
          </div>
          <div>
            <ul className="flex">
              <li>
                <Link
                  href={"#"}
                  className="inline-block py-3 text-lg ease-in-out duration-300 px-2 hover:text-secondary cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="inline-block py-3 text-lg ease-in-out duration-300 px-2 hover:text-secondary cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="inline-block py-3 text-lg ease-in-out duration-300 px-2 hover:text-secondary cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li className="flex items-center">
                <div className="border-s-2 px-2 flex">
                  <span className="cursor-pointer p-2">
                    <GitHubLogoIcon className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                  </span>
                  <span className="cursor-pointer p-2">
                    <LinkedInLogoIcon className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                  </span>
                  <span className="cursor-pointer p-2">
                    <InstagramLogoIcon className="ease-in-out duration-500 hover:text-secondary hover:scale-150" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
