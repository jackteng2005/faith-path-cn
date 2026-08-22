import { createFileRoute } from "@tanstack/react-router";
import { Car, DoorOpen, Globe, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/lib/i18n";
import { contact } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: contact.zh.meta.title },
      { name: "description", content: contact.zh.meta.description },
      { property: "og:title", content: contact.zh.meta.ogTitle },
      { property: "og:description", content: contact.zh.meta.ogDescription },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { lang } = useLang();
  const c = contact[lang];

  const contacts = [
    { icon: Phone, label: c.labels.phone, value: "09 620 9583" },
    { icon: Mail, label: c.labels.email, value: "church@ccnz.org.nz" },
    { icon: Globe, label: c.labels.web, value: "www.ccnz.org.nz" },
    { icon: MapPin, label: c.labels.address, value: c.addressShort },
  ];

  return (
    <>
      <PageHeader subtitle={c.subtitle} title={c.title} intro={c.intro} />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div className="space-y-5">
          {contacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              <Icon className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="text-xs tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm text-primary">{value}</p>
              </div>
            </div>
          ))}

          <div className="rounded-xl bg-cream p-8">
            <h2 className="text-xl font-semibold text-primary">{c.staffTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{c.staffText}</p>
            <ul className="mt-6 space-y-4 text-sm">
              {c.staff.map((p, i) => (
                <li
                  key={p.name}
                  className={
                    i === c.staff.length - 1
                      ? "flex justify-between"
                      : "flex justify-between border-b border-border pb-3"
                  }
                >
                  <span className="text-primary">{p.name}</span>
                  <span className="text-muted-foreground">{p.phone}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold text-primary">{c.addressTitle}</h2>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{c.addressFull}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <DoorOpen className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold text-primary">{c.timeTitle}</h2>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{c.timeText}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold text-primary">{c.parkingTitle}</h2>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{c.parkingText}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title={c.mapTitle}
              src="https://www.google.com/maps?q=6+Mt+Roskill+Rd,+Auckland&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
