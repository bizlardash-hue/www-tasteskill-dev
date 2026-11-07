import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, cids, styles }: { d: ListRow4Data; cids: string[]; styles: ListRow4Styles }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className={cn("inline relative text-primary text-[0.9375rem] leading-[1.375rem] cursor-pointer after:content-[''] after:block after:absolute after:top-[1.3125rem] after:-bottom-1 after:inset-x-0 after:h-px after:bg-primary after:transform-[matrix(0,0,0,1,0,0)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
