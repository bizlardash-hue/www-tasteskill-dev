import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  href: string;
  label: string;
  imgSrc: string;
  label2: string;
};
/** A logo. */
export default function Logo3({ d, cids, styles }: { d: Logo3Data; cids: string[]; styles: Logo3Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item", styles.className)}>
      <a data-cid={cids[1]} className={cn("h-9.5 inline-flex max-w-60 pr-[0.8125rem] pl-1 rounded-[999px] items-center gap-2 text-color-002 text-sm font-medium leading-[1.25rem] bg-background shadow-[var(--border)_0px_0px_0px_1px_inset] cursor-pointer", styles.className2)} data-component="link" href={d.href} rel="noreferrer" target="_blank" title={d.label}>
        <img data-cid={cids[2]} className="w-7.5 h-7.5 block max-w-full rounded-[999px] overflow-clip object-cover aspect-[auto_30/30] align-middle text-clr-2 bg-surface" data-component="avatar" alt="" height="30" src={d.imgSrc} width="30" />
        <span data-cid={cids[3]} className={cn("block overflow-hidden whitespace-nowrap text-nowrap", styles.className3)}>
          {d.label2}
        </span>
      </a>
    </li>
  );
}
