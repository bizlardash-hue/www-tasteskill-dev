import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("grid py-2 items-center gap-3 grid-cols-[auto_1fr_auto] max-md:gap-2.5 max-md:grid-rows-[52px]", styles.className)}>
      <span data-cid={cids[1]} className="h-11.5 block rounded-[7px] overflow-hidden bg-surface [clip-path:inset(0%_round_7px)] max-md:h-10">
        <img data-cid={cids[2]} className="w-full h-11.5 block max-w-full overflow-clip object-cover aspect-[auto_64/46] align-middle max-md:h-10" data-component="image" alt="" height="46" sizes="64px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="64" />
      </span>
      <span data-cid={cids[3]} className={cn("block min-w-0", styles.className2)}>
        <span data-cid={cids[4]} className={cn("overflow-hidden font-medium leading-[1.125rem] tracking-[-0.13px] line-clamp-2 max-md:h-[2.1125rem] max-md:leading-[1.0625rem]", styles.className3)}>
          {d.text}
        </span>
        <span data-cid={cids[5]} className="h-[17.3px] block mt-px overflow-hidden text-color-006 text-xs leading-[1.0625rem] whitespace-nowrap text-nowrap">
          D. Bollinger, Wikimedia
        </span>
      </span>
      <span data-cid={cids[6]} className="h-[1.4375rem] flex relative px-2 rounded-[7px] items-center text-color-008 text-[0.6875rem] font-bold leading-[1.0625rem] tracking-[0.11px] whitespace-nowrap text-nowrap bg-color-026 shadow-[var(--clr-38)_0px_0px_0px_1px_inset]">
        CC BY-SA
      </span>
    </div>
  );
}
