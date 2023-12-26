import Image from "next/image";
import { projectCardProps } from "@/interface/interface";

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
            <span
              key={stack}
              className="me-2 mb-2 rounded-lg border-[1px] dark:border-0 font-semibold hover:bg-black hover:text-white dark:bg-primaryLightOP dark:hover:text-black px-3 py-1 inline-block dark:hover:bg-white ease-in-out duration-300"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
