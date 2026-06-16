import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import profileImg from "../assets/profile.svg";
import PageWrapper from "../components/ui/PageWrapper.jsx";
import Section, { SectionHeading } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import ServiceCard from "../components/ui/ServiceCard.jsx";
import SkillBadge from "../components/ui/SkillBadge.jsx";
import { profile } from "../data/profile.js";
import { services } from "../data/services.js";
import { projects } from "../data/projects.js";

const Home = () => {
  return (
    <PageWrapper
      title="Md. Limon — Full Stack MERN Developer"
      description="Md. Limon, Full Stack MERN Developer building scalable e-commerce platforms, dashboards, and real-time applications."
    >
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/20 animate-blob" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl animate-blob" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-20 md:flex-row md:justify-between md:py-28">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {profile.location}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-5xl">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                {profile.shortName}
              </span>
            </h1>
            <TypeAnimation
              sequence={profile.titles.flatMap((t) => [t, 1500])}
              wrapper="h2"
              cursor
              repeat={Infinity}
              className="mt-3 block text-xl font-medium text-surface-700 dark:text-surface-300 sm:text-2xl"
            />
            <p className="mx-auto mt-6 max-w-xl text-surface-600 dark:text-surface-300 md:mx-0">
              {profile.about}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button to="/projects" size="lg">
                View My Work <FaArrowRight aria-hidden="true" />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex flex-1 justify-center md:justify-end">
            <div className="animate-float">
              <img
                src="https://res.cloudinary.com/dnjrmakcu/image/upload/v1773588391/rwj02lwiio9ew6arpnlx.jpg"
                alt="Portrait of Md. Limon"
                width="288"
                height="288"
                fetchPriority="high"
                className="h-56 w-56 rounded-full border-4 border-white object-cover shadow-glow dark:border-surface-800 sm:h-72 sm:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <Section
        id="services"
        className="bg-surface-100/60 dark:bg-surface-900/40"
      >
        <SectionHeading
          eyebrow="What I Do"
          title="Services"
          subtitle="From idea to production — here's how I can help bring your product to life."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              desc={s.desc}
            />
          ))}
        </div>
      </Section>

      {/* ===== Featured Projects (preview) ===== */}
      <Section id="featured">
        <SectionHeading
          eyebrow="Recent Work"
          title="Featured Projects"
          subtitle="A selection of real-world applications I've designed and built."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.slug} className={`bg-gradient-to-br ${p.accent} p-6`}>
              <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-surface-700 dark:text-surface-300">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.slice(0, 4).map((t) => (
                  <SkillBadge key={t}>{t}</SkillBadge>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-600 transition hover:gap-3 dark:text-brand-400"
              >
                Live Demo <FaExternalLinkAlt size={12} aria-hidden="true" />
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/projects" variant="secondary">
            See all projects <FaArrowRight aria-hidden="true" />
          </Button>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section>
        <Card className="overflow-hidden bg-gradient-to-r from-brand-600 to-accent-600 p-10 text-center text-white">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Let’s build something scalable and beautiful together. I’m available
            for freelance and full-time opportunities.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact" variant="secondary" size="lg">
              Let’s Talk <FaArrowRight aria-hidden="true" />
            </Button>
          </div>
        </Card>
      </Section>
    </PageWrapper>
  );
};

export default Home;
