import Image from "next/image";
import { skillCardPropsIF } from "@/interface/interface";

const SkillCard = ({ name, icon }: skillCardPropsIF) => {
  return (
    <div className="dark:bg-primaryLight border-[1px] dark:border-0 rounded-lg p-4 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div>
        <Image
          className="rounded-lg h-[100px] w-[100%] object-contain hover:rotate-[360deg] ease-in-out duration-700"
          src={icon}
          alt={name}
        />
      </div>
      <div className="pt-4">
        <h1 className="text-center text-4xl">{name}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
