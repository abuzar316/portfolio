"use client";
import { usePathname } from "next/navigation";
import Bugde from "./Bugde";
import SkillCard from "./SkillCard";
import { skillsCategory, skillsData } from "@/constants/constants";
import { useMemo, useState } from "react";

const SkillsContainer = () => {
  const pathName = usePathname();
  const [avtiveBugde, setActiveBugde] = useState<string>("All");

  const handleActiveBugde = (name: string) => () => setActiveBugde(name);

  const skillsDataFill = useMemo(() => {
    return avtiveBugde === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category?.includes(avtiveBugde));
  }, [avtiveBugde]);


  return (
    <div id="skills" className="container py-5">
      <h1 className="text-secondary text-4xl">
        <span className="inline-block w-5 h-0.5 bg-secondary relative me-1 bottom-3"></span>{" "}
        Skills
      </h1>
      <p className="my-7 text-2xl">Checkout My Skill Set</p>
      <div className="mb-4">
        {pathName === "/skills" &&
          skillsCategory.map((item) => (
            <Bugde
              key={item}
              title={item}
              active={avtiveBugde === item}
              onClick={handleActiveBugde(item)}
            />
          ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
        {skillsDataFill.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
