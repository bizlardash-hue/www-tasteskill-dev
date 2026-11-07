import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = Record<string, never>;
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <img data-cid={cids[0]} className={cn("w-[24.6875rem] h-[14.3125rem] block max-w-full overflow-clip aspect-[auto_2400/1388] align-middle max-md:w-[17.6875rem] max-md:h-41 md:max-lg:w-147 md:max-lg:h-85", styles.className)} data-component="image" alt="" height="1388" sizes="440px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="2400" />
  );
}
