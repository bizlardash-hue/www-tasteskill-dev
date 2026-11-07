import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  href: string;
  target?: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, cids, styles }: { d: ListRow6Data; cids: string[]; styles: ListRow6Styles }) {
  return (
    <li data-cid={cids[0]} className="h-6 list-item">
      <a data-cid={cids[1]} className={cn("inline relative text-primary text-[0.9375rem] leading-[1.375rem] cursor-pointer after:content-[''] after:block after:absolute after:top-[1.3125rem] after:-bottom-1 after:inset-x-0 after:h-px after:bg-primary after:transform-[matrix(0,0,0,1,0,0)] hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]", styles.className)} data-component="link" href={d.href} rel="noreferrer" target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
