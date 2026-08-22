import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/lib/i18n";
import { about } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: about.zh.meta.title },
      { name: "description", content: about.zh.meta.description },
      { property: "og:title", content: about.zh.meta.ogTitle },
      { property: "og:description", content: about.zh.meta.ogDescription },
    ],
  }),
  component: About,
});

function About() {
  const { lang } = useLang();
  const c = about[lang];

  return (
    <>
      <PageHeader subtitle={c.subtitle} title={c.title} intro={c.intro} />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary gold-rule">{c.missionTitle}</h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{c.mission1}</p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{c.mission2}</p>
        </div>
        <div className="rounded-xl bg-cream p-8">
          <h2 className="text-2xl font-bold text-primary">{c.langTitle}</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
            {c.langs.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl font-bold text-primary gold-rule">{c.beliefsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {c.beliefs.map((b) => (
              <article key={b.title} className="rounded-xl bg-card p-7">
                <h3 className="text-lg font-semibold text-primary">{b.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-2xl font-bold text-primary gold-rule">{c.resourcesTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.resources.map((r) => (
            <article key={r.title} className="rounded-xl border border-border bg-card p-7">
              <h3 className="text-lg font-semibold text-primary">{r.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{r.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
