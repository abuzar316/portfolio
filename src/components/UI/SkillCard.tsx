import Image from "next/image";
import HTMLIcon from "../../../public/images/html-icon.png";

const SkillCard = () => {
  return (
    <div className="bg-primaryLight w-1/3 rounded-lg p-4 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div>
        <Image
          className="rounded-lg h-[100px] object-contain hover:rotate-[360deg] ease-in-out duration-700"
          src={HTMLIcon}
          alt="VS Code"
        />
      </div>
      <div className="pt-4">
        <h1 className="text-center text-4xl">HTML</h1>
      </div>
    </div>
  );
};

export default SkillCard;
