import { createFileRoute } from "@tanstack/react-router";
import { Car, DoorOpen, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "聚会地点 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "聚会地址：奥克兰 Mt Roskill Rd 6 号 3 号门入口，附设免费停车位，交通与到达指引。" },
      { property: "og:title", content: "聚会地点 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "奥克兰 6 Mt Roskill Rd 3 号门入口，欢迎前来聚会。" },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <PageHeader
        subtitle="LOCATION"
        title="聚会地点"
        intro="我们位于奥克兰 Mt Roskill。请从 3 号门进入，门口会有招待同工引导您。"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr]">
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
      </section>
    </>
  );
}
