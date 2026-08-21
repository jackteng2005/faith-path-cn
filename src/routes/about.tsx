import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "关于我们 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "认识我们的信仰、使命与宗旨，以及这个由华人及亚洲家庭组成的奥克兰双语教会大家庭。" },
      { property: "og:title", content: "关于我们 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "认识我们的信仰、使命与宗旨，以及奥克兰华人双语教会大家庭。" },
    ],
  }),
  component: About,
});

const beliefs = [
  { title: "圣经是神的话", text: "我们相信圣经是神所默示的，是信仰与生活最高的准则。" },
  { title: "耶稣基督是救主", text: "因着耶稣的死与复活，人得以与神和好，白白得着永生的恩典。" },
  { title: "教会是神的家", text: "我们彼此相爱、彼此担当，让每一位来到的人都被看见、被接纳。" },
];

const resources = [
  { title: "主日讲道回顾", desc: "错过了主日？每周讲道录音与讲章大纲会在周三前更新。" },
  { title: "每日灵修材料", desc: "十分钟的经文与默想，帮助您在忙碌的一周里与神保持连结。" },
  { title: "一年读经计划", desc: "简体中文版读经进度表，可下载打印，也适合小组一同进行。" },
  { title: "诗歌与敬拜歌单", desc: "主日常唱的中英文诗歌，方便您在家中一同敬拜。" },
];


function About() {
  return (
    <>
      <PageHeader
        subtitle="ABOUT US"
        title="关于我们"
        intro="新西兰基督教会亚洲团契是一间植根于奥克兰的华人教会。从最初几个家庭的祷告聚会开始，如今我们成为一个跨世代、跨文化的信仰家庭。"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary gold-rule">我们的使命与宗旨</h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            我们盼望成为奥克兰亚裔社区的属灵港湾：让刚踏上这片土地的人有人同行，
            让在忙碌中疲惫的人重新得力，让下一代在双语与双文化中稳稳扎根于信仰。
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            我们不追求华丽的形式，而看重真实的关系——一起读圣经、一起吃饭、一起为彼此祷告。
          </p>
        </div>
        <div className="rounded-xl bg-cream p-8">
          <h2 className="text-2xl font-bold text-primary">我们的服事语言</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
            <li>· 主日崇拜：普通话与英语双语进行</li>
            <li>· 长者聚会与探访：以华语为主</li>
            <li>· 儿童及青少年事工：以英语为主，鼓励中文</li>
            <li>· 新朋友接待：普通话、粤语、英语皆可</li>
          </ul>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl font-bold text-primary gold-rule">我们所信</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {beliefs.map((b) => (
              <article key={b.title} className="rounded-xl bg-card p-7">
                <h3 className="text-lg font-semibold text-primary">{b.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-2xl font-bold text-primary gold-rule">属灵成长资源</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((r) => (
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
