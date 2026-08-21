import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "课程 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "基督信仰课程、初学者英语班、儿童主日课程与洗礼预备班，皆免费开放，欢迎报名参加。" },
      { property: "og:title", content: "课程 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "信仰课程、免费英语班与儿童课程，欢迎参加。" },
    ],
  }),
  component: Courses,
});

const courses = [
  {
    name: "基督信仰课程",
    time: "每周日上午",
    audience: "对信仰有兴趣的朋友",
    desc: "用八周时间，从「神是谁」谈到「我该如何回应」。可以随时提问、随时开始，也可以只是来听听看。",
  },
  {
    name: "初学者英语班",
    time: "每周一 11:15",
    audience: "新移民、家庭主妇、长者",
    desc: "由本地老师带领的免费英语课程，从日常对话开始，帮助您更自在地在新西兰生活。",
  },
  {
    name: "儿童主日课程",
    time: "每周日上午",
    audience: "3–12 岁儿童",
    desc: "用故事、诗歌与手作，帮助孩子在双语环境中认识圣经，也交到好朋友。",
  },
  {
    name: "洗礼预备班",
    time: "按季开班",
    audience: "预备受洗的弟兄姊妹",
    desc: "系统整理信仰基础，陪伴您走出信心的第一步。",
  },
];

function Courses() {
  return (
    <>
      <PageHeader
        subtitle="COURSES"
        title="课程"
        intro="所有课程完全免费，不需要任何信仰背景。带着问题来，就是最好的开始。"
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        {courses.map((c) => (
          <article key={c.name} className="rounded-xl border border-border bg-card p-8">
            <h2 className="text-xl font-semibold text-primary">{c.name}</h2>
            <p className="mt-2 text-sm text-accent">
              {c.time} ｜ {c.audience}
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{c.desc}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
        <p className="text-base leading-8 text-muted-foreground">想报名或先了解详情？</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          联系我们
        </Link>
      </section>
    </>
  );
}
