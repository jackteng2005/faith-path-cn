import type { Lang } from "./i18n";

export const nav = {
  zh: [
    { to: "/", label: "首页" },
    { to: "/about", label: "关于我们" },
    { to: "/contact", label: "联系与地点" },
  ],
  en: [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Visit & Contact" },
  ],
} as const;

export const site = {
  zh: {
    logoAlt: "新西兰基督教会亚洲团契标志",
    menu: "打开菜单",
    switchLabel: "Switch to English",
    footerName: "新西兰基督教会 · 亚洲团契",
    footerBlurb: "中英双语主日崇拜，每周日上午 10:45。无论您信主与否，欢迎每一位朋友前来。",
    address: "入口：3 号门，6 Mt Roskill Rd，奥克兰",
    verse: "神爱世人，甚至将他的独生子赐给他们 · 约翰福音 3:16",
    rights: "新西兰基督教会亚洲团契",
  },
  en: {
    logoAlt: "Church of Christ New Zealand Asian Fellowship logo",
    menu: "Open menu",
    switchLabel: "切换到中文",
    footerName: "Church of Christ NZ · Asian Fellowship",
    footerBlurb:
      "Bilingual Sunday worship in Mandarin and English, every Sunday at 10:45am. Wherever you are on your journey, you are welcome here.",
    address: "Entry via Gate 3, 6 Mt Roskill Rd, Auckland",
    verse: "For God so loved the world that he gave his one and only Son · John 3:16",
    rights: "Church of Christ NZ Asian Fellowship",
  },
} as const;

export const home = {
  zh: {
    meta: {
      title: "新西兰基督教会 亚洲团契 | 奥克兰华人双语教会",
      description:
        "欢迎参加！奥克兰 Mt Roskill 中英双语主日崇拜，每周日上午10:45。儿童主日课程、英语班、长者聚会与信仰课程，欢迎每一位朋友。",
      ogTitle: "欢迎参加 · 新西兰基督教会 亚洲团契",
      ogDescription: "每周日上午10:45中英双语崇拜，奥克兰 Mt Roskill。欢迎每一位朋友。",
    },
    eyebrow: "EVERYONE WELCOME",
    heroTitle: "欢迎参加",
    heroSub: "每周日，与我们一同聚会",
    heroText:
      "我们是位于奥克兰 Mt Roskill 的华人基督教会。无论您是刚来到新西兰、想认识信仰，还是寻找一个可以安心落脚的属灵家庭——这里都为您留了一个位置。",
    heroImgAlt: "日出中山丘上的十字架",
    serviceLabel: "中英文主日崇拜",
    serviceTime: "上午 10:45",
    cta: "查看聚会地点",
    highlightsTitle: "第一次来，会遇见什么？",
    highlights: [
      { title: "中英双语崇拜", text: "崇拜同时提供中文与英文，一家人不分世代都能一同敬拜、一同明白神的话。" },
      { title: "从零开始认识信仰", text: "《基督信仰课程》为初次接触基督教的朋友预备，没有背景也能轻松参加。" },
      { title: "像家一样的团契", text: "新移民、留学生、职场人与长者，在这里都能找到彼此扶持的属灵家人。" },
    ],
    gatheringsTitle: "每周聚会与课程",
    gatheringsNote: "所有活动完全免费，不需要任何信仰背景。带着问题来，就是最好的开始。",
    gatherings: [
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
    ],
    verse: "「神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。」",
    verseRef: "约翰福音 3:16",
    verseCta: "我想了解更多",
  },
  en: {
    meta: {
      title: "Church of Christ NZ Asian Fellowship | Auckland Bilingual Church",
      description:
        "You are welcome. Bilingual Sunday worship at 10:45am in Mt Roskill, Auckland — with Sunday school for kids, free English classes, seniors fellowship and faith courses.",
      ogTitle: "You Are Welcome · Church of Christ NZ Asian Fellowship",
      ogDescription: "Bilingual worship every Sunday 10:45am in Mt Roskill, Auckland. All are welcome.",
    },
    eyebrow: "EVERYONE WELCOME",
    heroTitle: "You Are Welcome",
    heroSub: "Join us this Sunday",
    heroText:
      "We are an Asian Christian fellowship in Mt Roskill, Auckland. Whether you have just arrived in New Zealand, are curious about faith, or are looking for a church family to call home — there is a seat here for you.",
    heroImgAlt: "A cross on a hillside at sunrise",
    serviceLabel: "Bilingual Sunday worship",
    serviceTime: "10:45 am",
    cta: "See where we meet",
    highlightsTitle: "What to expect on your first visit",
    highlights: [
      {
        title: "Bilingual worship",
        text: "Every service runs in both Mandarin and English, so the whole family can worship and understand together.",
      },
      {
        title: "Faith explained from scratch",
        text: "Christianity Explained is made for people meeting the Christian faith for the first time. No background needed.",
      },
      {
        title: "A church that feels like family",
        text: "New migrants, students, working professionals and seniors all find people here who walk alongside them.",
      },
    ],
    gatheringsTitle: "Weekly gatherings & courses",
    gatheringsNote:
      "Everything is free and open to all — no church background required. Bringing your questions is the best place to start.",
    gatherings: [
      {
        day: "Mon 11:15",
        title: "Beginners English class",
        note: "Free English, new migrants welcome",
        desc: "A free class led by local teachers, starting with everyday conversation to help you settle into life in New Zealand.",
      },
      {
        day: "Wed 10:00",
        title: "Chinese seniors fellowship",
        note: "Singing, sharing and lunch together",
        desc: "A warm midweek gathering for Mandarin-speaking seniors — singing, sharing life and praying for one another.",
      },
      {
        day: "Sun 10:45",
        title: "Bilingual Sunday worship",
        note: "Sunday school runs alongside",
        desc: "Worship in Mandarin and English together, with a children's programme running at the same time.",
      },
      {
        day: "Sunday morning",
        title: "Christianity Explained",
        note: "Small-group study and open Q&A",
        desc: "Eight weeks moving from 'Who is God?' to 'How do I respond?' Ask anything, and start any week.",
      },
    ],
    verse:
      "\u201cFor God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.\u201d",
    verseRef: "John 3:16",
    verseCta: "I'd like to know more",
  },
} as const;

export const about = {
  zh: {
    meta: {
      title: "关于我们 | 新西兰基督教会 亚洲团契",
      description: "认识我们的信仰、使命与宗旨，以及这个由华人及亚洲家庭组成的奥克兰双语教会大家庭。",
      ogTitle: "关于我们 · 新西兰基督教会 亚洲团契",
      ogDescription: "认识我们的信仰、使命与宗旨，以及奥克兰华人双语教会大家庭。",
    },
    subtitle: "ABOUT US",
    title: "关于我们",
    intro:
      "新西兰基督教会亚洲团契是一间植根于奥克兰的华人教会。从最初几个家庭的祷告聚会开始，如今我们成为一个跨世代、跨文化的信仰家庭。",
    missionTitle: "我们的使命与宗旨",
    mission1:
      "我们盼望成为奥克兰亚裔社区的属灵港湾：让刚踏上这片土地的人有人同行，让在忙碌中疲惫的人重新得力，让下一代在双语与双文化中稳稳扎根于信仰。",
    mission2: "我们不追求华丽的形式，而看重真实的关系——一起读圣经、一起吃饭、一起为彼此祷告。",
    langTitle: "我们的服事语言",
    langs: [
      "· 主日崇拜：普通话与英语双语进行",
      "· 长者聚会与探访：以华语为主",
      "· 儿童及青少年事工：以英语为主，鼓励中文",
      "· 新朋友接待：普通话、粤语、英语皆可",
    ],
    beliefsTitle: "我们所信",
    beliefs: [
      { title: "圣经是神的话", text: "我们相信圣经是神所默示的，是信仰与生活最高的准则。" },
      { title: "耶稣基督是救主", text: "因着耶稣的死与复活，人得以与神和好，白白得着永生的恩典。" },
      { title: "教会是神的家", text: "我们彼此相爱、彼此担当，让每一位来到的人都被看见、被接纳。" },
    ],
    resourcesTitle: "属灵成长资源",
    resources: [
      { title: "主日讲道回顾", desc: "错过了主日？每周讲道录音与讲章大纲会在周三前更新。" },
      { title: "每日灵修材料", desc: "十分钟的经文与默想，帮助您在忙碌的一周里与神保持连结。" },
      { title: "一年读经计划", desc: "简体中文版读经进度表，可下载打印，也适合小组一同进行。" },
      { title: "诗歌与敬拜歌单", desc: "主日常唱的中英文诗歌，方便您在家中一同敬拜。" },
    ],
  },
  en: {
    meta: {
      title: "About Us | Church of Christ NZ Asian Fellowship",
      description:
        "Meet the people, beliefs, mission and purpose behind our bilingual Auckland church family of Chinese and Asian households.",
      ogTitle: "About Us · Church of Christ NZ Asian Fellowship",
      ogDescription: "Our beliefs, mission and purpose as a bilingual Auckland church family.",
    },
    subtitle: "ABOUT US",
    title: "About Us",
    intro:
      "Church of Christ NZ Asian Fellowship is an Auckland church rooted in the Asian community. What began as a few families praying together has grown into a church family spanning generations and cultures.",
    missionTitle: "Our mission and purpose",
    mission1:
      "We want to be a place of belonging for Auckland's Asian community: company for those who have just arrived, rest for those worn down by busy weeks, and a faith the next generation can hold onto in two languages and two cultures.",
    mission2:
      "We care less about polish and more about real relationships — reading the Bible together, sharing meals, and praying for one another.",
    langTitle: "Languages we serve in",
    langs: [
      "· Sunday worship: Mandarin and English together",
      "· Seniors gatherings and visits: mainly Mandarin",
      "· Children and youth ministry: mainly English, Chinese encouraged",
      "· Welcoming newcomers: Mandarin, Cantonese or English",
    ],
    beliefsTitle: "What we believe",
    beliefs: [
      {
        title: "The Bible is God's word",
        text: "We believe Scripture is inspired by God and is our highest guide for faith and daily life.",
      },
      {
        title: "Jesus Christ is Saviour",
        text: "Through his death and resurrection we are reconciled to God and freely receive the gift of eternal life.",
      },
      {
        title: "The church is God's family",
        text: "We love and carry one another, so that everyone who walks through the door is seen and welcomed.",
      },
    ],
    resourcesTitle: "Resources for growth",
    resources: [
      { title: "Sunday sermon archive", desc: "Missed a Sunday? Audio and outlines are posted by Wednesday each week." },
      { title: "Daily devotionals", desc: "Ten minutes of Scripture and reflection to stay connected with God midweek." },
      { title: "One-year Bible plan", desc: "A printable reading plan in Chinese and English, great for small groups too." },
      { title: "Worship song list", desc: "The Chinese and English songs we sing on Sundays, so you can worship at home." },
    ],
  },
} as const;

export const contact = {
  zh: {
    meta: {
      title: "联系与地点 | 新西兰基督教会 亚洲团契",
      description:
        "电话 09 620 9583、邮箱 church@ccnz.org.nz，或直接联系 Susan Lin 与 Michael Chieng。聚会地址：6 Mt Roskill Rd，奥克兰。",
      ogTitle: "联系与地点 · 新西兰基督教会 亚洲团契",
      ogDescription: "有疑问或需要代祷？随时与我们联系，也欢迎前来聚会。",
    },
    subtitle: "CONTACT & LOCATION",
    title: "联系与地点",
    intro: "如果您有任何疑问，或需要代祷，请随时与我们联系。我们很乐意听您说说，也欢迎您前来聚会。",
    labels: { phone: "电话", email: "邮箱", web: "网站", address: "地址" },
    addressShort: "入口：3 号门，6 Mt Roskill Rd",
    staffTitle: "直接联系同工",
    staffText: "若您有疑问或需要代祷，欢迎致电或发短信：",
    staff: [
      { name: "***", phone: "021 *** ****" },
      { name: "***", phone: "021 *** ****" },
    ],

    addressTitle: "地址",
    addressFull: "入口：3 号门，6 Mt Roskill Rd，Mt Roskill，Auckland",
    timeTitle: "崇拜时间",
    timeText: "每周日上午 10:45（建议提前 10 分钟到达）",
    parkingTitle: "停车与交通",
    parkingText: "院内设有免费停车位；亦可乘坐公交至 Mt Roskill Rd 站，步行约 3 分钟。",
    mapTitle: "教会地图",
  },
  en: {
    meta: {
      title: "Visit & Contact | Church of Christ NZ Asian Fellowship",
      description:
        "Call 09 620 9583, email church@ccnz.org.nz, or reach Susan Lin and Michael Chieng directly. We meet at 6 Mt Roskill Rd, Auckland.",
      ogTitle: "Visit & Contact · Church of Christ NZ Asian Fellowship",
      ogDescription: "Questions or need prayer? Get in touch any time — and come join us on Sunday.",
    },
    subtitle: "CONTACT & LOCATION",
    title: "Visit & Contact",
    intro:
      "If you have questions, or would like someone to pray with you, please get in touch. We would love to hear from you, and we would love to see you on a Sunday.",
    labels: { phone: "Phone", email: "Email", web: "Website", address: "Address" },
    addressShort: "Entry via Gate 3, 6 Mt Roskill Rd",
    staffTitle: "Talk to someone directly",
    staffText: "For questions or prayer, feel free to call or text:",
    staff: [
      { name: "***", phone: "021 *** ****" },
      { name: "***", phone: "021 *** ****" },
    ],

    addressTitle: "Address",
    addressFull: "Entry via Gate 3, 6 Mt Roskill Rd, Mt Roskill, Auckland",
    timeTitle: "Service time",
    timeText: "Every Sunday at 10:45am (arriving 10 minutes early is ideal)",
    parkingTitle: "Parking & transport",
    parkingText:
      "Free parking is available on site, and buses stop on Mt Roskill Rd about a 3-minute walk away.",
    mapTitle: "Map to the church",
  },
} as const;

export function t<T extends { zh: unknown; en: unknown }>(lang: Lang, dict: T) {
  return dict[lang];
}
