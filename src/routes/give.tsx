import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: "奉献 | 新西兰基督教会 亚洲团契" },
      { name: "description", content: "了解奉献的方式与用途：银行转账、主日现场奉献，支持崇拜、儿童事工、社区英语班与关怀服事。" },
      { property: "og:title", content: "奉献 · 新西兰基督教会 亚洲团契" },
      { property: "og:description", content: "奉献方式与用途说明，谢谢您与我们一同服事这座城市。" },
    ],
  }),
  component: Give,
});

function Give() {
  return (
    <>
      <PageHeader
        subtitle="GIVE"
        title="奉献"
        intro="奉献是出于自愿与感恩，绝非参加聚会的条件。第一次来的朋友，请只管安心作客。"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold text-primary">银行转账</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">户名</dt>
              <dd className="text-primary">Church of Christ NZ – Asian Fellowship</dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">账号</dt>
              <dd className="text-primary">请来电 09 620 9583 索取</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">备注</dt>
              <dd className="text-primary">请注明「奉献」及您的姓名</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            也可以在主日崇拜时，将奉献放入现场的奉献箱。
          </p>
        </div>

        <div className="rounded-xl bg-cream p-8">
          <h2 className="text-xl font-semibold text-primary">您的奉献用于</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
            <li>· 主日崇拜与场地维护</li>
            <li>· 儿童与青少年事工</li>
            <li>· 社区免费英语班与长者关怀</li>
            <li>· 有需要家庭的紧急援助</li>
            <li>· 海外与本地宣教支持</li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            每年度的财务报告会向会众公开，欢迎随时查阅。
          </p>
        </div>
      </section>
    </>
  );
}
