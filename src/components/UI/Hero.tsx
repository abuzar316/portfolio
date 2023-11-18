import Image from "next/image";
import heroImg from "../../../public/avtar.jpg";

const Hero = () => {
  return (
    <div className="md:container">
      <div className="grid grid-cols-2 grid-flow-col gap-4">
        <div className="py-16">
          <h1 className="text-secondary text-4xl">
            <span className="inline-block w-5 h-0.5 bg-secondary relative me-1 bottom-3"></span>{" "}
            Hello
          </h1>
          <h2 className="text-3xl my-5">I'm Mohammad Abuzar</h2>
          <p className="mb-5 text-xl text-textPrimary">Fullstack Developer </p>
          <p className="text-textPrimary">
            Hi there! My name is Mohammad Abuzar and I’m a software engineer
            with over 3 years of experience in the industry. I love all things
            tech and coding, I share my knowledge and experience with others.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <div className="w-1/2 ">
            <Image alt="Abuzar" className="rounded-full" src={heroImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
