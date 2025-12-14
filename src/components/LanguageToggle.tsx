import { Button } from "@heroui/react";
import { useLocale } from "../context/LocaleContext";

export const LanguageToggle = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex gap-2">
      <Button
        isIconOnly
        className={`text-sm font-medium ${
          locale === "en"
            ? "bg-slate-900 text-white"
            : "bg-slate-200 text-slate-900"
        }`}
        onClick={() => setLocale("en")}
      >
        EN
      </Button>
      <Button
        isIconOnly
        className={`text-sm font-medium ${
          locale === "jp"
            ? "bg-slate-900 text-white"
            : "bg-slate-200 text-slate-900"
        }`}
        onClick={() => setLocale("jp")}
      >
        JP
      </Button>
    </div>
  );
};
