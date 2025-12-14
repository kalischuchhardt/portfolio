import { Card, CardBody, Input, Textarea, Button, Image } from "@heroui/react";
import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/content";

export const ContactPage = () => {
  const { locale } = useLocale();
  const copy = getCopy(locale);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section className="flex flex-col md:flex-row gap-16 items-center md:items-start">
      <Card shadow="sm" radius="lg" className="max-w-xl w-full">
        <CardBody className="p-6 sm:p-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {copy.contact.title}
          </h1>
          <p className="text-slate-700">
            {copy.contact.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label={copy.contact.name}
              placeholder={copy.contact.namePlaceholder}
              type="text"
            />
            <Input
              label={copy.contact.email}
              placeholder={copy.contact.emailPlaceholder}
              type="email"
            />
            <Textarea
              label={copy.contact.message}
              placeholder={copy.contact.messagePlaceholder}
              minRows={4}
            />
            <Button
              type="submit"
              className="bg-slate-900 text-white hover:bg-slate-800 w-full font-semibold"
            >
              {copy.contact.send}
            </Button>
          </form>
        </CardBody>
      </Card>

      <Image
        src="/portfolio/mewithblob-tcUycd6j.svg"
        alt={copy.contact.imageAlt}
        className="max-w-[220px] sm:max-w-[260px] floating"
      />
    </section>
  );
};
