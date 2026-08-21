import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "联系我们 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "电话 09 620 9583、邮箱 church@ccnz.org.nz，或直接联系 Susan Lin 与 Michael Chieng，也欢迎提出代祷需要。" },
      { property: "og:title", content: "联系我们 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "有疑问或需要代祷？随时与我们联系。" },
    ],
  }),
  component: Contact,
});

const contacts = [
  { icon: Phone, label: "电话", value: "09 620 9583" },
  { icon: Mail, label: "邮箱", value: "church@ccnz.org.nz" },
  { icon: Globe, label: "网站", value: "www.ccnz.org.nz" },
  { icon: MapPin, label: "地址", value: "入口：3 号门，6 Mt Roskill Rd" },
];

function Contact() {
  return (
    <>
      <PageHeader
        subtitle="CONTACT"
        title="联系我们"
        intro="如果您有任何疑问，或需要代祷，请随时与我们联系。我们很乐意听您说说。"
      />

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
        </div>

        <div className="rounded-xl bg-cream p-8">
          <h2 className="text-xl font-semibold text-primary">直接联系同工</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            若您有疑问或需要代祷，欢迎致电或发短信：
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex justify-between border-b border-border pb-3">
              <span className="text-primary">Susan Lin 林姊妹</span>
              <span className="text-muted-foreground">021 031 9446</span>
            </li>
            <li className="flex justify-between">
              <span className="text-primary">Michael Chieng 钱弟兄</span>
              <span className="text-muted-foreground">021 152 3660</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
