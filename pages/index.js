import Container from "../components/Container";
import BlogSection from "../components/structures/BlogSection";
import HeroSection from "../components/structures/HeroSection";
import InspirationSection from "../components/structures/InspirationSection";
import ProjectsSection from "../components/structures/ProjectsSection";
import SubPageSection from "../components/structures/SubPageSection";

export default function Home() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="mb-7 mt-4">
          <HeroSection />
        </div>
        <InspirationSection />
        <BlogSection />
        <ProjectsSection />
        <SubPageSection />
      </div>
    </Container>
  );
}
