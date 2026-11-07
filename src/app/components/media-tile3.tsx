import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  kind?: string;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile3({ d, cids, styles }: { d: MediaTile3Data; cids: string[]; styles: MediaTile3Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("h-[1.9375rem] min-h-[1.9375rem] flex items-center gap-2.5", styles.className)}>
      <span data-cid={cids[1]} className="w-[0.9375rem] h-[0.9375rem] block relative shrink-0">
        <span data-cid={cids[2]} className={cn("w-[0.9375rem] block absolute top-0 text-muted-foreground", styles.className2)}>
          <svg data-cid={cids[3]} className={cn("h-[0.9375rem] block shrink-0 overflow-hidden align-middle", styles.className3)} data-component="icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" focusable="false">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeOpacity="0.22" strokeWidth="2.4" />
            <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </span>
        <svg data-cid={cids[4]} className={cn("w-[0.9375rem] h-[0.9375rem] block absolute shrink-0 overflow-hidden align-middle text-color-016", styles.className4)} data-component={d.kind} aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" focusable="false">
          <path d="M5 12l5 5l10-10" />
        </svg>
      </span>
      <span data-cid={cids[5]} className={cn("h-[19.5px] block whitespace-nowrap text-nowrap max-md:h-auto", styles.className5)}>
        {d.text}
      </span>
      <span data-cid={cids[6]} className={cn("h-4.5 block pl-3 text-muted text-xs leading-4.5 whitespace-nowrap text-nowrap max-md:hidden", styles.className6)}>
        {d.text2}
      </span>
    </li>
  );
}
