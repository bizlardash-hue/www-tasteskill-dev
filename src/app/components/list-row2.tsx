import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow2({ d, cids, styles }: { d: ListRow2Data; cids: string[]; styles: ListRow2Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("h-[74.7px] grid opacity-0 pt-[0.8125rem] pr-5.5 pb-[0.9375rem] pl-[1.0625rem] rounded-2xl items-baseline gap-x-2.5 grid-rows-[25.1875px_21.5px] [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-left bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px]", styles.className)}>
      <span data-cid={cids[1]} className="block row-start-1 row-end-[span_2] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem]" aria-hidden="true">
        {d.text}
      </span>
      <span data-cid={cids[2]} className="h-[1.575rem] block text-[1.3125rem] font-semibold leading-[1.5625rem] tracking-[-0.52px] whitespace-nowrap text-nowrap max-md:h-6 max-md:text-xl max-md:tracking-[-0.5px] max-md:leading-[inherit]">
        {d.text2}
      </span>
      {" "}
      <span data-cid={cids[3]} className={cn("block mt-0.5 col-start-2 text-color-002 text-[0.9375rem] leading-[1.25rem] tracking-[-0.07px] max-md:hidden", styles.className2)}>
        {d.text3}
      </span>
    </li>
  );
}
