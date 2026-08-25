import { createFileRoute } from "@tanstack/react-router";
import { Play, Video } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { live } from "@/lib/content";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: live.zh.meta.title },
      { name: "description", content: live.zh.meta.description },
      { property: "og:title", content: live.zh.meta.ogTitle },
      { property: "og:description", content: live.zh.meta.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LivePage,
});

function LivePage() {
  const { lang } = useLang();
  const c = live[lang];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <p className="text-sm tracking-[0.4em] text-accent">{c.eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold text-primary gold-rule">{c.heading}</h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{c.intro}</p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-primary">{c.liveTitle}</h2>
          <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-crimson/10">
                <Video className="size-8 text-crimson" />
              </div>
              <p className="text-sm text-muted-foreground">{c.livePlaceholder}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary">{c.previousTitle}</h2>
          <ul className="mt-6 space-y-4">
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
  );
}
