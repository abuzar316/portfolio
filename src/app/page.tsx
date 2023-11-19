import Footer from "@/components/header/Footer";
import Hero from "@/components/UI/Hero";
import ProjectsContainer from "@/components/UI/ProjectsContainer";

export default function Home() {
  return (
    <main className="bg-primary text-white">
      <Hero />
      <ProjectsContainer />
      <Footer />
    </main>
  );
}
