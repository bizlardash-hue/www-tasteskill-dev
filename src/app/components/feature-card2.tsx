import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, cids, styles }: { d: FeatureCard2Data; cids: string[]; styles: FeatureCard2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("w-[13.625rem] h-[11.875rem] border-[1.01617px] border-solid border-surface-2 block absolute top-94 p-5 rounded-2xl text-center bg-surface-3 shadow-[var(--clr-46)_0px_8px_32px_0px] max-md:w-[14.125rem] max-md:h-40 max-md:border-[1.56156px] max-md:pt-4.5 max-md:px-4.5 max-md:pb-0 md:max-lg:border-[1.39683px] 2xl:border-[1.00687px]", styles.className)}>
      <b data-cid={cids[1]} className={cn("h-8 block text-[1.625rem] font-bold leading-8", styles.className2)}>
        {d.text}
      </b>
      <div data-cid={cids[2]} className="block relative mt-2">
        <div data-cid={cids[3]} className="block">
          <h4 data-cid={cids[4]} className={cn("block text-[1.0625rem] font-bold leading-5.5", styles.className3)} data-component="heading">
            {d.title}
          </h4>
          <p data-cid={cids[5]} className="block mt-1.5 text-color-014 text-sm leading-[1.25rem]">
            {d.description}
          </p>
        </div>
      </div>
    </div>
  );
}
