import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  const { lang } = useLang();
  const s = site[lang];

  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">{s.footerName}</h2>
          <p className="mt-3 text-sm leading-7 opacity-80">{s.footerBlurb}</p>
        </div>

        <div className="space-y-3 text-sm opacity-90">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            {s.address}
          </p>
          <p className="flex items-center gap-3">
            <Phone className="size-4 shrink-0 text-accent" />
            09 620 9583
          </p>
          <p className="flex items-center gap-3">
            <Mail className="size-4 shrink-0 text-accent" />
            church@ccnz.org.nz
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          {nav[lang].map((item) => (
            <Link key={item.to} to={item.to} className="opacity-80 transition-opacity hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs opacity-70">
        {s.verse} ｜ © {new Date().getFullYear()} {s.rights}
      </div>
    </footer>
  );
}
