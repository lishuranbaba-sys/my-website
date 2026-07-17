import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOGO_IMAGE_SRC = "/logo.png";

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  switch (name) {
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
          <path d="M19 14l.7 1.9L22 16.6l-2.3.7L19 20l-.7-2.7-2.3-.7 2.3-.7L19 14z" />
          <path d="M5 14l.7 1.9L8 16.6l-2.3.7L5 20l-.7-2.7-2.3-.7 2.3-.7L5 14z" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <circle cx="8" cy="10" r="1.4" />
          <path d="M21 16l-5-5-6 6-2-2-5 5" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="13" height="12" rx="2.5" />
          <path d="M16 10l5-3v10l-5-3z" />
        </svg>
      );
    case "fileText":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      );
    case "crown":
      return (
        <svg {...common}>
          <path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8z" />
          <path d="M5 19h14" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "infinity":
      return (
        <svg {...common}>
          <path d="M7 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c3.4 0 6.6-8 10-8 2.2 0 4 1.8 4 4s-1.8 4-4 4c-3.4 0-6.6-8-10-8z" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21" />
          <path d="M12 3c-2.4 2.6-3.6 5.6-3.6 9S9.6 18.4 12 21" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path d="M4 7h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
          <path d="M16 12h5" />
          <circle cx="17.5" cy="14.5" r=".7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H7a3 3 0 0 0-3 3V5.5z" />
          <path d="M4 20a3 3 0 0 1 3-3h13" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 4l8 4-8 4-8-4 8-4z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </svg>
      );
    case "cursor":
      return (
        <svg {...common}>
          <path d="M5 3l14 7-6 2-2 6L5 3z" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 4v12" />
          <path d="M7 11l5 5 5-5" />
          <path d="M4 20h16" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 13.5a7.8 7.8 0 0 0 0-3l2-1.5-2-3.4-2.4 1a7.5 7.5 0 0 0-2.6-1.5L13.7 2h-3.4L10 5.1a7.5 7.5 0 0 0-2.6 1.5l-2.4-1L3 9l2 1.5a7.8 7.8 0 0 0 0 3L3 15l2 3.4 2.4-1a7.5 7.5 0 0 0 2.6 1.5l.3 3.1h3.4l.3-3.1a7.5 7.5 0 0 0 2.6-1.5l2.4 1 2-3.4-2-1.5z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

function ProductLogo({ className = "h-12 w-12" }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={LOGO_IMAGE_SRC}
        alt="织影 AI Logo"
        className={`${className} rounded-[28%] object-contain shadow-[0_0_45px_rgba(34,211,238,0.3)]`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={`${className} relative overflow-hidden rounded-[28%] bg-gradient-to-br from-blue-600 via-sky-400 to-teal-300 shadow-[0_0_45px_rgba(34,211,238,0.35)]`}>
      <div className="absolute -left-2 -top-1 h-8 w-16 rotate-[-12deg] rounded-full bg-gradient-to-r from-blue-500 to-cyan-300 opacity-95" />
      <div className="absolute -bottom-3 left-5 h-9 w-16 -rotate-[16deg] rounded-full bg-gradient-to-r from-sky-400 to-teal-300 opacity-95" />
      <div className="absolute left-[18%] top-[28%] h-[43%] w-[64%] rounded-[32px] bg-white p-[10%]">
        <div className="flex h-full w-full items-center justify-around rounded-[24px] bg-slate-950 px-[18%]">
          <div className="h-[38%] w-[13%] rounded-full bg-teal-300" />
          <div className="h-[38%] w-[13%] rounded-full bg-teal-300" />
        </div>
      </div>
    </div>
  );
}

const modelStack = [
  {
    id: "text",
    model: "ChatGPT 5.5",
    label: "文字创作引擎",
    icon: "fileText",
    gradient: "from-cyan-300 to-blue-400",
    description: "用于文案、脚本、种草笔记、营销话术、办公写作等高频文本创作。"
  },
  {
    id: "image",
    model: "GPT image 2",
    label: "图片生成引擎",
    icon: "image",
    gradient: "from-blue-300 to-violet-400",
    description: "用于海报、商品图、AI 试衣图、视觉素材与高质量风格化图片生成。"
  },
  {
    id: "video",
    model: "Grok",
    label: "视频生成引擎",
    icon: "video",
    gradient: "from-violet-300 to-fuchsia-400",
    description: "用于短视频素材、动态画面、宣传片段与内容创作视频生成。"
  }
];

const plans = [
  {
    id: "trial",
    name: "体验卡会员",
    price: "29.9",
    unit: "元 / 24小时",
    pointsLabel: "赠送 1500 积分",
    points: 1500,
    period: "24小时内",
    recharge: "无充值优惠",
    position: "先体验",
    icon: "clock",
    badge: "新用户首选",
    description: "适合第一次体验织影 AI，快速测试文案、图片与视频能力。",
    features: ["文案功能免费", "赠送 1500 积分", "24 小时体验", "适合短期试用"]
  },
  {
    id: "yearly",
    name: "年卡会员",
    price: "398",
    unit: "元 / 年",
    pointsLabel: "每月 6000 积分，全年 72000 积分",
    points: 6000,
    annualPoints: 72000,
    period: "每月",
    recharge: "充值享 8 折",
    position: "最推荐",
    icon: "crown",
    badge: "推荐选择",
    description: "适合长期稳定使用，每月固定积分，办公、营销、电商都够用。",
    features: ["文案功能免费", "每月 6000 积分", "全年 72000 积分", "充值享 8 折"]
  },
  {
    id: "lifetime",
    name: "永久会员",
    price: "598",
    unit: "元",
    pointsLabel: "每月 1000 积分，每年 12000 积分",
    points: 1000,
    annualPoints: 12000,
    period: "每月",
    recharge: "充值享 6 折",
    position: "长期省钱",
    icon: "infinity",
    badge: "长期高频",
    description: "适合长期使用且后续会充值的用户，充值折扣力度最大。",
    features: ["文案功能免费", "每月 1000 积分", "每年 12000 积分", "充值享 6 折"]
  }
];

const generationItems = [
  { key: "copywriting", name: "AI 文案创作", short: "文案", model: "ChatGPT 5.5", cost: 0, unit: "不限次", type: "free", icon: "fileText" },
  { key: "retouch", name: "AI 修图", short: "修图", model: "GPT image 2", cost: 30, unit: "次", type: "count", icon: "image" },
  { key: "basicImage", name: "基础图片生成", short: "基础图", model: "GPT image 2", cost: 40, unit: "张", type: "count", icon: "image" },
  { key: "advancedImage", name: "高级图片生成", short: "高级图", model: "GPT image 2", cost: 50, unit: "张", type: "count", icon: "sparkles" },
  { key: "video10", name: "10 秒视频生成", short: "V10", model: "Grok", cost: 150, unit: "条", type: "count", icon: "video" },
  { key: "video15", name: "15 秒视频生成", short: "V15", model: "Grok", cost: 200, unit: "条", type: "count", icon: "video" },
  { key: "video20", name: "20 秒视频生成", short: "V20", model: "Grok", cost: 250, unit: "条", type: "count", icon: "video" },
  { key: "video25", name: "25 秒视频生成", short: "V25", model: "Grok", cost: 300, unit: "条", type: "count", icon: "video" },
  { key: "video30", name: "30 秒视频生成", short: "V30", model: "Grok", cost: 350, unit: "条", type: "count", icon: "video" }
];

const equalityPoints = [
  { icon: "wallet", title: "不用每年几千的会员订阅费", text: "把文字、图片、视频能力聚合在织影 AI，一个会员覆盖多类高频创作需求。" },
  { icon: "globe", title: "不用魔法，国内直连", text: "降低普通用户接触国际先进模型的门槛，不再被工具、网络和支付方式拦住。" },
  { icon: "shield", title: "真正的科技平权", text: "让小商家、学生、普通职场人、内容创作者都能用得起、用得上、用得懂。" }
];

const useCases = ["职场办公", "学生学习", "门店营销", "电商商品图", "服装展示", "短视频创作", "本地生活探店", "社媒种草", "海报设计"];

const manualSections = [
  {
    id: "start",
    title: "一、快速开始",
    icon: "cursor",
    steps: ["打开织影 AI，注册或登录账号。", "根据使用频率选择体验卡、年卡或永久会员。", "进入首页后，选择 AI 文案、AI 图片、AI 修图或 AI 视频功能。", "输入需求或上传素材，点击生成。", "满意后下载结果；不满意可调整提示词、风格或参数后重新生成。"]
  },
  {
    id: "text",
    title: "二、AI 文案使用说明",
    icon: "fileText",
    steps: ["选择文案类型：标题、短视频脚本、种草笔记、朋友圈文案、商品卖点、活动方案等。", "输入主题、行业、目标用户、语气风格和字数要求。", "使用 ChatGPT 5.5 文字模型生成初稿。", "根据需要继续要求它扩写、精简、改风格、加卖点或生成多个版本。", "会员文案功能免费使用，适合高频改稿和批量创作。"]
  },
  {
    id: "image",
    title: "三、AI 图片与修图使用说明",
    icon: "image",
    steps: ["选择基础图片生成、高级图片生成或 AI 修图。", "图片生成：输入画面主体、风格、尺寸、用途和细节要求。", "AI 修图：上传原图，并说明需要美化、换背景、增强质感或局部修改的位置。", "使用 GPT image 2 图片模型生成或处理图片。", "生成后可继续优化提示词，反复调整构图、色调、光影和商业质感。"]
  },
  {
    id: "video",
    title: "四、AI 视频使用说明",
    icon: "video",
    steps: ["选择视频时长：10 秒、15 秒、20 秒、25 秒或 30 秒。", "输入视频主题、镜头语言、人物或产品动作、场景、风格和节奏。", "也可以基于已有图片或商品图生成动态视频素材。", "使用 Grok 视频能力生成短视频片段。", "生成后可下载用于短视频平台、广告素材、门店展示或商品宣传。"]
  },
  {
    id: "points",
    title: "五、积分与失败说明",
    icon: "layers",
    steps: ["100 积分 = 1 元。", "AI 修图 30 积分 / 次；基础图片 40 积分 / 张；高级图片 50 积分 / 张。", "10 秒视频 150 积分；15 秒视频 200 积分；20 秒视频 250 积分；25 秒视频 300 积分；30 秒视频 350 积分。", "如果因系统、网络或模型原因生成失败，平台将自动退回对应积分。", "AI 生成具有随机性，结果不符合个人主观预期不属于失败退款范围。"]
  },
  {
    id: "tips",
    title: "六、提示词写法建议",
    icon: "settings",
    steps: ["尽量写清楚用途：例如小红书封面、电商主图、朋友圈文案、探店视频。", "写清楚对象：产品、人物、场景、行业、受众。", "写清楚风格：科技感、高级感、国潮、清新、真实摄影、商业广告等。", "写清楚限制：字数、画面比例、不要出现的元素、颜色倾向。", "第一次不满意时，不要只点重试，建议补充具体修改方向。"]
  }
];

function getGenerationCount(points, cost) {
  if (!Number.isFinite(points) || !Number.isFinite(cost) || cost <= 0) return 0;
  return Math.floor(points / cost);
}

function formatNum(value) {
  return Number(value || 0).toLocaleString("zh-CN");
}

function getPlanGenerationRows(plan) {
  return generationItems.map((item) => {
    if (item.type === "free") {
      return { ...item, countText: "会员免费", yearlyCountText: plan.annualPoints ? "全年免费" : "" };
    }
    const currentCount = getGenerationCount(plan.points, item.cost);
    const yearlyCount = plan.annualPoints ? getGenerationCount(plan.annualPoints, item.cost) : 0;
    return { ...item, countText: `${formatNum(currentCount)} ${item.unit}`, yearlyCountText: yearlyCount ? `${formatNum(yearlyCount)} ${item.unit}` : "" };
  });
}

function runSelfTests() {
  console.assert(modelStack.length === 3, "应展示文字、图片、视频三类顶级模型");
  console.assert(modelStack.some((item) => item.model === "ChatGPT 5.5"), "文字模型应展示 ChatGPT 5.5");
  console.assert(modelStack.some((item) => item.model === "GPT image 2"), "图片模型应展示 GPT image 2");
  console.assert(modelStack.some((item) => item.model === "Grok"), "视频模型应展示 Grok");
  console.assert(plans.length === 3, "应展示三种会员订阅套餐");
  console.assert(getGenerationCount(1500, 40) === 37, "1500 积分应最多生成 37 张基础图片");
  console.assert(getGenerationCount(6000, 150) === 40, "6000 积分应最多生成 40 条 10 秒视频");
  console.assert(getGenerationCount(1000, 350) === 2, "1000 积分应最多生成 2 条 30 秒视频");
  console.assert(manualSections.length >= 6, "产品使用手册应包含至少 6 个章节");
}

if (typeof window !== "undefined") runSelfTests();

function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(168,85,247,0.16),transparent_32%)]" />
      <div className="tech-grid absolute inset-0 opacity-35" />
      <div className="scanline absolute inset-0 opacity-25" />
      <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl tech-float-1" />
      <div className="absolute right-[8%] top-[20%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl tech-float-2" />
      <div className="absolute bottom-[8%] left-[35%] h-96 w-96 rounded-full bg-violet-500/20 blur-3xl tech-float-3" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.42)_48%,rgba(2,6,23,0.92)_100%)]" />
    </div>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: -999, y: -999 });
  useEffect(() => {
    const handleMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden opacity-70 mix-blend-screen transition-opacity duration-300 md:block"
      style={{ background: `radial-gradient(360px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.16), rgba(59,130,246,0.08) 28%, transparent 62%)` }}
    />
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 22 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 53) % 100}%`,
    delay: `${(index % 7) * 0.55}s`,
    duration: `${7 + (index % 6)}s`,
    size: `${3 + (index % 4)}px`
  }));
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-dot absolute rounded-full bg-cyan-300/60 shadow-[0_0_16px_rgba(34,211,238,0.8)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size, animationDelay: particle.delay, animationDuration: particle.duration }}
        />
      ))}
    </div>
  );
}

function Nav({ page, setPage }) {
  const goHomeAnchor = (anchor) => {
    setPage("home");
    setTimeout(() => document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-8">
        <button type="button" onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
          <ProductLogo className="h-11 w-11" />
          <div>
            <p className="text-sm font-semibold text-white">织影 AI</p>
            <p className="text-xs text-slate-400">科技平权创作平台</p>
          </div>
        </button>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <button type="button" onClick={() => goHomeAnchor("#models")} className="transition hover:text-white">模型能力</button>
          <button type="button" onClick={() => goHomeAnchor("#plans")} className="transition hover:text-white">会员价格</button>
          <button type="button" onClick={() => goHomeAnchor("#equality")} className="transition hover:text-white">科技平权</button>
          <button type="button" onClick={() => setPage("manual")} className="transition hover:text-white">使用手册</button>
        </nav>
        <button type="button" onClick={() => (page === "manual" ? setPage("home") : goHomeAnchor("#plans"))} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15">
          {page === "manual" ? "返回首页" : "立即体验"}
        </button>
      </div>
    </header>
  );
}

function ModelBadge({ item, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/[0.07]">
      <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl transition group-hover:opacity-35`} />
      <div className="relative flex items-start justify-between gap-4">
        <div className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} p-[1px]`}>
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/90 text-white"><Icon name={item.icon} className="h-6 w-6" /></div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">国际顶级模型</span>
      </div>
      <p className="relative mt-6 text-sm tracking-[0.18em] text-slate-400 uppercase">{item.label}</p>
      <h3 className="relative mt-2 text-3xl font-semibold text-white">{item.model}</h3>
      <p className="relative mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
    </motion.div>
  );
}

function InteractiveWorkflow() {
  const steps = [
    { id: "input", title: "输入需求", icon: "cursor", label: "用户说人话", text: "帮我生成一张高级感女装主图，并写一段小红书种草文案。", response: "已理解创作目标：商品图 + 种草文案 + 商业质感。" },
    { id: "route", title: "智能路由", icon: "layers", label: "系统自动分发", text: "织影 AI 判断任务类型，把文字交给 ChatGPT 5.5，把图片交给 GPT image 2。", response: "正在匹配最佳模型：文案模型 / 图片模型 / 视频模型。" },
    { id: "generate", title: "模型生成", icon: "sparkles", label: "顶级模型工作中", text: "国际顶级模型开始生成内容，不需要用户切换平台、配置参数或处理复杂网络。", response: "生成中：构图、光影、商品卖点、风格一致性同步优化。" },
    { id: "deliver", title: "下载发布", icon: "download", label: "结果可直接使用", text: "生成结果可用于门店营销、电商商品图、朋友圈、小红书、短视频素材等场景。", response: "已完成：图片素材 + 文案初稿 + 可继续优化建议。" }
  ];
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];
  useEffect(() => {
    const timer = window.setInterval(() => setActiveStep((step) => (step + 1) % steps.length), 3600);
    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="relative px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">Human × AI Interaction</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">像和 AI 助理协作，而不是学习复杂工具</h2>
            <p className="mt-4 max-w-2xl text-slate-300">用户只需要描述需求，织影 AI 自动理解、分发、生成和交付，让国际顶级模型变成普通人能直接使用的创作助手。</p>
          </div>
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-200">自动演示中 · 可点击切换</div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="grid gap-4">
            {steps.map((step, index) => {
              const active = index === activeStep;
              return (
                <button key={step.id} type="button" onClick={() => setActiveStep(index)} className={`group rounded-[1.5rem] border p-5 text-left transition duration-300 ${active ? "border-cyan-300/40 bg-cyan-400/[0.10] shadow-[0_0_45px_rgba(34,211,238,0.10)]" : "border-white/10 bg-white/[0.04] hover:border-cyan-400/20 hover:bg-white/[0.06]"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${active ? "bg-cyan-300 text-slate-950" : "bg-white/5 text-cyan-300"}`}><Icon name={step.icon} className="h-5 w-5" /></div>
                    <div><p className="text-xs tracking-[0.18em] text-slate-400 uppercase">Step {index + 1}</p><h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3></div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{step.label}</p>
                  {active ? <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"><div className="workflow-progress h-full rounded-full bg-cyan-300" /></div> : null}
                </button>
              );
            })}
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/80 p-6 shadow-[0_0_80px_rgba(34,211,238,0.10)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)]" />
            <div className="console-scan absolute inset-0 opacity-30" />
            <div className="relative mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-400/80" /><span className="h-3 w-3 rounded-full bg-amber-300/80" /><span className="h-3 w-3 rounded-full bg-emerald-300/80" /></div>
              <p className="text-xs tracking-[0.22em] text-cyan-300 uppercase">Zhiying AI Console</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={current.id} initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -18, filter: "blur(8px)" }} transition={{ duration: 0.32 }} className="relative">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"><Icon name={current.icon} className="h-4 w-4" />{current.title}</div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5"><p className="mb-3 text-sm text-slate-400">用户输入</p><p className="text-lg leading-8 text-white">“{current.text}”</p></div>
                <div className="my-5 flex justify-center"><div className="ai-orbit relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10"><ProductLogo className="h-12 w-12" /><span className="absolute h-full w-full rounded-full border border-cyan-300/30" /></div></div>
                <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/[0.08] p-5"><p className="mb-3 text-sm text-emerald-200">AI 反馈</p><p className="typing-line text-lg leading-8 text-white">{current.response}</p></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanModal({ open, onClose, plan }) {
  const rows = useMemo(() => (plan ? getPlanGenerationRows(plan) : []), [plan]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && plan ? (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/25 px-4 py-6 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="relative w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-cyan-400/25 bg-slate-950/95 shadow-[0_0_60px_rgba(34,211,238,0.18)]" initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ duration: 0.22 }} onClick={(event) => event.stopPropagation()}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_34%)]" />
            <div className="relative flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs tracking-[0.2em] text-cyan-300 uppercase">生成数量参考</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{plan.period} {formatNum(plan.points)} 积分估算{plan.annualPoints ? ` · 全年 ${formatNum(plan.annualPoints)} 积分` : ""}</p>
              </div>
              <button type="button" onClick={onClose} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="关闭弹窗"><Icon name="close" className="h-4 w-4" /></button>
            </div>
            <div className="relative max-h-[72vh] overflow-y-auto px-5 py-4">
              <div className="mb-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3"><p className="text-xs text-slate-400">价格</p><p className="mt-1 text-lg font-semibold text-white">¥{plan.price}</p></div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3"><p className="text-xs text-slate-400">权益</p><p className="mt-1 truncate text-sm font-medium text-white">{plan.pointsLabel}</p></div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-3"><p className="text-xs text-cyan-200">模型</p><p className="mt-1 text-sm font-medium text-white">顶级聚合</p></div>
              </div>
              <div className="space-y-2">
                {rows.map((item) => (
                  <div key={item.key} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"><Icon name={item.icon} className="h-4 w-4" /></div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2"><p className="truncate text-sm font-medium text-white">{item.name}</p><span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">{item.short}</span></div>
                        <p className="mt-0.5 text-xs text-slate-500">{item.type === "free" ? item.model : `${item.model} · ${item.cost} 积分/${item.unit}`}</p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right"><p className={`text-sm font-semibold ${item.type === "free" ? "text-cyan-300" : "text-white"}`}>{item.countText}</p>{item.yearlyCountText ? <p className="mt-0.5 text-[11px] text-slate-500">全年 {item.yearlyCountText}</p> : null}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs leading-6 text-slate-400">数量按积分消耗估算，实际以平台实时消耗为准。系统、网络或模型原因导致生成失败时，平台自动退回对应积分。</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function HomePage({ setPage }) {
  const [selectedPlanId, setSelectedPlanId] = useState("yearly");
  const [modalOpen, setModalOpen] = useState(false);
  const selectedPlan = useMemo(() => plans.find((plan) => plan.id === selectedPlanId) || plans[1], [selectedPlanId]);
  const openPlanModal = (planId) => { setSelectedPlanId(planId); setModalOpen(true); };

  return (
    <>
      <section className="relative px-6 pb-14 pt-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur"><Icon name="sparkles" className="h-4 w-4" />文字接 ChatGPT 5.5 · 图片接 GPT image 2 · 视频接 Grok</div>
            <div className="flex items-center gap-4"><div className="flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur"><ProductLogo className="h-16 w-16" /></div><div><p className="text-sm tracking-[0.25em] text-slate-400 uppercase">Zhiying AI</p><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">织影 AI</h1></div></div>
            <h2 className="mt-7 max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">聚合国际顶级模型，<span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">让普通人也用得起 AI 创作</span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">织影 AI 把文字、图片、视频创作能力装进一个 App：文字接 ChatGPT 5.5，图片接 GPT image 2，视频接 Grok。用户不用再单独购买每年几千的国际会员订阅，也不用魔法，真正降低 AI 创作门槛。</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#plans" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:opacity-95">查看会员套餐<Icon name="arrowRight" className="ml-2 h-4 w-4" /></a><button type="button" onClick={() => setPage("manual")} className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10">查看产品使用手册</button></div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">{["不用几千年费", "不用魔法", "科技平权"].map((item) => (<div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-200 backdrop-blur"><Icon name="check" className="mr-2 inline h-4 w-4 text-cyan-300" />{item}</div>))}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-white/[0.055] p-6 shadow-[0_0_90px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_30%)]" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="mb-6 flex items-center justify-between"><div><p className="text-sm text-cyan-300">AI Model Router</p><h3 className="mt-2 text-2xl font-semibold text-white">一个入口，调用三类顶级模型</h3></div><ProductLogo className="h-12 w-12" /></div>
                <div className="space-y-3">{modelStack.map((item, index) => (<motion.div key={item.id} animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }} transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-slate-950`}><Icon name={item.icon} className="h-5 w-5" /></div><div><p className="text-sm text-slate-400">{item.label}</p><p className="text-lg font-semibold text-white">{item.model}</p></div></div><span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">已接入</span></div></motion.div>))}</div>
                <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] p-4"><p className="text-sm text-emerald-200">核心价值</p><p className="mt-2 text-xl font-semibold text-white">不用多平台切换，不用单独订阅，不用魔法。</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="models" className="relative px-6 py-16 sm:px-10 lg:px-20"><div className="mx-auto max-w-7xl"><div className="mb-10 max-w-3xl"><p className="text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">Top Model Access</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">不是普通 AI 工具，是顶级模型能力聚合平台</h2><p className="mt-4 text-slate-300">围绕普通用户最高频的三类需求：写文字、做图片、生成视频，织影 AI 直接接入国际顶级模型能力，并把复杂使用门槛收敛成简单操作。</p></div><div className="grid gap-5 lg:grid-cols-3">{modelStack.map((item, index) => <ModelBadge key={item.id} item={item} index={index} />)}</div></div></section>

      <InteractiveWorkflow />

      <section id="equality" className="relative px-6 py-16 sm:px-10 lg:px-20"><div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.10] via-blue-500/[0.08] to-violet-500/[0.10] p-8 backdrop-blur-xl md:p-10"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">AI Equality</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">真正的科技平权</h2><p className="mt-5 text-lg leading-8 text-slate-300">过去，顶级 AI 模型对普通用户来说往往意味着高额订阅、复杂网络、英文界面、多平台切换。织影 AI 要做的，是把这些能力重新打包成人人都能上手的创作工具。</p></div><div className="grid gap-4">{equalityPoints.map((item) => (<div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"><div className="flex gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"><Icon name={item.icon} className="h-5 w-5" /></div><div><h3 className="text-lg font-semibold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p></div></div></div>))}</div></div></div></section>

      <section className="relative px-6 py-16 sm:px-10 lg:px-20"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">Use Cases</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">覆盖个人、副业、门店、电商和内容创作</h2></div><p className="max-w-xl text-sm leading-6 text-slate-400">从写一条朋友圈文案，到生成商品主图、AI 试衣图、探店短视频素材，都可以在同一个 App 内完成。</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{useCases.map((scene) => (<div key={scene} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-slate-200 backdrop-blur transition hover:border-cyan-400/20 hover:bg-white/[0.065]"><Icon name="check" className="mr-3 inline h-4 w-4 text-cyan-300" />{scene}</div>))}</div></div></section>

      <section id="plans" className="relative px-6 py-20 sm:px-10 lg:px-20"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-medium tracking-[0.2em] text-cyan-300 uppercase">Pricing</p><h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">一个会员，覆盖文案、图片、视频高频创作</h2><p className="mt-4 max-w-2xl text-slate-300">点击任意会员卡片，直接弹出该套餐的生成数量参考。文案会员免费用，图片几毛钱一张，视频几块钱一条。</p></div><div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">100 积分 = 1 元</div></div><div className="grid gap-5 lg:grid-cols-3">{plans.map((plan) => { const selected = selectedPlan.id === plan.id; return (<button key={plan.id} type="button" onClick={() => openPlanModal(plan.id)} className="group text-left"><div className={`relative h-full overflow-hidden rounded-[2rem] border p-7 transition duration-300 ${selected ? "border-cyan-400/30 bg-gradient-to-b from-cyan-400/[0.10] to-blue-500/[0.08] shadow-[0_0_60px_rgba(34,211,238,0.12)]" : "border-white/10 bg-white/[0.04] hover:border-cyan-400/20 hover:bg-white/[0.06]"}`}>{plan.id === "yearly" ? <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold text-slate-950">推荐</div> : null}<div className="mb-8 flex items-center justify-between pr-16"><div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ${selected ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-200" : "border border-white/10 bg-white/5 text-slate-200"}`}><Icon name={plan.icon} className="h-4 w-4" />{plan.badge}</div></div><h3 className="text-2xl font-semibold text-white">{plan.name}</h3><div className="mt-5 flex items-end gap-2"><span className="text-5xl font-semibold text-white">¥{plan.price}</span><span className="pb-2 text-sm text-slate-400">{plan.unit}</span></div><p className="mt-4 text-sm leading-6 text-slate-300">{plan.description}</p><div className="mt-6 grid gap-3">{plan.features.map((feature) => (<div key={feature} className="flex items-center gap-3 text-sm text-slate-200"><Icon name="check" className="h-4 w-4 text-cyan-300" />{feature}</div>))}</div><div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm"><p className="text-white">{plan.pointsLabel}</p><p className="mt-1 text-slate-400">{plan.recharge} · {plan.position}</p></div><div className="mt-6 inline-flex items-center text-sm font-medium text-cyan-300">点击查看生成数量参考<Icon name="arrowRight" className="ml-2 h-4 w-4" /></div></div></button>); })}</div></div></section>

      <section className="relative px-6 pb-20 sm:px-10 lg:px-20"><div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center backdrop-blur-xl md:p-10"><p className="text-sm tracking-[0.2em] text-cyan-300 uppercase">Manual</p><h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">想了解每个功能怎么用？</h2><p className="mx-auto mt-4 max-w-2xl text-slate-300">查看完整产品使用手册，了解文案生成、图片生成、AI 修图、AI 视频、积分规则和提示词写法。</p><button type="button" onClick={() => setPage("manual")} className="mt-7 inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-100">打开产品使用手册<Icon name="arrowRight" className="ml-2 h-4 w-4" /></button></div></section>
      <PlanModal open={modalOpen} onClose={() => setModalOpen(false)} plan={selectedPlan} />
    </>
  );
}

function ManualPage({ setPage }) {
  return (
    <section className="relative px-6 py-14 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.12] via-blue-500/[0.08] to-violet-500/[0.10] p-8 backdrop-blur-xl md:p-10">
          <button type="button" onClick={() => setPage("home")} className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">← 返回官网首页</button>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div><div className="mb-5 flex items-center gap-4"><ProductLogo className="h-16 w-16" /><div><p className="text-sm tracking-[0.25em] text-cyan-300 uppercase">Product Manual</p><h1 className="text-4xl font-semibold text-white md:text-5xl">织影 AI 使用手册</h1></div></div><p className="max-w-2xl text-lg leading-8 text-slate-300">这份手册面向普通用户、门店、电商、内容创作者和销售人员，帮助你快速理解如何使用织影 AI 完成文字、图片、修图和视频生成。</p></div>
            <div className="grid gap-3 sm:grid-cols-3">{modelStack.map((item) => (<div key={item.id} className="rounded-3xl border border-white/10 bg-slate-950/50 p-4"><Icon name={item.icon} className="h-5 w-5 text-cyan-300" /><p className="mt-3 text-xs text-slate-400">{item.label}</p><p className="mt-1 text-lg font-semibold text-white">{item.model}</p></div>))}</div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"><p className="mb-4 text-sm font-medium text-cyan-300">手册目录</p><div className="space-y-2">{manualSections.map((section) => (<a key={section.id} href={`#manual-${section.id}`} className="block rounded-2xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">{section.title}</a>))}</div></div></aside>
          <div className="space-y-6">
            {manualSections.map((section, index) => (<motion.article key={section.id} id={`manual-${section.id}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }} className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl md:p-8"><div className="mb-6 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"><Icon name={section.icon} className="h-5 w-5" /></div><h2 className="text-2xl font-semibold text-white">{section.title}</h2></div><ol className="space-y-4">{section.steps.map((step, stepIndex) => (<li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">{stepIndex + 1}</span><p className="text-sm leading-7 text-slate-300">{step}</p></li>))}</ol></motion.article>))}
            <div className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.08] p-6 text-sm leading-7 text-amber-100/90 backdrop-blur-xl"><h3 className="mb-2 text-lg font-semibold text-white">重要说明</h3><p>AI 生成结果可能存在随机性。建议用户把生成结果作为创作素材或初稿，再结合实际业务场景进行确认、修改和发布。涉及广告、医疗、金融、法律等场景时，请务必进行人工审核。</p></div>
            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.08] p-6 text-center backdrop-blur-xl"><h3 className="text-2xl font-semibold text-white">准备开始创作？</h3><p className="mx-auto mt-3 max-w-2xl text-slate-300">回到首页选择会员套餐，或先购买 29.9 元体验卡快速测试文字、图片和视频能力。</p><button type="button" onClick={() => setPage("home")} className="mt-6 inline-flex items-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-100">返回首页选择套餐<Icon name="arrowRight" className="ml-2 h-4 w-4" /></button></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <TechBackground />
      <FloatingParticles />
      <CursorGlow />
      <Nav page={page} setPage={setPage} />
      {page === "manual" ? <ManualPage setPage={setPage} /> : <HomePage setPage={setPage} />}
    </main>
  );
}
