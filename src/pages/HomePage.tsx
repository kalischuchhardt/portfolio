import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Image } from "@heroui/react";
import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/content";
import { PROJECTS } from "../data/projects";

export const HomePage = () => {
  const navigate = useNavigate();
  const { locale, prefix } = useLocale();
  const copy = getCopy(locale);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div>
            <h1 className={`font-bold text-slate-900 leading-tight mb-2 ${
              locale === "jp" ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"
            }`}>
              {copy.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              {copy.hero.subtitle}
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            {copy.hero.description}
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleScrollToProjects}
              className="bg-slate-900 text-white font-semibold hover:bg-slate-800"
              size="lg"
            >
              {copy.hero.viewProjects}
            </Button>
            <Button
              onClick={() => navigate(`${prefix}/contact`)}
              className="border-2 border-slate-900 bg-white text-slate-900 font-semibold hover:bg-slate-50"
              size="lg"
            >
              {copy.hero.getInTouch}
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center animate-slide-in-left">
          <Image
            src="/portfolio/mewithblob-tcUycd6j.svg"
            alt={copy.hero.imageAlt}
            className="w-full max-w-[400px] floating"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          {copy.projects.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.slug}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <Card
                  isPressable
                  onClick={() =>
                    navigate(`${prefix}/project/${project.slug}`)
                  }
                  className="h-full transition-transform duration-300 hover:scale-102 hover:-translate-y-4 hover:shadow-lg"
                  shadow="sm"
                >
                  <Image
                    src={project.cardImage}
                    alt={project.title[locale]}
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {project.title[locale]}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {project.overview[locale]}
                </p>
                <Button
                  as="button"
                  onClick={() =>
                    navigate(`${prefix}/project/${project.slug}`)
                  }
                  className="bg-slate-900 text-white font-semibold hover:bg-slate-800"
                >
                  {copy.projects.viewDetails}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
