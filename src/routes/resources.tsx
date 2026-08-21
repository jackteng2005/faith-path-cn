import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "资源 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "讲道回顾、每日灵修、圣经阅读计划与新朋友常见问题，帮助您在生活中继续认识信仰。" },
      { property: "og:title", content: "资源 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "讲道回顾、灵修材料与新朋友常见问题。" },
    ],
  }),
  component: Resources,
});

const resources = [
  { title: "主日讲道回顾", desc: "错过了主日？每周讲道录音与讲章大纲会在周三前更新。" },
  { title: "每日灵修材料", desc: "十分钟的经文与默想，帮助您在忙碌的一周里与神保持连结。" },
  { title: "一年读经计划", desc: "简体中文版读经进度表，可下载打印，也适合小组一同进行。" },
  { title: "诗歌与敬拜歌单", desc: "主日常唱的中英文诗歌，方便您在家中一同敬拜。" },
];

const faqs = [
  { q: "我从来没去过教会，可以来吗？", a: "当然可以。您只需要带着自己来，其余的我们会陪您一起熟悉。" },
  { q: "需要穿正式服装吗？", a: "不需要，穿您觉得舒适的衣服就好。" },
  { q: "崇拜大约多久？", a: "约 90 分钟，结束后有茶点时间，可自由留下交流。" },
  { q: "孩子可以一起来吗？", a: "非常欢迎。崇拜同时段设有儿童主日课程与哺乳室。" },
];

function Resources() {
  return (
    <>
      <PageHeader
        subtitle="RESOURCES"
        title="资源"
        intro="聚会之外，也愿这些材料陪伴您在日常生活中继续经历神。"
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        {resources.map((r) => (
          <article key={r.title} className="rounded-xl border border-border bg-card p-7">
            <h2 className="text-lg font-semibold text-primary">{r.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{r.desc}</p>
          </article>
        ))}
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-2xl font-bold text-primary gold-rule">新朋友常见问题</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-lg bg-card p-6">
                <dt className="font-semibold text-primary">{f.q}</dt>
                <dd className="mt-2 text-sm leading-7 text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
