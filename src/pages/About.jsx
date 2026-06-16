import { FaGraduationCap, FaCode } from "react-icons/fa";
import PageWrapper from "../components/ui/PageWrapper.jsx";
import Section, { SectionHeading } from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import SkillBadge from "../components/ui/SkillBadge.jsx";
import { profile } from "../data/profile.js";
import { skillGroups } from "../data/skills.js";

const About = () => {
  return (
    <PageWrapper
      title="About — Md. Limon"
      description="About Md. Limon — a Full Stack MERN Developer with skills across React, Node.js, MongoDB, automation, and AI integration."
    >
      {/* ===== About Me ===== */}
      <Section id="about">
        <SectionHeading eyebrow="Get to know me" title="About Me" />
        <Card className="mx-auto max-w-3xl p-8 text-center">
          <p className="text-lg leading-relaxed text-surface-700 dark:text-surface-300">
            {profile.about}
          </p>
        </Card>
      </Section>

      {/* ===== Skills ===== */}
      <Section id="skills" className="bg-surface-100/60 dark:bg-surface-900/40">
        <SectionHeading
          eyebrow="My Toolbox"
          title="Skills & Technologies"
          subtitle="Technologies I use to design, build, and ship reliable software."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.label} className="p-6">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-brand-600 dark:text-brand-400">
                <FaCode aria-hidden="true" /> {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillBadge key={item}>{item}</SkillBadge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== Education ===== */}
      <Section id="education">
        <SectionHeading eyebrow="Background" title="Education" />
        <Card className="mx-auto flex max-w-2xl items-start gap-4 p-8">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-surface-800 dark:text-brand-300">
            <FaGraduationCap className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-surface-900 dark:text-white">
              {profile.education.degree}
            </h3>
            <p className="mt-1 font-medium text-brand-600 dark:text-brand-400">
              {profile.education.school}
            </p>
            <p className="mt-2 text-surface-600 dark:text-surface-300">
              {profile.education.detail}
            </p>
          </div>
        </Card>
      </Section>
    </PageWrapper>
  );
};

export default About;
