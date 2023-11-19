import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="md:container py-5">
      <h1 className="text-secondary text-4xl">
        <span className="inline-block w-5 h-0.5 bg-secondary relative me-1 bottom-3"></span>{" "}
        Skills
      </h1>
      <p className="my-7 text-2xl">Checkout My Skill Set</p>
      <SkillCard />
    </div>
  );
};

export default Skills;
