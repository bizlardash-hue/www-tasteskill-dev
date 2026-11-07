import Icon35 from "../svgs/svg-icon35";
import Icon15 from "../svgs/svg-icon15";
import Logo3 from "../components/logo3";
import { Logo3_cids } from "../_cids";
import { Logo3_styles } from "../_styles";
import { logos2 as logosContent, ctaSection2Content } from "../content";
/** Cta section. */
export default function CtaSection2({ logos = logosContent, content = ctaSection2Content } = {}) {
  return (
    <section className="block relative pt-36 max-md:pt-26" data-cid="n1123" aria-labelledby="support-title" id="support">
      <div className="w-220 block mx-auto max-md:w-[21.4375rem] md:max-lg:w-180" data-cid="n1124">
        <div className="block max-w-220 mb-10 text-center max-md:mb-7" data-cid="n1125">
          <span className="inline-flex mb-3.5 items-center gap-[0.4375rem] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[-0.15px]" data-cid="n1126">
            <Icon35 cid={"n1127"} />
            Open source
          </span>
          <h2 className="block text-[2.75rem] font-semibold leading-[3rem] tracking-[-1.54px] text-balance max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-1.05px]" data-cid="n1128" data-component="heading" id="support-title">
            {content.title}
          </h2>
          <p className="h-[52.7px] block max-w-136 mt-4 mx-auto text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.17px] text-pretty max-md:leading-[1.5625rem] max-md:tracking-[-0.16px] max-md:h-auto max-md:[font-size:inherit]" data-cid="n1129">
            {"Taste Skill is free and MIT licensed. Sponsors pay for the time that goes into it. Built something with it? Tag "}
            <a className="inline pb-px text-foreground font-medium [background-size:0%_1px,_100%_1px] [background-position:0px_100%,_0px_100%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground)), linear-gradient(var(--clr-84), var(--clr-84))" }} data-cid="n1130" data-component="link" href={content.actions[0].href} rel="noreferrer" target="_blank">
              {content.actions[0].label}
            </a>
            {" on X."}
          </p>
          <div className="h-11 flex mt-7 justify-center" data-cid="n1131">
            <a className="h-11 flex px-4.5 rounded-[11px] justify-center items-center gap-2 text-color-001 text-[0.9375rem] font-medium leading-[1.4375rem] tracking-[-0.15px] whitespace-nowrap text-nowrap bg-foreground cursor-pointer hover:bg-clr-100" data-cid="n1132" data-component="button" href={content.actions[1].href} rel="noreferrer" target="_blank">
              <Icon15 cid={"n1133"} />
              {content.actions[1].label}
            </a>
          </div>
        </div>
        <div className="block mt-12 pt-6.5 pb-7 px-7 rounded-3xl bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:py-5 max-md:px-4" data-cid="n1134">
          <div className="flex flex-wrap justify-between items-baseline gap-y-2 gap-x-5" data-cid="n1135">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.625rem] tracking-[-0.34px]" data-cid="n1136" data-component="heading">
              Community sponsors
            </h3>
            <span className="block text-color-006 text-sm leading-[1.3125rem]" data-cid="n1137">
              Thank you to the 23 people keeping it open
            </span>
          </div>
          <ul className="flex mt-5 flex-wrap gap-2 [list-style-type:none] list-outside" data-cid="n1138">
            {logos.map((d, i) => <Logo3 key={i} d={d} cids={Logo3_cids[i]} styles={Logo3_styles[i]} />)}
          </ul>
        </div>
        <h3 className="block mt-10 text-[1.0625rem] font-semibold leading-[1.625rem] tracking-[-0.34px] text-center" data-cid="n1231" data-component="heading">
          Open source supporters
        </h3>
        <div className="w-full h-[13.4375rem] grid mt-4 rounded-[20px] gap-px grid-cols-[439.5px_439.5px] grid-rows-[215px] overflow-hidden bg-border shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:h-[394.9px] max-md:grid-cols-[379.3px] max-md:grid-rows-[204.938px_188.938px] md:max-lg:grid-cols-[395.281px_323.719px]" data-cid="n1232">
          <div className="flex pt-6.5 pb-7 px-7 flex-col gap-4.5 bg-color-001 max-md:py-5.5 max-md:px-5" data-cid="n1233">
            <a className="w-[5.35rem] h-10 flex items-center gap-3 text-[1.0625rem] font-semibold leading-[1.625rem] tracking-[-0.34px] cursor-pointer" data-cid="n1234" data-component="link" href={content.actions[2].href} rel="noreferrer" target="_blank">
              <img className="w-10 h-10 block max-w-full rounded-[11px] overflow-clip object-contain aspect-[auto_40/40] align-middle hover:transform-[none] focus:transform-[none]" data-cid="n1235" data-component="image" alt="" height="40" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="40" />
              {content.actions[2].label}
            </a>
            <img className="w-[21.8125rem] h-15 block max-w-full -my-2.5 -ml-2.5 self-start overflow-clip aspect-[auto_326/56] align-middle max-lg:w-[21.1875rem]" data-cid="n1236" data-component="image" alt="Kimi Open Source Friends 2026" height="56" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="326" />
            <p className="h-[2.8125rem] block text-color-002 text-[0.9375rem] leading-[1.4375rem]" data-cid="n1237">
              <a className="inline pb-px text-foreground font-medium [background-size:0%_1px,_100%_1px] [background-position:0px_100%,_0px_100%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground)), linear-gradient(var(--clr-84), var(--clr-84))" }} data-cid="n1238" data-component="link" href={"https://platform.kimi.ai/?track_id=track-20f0d64bcaba419bb425a3e8c306f65d&aff=taste-skill"} rel="noopener noreferrer" target="_blank">
                Get a Kimi API key
              </a>
              . Taste Skill users get 10% bonus API credits on their first purchase.
            </p>
          </div>
          <div className="flex pt-6.5 pb-7 px-7 flex-col gap-4.5 bg-color-001 max-md:py-5.5 max-md:px-5" data-cid="n1239">
            <a className="w-[6.5rem] h-10 flex items-center gap-3 text-[1.0625rem] font-semibold leading-[1.625rem] tracking-[-0.34px] cursor-pointer" data-cid="n1240" data-component="link" href={content.actions[3].href} rel="noreferrer" target="_blank">
              <img className="w-10 h-10 block max-w-full rounded-[11px] overflow-clip object-contain aspect-[auto_40/40] align-middle hover:transform-[none] focus:transform-[none]" data-cid="n1241" data-component="image" alt="" height="40" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="40" />
              {content.actions[3].label}
            </a>
            <img className="w-60 h-6 block max-w-full self-start overflow-clip aspect-[auto_240/24] align-middle" data-cid="n1242" data-component="image" alt="Vercel Open Source Program 2026" height="24" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="240" />
            <p className="h-[2.8125rem] block mt-4 text-color-002 text-[0.9375rem] leading-[1.4375rem] max-md:mt-0" data-cid="n1243">
              {"Part of the "}
              <a className="inline pb-px text-foreground font-medium [background-size:0%_1px,_100%_1px] [background-position:0px_100%,_0px_100%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground)), linear-gradient(var(--clr-84), var(--clr-84))" }} data-cid="n1244" data-component="link" href={content.actions[4].href} rel="noreferrer" target="_blank">
                {content.actions[4].label}
              </a>
              , which hosts this site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
