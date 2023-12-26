import Image from "next/image";
import { projectCardProps } from "@/interface/interface";
import Bugde from "./Bugde";

const ProjectCard = ({
  name,
  description,
  img,
  techStack,
}: projectCardProps) => {
  return (
    <div className="dark:bg-primaryLight border-[1px] dark:border-0 rounded-lg p-4 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div>
        <Image className="rounded-lg" src={img} alt={name} />
      </div>
      <div className="pt-4">
        <h1>{name}</h1>
        <p className="text-textPrimary">{description}</p>
        <p className="text-textPrimary mt-2 mb-1 ">Tech Stack</p>
        <div>
          {techStack.map((stack) => (
            <Bugde key={stack} title={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
