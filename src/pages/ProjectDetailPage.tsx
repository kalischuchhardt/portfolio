import { Button, Card, CardBody, Image, Link as HeroLink } from "@heroui/react";
import { Navigate, useParams, Link as RouterLink } from "react-router-dom";
import { findProject } from "../data/projects";
import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/content";

const withPrefix = (prefix: string, path: string) => {
  if (path === "/") {
    return prefix || "/";
  }
  return `${prefix}${path}`.replace(/\/+/g, "/");
};

export const ProjectDetailPage = () => {
  const { slug = "" } = useParams();
  const { locale, prefix } = useLocale();
  const copy = getCopy(locale);
  const project = findProject(slug);

  if (!project) {
    return <Navigate to={withPrefix(prefix, "/")} replace />;
  }

  // Map cardImage to heroImage based on slug
  const getHeroImage = () => {
    const heroImages: Record<string, string> = {
      "phi-sigma-rho": "/portfolio/PSR-B_m-oHFO.svg",
      gatormarket: "/portfolio/project2-BJ5gxzqO.svg",
      midifi: "/portfolio/midifi-CuXIo5aw.svg",
      "safe-steps": "/portfolio/safesteps-Cl2WbdED.svg",
    };
    return heroImages[slug] || project.cardImage;
  };

  return (
    <section className="space-y-8">
      <nav className="flex items-center gap-3 text-sm mb-6">
        <HeroLink
          as={RouterLink}
          to={withPrefix(prefix, "/")}
          className="text-slate-900 font-medium hover:opacity-70 transition-opacity cursor-pointer"
        >
          {copy.projects.title}
        </HeroLink>
        <span className="text-slate-400">&gt;</span>
        <span className="text-slate-900 font-medium">{project.title[locale]}</span>
      </nav>

      <header className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          {project.title[locale]}
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex flex-col gap-6 flex-1">
          <Card shadow="none" radius="lg" className="overflow-hidden bg-transparent">
            <CardBody className="p-0">
              <Image
                src={getHeroImage()}
                alt={project.title[locale]}
                className="w-full object-cover rounded-lg"
              />
            </CardBody>
          </Card>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.links.map((link) => (
              <Button
                key={link.href}
                as="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-yellow-200 text-yellow-700 hover:bg-yellow-50"
                variant="bordered"
              >
                {link.label[locale]}
              </Button>
            ))}
          </div>
        </div>

        <Card shadow="sm" radius="lg" className="flex-1 bg-white">
          <CardBody className="p-8 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
              {project.about[locale]}
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
