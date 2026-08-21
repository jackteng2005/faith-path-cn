import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, Heart, MapPin, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "新西兰基督教会 亚洲团契 | 奥克兰华人双语教会" },
      {
        name: "description",
        content: "欢迎参加！奥克兰 Mt Roskill 中英双语主日崇拜，每周日上午10:45。儿童主日课程、英语班、长者聚会与信仰课程，欢迎每一位朋友。",
      },
      { property: "og:title", content: "欢迎参加 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "每周日上午10:45中英双语崇拜，奥克兰 Mt Roskill。欢迎每一位朋友。" },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    icon: Users,
    title: "中英双语崇拜",
    text: "崇拜同时提供中文与英文，一家人不分世代都能一同敬拜、一同明白神的话。",
  },
  {
    icon: BookOpen,
    title: "从零开始认识信仰",
    text: "《基督信仰课程》为初次接触基督教的朋友预备，没有背景也能轻松参加。",
  },
  {
    icon: Heart,
    title: "像家一样的团契",
    text: "新移民、留学生、职场人与长者，在这里都能找到彼此扶持的属灵家人。",
  },
];

const gatherings = [
  {
    day: "周一 11:15",
    title: "初学者英语班",
    note: "免费英语学习，欢迎新移民",
    desc: "由本地老师带领的免费英语课程，从日常对话开始，帮助您更自在地在新西兰生活。",
  },
  {
    day: "周三 10:00",
    title: "华语长者聚会",
    note: "唱诗、分享与午间团契",
    desc: "为华语长者预备的团契时间，一起唱诗、分享生活，彼此代祷扶持。",
  },
  {
    day: "周日 10:45",
    title: "中英双语主日崇拜",
    note: "同场设儿童主日课程",
    desc: "崇拜同时提供中文与英文，一家人不分世代都能一同敬拜、一同明白神的话。",
  },
  {
    day: "周日 上午",
    title: "基督信仰课程",
    note: "小组式查经与答疑",
    desc: "用八周时间，从「神是谁」谈到「我该如何回应」。可以随时提问、随时开始。",
  },
  {
    day: "按季开班",
    title: "洗礼预备班",
    note: "预备受洗的弟兄姊妹",
    desc: "系统整理信仰基础，陪伴您走出信心的第一步。",
  },
];


function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="日出中山丘上的十字架"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 hero-veil" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
          <div className="max-w-xl">
            <p className="text-sm tracking-[0.4em] text-accent">EVERYONE WELCOME</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-primary md:text-6xl">
              欢迎参加
            </h1>
            <p className="mt-4 text-2xl text-crimson">每周日，与我们一同聚会</p>
            <p className="mt-6 max-w-lg text-base leading-8 text-foreground/80">
              我们是位于奥克兰 Mt Roskill 的华人基督教会。无论您是刚来到新西兰、想认识信仰，
              还是寻找一个可以安心落脚的属灵家庭——这里都为您留了一个位置。
            </p>

            <div className="mt-8 inline-flex flex-wrap items-center gap-4 rounded-lg bg-crimson px-6 py-4 text-crimson-foreground shadow-soft">
              <Clock className="size-5 text-accent" />
              <div>
                <p className="text-sm opacity-90">中英文主日崇拜</p>
                <p className="text-3xl font-bold">上午 10:45</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MapPin className="size-4" />
                查看聚会地点
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold text-primary gold-rule">第一次来，会遇见什么？</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-7">
              <Icon className="size-7 text-accent" />
              <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gatherings" className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-primary gold-rule">每周聚会与课程</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            所有活动完全免费，不需要任何信仰背景。带着问题来，就是最好的开始。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {gatherings.map((g) => (
              <article
                key={g.title}
                className="rounded-xl border border-border bg-card p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="shrink-0 text-sm font-semibold text-crimson">{g.day}</span>
                  <h3 className="text-lg font-semibold text-primary">{g.title}</h3>
                </div>
                <p className="mt-2 text-sm text-accent">{g.note}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{g.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-xl leading-9 text-primary">
          「神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。」
        </p>
        <p className="mt-4 text-sm tracking-widest text-accent">约翰福音 3:16</p>
        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          我想了解更多
        </Link>
      </section>
    </>
  );
}
