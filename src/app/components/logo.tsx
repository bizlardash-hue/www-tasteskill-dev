import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  label: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <li data-cid={cids[0]} className="list-item bg-color-001">
      <a data-cid={cids[1]} className={cn("h-[98.3px] flex pt-5 pb-4.5 px-2 flex-col items-center gap-2.5 text-color-002 text-sm font-medium leading-[1.25rem] tracking-[-0.13px] text-center cursor-pointer hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]", styles.className)} data-component="link" href={d.href} rel="noreferrer" target="_blank">
        <img data-cid={cids[2]} className={cn("w-7.5 h-7.5 block max-w-full overflow-clip object-contain aspect-[auto_30/30] align-middle hover:transform-[none] focus:transform-[none]", styles.className2)} data-component="image" alt="" height="30" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="30" />
        {d.label}
      </a>
    </li>
  );
}
