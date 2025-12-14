import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import { getCopy } from "../i18n/content";
import { LanguageToggle } from "./LanguageToggle";

export const Navigation = () => {
  const { locale, prefix } = useLocale();
  const copy = getCopy(locale);

  const getLink = (path: string) => `${prefix}${path}`;

  return (
    <Navbar className="bg-transparent backdrop-blur-lg px-4 sm:px-6 py-2 animate-fade-in">
      <NavbarBrand>
        <Link
          as={RouterLink}
          to={getLink("/")}
          className="font-bold text-lg text-slate-900 hover:opacity-70 transition-opacity"
        >
          Kali
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            as={RouterLink}
            to={getLink("/")}
            className="text-slate-700 hover:text-slate-900"
          >
            {copy.nav.home}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={RouterLink}
            to={getLink("/about")}
            className="text-slate-700 hover:text-slate-900"
          >
            {copy.nav.about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={RouterLink}
            to={getLink("/contact")}
            className="text-slate-700 hover:text-slate-900"
          >
            {copy.nav.contact}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LanguageToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
