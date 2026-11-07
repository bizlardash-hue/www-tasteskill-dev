import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("block relative text-color-014 cursor-pointer after:content-[''] after:block after:absolute after:top-[26.5px] after:-bottom-[0.3125rem] after:inset-x-0 after:h-px after:bg-color-014 after:transform-[matrix(0,0,0,1,0,0)] max-md:after:top-auto max-md:after:w-auto max-md:after:transform-[none] max-md:after:origin-[initial]", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
