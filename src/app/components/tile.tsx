import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = Record<string, never>;
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <span data-cid={cids[0]} className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }}>
      <span data-cid={cids[1]} className={cn("block", styles.className)}>
        <span data-cid={cids[2]} className="block">
          0
        </span>
        <span data-cid={cids[3]} className="block">
          1
        </span>
        <span data-cid={cids[4]} className="block">
          2
        </span>
        <span data-cid={cids[5]} className="block">
          3
        </span>
        <span data-cid={cids[6]} className="block">
          4
        </span>
        <span data-cid={cids[7]} className="block">
          5
        </span>
        <span data-cid={cids[8]} className="block">
          6
        </span>
        <span data-cid={cids[9]} className="block">
          7
        </span>
        <span data-cid={cids[10]} className="block">
          8
        </span>
        <span data-cid={cids[11]} className="block">
          9
        </span>
        <span data-cid={cids[12]} className="block">
          0
        </span>
        <span data-cid={cids[13]} className="block">
          1
        </span>
        <span data-cid={cids[14]} className="block">
          2
        </span>
        <span data-cid={cids[15]} className="block">
          3
        </span>
        <span data-cid={cids[16]} className="block">
          4
        </span>
        <span data-cid={cids[17]} className="block">
          5
        </span>
        <span data-cid={cids[18]} className="block">
          6
        </span>
        <span data-cid={cids[19]} className="block">
          7
        </span>
        <span data-cid={cids[20]} className="block">
          8
        </span>
        <span data-cid={cids[21]} className="block">
          9
        </span>
      </span>
    </span>
  );
}
