import { Button, Card, CardBody, Image } from "@heroui/react";
import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/content";

export const AboutPage = () => {
  const { locale, prefix } = useLocale();
  const copy = getCopy(locale);

  return (
    <section className="flex flex-col md:flex-row gap-16 items-center md:items-start">
      <div className="flex justify-center md:order-first">
        <Image
          src="/portfolio/headshot-x8gH9dPv.svg"
          alt="Portrait of Kali Schuchhardt"
          className="w-full max-w-[260px] sm:max-w-sm floating"
        />
      </div>

      <Card shadow="sm" radius="lg" className="w-full max-w-lg">
        <CardBody className="space-y-4 p-6 sm:p-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">{copy.about.title}</h1>
          <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
            {copy.about.body}
          </p>
          <Button
            as="a"
            href="/portfolio/KaliSchuchhardtResumeJune2025-BxanECLh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-200 text-slate-800 font-semibold data-[hover=true]:bg-rose-100 data-[hover=true]:text-slate-900"
            size="lg"
          >
            {copy.about.resumeCta}
          </Button>
        </CardBody>
      </Card>
    </section>
  );
};
