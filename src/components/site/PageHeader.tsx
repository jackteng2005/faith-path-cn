export function PageHeader({
  title,
  subtitle,
  intro,
}: {
  title: string;
  subtitle?: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16">
        {subtitle ? (
          <p className="text-xs uppercase tracking-[0.35em] text-accent">{subtitle}</p>
        ) : null}
        <h1 className="mt-3 text-4xl font-bold text-primary gold-rule">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{intro}</p> : null}
      </div>
    </section>
  );
}
