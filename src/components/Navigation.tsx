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
                  className="inline-block py-3 px-2 hover:text-secondary cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="inline-block py-3 px-2 hover:text-secondary cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="inline-block py-3 px-2 hover:text-secondary cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li className="border-s-2 h-6">d</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
