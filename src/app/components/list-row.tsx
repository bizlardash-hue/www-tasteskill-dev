import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("w-320 h-22 list-item absolute top-100 left-0 -mt-11 px-[3.125rem] [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-[5rem] font-semibold leading-22 tracking-[-2.8px] whitespace-nowrap text-nowrap origin-[640px_44px] pointer-events-none", styles.className)}>
      <span data-cid={cids[1]} className={cn("inline pointer-events-none 2xl:block 2xl:col-start-2 2xl:row-start-1", styles.className2)}>
        {d.text}
      </span>
      {" "}
      <span data-cid={cids[2]} className="w-px h-px block absolute overflow-hidden [clip-path:inset(50%)] pointer-events-none 2xl:min-w-0">
        {d.text2}
      </span>
      <span data-cid={cids[3]} className={cn("hidden tracking-[-0.8px] pointer-events-none", styles.className3)} aria-hidden="true">
        <span data-cid={cids[4]} className="inline text-color-008 pointer-events-none 2xl:font-semibold">
          {d.text3}
        </span>
        <span data-cid={cids[5]} className="inline text-clr-27 pointer-events-none">
          {" of 20"}
        </span>
      </span>
      <span data-cid={cids[6]} className={cn("hidden tracking-[-0.8px] pointer-events-none", styles.className4)} aria-hidden="true">
        {d.text4}
      </span>
    </li>
  );
}
