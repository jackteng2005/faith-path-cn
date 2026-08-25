import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, Heart, MapPin, Play, Users, Video } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { useLang } from "@/lib/i18n";
import { home } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: home.zh.meta.title },
      { name: "description", content: home.zh.meta.description },
      { property: "og:title", content: home.zh.meta.ogTitle },
      { property: "og:description", content: home.zh.meta.ogDescription },
    ],
  }),
  component: Index,
});

const icons = [Users, BookOpen, Heart];

function Index() {
  const { lang } = useLang();
  const c = home[lang];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt={c.heroImgAlt}
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
          <div className="max-w-xl">
            <p className="text-sm tracking-[0.4em] text-accent">{c.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-primary md:text-6xl">
              {c.heroTitle}
            </h1>
            <p className="mt-4 text-2xl text-crimson">{c.heroSub}</p>
            <p className="mt-6 max-w-lg text-base leading-8 text-foreground/80">{c.heroText}</p>

            <div className="mt-8 inline-flex flex-wrap items-center gap-4 rounded-lg bg-crimson px-6 py-4 text-crimson-foreground shadow-soft">
              <Clock className="size-5 text-accent" />
              <div>
                <p className="text-sm opacity-90">{c.serviceLabel}</p>
                <p className="text-3xl font-bold">{c.serviceTime}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MapPin className="size-4" />
                {c.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold text-primary gold-rule">{c.highlightsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.highlights.map(({ title, text }, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <article key={title} className="rounded-xl border border-border bg-card p-7">
                <Icon className="size-7 text-accent" />
                <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="gatherings" className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-primary gold-rule">{c.gatheringsTitle}</h2>
          <p className="mt-4 text-sm text-muted-foreground">{c.gatheringsNote}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {c.gatherings.map((g) => (
              <article key={g.title} className="rounded-xl border border-border bg-card p-7">
                <div className="flex items-baseline gap-4">
                  <span className="shrink-0 text-sm font-semibold text-crimson">{g.day}</span>
                  <h3 className="text-lg font-semibold text-primary">{g.title}</h3>
                </div>
                <p className="mt-2 text-sm text-accent">{g.note}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{g.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="live" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary gold-rule">{c.liveTitle}</h2>
            <div className="mt-8 aspect-video overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-crimson/10">
                  <Video className="size-8 text-crimson" />
                </div>
                <p className="text-sm text-muted-foreground">{c.livePlaceholder}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary gold-rule">{c.previousTitle}</h2>
            <ul className="mt-8 space-y-4">
              {c.previousRecords.map((r, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Play className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">{r.title}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-xl leading-9 text-primary">{c.verse}</p>
        <p className="mt-4 text-sm tracking-widest text-accent">{c.verseRef}</p>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {c.verseCta}
        </Link>
      </section>
    </>
  );
}
