import type { TextLink4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink4Data = {
  ariaselected: string;
  id: string;
  label: string;
};
/** A text link. */
export default function TextLink4({ d, cids, styles }: { d: TextLink4Data; cids: string[]; styles: TextLink4Styles }) {
  return (
    <button data-cid={cids[0]} className={cn("h-8.5 block px-3.5 rounded-[10px] shrink-0 text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] text-center cursor-pointer", styles.className)} data-component="button" aria-controls="install-panel" aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
      {d.label}
    </button>
  );
}
