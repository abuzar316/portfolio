import { projectsList } from "@/constants/constants";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  return (
    <div className="md:container py-5">
      <h1 className="text-secondary text-4xl">
        <span className="inline-block w-5 h-0.5 bg-secondary relative me-1 bottom-3"></span>{" "}
        Projects
      </h1>
      <p className="my-7 text-2xl">Checkout My Interactive Projects</p>
      <div className="grid gap-4 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2">
        {projectsList.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
