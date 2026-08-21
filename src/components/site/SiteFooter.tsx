import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">新西兰基督教会 · 亚洲团契</h2>
          <p className="mt-3 text-sm leading-7 opacity-80">
            中英双语主日崇拜，每周日上午 10:45。无论您信主与否，欢迎每一位朋友前来。
          </p>
        </div>

        <div className="space-y-3 text-sm opacity-90">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            入口：3 号门，6 Mt Roskill Rd，奥克兰
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

        <div className="grid grid-cols-2 gap-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="opacity-80 transition-opacity hover:opacity-100">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs opacity-70">
        神爱世人，甚至将他的独生子赐给他们 · 约翰福音 3:16 ｜ © {new Date().getFullYear()} 新西兰基督教会亚洲团契
      </div>
    </footer>
  );
}
