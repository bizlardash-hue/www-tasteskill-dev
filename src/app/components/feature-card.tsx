import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  imgSrc: string;
  srcSet?: string;
  label2: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <li data-cid={cids[0]} className="list-item bg-color-001">
      <a data-cid={cids[1]} className={cn("h-full flex relative pt-5.5 pb-6 px-5.5 flex-col items-start cursor-pointer max-md:pt-4.5 max-md:pb-5 max-md:px-4.5", styles.className)} data-component="link" href={d.href} rel="noreferrer" target="_blank">
        <img data-cid={cids[2]} className="w-10 h-10 block max-w-full p-1 rounded-[11px] overflow-clip object-contain aspect-[auto_40/40] align-middle text-clr-2 bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--clr-1)_0px_2px_8px_-4px] max-md:w-9 max-md:h-9 hover:transform-[none] focus:transform-[none]" data-component="image" alt="" height="40" src={d.imgSrc} srcSet={d.srcSet} width="40" />
        <span data-cid={cids[3]} className="block mt-4.5 text-[1.0625rem] font-semibold leading-[1.625rem] tracking-[-0.34px] max-md:mt-3.5 max-md:tracking-[-0.32px] max-md:[font-size:inherit] max-md:leading-[inherit]">
          {d.title}
        </span>
        <span data-cid={cids[4]} className="block mt-1 text-color-002 text-sm leading-[1.25rem] tracking-[-0.14px] max-md:tracking-[-0.13px]">
          {d.label2}
        </span>
        <svg data-cid={cids[5]} className="w-auto h-3.5 block absolute right-5.5 min-w-0 overflow-hidden align-middle text-color-018 max-md:right-4.5 focus:outline-clr-111 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" viewBox="0 0 14 14">
          <path d="M4.5 9.5 9.5 4.5M5.5 4.5h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </li>
  );
}
