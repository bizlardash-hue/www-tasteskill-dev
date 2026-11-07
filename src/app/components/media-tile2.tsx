import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids, styles }: { d: MediaTile2Data; cids: string[]; styles: MediaTile2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("grid py-2 items-center gap-3 grid-rows-[35.2px] grid-cols-[1fr_auto]", styles.className)}>
      <span data-cid={cids[1]} className={cn("block min-w-0", styles.className2)}>
        <span data-cid={cids[2]} className="inline-block relative opacity-60">
          <code data-cid={cids[3]} className="inline [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-xs font-medium leading-4.5">
            {d.text}
          </code>
          <i data-cid={cids[4]} className={cn("h-[1.5px] block absolute top-[10.5px] -left-0.5 rounded-[1px] italic bg-foreground max-md:top-2.5", styles.className3)} />
        </span>
        <span data-cid={cids[5]} className={cn("h-[0.9375rem] overflow-hidden text-color-002 text-xs leading-[0.9375rem] line-clamp-2", styles.className4)}>
          {d.text2}
        </span>
      </span>
      <span data-cid={cids[6]} className="grid justify-items-end grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[2.768] max-md:aspect-[2.769]">
        <span data-cid={cids[7]} className={cn("h-[1.4375rem] flex opacity-0 px-2 rounded-md items-center col-start-1 row-start-1 text-[0.6875rem] font-semibold leading-[1.0625rem] whitespace-nowrap text-nowrap transform-[matrix3d(1,0,0,0,0,0,-1,0.00333333,0,1,0,0,0,0,0,1)]", styles.className5)}>
          {d.text3}
        </span>
        <span data-cid={cids[8]} className="h-[1.4375rem] flex px-2 rounded-md items-center gap-1 col-start-1 row-start-1 text-color-011 text-[0.6875rem] font-semibold leading-[1.0625rem] whitespace-nowrap text-nowrap bg-surface-6 transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.00333333,0,0,0,1)] origin-[31.8359px_11.5px] max-md:origin-[31.8438px_11.5px]">
          <svg data-cid={cids[9]} className="w-auto h-[0.8125rem] block shrink-0 overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 16 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3.5 8.5 3 3 6-7" />
          </svg>
          Fixed
        </span>
      </span>
    </div>
  );
}
