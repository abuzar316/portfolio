import Image from "next/image";
import vsCode from "../../../public/vscode.png";

const ProjectCard = () => {
  return (
    <div className="bg-primaryLight w-1/3 rounded-lg p-4 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div>
        <Image className="rounded-lg" src={vsCode} alt="VS Code" />
      </div>
      <div className="pt-4">
        <h1>VS Code Clone</h1>
        <p className="text-textPrimary">Build VS Code Clone in React JS</p>
        <p className="text-textPrimary mt-2 mb-1 ">Tech Stack</p>
        <div>
          <span className="me-2 rounded-lg bg-primaryLightOP px-3 py-1 inline-block hover:bg-white hover:text-black ease-in-out duration-300">
            React JS
          </span>
          <span className="me-2 rounded-lg bg-primaryLightOP px-3 py-1 inline-block hover:bg-white hover:text-black ease-in-out duration-300">
            VITE
          </span>
          <span className="me-2 rounded-lg bg-primaryLightOP px-3 py-1 inline-block hover:bg-white hover:text-black ease-in-out duration-300">
            Zustand
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
