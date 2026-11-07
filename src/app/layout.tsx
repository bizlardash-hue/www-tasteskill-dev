import "./globals.css";
import "./uirender.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Taste Skill | The design skill for AI coding agents",
  "description": "Taste Skill is an open-source agent skill that gives Claude Code, Codex and Cursor an art direction, real pictures and a real-browser check, so the pages they build look designed, not generated.",
  "keywords": [
    "Taste Skill",
    "tasteskill",
    "anti-slop",
    "anti-slop frontend skill",
    "design-taste-frontend",
    "AI frontend",
    "vibecoding",
    "cursor rules",
    "SKILL.md",
    "AI coding agent",
    "frontend design system",
    "claude code",
    "codex",
    "gemini CLI",
    "premium AI frontend prompt framework",
    "Claude Code design system skill",
    "GitHub Copilot UI UX optimization",
    "stop AI generating boring frontends",
    "AI design rules",
    "cursor AI design improvement"
  ],
  "robots": "index, follow",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Taste Skill | The design skill for AI coding agents",
    "description": "An open-source agent skill that gives coding agents an art direction, real pictures and a real-browser check instead of generic AI pages.",
    "type": "website",
    "siteName": "Taste Skill",
    "url": "/",
    "images": [
      "https://www.tasteskill.dev/og-image.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Taste Skill | The design skill for AI coding agents",
    "description": "An open-source agent skill that gives coding agents an art direction, real pictures and a real-browser check instead of generic AI pages.",
    "creator": "@lexnlin",
    "images": [
      "https://www.tasteskill.dev/og-image.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "https://www.tasteskill.dev/favicon.webp",
        "type": "image/webp",
        "sizes": "48x48"
      },
      {
        "url": "https://www.tasteskill.dev/favicon-32.webp",
        "type": "image/webp",
        "sizes": "32x32"
      },
      {
        "url": "https://www.tasteskill.dev/icon.png?icon.170q~6fb6lkbt.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ],
    "apple": [
      {
        "url": "https://www.tasteskill.dev/apple-touch-icon.webp",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "https://www.tasteskill.dev/manifest.json"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#140a05"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Taste Skill\",\"url\":\"", "\",\"applicationCategory\":\"DeveloperApplication\",\"operatingSystem\":\"All\",\"description\":\"An agent skill that gives coding agents an art direction, real pictures and a real-browser check instead of generic AI pages.\",\"author\":{\"@type\":\"Person\",\"name\":\"Leon Lin\",\"url\":\"https://x.com/lexnlin\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"downloadUrl\":\"https://github.com/Leonxlnx/taste-skill\",\"softwareVersion\":\"2.1.5\",\"license\":\"https://opensource.org/licenses/MIT\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Taste Skill\",\"url\":\"", "\",\"description\":\"The design skill for AI coding agents.\",\"publisher\":{\"@type\":\"Person\",\"name\":\"Leon Lin\",\"url\":\"https://x.com/lexnlin\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-screen block overflow-x-clip text-foreground [font-family:'Google_Sans_Flex',_ui-sans-serif,_system-ui,_-apple-system,_'Segoe_UI',_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
