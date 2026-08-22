import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Languages, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { useLang } from "@/lib/i18n";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const items = nav[lang];
  const s = site[lang];

  const toggleLang = () => setLang(lang === "zh" ? "en" : "zh");

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo.url} alt={s.logoAlt} className="h-11 w-auto" />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-accent font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleLang}
            aria-label={s.switchLabel}
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-cream"
          >
            <Languages className="size-4 text-accent" />
            {lang === "zh" ? "EN" : "中文"}
          </button>

          <button
            type="button"
            aria-label={s.menu}
            className="rounded-md p-2 text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-5 py-3 lg:hidden">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm text-foreground last:border-0"
              activeProps={{ className: "text-accent font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
