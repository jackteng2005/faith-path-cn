import { createFileRoute } from "@tanstack/react-router";
import { Car, DoorOpen, Globe, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "联系与地点 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "电话 09 620 9583、邮箱 church@ccnz.org.nz，或直接联系 Susan Lin 与 Michael Chieng。聚会地址：6 Mt Roskill Rd，奥克兰。" },
      { property: "og:title", content: "联系与地点 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "有疑问或需要代祷？随时与我们联系，也欢迎前来聚会。" },
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
        subtitle="CONTACT & LOCATION"
        title="联系与地点"
        intro="如果您有任何疑问，或需要代祷，请随时与我们联系。我们很乐意听您说说，也欢迎您前来聚会。"
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
        </div>

        <div className="space-y-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold text-primary">地址</h2>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  入口：3 号门，6 Mt Roskill Rd，Mt Roskill，Auckland
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <DoorOpen className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold text-primary">崇拜时间</h2>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  每周日上午 10:45（建议提前 10 分钟到达）
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Car className="mt-1 size-5 shrink-0 text-accent" />
              <div>
                <h2 className="font-semibold text-primary">停车与交通</h2>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  院内设有免费停车位；亦可乘坐公交至 Mt Roskill Rd 站，步行约 3 分钟。
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="教会地图"
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
