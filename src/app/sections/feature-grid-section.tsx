import FeatureCard from "../components/feature-card";
import { FeatureCard_cids } from "../_cids";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block pt-26 max-md:pt-18" data-cid="n95" aria-labelledby="sponsors-label">
      <div className="w-220 block mx-auto max-md:w-[21.4375rem] md:max-lg:w-180" data-cid="n96">
        <h2 className="block text-color-002 text-[0.9375rem] font-medium leading-[1.4375rem] tracking-[-0.15px] text-center" data-cid="n97" data-component="heading" id="sponsors-label">
          Sponsored by
        </h2>
        <ul className="w-full h-[12.15rem] grid mt-4.5 rounded-[20px] gap-px grid-rows-[194.4px] overflow-hidden [list-style-type:none] list-outside bg-border shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:h-[23.125rem] max-md:grid-rows-[194.25px_174.688px] md:max-lg:h-[214.7px] md:max-lg:grid-rows-[214.7px] grid-cols-2 md:grid-cols-4" data-cid="n98">
          {features.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
        </ul>
        <div className="h-10 flex -mt-px justify-center max-md:h-9" data-cid="n123">
          <a className="h-10 flex relative pb-px px-4.5 rounded-br-[14px] rounded-bl-[14px] items-center gap-1.5 text-color-002 text-[0.9375rem] leading-[1.375rem] tracking-[-0.14px] bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--clr-1)_0px_10px_18px_-12px] [clip-path:inset(0px_-24px_-24px)] cursor-pointer max-md:h-9 max-md:px-3 max-md:gap-[0.3125rem] max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.12px] hover:bg-clr-95" data-cid="n124" data-component="button" href="https://github.com/sponsors/Leonxlnx" rel="noreferrer" target="_blank">
            {"Want your logo here? "}
            <b className="block text-foreground font-semibold hover:border-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:border-foreground focus:outline-foreground focus:[text-decoration-color:var(--foreground)]" data-cid="n125">
              Become a sponsor
            </b>
          </a>
        </div>
      </div>
    </section>
  );
}
