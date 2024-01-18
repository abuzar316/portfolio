import { bugdeProps } from "@/interface/interface";

const Bugde = ({ title, active, onClick }: bugdeProps) => {
  return (
    <span
      onClick={onClick}
      className={`me-2 mb-2 rounded-lg cursor-pointer border-[1px] dark:border-0 font-semibold ${
        active ? "bg-white text-black" : "dark:bg-primaryLightOP"
      } hover:bg-black hover:text-white dark:hover:text-black px-3 py-1 inline-block dark:hover:bg-white ease-in-out duration-300`}
    >
      {title}
    </span>
  );
};

export default Bugde;
