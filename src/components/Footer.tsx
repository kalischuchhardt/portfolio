import { Button } from "@heroui/react";
import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/content";

export const Footer = () => {
  const { locale } = useLocale();
  const copy = getCopy(locale);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-6 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm">{copy.footer.copyright}</p>
        <Button isIconOnly variant="light" onClick={scrollToTop} className="text-white hover:bg-slate-700">
          ↑ {copy.footer.backToTop}
        </Button>
      </div>
    </footer>
  );
};
