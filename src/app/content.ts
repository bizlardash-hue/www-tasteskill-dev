// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/guide", label: "Guide" },
    { href: "/changelog", label: "Changelog" },
    { href: "/blog", label: "Blog" }
];

export type TextLink2DataItem = {
  href: string;
  label: string;
};
export const textLink2Data: TextLink2DataItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/guide", label: "Guide" },
    { href: "/changelog", label: "Changelog" },
    { href: "/blog", label: "Blog" }
];

export type FeaturesItem = {
  href: string;
  imgSrc: string;
  srcSet?: string;
  label2: string;
  title: string;
};
export const features: FeaturesItem[] = [
    { href: "https://interfaces.dev/?utm_source=tasteskill&utm_medium=sponsorship", imgSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", srcSet: "/assets/cloned/images/39c2d3d4b5bf.avif 1x", label2: "A design engineering magazine by Jakub Krehel", title: "Interfaces" },
    { href: "https://reactbits.dev/", imgSrc: "/assets/cloned/svg/c75b09b9d916.svg", label2: "Animated React components for creative interfaces", title: "React Bits" },
    { href: "https://img.ly/", imgSrc: "/assets/cloned/svg/f5108cec7cb9.svg", label2: "CreativeEditor SDK for photo, video and design", title: "IMG.LY" },
    { href: "https://www.sent.dm/", imgSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", srcSet: "/assets/cloned/images/f3ba0cc631b4.avif 1x", label2: "Messaging APIs for SMS, WhatsApp and RCS", title: "Sent.dm" }
];

export type LogosItem = {
  href: string;
  label: string;
};
export const logos: LogosItem[] = [
    { href: "https://claude.com/product/claude-code", label: "Claude Code" },
    { href: "https://openai.com/codex/", label: "Codex" },
    { href: "https://cursor.com/", label: "Cursor" },
    { href: "https://opencode.ai/", label: "OpenCode" },
    { href: "https://geminicli.com/", label: "Gemini CLI" },
    { href: "https://antigravity.google/", label: "Antigravity" }
];

export type Features2Item = {
  variant: string;
  title: string;
  description: string;
};
export const features2: Features2Item[] = [
    { variant: "what-does-the-skill-need", title: "What does the skill need?", description: "Node 22 or newer and Chrome, Edge or Chromium. It installs nothing and uses no API keys; it needs the internet only to find pictures." },
    { variant: "how-long-does-a-build-take", title: "How long does a build take?", description: "Roughly 30 to 45 minutes and a few hundred thousand tokens, including up to three rounds of fixing its own screenshots." },
    { variant: "where-do-the-pictures-come-from", title: "Where do the pictures come from?", description: "Open collections such as Wikimedia Commons, Openverse and the Met. Only public domain, CC0, CC BY and CC BY-SA, credited on the page. Swap in your own when you have them." },
    { variant: "does-it-work-with-react-vue-svelte-or-plai", title: "Does it work with React, Vue, Svelte or plain HTML?", description: "Yes. The rules are about design, not a framework, and a redesign keeps the stack you already have." },
    { variant: "is-it-for-dashboards-and-app-screens", title: "Is it for dashboards and app screens?", description: "Yes, since v2.1. Admin views, settings and dashboards get their own route: a style dealt from real product screens and app-specific checks." },
    { variant: "where-did-the-older-skills-go", title: "Where did the older skills go?", description: "Soft, minimalist, brutalist, gpt-taste, Stitch, v1 and v2 (experimental) live in" }
];

export type Logos2Item = {
  href: string;
  label: string;
  imgSrc: string;
  label2: string;
};
export const logos2: Logos2Item[] = [
    { href: "https://github.com/dnakov", label: "dnakov on GitHub", imgSrc: "/assets/cloned/images/1f5da71f659b.png", label2: "dnakov" },
    { href: "https://github.com/AkramReshad", label: "AkramReshad on GitHub", imgSrc: "/assets/cloned/images/699362f6d977.png", label2: "AkramReshad" },
    { href: "https://github.com/ajmalaksar25", label: "ajmalaksar25 on GitHub", imgSrc: "/assets/cloned/images/48aeafe24ac6.png", label2: "ajmalaksar25" },
    { href: "https://github.com/krikkkk", label: "krikkkk on GitHub", imgSrc: "/assets/cloned/images/0fbb8578898c.png", label2: "krikkkk" },
    { href: "https://github.com/navanchauhan", label: "navanchauhan on GitHub", imgSrc: "/assets/cloned/images/38b37a96966b.png", label2: "navanchauhan" },
    { href: "https://github.com/robinebers", label: "robinebers on GitHub", imgSrc: "/assets/cloned/images/f113a55f851b.png", label2: "robinebers" },
    { href: "https://github.com/JKc66", label: "JKc66 on GitHub", imgSrc: "/assets/cloned/images/96fb0cc521b2.png", label2: "JKc66" },
    { href: "https://github.com/u2393696078-rgb", label: "u2393696078-rgb on GitHub", imgSrc: "/assets/cloned/images/46bae40404bd.png", label2: "u2393696078-rgb" },
    { href: "https://github.com/a-human-created-this", label: "a-human-created-this on GitHub", imgSrc: "/assets/cloned/images/ba1899365010.png", label2: "a-human-created-this" },
    { href: "https://github.com/AtharvaJaiswal005", label: "AtharvaJaiswal005 on GitHub", imgSrc: "/assets/cloned/images/66204a00bd1e.png", label2: "AtharvaJaiswal005" },
    { href: "https://github.com/ghughes7", label: "ghughes7 on GitHub", imgSrc: "/assets/cloned/images/41ec972c9eb2.png", label2: "ghughes7" },
    { href: "https://github.com/mccun934", label: "mccun934 on GitHub", imgSrc: "/assets/cloned/images/61a38fdfc1a2.png", label2: "mccun934" },
    { href: "https://github.com/techmedic5", label: "techmedic5 on GitHub", imgSrc: "/assets/cloned/images/ff85c5e984a2.png", label2: "techmedic5" },
    { href: "https://github.com/bytewerk-dev", label: "bytewerk-dev on GitHub", imgSrc: "/assets/cloned/images/77bac18a246d.png", label2: "bytewerk-dev" },
    { href: "https://github.com/LuisGot", label: "LuisGot on GitHub", imgSrc: "/assets/cloned/images/aac0110f90ca.png", label2: "LuisGot" },
    { href: "https://github.com/oskar-collab", label: "oskar-collab on GitHub", imgSrc: "/assets/cloned/images/d84524ffe368.png", label2: "oskar-collab" },
    { href: "https://github.com/denvit", label: "denvit on GitHub", imgSrc: "/assets/cloned/images/b80438ce74a3.png", label2: "denvit" },
    { href: "https://github.com/onedollarstock", label: "onedollarstock on GitHub", imgSrc: "/assets/cloned/images/5c336043132b.png", label2: "onedollarstock" },
    { href: "https://github.com/KANA-33", label: "KANA-33 on GitHub", imgSrc: "/assets/cloned/images/78ecb884ae11.png", label2: "KANA-33" },
    { href: "https://github.com/emilkowalski", label: "emilkowalski on GitHub", imgSrc: "/assets/cloned/images/299e30c3a4e9.png", label2: "emilkowalski" },
    { href: "https://github.com/AnthonyLiuVa", label: "AnthonyLiuVa on GitHub", imgSrc: "/assets/cloned/images/2f8d72876971.png", label2: "AnthonyLiuVa" },
    { href: "https://github.com/Wolfy18", label: "Wolfy18 on GitHub", imgSrc: "/assets/cloned/images/536f95ab33f8.png", label2: "Wolfy18" },
    { href: "https://github.com/Gigslol", label: "Gigslol on GitHub", imgSrc: "/assets/cloned/images/c909b10543f4.png", label2: "Gigslol" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/docs", label: "Docs" },
    { href: "/guide", label: "Guide" },
    { href: "/changelog", label: "Changelog" },
    { href: "/blog", label: "Blog" }
];

export type ListRow5DataItem = {
  href: string;
  label: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "https://github.com/Leonxlnx/taste-skill", label: "GitHub" },
    { href: "https://github.com/sponsors/Leonxlnx", label: "Sponsor" },
    { href: "https://tastecode.dev/", label: "TasteCode" },
    { href: "https://github.com/Leonxlnx/taste-skill-classics", label: "Classic skills" }
];

export type ListRow6DataItem = {
  href: string;
  target?: string;
  label: string;
};
export const listRow6Data: ListRow6DataItem[] = [
    { href: "https://x.com/lexnlin", target: "_blank", label: "@lexnlin on X" },
    { href: "https://x.com/blueemi99", target: "_blank", label: "@blueemi99 on X" },
    { href: "mailto:hello@tasteskill.dev", label: "Email the team" }
];

export type CtaSectionContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSectionContent = {
  title?: string;
  actions: CtaSectionContentAction[];
};
export const ctaSectionContent: CtaSectionContent = {
  "title": "Taste Skill as a desktop app.",
  "actions": [
    {
      "label": "Download TasteCode",
      "href": "https://tastecode.dev/"
    },
    {
      "label": "Source",
      "href": "https://github.com/Leonxlnx/tastecode"
    }
  ]
};

export type CtaSection2ContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSection2Content = {
  title?: string;
  actions: CtaSection2ContentAction[];
};
export const ctaSection2Content: CtaSection2Content = {
  "title": "Support Taste Skill.",
  "actions": [
    {
      "label": "@lexnlin",
      "href": "https://x.com/lexnlin"
    },
    {
      "label": "Sponsor on GitHub",
      "href": "https://github.com/sponsors/Leonxlnx"
    },
    {
      "label": "Kimi",
      "href": "https://www.kimi.com/"
    },
    {
      "label": "Vercel",
      "href": "https://vercel.com/open-source-program"
    },
    {
      "label": "Vercel Open Source Program",
      "href": "https://vercel.com/open-source-program"
    }
  ]
};

