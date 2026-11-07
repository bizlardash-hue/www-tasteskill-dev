import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import TextLink3, { type TextLink3Data } from "../components/text-link3";
import { TextLink3_cids } from "../_cids";
const TextLink3_data: TextLink3Data[] = [
    { ariaselected: "true", id: "work-tab-0", label: "Coffee shop" },
    { ariaselected: "false", id: "work-tab-1", label: "Club night" },
    { ariaselected: "false", id: "work-tab-2", label: "Architects" },
    { ariaselected: "false", id: "work-tab-3", label: "Contracts" }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ textLink3Data = TextLink3_data } = {}) {
  return (
    <section className="block relative isolate" data-cid="n25" aria-labelledby="hero-title">
      <div className="h-[55.5625rem] block relative isolate pt-44 pb-75 px-6 overflow-hidden max-md:h-[46.05rem] max-md:pt-31 max-md:pb-52.5 max-md:px-4 md:max-lg:h-[52.9rem] md:max-lg:pt-52 2xl:h-[937.7px] 2xl:pt-52" style={{ backgroundImage: "linear-gradient(var(--clr-7) 0%, var(--clr-8) 20%, var(--clr-9) 50%, var(--clr-10) 70%, var(--clr-11) 78%, var(--clr-12) 90%, var(--background) 100%)" }} data-cid="n26">
        <div className="h-full block absolute top-0 inset-x-0 -z-2 pointer-events-none" style={{ maskImage: "linear-gradient(var(--clr-13) 70%, var(--clr-2) 88%)" }} data-cid="n27" aria-hidden="true">
          <div className="h-[40rem] block absolute top-[391.1px] -inset-x-32 [animation-name:hero-sunrise] [animation-duration:1.4s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-fill-mode:backwards] pointer-events-none max-md:h-[530.5px] max-md:top-[20.2625rem] max-md:inset-x-[-37.5px] md:max-lg:h-[38.0875rem] md:max-lg:top-[23.275rem] md:max-lg:-inset-x-[4.8rem] 2xl:h-[675.1px] 2xl:top-[25.7875rem] 2xl:-inset-x-48" data-cid="n28">
            <div className="w-384 h-[40rem] block absolute top-0 left-0 opacity-[0.946643] [translate:0.952809%_-1.52449%] [scale:1.03049] [animation-name:hero-breathe] [animation-duration:16s] [animation-timing-function:ease-in-out] [animation-delay:1.4s] [animation-iteration-count:infinite] [animation-direction:alternate] pointer-events-none max-md:w-112.5 max-md:h-[530.5px] max-md:[translate:1.66182%_-2.65891%] max-md:[scale:1.05318] md:max-lg:w-[57.6rem] md:max-lg:h-[38.0875rem] md:max-lg:[translate:0.944124%_-1.5106%] md:max-lg:[scale:1.03021] 2xl:w-576 2xl:h-[675.1px] 2xl:[translate:0.113762%_-0.182018%] 2xl:[scale:1.00364]" style={{ backgroundImage: "radial-gradient(closest-side, var(--clr-14) 0%, var(--clr-15) 26%, var(--clr-16) 52%, var(--clr-17) 74%)" }} data-cid="n29" />
          </div>
        </div>
        <div className="h-full flex flex-col items-center text-center" data-cid="n30">
          <a className="h-8.5 min-h-8.5 flex max-w-full mb-7 py-1 pr-3 pl-1 rounded-[999px] items-center gap-[0.5625rem] text-primary text-sm leading-[1.3125rem] tracking-[-0.14px] text-left bg-surface-3 shadow-[var(--surface-3)_0px_0px_0px_1px_inset] [backdrop-filter:blur(10px)] transform-[matrix(0.99987,0,0,0.99987,0,0)] origin-[186.797px_17px] [animation-name:hero-rise-pill] [animation-duration:0.7s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.04s] [animation-fill-mode:backwards] cursor-pointer max-md:mb-5.5 max-md:text-[0.8125rem] max-md:leading-[1.25rem] max-md:tracking-[-0.13px] max-md:origin-[91.9688px_17px]" data-cid="n31" data-component="link" href="https://tastecode.dev/" rel="noreferrer" target="_blank">
            <img className="w-auto h-6.5 block max-w-full rounded-[999px] shrink-0 overflow-clip aspect-[auto_26/26] align-middle text-clr-2" data-cid="n32" data-component="avatar" alt="" height="26" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet="/assets/cloned/images/21841431993e.avif 1x" width="26" />
            <span className="h-[1.3125rem] block max-md:h-[19.5px]" data-cid="n33">
              <b className="inline text-color-001 font-semibold" data-cid="n34">
                TasteCode
              </b>
              {" is out"}
              <span className="inline max-md:hidden" data-cid="n35">
                : Taste Skill as a desktop app
              </span>
            </span>
            <Icon3 cid={"n36"} />
          </a>
          <h1 className="block text-color-003 text-[4.8125rem] font-semibold leading-[4.875rem] tracking-[-3.23px] text-balance max-md:text-[2.5rem] max-md:leading-[2.5625rem] max-md:tracking-[-1.68px] md:max-lg:text-[2.875rem] md:max-lg:leading-[2.9375rem] md:max-lg:tracking-[-1.94px] 2xl:text-[5.25rem] 2xl:leading-[5.375rem] 2xl:tracking-[-3.53px]" data-cid="n37" data-component="heading" id="hero-title">
            <span className="block max-md:inline" data-cid="n38">
              <span className="inline" data-cid="n39">
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n40">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.13s] [animation-fill-mode:backwards]" data-cid="n41">
                    The
                  </span>
                </span>
              </span>
              <span className="inline" data-cid="n42">
                {" "}
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n43">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.172s] [animation-fill-mode:backwards]" data-cid="n44">
                    design
                  </span>
                </span>
              </span>
              <span className="inline" data-cid="n45">
                {" "}
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n46">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.214s] [animation-fill-mode:backwards]" data-cid="n47">
                    skill
                  </span>
                </span>
              </span>
              <span className="inline" data-cid="n48">
                {" "}
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n49">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.256s] [animation-fill-mode:backwards]" data-cid="n50">
                    for
                  </span>
                </span>
              </span>
              {" "}
            </span>
            <span className="block max-md:inline" data-cid="n51">
              <span className="inline" data-cid="n52">
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n53">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.348s] [animation-fill-mode:backwards]" data-cid="n54">
                    AI
                  </span>
                </span>
              </span>
              <span className="inline" data-cid="n55">
                {" "}
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n56">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.39s] [animation-fill-mode:backwards]" data-cid="n57">
                    coding
                  </span>
                </span>
              </span>
              <span className="inline" data-cid="n58">
                {" "}
                <span className="inline-block -mt-[0.575rem] -mb-3.5 mx-[-6.1px] pt-[0.575rem] pb-3.5 px-1.5 overflow-clip align-top max-md:-mt-[0.3rem] max-md:-mb-[0.45rem] max-md:-mx-[0.2rem] max-md:pt-[0.3rem] max-md:pb-[0.45rem] max-md:px-[0.2rem] md:max-lg:mt-[-5.5px] md:max-lg:mb-[-8.3px] md:max-lg:mx-[-3.7px] md:max-lg:pt-[5.5px] md:max-lg:pb-[8.3px] md:max-lg:px-[3.7px] 2xl:-mt-2.5 2xl:mb-[-15.1px] 2xl:mx-[-6.7px] 2xl:pt-2.5 2xl:pb-[15.1px] 2xl:px-[6.7px]" data-cid="n59">
                  <span className="inline-block [animation-name:hero-word] [animation-duration:0.95s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.432s] [animation-fill-mode:backwards]" data-cid="n60">
                    agents
                  </span>
                </span>
              </span>
            </span>
          </h1>
          <p className="w-full max-w-144 block mt-6 text-clr-18 text-[1.1875rem] leading-[1.8125rem] tracking-[-0.19px] text-pretty [animation-name:hero-rise] [animation-duration:0.8s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.43s] [animation-fill-mode:backwards] max-lg:leading-[1.5625rem] max-lg:tracking-[-0.16px] max-lg:[font-size:inherit] 2xl:leading-[1.875rem]" data-cid="n61">
            It gives Claude Code, Codex and Cursor an art direction from 247 curated sites, real pictures and a real-browser check, so the pages they build look designed, not generated.
          </p>
          <div className="w-[46%] h-12 flex max-w-full mt-9 flex-wrap justify-center gap-2.5 max-md:w-full max-md:h-26.5 max-md:flex-col max-md:items-stretch md:max-lg:w-[78%] 2xl:w-[30%]" data-cid="n62">
            <button className="w-full max-w-[24.125rem] h-12 border border-solid border-surface-3 flex pr-1.5 pl-4.5 rounded-[11px] items-center gap-4.5 text-color-001 text-left bg-clr-19 [animation-name:hero-rise] [animation-duration:0.8s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.53s] [animation-fill-mode:backwards] cursor-pointer max-md:pl-3.5 max-md:gap-2 hover:border-surface-2" data-cid="n63" data-component="button" aria-label="Copy: npx skills add Leonxlnx/taste-skill" type="button">
              <code className="h-[1.3125rem] block min-w-0 overflow-hidden [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] whitespace-nowrap text-nowrap max-md:h-4.5 max-md:text-xs max-md:leading-4.5 max-md:tracking-[-0.12px]" data-cid="n64">
                <span className="inline opacity-45 mr-[0.5625rem] max-md:hidden" data-cid="n65">
                  $
                </span>
                <span className="inline" data-cid="n66">
                  <span className="inline" data-cid="n67">
                    npx
                  </span>
                </span>
                <span className="inline" data-cid="n68">
                  {" "}
                  <span className="inline" data-cid="n69">
                    skills
                  </span>
                </span>
                <span className="inline" data-cid="n70">
                  {" "}
                  <span className="inline" data-cid="n71">
                    add
                  </span>
                </span>
                <span className="inline" data-cid="n72">
                  {" "}
                  <span className="inline" data-cid="n73">
                    Leonxlnx/taste-skill
                  </span>
                </span>
              </code>
              <span className="w-9 h-9 grid rounded-[7px] items-center shrink-0 grid-rows-[36px] justify-items-center bg-surface-3 grid-cols-[minmax(0,_1fr)]" data-cid="n74" aria-hidden="true">
                <Icon4 cid={"n75"} />
                <Icon5 cid={"n76"} />
              </span>
              <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n77" aria-live="polite" />
            </button>
            <a className="w-[29.5%] h-12 flex px-4.5 rounded-[11px] justify-center items-center gap-2 text-[0.9375rem] font-medium leading-[1.4375rem] tracking-[-0.15px] whitespace-nowrap text-nowrap bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--clr-1)_0px_4px_12px_-6px] [animation-name:hero-rise] [animation-duration:0.8s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.6s] [animation-fill-mode:backwards] cursor-pointer max-md:w-full hover:bg-color-003" data-cid="n78" data-component="button" href="/docs">
              Read the docs
              <Icon6 cid={"n79"} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-270 flex relative z-1 -mt-58 mx-auto flex-col items-center [animation-name:hero-work-arrive] [animation-duration:1.2s] [animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] [animation-delay:0.28s] [animation-fill-mode:backwards] max-md:w-[21.4375rem] max-md:-mt-37.5 max-md:[animation-name:hero-work-arrive-short] md:max-lg:w-180" data-cid="n80">
        <div className="w-2/5 flex relative isolate max-w-full p-1 rounded-[13px] gap-0.5 overflow-auto bg-clr-20 shadow-[var(--surface-5)_0px_0px_0px_1px_inset] [backdrop-filter:blur(12px)] transform-[matrix(1,0,0,1,0,22)] max-md:w-full max-md:justify-between max-md:transform-[matrix(1,0,0,1,0,10)] md:max-lg:w-3/5" data-cid="n81" aria-label="Pages built with Taste Skill" role="tablist">
          <span className="w-[26.9625rem] h-full block absolute top-0 left-0 min-w-0 [filter:drop-shadow(var(--clr-21)_0px_0px_0.5px)_drop-shadow(var(--clr-22)_0px_2px_3px)] pointer-events-none max-md:w-[21.4375rem]" data-cid="n82" aria-hidden="true">
            <span className="w-[26.9375rem] h-full block absolute top-0 bg-color-001 [clip-path:inset(4px_311px_4px_4px_round_10px)] pointer-events-none max-md:[clip-path:inset(4px_337px_4px_4px_round_10px)]" data-cid="n83" />
          </span>
          {textLink3Data.map((d, i) => <TextLink3 key={i} d={d} cids={TextLink3_cids[i]} />)}
        </div>
        <div className="w-full block relative mt-4.5 max-md:mt-3.5" data-cid="n88">
          <div className="block relative p-1.5 rounded-[26px] bg-clr-23 shadow-[var(--clr-20)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-24)_0px_40px_90px_-40px] transform-[matrix3d(0.84,0,0,0,0,0.754987,0.368232,0,0,-0.438371,0.898794,0,0,40,0,1)] origin-[540px_0px] max-md:p-1 max-md:rounded-[18px] max-md:transform-[matrix3d(0.94,0,0,0,0,0.919459,0.195437,0,0,-0.207912,0.978148,0,0,18,0,1)] max-md:origin-[171.5px_0px] max-lg:mx-auto md:max-lg:origin-[360px_0px]" data-cid="n89">
            <div className="block relative isolate rounded-[20px] overflow-hidden aspect-[1200/694] bg-clr-7 shadow-[var(--border)_0px_0px_0px_1px] mx-auto max-md:rounded-[14px] max-lg:mx-0" data-cid="n90" aria-labelledby="work-tab-0" id="work-stage" role="tabpanel">
              <div className="h-full block absolute top-0 inset-x-0 z-2 overflow-hidden 2xl:[animation-name:shot-wipe-back] 2xl:[animation-duration:0.82s] 2xl:[animation-timing-function:cubic-bezier(0.65,_0,_0.35,_1)] 2xl:[animation-fill-mode:backwards] after:content-[''] after:block after:absolute after:inset-0 after:w-267 after:h-[617.7px] after:bg-clr-7 after:opacity-0 max-md:after:w-[20.9375rem] max-md:after:h-[193.7px] md:max-lg:after:w-177 md:max-lg:after:h-[409.5px]" data-cid="n91">
                <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover object-[50%_0%] aspect-[auto_2400/1388] align-middle text-clr-2 2xl:[animation-name:shot-settle-back] 2xl:[animation-duration:1.1s] 2xl:[animation-timing-function:cubic-bezier(0.16,_1,_0.3,_1)] 2xl:[animation-fill-mode:backwards]" data-cid="n92" data-component="image" alt="A coffee roastery page built with Taste Skill, its storefront drawn as the hero" aria-hidden="false" height="1388" sizes="(min-width: 1130px) 1068px, calc(100vw - 40px)" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet="/assets/cloned/images/25b4972c2d82.avif 1080w" width="2400" />
              </div>
              <div className="w-267 h-[617.7px] block absolute top-0 left-0 invisible overflow-hidden max-md:w-[20.9375rem] max-md:h-[193.7px] md:max-lg:w-177 md:max-lg:h-[409.5px] 2xl:z-1 2xl:[translate:7%] 2xl:[scale:0.88] 2xl:[clip-path:inset(0px_round_18px)] 2xl:[animation-name:shot-recede-back] 2xl:[animation-duration:0.82s] 2xl:[animation-timing-function:cubic-bezier(0.65,_0,_0.35,_1)] 2xl:[animation-fill-mode:both] 2xl:[visibility:inherit] after:content-[''] after:block after:absolute after:inset-0 after:w-267 after:h-[617.7px] after:bg-clr-7 after:opacity-0 max-md:after:w-[20.9375rem] max-md:after:h-[193.7px] md:max-lg:after:w-177 md:max-lg:after:h-[409.5px] 2xl:after:opacity-55" data-cid="n93">
                <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover object-[50%_0%] aspect-[auto_2400/1388] align-middle text-clr-2" data-cid="n94" alt="" aria-hidden="true" height="1388" sizes="(min-width: 1130px) 1068px, calc(100vw - 40px)" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet="/assets/cloned/images/53232b3ed294.avif 1080w" width="2400" />
              </div>
            </div>
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}
