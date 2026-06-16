import PageWrapper from "../components/ui/PageWrapper.jsx";
import Section, { SectionHeading } from "../components/ui/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <PageWrapper
      title="Projects — Md. Limon"
      description="Featured projects by Md. Limon — MERN e-commerce platforms, a real-time chat app, and multi-vendor dashboards."
    >
      <Section id="projects">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="Explore my work, leave a rating, and share your feedback."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Projects;
