import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "每周活动 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "每周聚会一览：主日双语崇拜、儿童主日课程、初学者英语班、华语长者聚会与祷告会。" },
      { property: "og:title", content: "每周活动 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "主日崇拜、儿童课程、英语班与长者聚会，欢迎参加。" },
    ],
  }),
  component: Events,
});

const schedule = [
  {
    day: "周日",
    items: [
      { time: "10:45", name: "中英双语主日崇拜", desc: "唱诗、讲道与祷告，聚会后有茶点交流。" },
      { time: "上午", name: "儿童主日课程", desc: "分龄教导，让孩子用他们听得懂的方式认识神。" },
      { time: "上午", name: "基督信仰课程", desc: "为慕道朋友预备的小组课程，可随时加入。" },
    ],
  },
  {
    day: "周一",
    items: [{ time: "11:15", name: "初学者英语班", desc: "免费英语课程，特别适合新移民与家庭主妇。" }],
  },
  {
    day: "周三",
    items: [{ time: "10:00", name: "华语长者聚会", desc: "诗歌、圣经分享、健康讲座与午餐团契。" }],
  },
  {
    day: "周五",
    items: [{ time: "19:30", name: "团契小组与祷告会", desc: "青年、职场与家庭小组分区聚会。" }],
  },
];

function Events() {
  return (
    <>
      <PageHeader
        subtitle="WEEKLY EVENTS"
        title="每周活动"
        intro="不论您想安静地听一堂道，还是想学英语、交朋友，我们每周都有为您预备的聚会。免费参加，无需报名。"
      />

      <section className="mx-auto max-w-4xl space-y-10 px-5 py-16">
        {schedule.map((block) => (
          <div key={block.day}>
            <h2 className="text-xl font-bold text-crimson">{block.day}</h2>
            <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
              {block.items.map((item) => (
                <div key={item.name} className="flex flex-wrap gap-4 p-6">
                  <span className="w-16 shrink-0 text-sm font-semibold text-accent">{item.time}</span>
                  <div>
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
