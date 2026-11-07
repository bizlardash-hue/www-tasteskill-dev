import Icon12 from "../svgs/svg-icon12";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import FeatureCard2, { type FeatureCard2Data } from "../components/feature-card2";
import { ListRow3_cids, FeatureCard2_cids } from "../_cids";
import { ListRow3_styles, FeatureCard2_styles } from "../_styles";
const ListRow3_data: ListRow3Data[] = [
    { ariacurrent: "step", label: "The default", text: "Purple gradient, emoji, gradient text and three glass cards. The page every agent ships." },
    { label: "One palette", text: "The gradient goes. A warm neutral and one dark accent carry the whole page." },
    { label: "Real type", text: "Copy that says something, a tighter headline, and no emoji doing the talking." },
    { label: "Layout with intent", text: "Left-aligned hierarchy and a real product preview instead of three filler cards." },
    { label: "The last 10%", text: "A note under the button, real tags in the preview, a little depth where it helps. Now it looks designed." }
];
const FeatureCard2_data: FeatureCard2Data[] = [
    { text: "⚡", title: "Lightning Fast", description: "Experience blazing fast performance like never before." },
    { text: "🔒", title: "Super Secure", description: "Your data is protected with enterprise-grade security." },
    { text: "🎨", title: "Beautiful Design", description: "A stunning interface that you will absolutely love." }
];
/** Default To Designed section. */
export default function DefaultToDesignedSection({ listRow3Data = ListRow3_data, featureCard2Data = FeatureCard2_data } = {}) {
  return (
    <section className="h-800 block relative mt-10 px-6 max-md:h-609 max-md:px-4 md:max-lg:h-1024 2xl:h-1080" data-cid="n732" aria-labelledby="showcase-title">
      <div className="h-200 grid sticky top-0 pt-18 pb-6 items-center grid-rows-[704px] justify-items-center overflow-clip grid-cols-[minmax(0,_1fr)] max-md:h-203 max-md:pt-7 max-md:pb-5 max-md:grid-rows-[764px] md:max-lg:h-256 md:max-lg:pt-16 md:max-lg:pb-4 md:max-lg:grid-rows-[944px] 2xl:h-270 2xl:grid-rows-[984px]" data-cid="n733">
        <div className="w-full h-[36.3375rem] grid max-w-310 items-center gap-14 grid-cols-[300px_876px] grid-rows-[581.4px] max-md:h-[691.7px] max-lg:max-w-160 max-lg:gap-5 max-md:grid-rows-[101.281px_426.25px_124.188px] max-lg:grid-cols-1 md:max-lg:h-[38.0875rem] md:max-lg:grid-rows-[68.8906px_396.578px_103.938px] 2xl:h-[586.3px] 2xl:grid-cols-[300px_884px] 2xl:grid-rows-[586.3px]" data-cid="n734">
          <div className="h-[29.7625rem] block" data-cid="n735">
            <div className="block max-w-220 mb-7 text-left max-lg:text-center max-lg:mb-0" data-cid="n736">
              <span className="h-[22.5px] inline-flex mb-3.5 items-center gap-[0.4375rem] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[-0.15px]" data-cid="n737">
                <Icon12 cid={"n738"} />
                Before and after
              </span>
              <h2 className="block text-[2.75rem] font-semibold leading-[3rem] tracking-[-1.54px] text-balance max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-1.05px]" data-cid="n739" data-component="heading" id="showcase-title">
                From default to designed.
              </h2>
            </div>
            <ol className="h-[316.7px] grid pb-18.5 gap-0.5 grid-rows-[46.9375px_46.9375px_46.9375px_46.9375px_46.9375px] [list-style-type:none] list-outside grid-cols-1 max-md:h-[5.8875rem] max-lg:mt-7.5 max-lg:order-[3] max-md:grid-rows-[94.2px] max-lg:text-center max-lg:pb-0 md:max-lg:h-[4.625rem] md:max-lg:grid-rows-[74px]" data-cid="n740">
              {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} cids={ListRow3_cids[i]} styles={ListRow3_styles[i]} />)}
            </ol>
          </div>
          <div className="block relative min-w-0 mb-10 p-[0.3125rem] rounded-3xl bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] transform-[matrix3d(0.9,0,0,0,0,0.779423,0.45,-0.000346154,0,-0.5,0.866025,-0.000666173,0,140,0,1)] origin-[438px_541.406px] max-lg:order-[2] max-md:transform-[matrix3d(0.94,0,0,0,0,0.903586,0.259099,-0.000287888,0,-0.275637,0.961262,-0.00106807,0,56,0,1)] max-md:origin-[171.5px_426.25px] max-lg:mb-0 md:max-lg:origin-[320px_396.578px] 2xl:origin-[442px_546.312px]" data-cid="n771">
            <div className="h-[33.2125rem] block relative isolate rounded-[20px] overflow-hidden aspect-[880/540] max-md:h-[416.3px] max-md:aspect-[4/5] md:max-lg:h-[24.1625rem] 2xl:h-[536.3px]" data-cid="n772">
              <div className="h-full block absolute top-0 inset-x-0 text-color-010 [font-family:Inter,_-apple-system,_'Segoe_UI',_sans-serif]" data-cid="n773" aria-hidden="true">
                <div className="h-full block absolute top-0 inset-x-0 overflow-hidden text-color-001" style={{ backgroundImage: "linear-gradient(135deg, var(--clr-55), var(--clr-56))" }} data-cid="n774">
                  <span className="w-[118.3px] h-[1.625rem] flex absolute top-[1.3125rem] left-9 items-center gap-1.5 text-xl font-extrabold leading-6.5 whitespace-nowrap text-nowrap max-md:w-[7.3625rem] max-md:left-6 md:max-lg:w-[7.3875rem] 2xl:w-[118.1px]" data-cid="n775">
                    <span className="block text-[1.125rem]" data-cid="n776">
                      🚀
                    </span>
                    <span className="block" data-cid="n777">
                      NoteFlow
                    </span>
                  </span>
                  <span className="w-[200.1px] h-5 flex absolute top-6 left-100 items-center gap-7 text-color-005 text-[0.9375rem] leading-5 whitespace-nowrap text-nowrap max-md:hidden md:max-lg:w-[12.5rem] 2xl:w-[12.5rem]" data-cid="n778">
                    <span className="block" data-cid="n779">
                      Features
                    </span>
                    <span className="block" data-cid="n780">
                      Pricing
                    </span>
                    <span className="block" data-cid="n781">
                      About
                    </span>
                  </span>
                  <span className="w-[7.3625rem] h-9 flex absolute top-4 right-9 px-5.5 rounded-[999px] items-center text-clr-56 text-sm font-bold leading-[1.3125rem] whitespace-nowrap text-nowrap bg-color-001 shadow-[var(--clr-46)_0px_4px_15px_0px] max-md:right-6" data-cid="n782">
                    Get started
                  </span>
                  <div className="w-[43.75rem] h-[6.0375rem] block absolute top-25.5 left-22.5 text-[2.625rem] font-extrabold leading-[3rem] tracking-[-0.42px] text-center text-balance max-md:w-[29rem] max-md:h-[7.975rem] max-md:top-21 max-md:left-7 max-md:text-[2.3125rem] max-md:leading-[2.6875rem] max-md:tracking-[-0.37px]" data-cid="n783">
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n784">
                      <span className="inline-block" data-cid="n785">
                        Revolutionize
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n786">
                      <span className="inline-block" data-cid="n787">
                        Your
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n788">
                      <span className="inline-block text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(90deg, var(--clr-57), var(--clr-58))" }} data-cid="n789">
                        Note-Taking
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n790">
                      <span className="inline-block" data-cid="n791">
                        Experience
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n792">
                      <span className="inline-block" data-cid="n793">
                        ✨
                      </span>
                    </span>
                  </div>
                  <div className="w-[35rem] h-[3.1875rem] block absolute top-53.5 left-40 text-color-005 text-[1.0625rem] leading-[1.625rem] text-center max-md:w-[26.75rem] max-md:h-12 max-md:top-56.5 max-md:left-11.5 max-md:[font-size:inherit] max-md:leading-[inherit]" data-cid="n794">
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n795">
                      <span className="inline-block" data-cid="n796">
                        Unlock
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n797">
                      <span className="inline-block" data-cid="n798">
                        the
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n799">
                      <span className="inline-block" data-cid="n800">
                        power
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n801">
                      <span className="inline-block" data-cid="n802">
                        of
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n803">
                      <span className="inline-block" data-cid="n804">
                        AI-driven
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n805">
                      <span className="inline-block" data-cid="n806">
                        productivity
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n807">
                      <span className="inline-block" data-cid="n808">
                        with
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n809">
                      <span className="inline-block" data-cid="n810">
                        our
                      </span>
                    </span>
                    {" "}
                    <span className="h-[25.5px] inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:h-6 max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n811">
                      <span className="h-full inline-block" data-cid="n812">
                        cutting-edge,
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n813">
                      <span className="inline-block" data-cid="n814">
                        seamless
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n815">
                      <span className="inline-block" data-cid="n816">
                        and
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n817">
                      <span className="inline-block" data-cid="n818">
                        intuitive
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n819">
                      <span className="inline-block" data-cid="n820">
                        platform.
                      </span>
                    </span>
                  </div>
                  <div className="w-220 h-12 flex absolute top-72.5 left-0 justify-center gap-3.5 whitespace-nowrap text-nowrap max-md:w-130 max-md:top-75" data-cid="n821">
                    <span className="h-12 flex px-7 rounded-[999px] items-center text-[0.9375rem] font-bold leading-[1.4375rem] shadow-[var(--clr-59)_0px_8px_25px_0px]" style={{ backgroundImage: "linear-gradient(90deg, var(--clr-57), var(--clr-58))" }} data-cid="n822">
                      Get Started Free 🚀
                    </span>
                    <span className="h-12 border-[1.01617px] border-solid border-color-001 flex px-6.5 rounded-[999px] items-center text-[0.9375rem] font-bold leading-[1.4375rem] max-md:border-[1.56156px] md:max-lg:border-[1.39683px] 2xl:border-[1.00687px]" data-cid="n823">
                      Learn More
                    </span>
                  </div>
                  {featureCard2Data.map((d, i) => <FeatureCard2 key={i} d={d} cids={FeatureCard2_cids[i]} styles={FeatureCard2_styles[i]} />)}
                </div>
                <div className="w-220 h-[33.75rem] block absolute top-0 left-0 invisible opacity-0 overflow-hidden bg-clr-60 [clip-path:circle(0px_at_440px_166px)] max-md:w-130 max-md:h-162.5 max-md:[clip-path:circle(0px_at_260px_140px)]" data-cid="n842">
                  <span className="w-[7.3625rem] h-9 flex absolute top-4 left-[45.3875rem] px-5.5 rounded-[999px] items-center text-color-001 text-sm font-bold leading-[1.3125rem] whitespace-nowrap text-nowrap bg-color-010 max-md:left-[23.6375rem]" data-cid="n843">
                    Get started
                  </span>
                  <div className="w-[43.75rem] h-[6.0375rem] block absolute top-25.5 left-22.5 text-[2.625rem] font-extrabold leading-[3rem] tracking-[-0.42px] text-center text-balance max-md:w-[29rem] max-md:h-[7.975rem] max-md:top-21 max-md:left-7 max-md:text-[2.3125rem] max-md:leading-[2.6875rem] max-md:tracking-[-0.37px]" data-cid="n844">
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n845">
                      <span className="inline-block" data-cid="n846">
                        Revolutionize
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n847">
                      <span className="inline-block" data-cid="n848">
                        Your
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n849">
                      <span className="inline-block" data-cid="n850">
                        Note-Taking
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n851">
                      <span className="inline-block" data-cid="n852">
                        Experience
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-5.88px_-4.2px_-10.08px)] max-md:[clip-path:inset(-5.18px_-3.7px_-8.88px)]" data-cid="n853">
                      <span className="inline-block" data-cid="n854">
                        ✨
                      </span>
                    </span>
                  </div>
                  <div className="w-[35rem] h-[3.1875rem] block absolute top-53.5 left-40 text-color-007 text-[1.0625rem] leading-[1.625rem] text-center max-md:w-[26.75rem] max-md:h-12 max-md:top-56.5 max-md:left-11.5 max-md:[font-size:inherit] max-md:leading-[inherit]" data-cid="n855">
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n856">
                      <span className="inline-block" data-cid="n857">
                        Unlock
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n858">
                      <span className="inline-block" data-cid="n859">
                        the
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n860">
                      <span className="inline-block" data-cid="n861">
                        power
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n862">
                      <span className="inline-block" data-cid="n863">
                        of
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n864">
                      <span className="inline-block" data-cid="n865">
                        AI-driven
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n866">
                      <span className="inline-block" data-cid="n867">
                        productivity
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n868">
                      <span className="inline-block" data-cid="n869">
                        with
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n870">
                      <span className="inline-block" data-cid="n871">
                        our
                      </span>
                    </span>
                    {" "}
                    <span className="h-[25.5px] inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:h-6 max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n872">
                      <span className="h-full inline-block" data-cid="n873">
                        cutting-edge,
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n874">
                      <span className="inline-block" data-cid="n875">
                        seamless
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n876">
                      <span className="inline-block" data-cid="n877">
                        and
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n878">
                      <span className="inline-block" data-cid="n879">
                        intuitive
                      </span>
                    </span>
                    {" "}
                    <span className="inline-block [clip-path:inset(-2.38px_-1.7px_-4.08px)] max-md:[clip-path:inset(-2.24px_-1.6px_-3.84px)]" data-cid="n880">
                      <span className="inline-block" data-cid="n881">
                        platform.
                      </span>
                    </span>
                  </div>
                  <div className="w-220 h-12 flex absolute top-72.5 left-0 justify-center gap-3.5 whitespace-nowrap text-nowrap max-md:w-130 max-md:top-75" data-cid="n882">
                    <span className="h-12 flex px-7 rounded-[999px] items-center text-color-001 text-[0.9375rem] font-bold leading-[1.4375rem] bg-color-010" data-cid="n883">
                      Get Started Free 🚀
                    </span>
                    <span className="h-12 border-[1.01617px] border-solid border-color-020 flex px-6.5 rounded-[999px] items-center text-[0.9375rem] font-bold leading-[1.4375rem] max-md:border-[1.56156px] md:max-lg:border-[1.39683px] 2xl:border-[1.00687px]" data-cid="n884">
                      Learn More
                    </span>
                  </div>
                  <span className="w-[42.7px] h-5 flex absolute top-[1.5625rem] left-[667.3px] opacity-0 items-center text-color-007 [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-sm leading-5 whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,12,0)] max-md:w-[3.025rem] max-md:left-[20.35rem] md:max-lg:w-[47.5px] md:max-lg:left-[662.5px] 2xl:w-[42.3px] 2xl:left-[667.7px]" data-cid="n885">
                    Sign in
                  </span>
                  <span className="w-[111.3px] h-[2.125rem] flex absolute top-[1.0625rem] left-[728.7px] opacity-0 px-3.5 rounded-[9px] items-center text-color-001 [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-sm font-medium leading-[1.3125rem] whitespace-nowrap text-nowrap bg-color-010 transform-[matrix(0.9,0,0,0.9,0,0)] origin-[55.651px_16.997px] max-md:w-[7.1125rem] max-md:left-[23.8875rem] max-md:origin-[56.9238px_16.9942px] md:max-lg:w-[6.8125rem] md:max-lg:left-[45.6875rem] md:max-lg:origin-[54.498px_16.9911px] 2xl:w-[112.5px] 2xl:left-[727.5px] 2xl:origin-[56.2743px_16.9987px]" data-cid="n886">
                    Get started
                  </span>
                </div>
              </div>
            </div>
            <span className="w-23.5 h-6.5 grid absolute top-[34.7125rem] left-194 z-3 min-w-23.5 px-[0.6875rem] rounded-[999px] grid-cols-[72px] grid-rows-[26px] overflow-hidden text-color-001 text-[0.8125rem] font-medium leading-[1.1875rem] tracking-[-0.12px] bg-clr-61 transform-[none] max-lg:w-21.5 max-lg:h-6 max-md:top-[440.3px] max-md:left-[171.5px] max-lg:min-w-21.5 max-lg:px-2.5 max-lg:grid-cols-[66px] max-lg:grid-rows-[24px] max-lg:text-xs max-lg:leading-4.5 max-lg:transform-[matrix(1,0,0,1,-43,0)] md:max-lg:top-[25.6625rem] md:max-lg:left-80 2xl:top-[560.3px] 2xl:left-196" data-cid="n887" aria-hidden="true">
              <b className="block col-start-1 row-start-1 leading-6.5 text-center whitespace-nowrap text-nowrap max-lg:leading-6" data-cid="n888">
                Before
              </b>
              <b className="block opacity-0 col-start-1 row-start-1 leading-6.5 text-center whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,0,26)]" data-cid="n889">
                Step 1 of 4
              </b>
              <b className="block opacity-0 col-start-1 row-start-1 leading-6.5 text-center whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,0,26)]" data-cid="n890">
                Step 2 of 4
              </b>
              <b className="block opacity-0 col-start-1 row-start-1 leading-6.5 text-center whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,0,26)]" data-cid="n891">
                Step 3 of 4
              </b>
              <b className="block opacity-0 col-start-1 row-start-1 leading-6.5 text-center whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,0,26)]" data-cid="n892">
                Step 4 of 4
              </b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
