import { MdAttachEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:container">
      <div className="grid grid-cols-2 grid-flow-col gap-4 py-16">
        <div className="">
          <h4 className="text-3xl my-5">Connect with me</h4>
          <div className="flex items-center mb-5">
            <span className="me-3">
              <FaMapMarkerAlt className="text-secondary text-xl" />
            </span>
            <p className=" text-xl text-textPrimary">Planet Earth </p>
          </div>
          <div className="flex items-center mb-5">
            <span className="me-3">
              <MdAttachEmail className="text-secondary text-xl" />
            </span>
            <p className=" text-xl text-textPrimary hover:text-secondary">
              mohammadabuzar316@gmail.com
            </p>
          </div>
        </div>

        <div className="">
          <div className="">
            <h4 className="text-secondary text-2xl my-5">
              <span className="inline-block w-5 h-0.5 bg-secondary relative me-1 bottom-2"></span>{" "}
              Contact me
            </h4>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 rounded border-[1px] dark:border-0 dark:bg-primaryLight "
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 rounded border-[1px] dark:border-0 dark:bg-primaryLight "
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows={4}
              className="w-full p-2 rounded border-[1px] dark:border-0 dark:bg-primaryLight "
              placeholder="Enter Your Message"
            />
          </div>
          <div>
            <button className="btn w-full text-center rounded  bg-secondary text-white py-2 px-4 border-[1px] hover:border-secondary dark:border-secondary hover:bg-white hover:text-secondary dark:hover:bg-white dark:hover:text-secondary ease-in-out duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
