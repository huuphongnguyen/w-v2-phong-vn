import Container from "../components/Container";
import BlogSection from "../components/structures/BlogSection";
import InspirationSection from "../components/structures/InspirationSection";
import ProjectsSection from "../components/structures/ProjectsSection";
import SubPageSection from "../components/structures/SubPageSection";

export default function Home() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <InspirationSection />
        <BlogSection />
        <ProjectsSection />
        <SubPageSection />
      </div>
    </Container>
  );
}
