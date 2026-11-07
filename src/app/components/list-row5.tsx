import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, cids, styles }: { d: ListRow5Data; cids: string[]; styles: ListRow5Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item", styles.className)}>
      <a data-cid={cids[1]} className={cn("inline relative text-primary text-[0.9375rem] leading-[1.375rem] cursor-pointer after:content-[''] after:block after:absolute after:top-[1.3125rem] after:-bottom-1 after:inset-x-0 after:h-px after:bg-primary after:transform-[matrix(0,0,0,1,0,0)] hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]", styles.className2)} data-component="link" href={d.href} rel="noreferrer" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
