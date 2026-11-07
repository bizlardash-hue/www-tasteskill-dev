import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  ariacurrent?: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow3({ d, cids, styles }: { d: ListRow3Data; cids: string[]; styles: ListRow3Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item relative py-3 pl-5 max-lg:px-2 max-lg:col-start-1 max-lg:row-start-1 max-lg:py-0", styles.className)}>
      <span data-cid={cids[1]} className={cn("w-0.5 block absolute left-0 rounded-xs bg-color-017 max-lg:hidden", styles.className2)} aria-hidden="true">
        <i data-cid={cids[2]} className={cn("w-0.5 block absolute top-0 left-0 rounded-xs italic bg-color-015 transform-[matrix(1,0,0,0,0,0)] origin-[1px_0px]", styles.className3)} />
      </span>
      <button data-cid={cids[3]} className={cn("w-full block text-left cursor-pointer", styles.className4)} data-component="button" aria-current={d.ariacurrent} type="button">
        <span data-cid={cids[4]} className={cn("block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]", styles.className5)}>
          {d.label}
        </span>
      </button>
      <span data-cid={cids[5]} className={cn("w-70 block absolute top-[2.1875rem] left-5 pt-1.5 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.15px] text-pretty max-md:w-[20.4375rem] max-md:leading-[1.375rem] max-md:tracking-[-0.14px] max-lg:h-auto max-lg:static max-lg:top-auto max-lg:left-auto max-lg:[clip-path:initial] md:max-lg:w-156", styles.className6)}>
        {d.text}
      </span>
    </li>
  );
}
