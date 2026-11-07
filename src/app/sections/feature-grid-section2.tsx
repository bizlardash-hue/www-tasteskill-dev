import Icon34 from "../svgs/svg-icon34";
import FeatureGridItem from "../components/feature-grid-item";
import { features2 as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection2({ features = featuresContent } = {}) {
  return (
    <section className="block relative pt-36 max-md:pt-26" data-cid="n1089" aria-labelledby="questions-title" id="questions">
      <div className="w-220 block mx-auto max-md:w-[21.4375rem] md:max-lg:w-180" data-cid="n1090">
        <div className="block max-w-220 mb-10 text-center max-md:mb-7" data-cid="n1091">
          <span className="inline-flex mb-3.5 items-center gap-[0.4375rem] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[-0.15px]" data-cid="n1092">
            <Icon34 cid={"n1093"} />
            Questions
          </span>
          <h2 className="block text-[2.75rem] font-semibold leading-[3rem] tracking-[-1.54px] text-balance max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-1.05px]" data-cid="n1094" data-component="heading" id="questions-title">
            Common questions.
          </h2>
        </div>
        <div className="w-full h-[32.0375rem] grid rounded-[20px] gap-px grid-rows-[154.688px_177.938px_177.938px] overflow-hidden bg-border shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:h-[64.725rem] max-md:grid-rows-[167.938px_144.688px_191.188px_167.625px_167.938px_191.188px] md:max-lg:h-[582.3px] md:max-lg:grid-rows-[177.938px_201.188px_201.188px] grid-cols-1 md:grid-cols-2" data-cid="n1095">
          {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
        </div>
      </div>
    </section>
  );
}
