import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export const navItems = [
  { to: "/", label: "首页" },
  { to: "/about", label: "关于我们" },
  { to: "/location", label: "聚会地点" },
  { to: "/events", label: "每周活动" },
  { to: "/courses", label: "课程" },
  { to: "/resources", label: "资源" },
  { to: "/contact", label: "联系我们" },
  { to: "/give", label: "奉献" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="新西兰基督教会亚洲团契标志" className="h-11 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
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
          aria-label="打开菜单"
          className="rounded-md p-2 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-card px-5 py-3 lg:hidden">
          {navItems.map((item) => (
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
