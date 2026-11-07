import Icon9 from "../svgs/svg-icon9";
import Icon10 from "../svgs/svg-icon10";
import MediaTile, { type MediaTileData } from "../components/media-tile";
import Icon11 from "../svgs/svg-icon11";
import MediaTile2, { type MediaTile2Data } from "../components/media-tile2";
import Tile, { type TileData } from "../components/tile";
import { MediaTile_cids, MediaTile2_cids, Tile_cids } from "../_cids";
import { MediaTile_styles, MediaTile2_styles, Tile_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { text: "75 degrees green coffee" },
    { text: "385 degrees cinnamon roast coffee" },
    { text: "440 degrees full city roast coffee" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { text: "few-pictures", text2: "Only 2 pictures on the page, it needs 4", text3: "FAIL" },
    { text: "off-centre", text2: "Margins 140px left, 60px right at 1440", text3: "FAIL" },
    { text: "edge-text", text2: "Text 10px from the edge at 390", text3: "FAIL" },
    { text: "blank-gap", text2: "A 380px stretch holds nothing", text3: "WARN" },
    { text: "off-centre", text2: "Margins differ by 24px at 768", text3: "WARN" }
];
const Tile_data: TileData[] = [
    {  },
    {  },
    {  }
];
/** Product Grid section. */
export default function ProductGridSection({ mediaTileData = MediaTile_data, mediaTile2Data = MediaTile2_data, tileData = Tile_data } = {}) {
  return (
    <section className="block relative pt-36 max-md:pt-26" data-cid="n302" aria-labelledby="features-title" id="how-it-works">
      <div className="w-220 block mx-auto max-md:w-[21.4375rem] md:max-lg:w-180" data-cid="n303">
        <div className="block max-w-220 mb-10 text-center max-md:mb-7" data-cid="n304">
          <span className="inline-flex mb-3.5 items-center gap-[0.4375rem] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[-0.15px]" data-cid="n305">
            <Icon9 cid={"n306"} />
            How it works
          </span>
          <h2 className="block text-[2.75rem] font-semibold leading-[3rem] tracking-[-1.54px] text-balance max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-1.05px]" data-cid="n307" data-component="heading" id="features-title">
            Design sense, packaged as a skill.
          </h2>
          <p className="block max-w-136 mt-4 mx-auto text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.17px] text-pretty max-md:leading-[1.5625rem] max-md:tracking-[-0.16px] max-md:[font-size:inherit]" data-cid="n308">
            One install gives your agent a library distilled from 247 curated sites, scripts that deal from it, and a browser to check the result in.
          </p>
        </div>
      </div>
      <div className="w-270 grid mx-auto gap-7 grid-rows-[488.688px_487.938px_468px] grid-cols-1 max-md:w-[21.4375rem] max-lg:gap-5 max-md:grid-rows-[792.656px_789.062px_756.812px] md:max-lg:w-180 md:max-lg:grid-rows-[779.688px_753.375px_723.688px]" data-cid="n309">
        <article className="h-[488.7px] min-h-117 grid p-1.5 rounded-[28px] grid-cols-[568.922px_499.078px] grid-rows-[476.7px] bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:h-[792.7px] max-lg:rounded-3xl max-md:grid-rows-[444.094px_336.562px] max-lg:grid-cols-1 max-lg:min-h-0 md:max-lg:h-[779.7px] md:max-lg:grid-rows-[456.688px_311px] hover:shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-1)_0px_20.9938px_41.9959px_-27.0021px] hover:transform-[matrix(1,0,0,1,0,-0.99794)] focus:shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-116)_0px_20.3232px_41.5488px_-27.2256px] focus:transform-[matrix(1,0,0,1,0,-0.774398)]" data-cid="n310">
          <div className="grid relative isolate py-16 px-11 rounded-[22px] items-center justify-items-center overflow-hidden [clip-path:inset(14%_16%_round_16px)] grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[1.193] max-md:pt-10 max-md:pb-13 max-md:px-3.5 max-lg:rounded-[19px] max-md:[clip-path:inset(4%_6%_round_16px)] max-md:aspect-[3/4] md:max-lg:pt-12 md:max-lg:pb-15 md:max-lg:px-7 md:max-lg:aspect-[1.55]" data-cid="n311">
            <div className="w-[35.5625rem] h-full block absolute top-0 left-0 z-0 min-w-0 pointer-events-none max-md:w-[20.6875rem] md:max-lg:w-177" data-cid="n312" aria-hidden="true">
              <div className="w-[35.5625rem] h-[476.7px] block absolute top-0 left-0 transform-[matrix(1.3,0,0,1.3,0,0)] origin-[284.461px_238.344px] pointer-events-none max-md:w-[20.6875rem] max-md:h-[27.75rem] max-md:origin-[165.5px_222.047px] md:max-lg:w-177 md:max-lg:h-[456.7px] md:max-lg:origin-[354px_228.344px]" style={{ backgroundImage: "linear-gradient(var(--clr-31) 0%, var(--clr-32) 55%, var(--color-026) 100%)" }} data-cid="n313" />
              <div className="h-155 block absolute top-[238.3px] right-[-25.5px] left-[284.5px] -mt-77.5 -ml-77.5 rounded-[50%] pointer-events-none max-md:h-110 max-md:top-[13.875rem] max-md:right-[-54.5px] max-md:left-[165.5px] max-md:-mt-55 max-md:-ml-55 md:max-lg:top-[228.3px] md:max-lg:right-11 md:max-lg:left-88.5" style={{ backgroundImage: "radial-gradient(closest-side, var(--clr-33), var(--surface-2) 55%, var(--clr-34))" }} data-cid="n314" />
              <div className="h-[476.7px] block absolute top-0 inset-x-0 transform-[matrix(1,0,0,1,0,-12)] pointer-events-none max-md:h-[27.75rem] max-md:transform-[matrix(1,0,0,1,0,-4.8)] md:max-lg:h-[456.7px]" data-cid="n315">
                <i className="h-52.5 block absolute top-[238.3px] right-[179.5px] left-[284.5px] -mt-[6.5625rem] -ml-[6.5625rem] rounded-[50%] italic shadow-[var(--surface-5)_0px_0px_0px_1px_inset] pointer-events-none max-md:h-42.5 max-md:top-[13.875rem] max-md:right-[80.5px] max-md:left-[165.5px] max-md:-mt-[5.3125rem] max-md:-ml-[5.3125rem] md:max-lg:top-[228.3px] md:max-lg:right-[15.5625rem] md:max-lg:left-88.5" data-cid="n316" />
                <i className="h-93 block absolute top-[238.3px] right-[98.5px] left-[284.5px] -mt-46.5 -ml-46.5 rounded-[50%] italic shadow-[var(--surface-5)_0px_0px_0px_1px_inset] pointer-events-none max-md:h-75 max-md:top-[13.875rem] max-md:right-[15.5px] max-md:left-[165.5px] max-md:-mt-37.5 max-md:-ml-37.5 md:max-lg:top-[228.3px] md:max-lg:right-42 md:max-lg:left-88.5" data-cid="n317" />
              </div>
              <i className="h-px block absolute top-6.5 inset-x-0 italic bg-surface-5 pointer-events-none max-md:top-3 md:max-lg:top-4" data-cid="n318" />
              <i className="h-px block absolute bottom-6.5 inset-x-0 italic bg-surface-5 pointer-events-none max-md:bottom-3 md:max-lg:bottom-4" data-cid="n319" />
              <i className="w-px h-full block absolute top-0 left-7.5 italic bg-surface-5 pointer-events-none max-md:left-2.5 md:max-lg:left-4" data-cid="n320" />
              <i className="w-px h-full block absolute top-0 right-7.5 italic bg-surface-5 pointer-events-none max-md:right-2.5 md:max-lg:right-4" data-cid="n321" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-6.5 left-7.5 -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-3 max-md:left-2.5 md:max-lg:top-4 md:max-lg:left-4 before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n322" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-6.5 left-[33.625rem] -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-3 max-md:left-80 md:max-lg:top-4 md:max-lg:left-[43.1875rem] before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n323" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-[449.7px] left-7.5 -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-[26.9375rem] max-md:left-2.5 md:max-lg:top-[439.7px] md:max-lg:left-4 before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n324" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-[449.7px] left-[33.625rem] -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-[26.9375rem] max-md:left-80 md:max-lg:top-[439.7px] md:max-lg:left-[43.1875rem] before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n325" />
            </div>
            <div className="w-full max-w-99 h-[348.7px] block relative z-1 transform-[matrix(1,0,0,1,0,20)] max-md:h-[22rem] max-md:transform-[matrix(1,0,0,1,0,8)]" data-cid="n326">
              <i className="w-99 h-[348.7px] block absolute top-0 left-0 opacity-[0.275] rounded-2xl italic bg-color-001 shadow-[var(--border)_0px_0px_0px_1px] transform-[matrix(0.88,0,0,0.88,0,28)] origin-[198px_174.344px] max-md:w-[18.9375rem] max-md:h-[22rem] max-md:origin-[151.5px_176.047px]" data-cid="n327" aria-hidden="true" />
              <i className="w-99 h-[348.7px] block absolute top-0 left-0 opacity-55 rounded-2xl italic bg-color-001 shadow-[var(--border)_0px_0px_0px_1px] transform-[matrix(0.94,0,0,0.94,0,14)] origin-[198px_174.344px] max-md:w-[18.9375rem] max-md:h-[22rem] max-md:origin-[151.5px_176.047px]" data-cid="n328" aria-hidden="true" />
              <div className="h-[348.7px] block relative z-1 rounded-2xl overflow-hidden text-sm leading-[1.25rem] tracking-[-0.07px] bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--clr-36)_0px_2px_4px_0px,var(--clr-37)_0px_34px_60px_-26px] max-md:h-[22rem] max-md:text-[0.8125rem] max-md:tracking-[-0.06px]" data-cid="n329" aria-hidden="true">
                <div className="h-9.5 border-b border-solid border-b-border flex px-3.5 justify-between items-center gap-2.5 text-color-006 text-xs leading-4.5" data-cid="n330">
                  <span className="block" data-cid="n331">
                    assets.mjs
                  </span>
                  <code className="block text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace]" data-cid="n332">
                    --license safe
                  </code>
                </div>
                <div className="h-10.5 flex relative mt-3 mb-1.5 mx-3.5 px-3 rounded-[10px] items-center gap-[0.5625rem] overflow-hidden [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-[0.8125rem] leading-[1.1875rem] bg-surface-4 shadow-[var(--border)_0px_0px_0px_1px_inset]" data-cid="n333">
                  <Icon10 cid={"n334"} />
                  <span className="h-[1.175rem] block relative min-w-0 whitespace-nowrap text-nowrap" data-cid="n335">
                    <span className="block [clip-path:inset(0%)]" data-cid="n336">
                      roasted coffee beans
                    </span>
                  </span>
                </div>
                <div className="block pt-0.5 pb-1.5 px-3.5" data-cid="n337">
                  {mediaTileData.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} styles={MediaTile_styles[i]} />)}
                </div>
                <div className="h-10 border-t border-solid border-t-border flex px-3.5 justify-between items-center gap-2.5 text-color-002 text-xs leading-4.5 bg-clr-39" data-cid="n359">
                  <span className="h-4.5 flex items-center gap-1.5 text-color-011 font-semibold" data-cid="n360">
                    <Icon11 cid={"n361"} />
                    3 saved to assets/
                  </span>
                  <span className="block" data-cid="n362">
                    credits recorded
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[476.7px] flex py-12 pr-13 pl-12 flex-col justify-center max-md:h-[21.0375rem] max-lg:pt-6.5 max-lg:pb-7 max-lg:px-5.5 md:max-lg:h-[19.4375rem]" data-cid="n363">
            <span className="block mb-3 text-color-008 text-[0.9375rem] font-semibold leading-[1.375rem] tracking-[-0.14px]" data-cid="n364">
              Pictures
            </span>
            <h3 className="block max-w-75 text-[2rem] font-semibold leading-[2.3125rem] tracking-[-0.96px] text-balance max-lg:max-w-60 max-lg:text-[1.5625rem] max-lg:leading-[1.8125rem] max-lg:tracking-[-0.75px]" data-cid="n365" data-component="heading">
              Finds real pictures and credits them
            </h3>
            <p className="w-full max-w-104.5 block mt-3.5 text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.16px] text-pretty" data-cid="n366">
              It searches Openverse, Wikimedia Commons, the Art Institute of Chicago and the Met. Only CC0, public domain, CC BY and CC BY-SA, with the credit on the page.
            </p>
            <code className="h-7.5 flex mt-6.5 px-[0.6875rem] rounded-[9px] items-center self-start text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-[0.8125rem] leading-[1.1875rem] bg-surface-4 shadow-[var(--border)_0px_0px_0px_1px_inset] max-lg:mt-5" data-cid="n367">
              scripts/assets.mjs
            </code>
          </div>
        </article>
        <article className="h-[30.5rem] min-h-117 grid p-1.5 rounded-[28px] grid-cols-[499.062px_568.938px] grid-rows-[476px] bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:h-[49.3125rem] max-lg:rounded-3xl max-md:grid-rows-[466.062px_311px] max-lg:grid-cols-1 max-lg:min-h-0 md:max-lg:h-[47.0875rem] md:max-lg:grid-rows-[455.938px_285.438px] hover:shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-1)_0px_20.9894px_41.9929px_-27.0035px] hover:transform-[matrix(1,0,0,1,0,-0.996456)] focus:shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-116)_0px_19.3222px_40.8815px_-27.5593px] focus:transform-[matrix(1,0,0,1,0,-0.440744)]" data-cid="n368">
          <div className="grid relative isolate py-16 px-11 rounded-[22px] items-center order-[2] justify-items-center overflow-hidden [clip-path:inset(14%_16%_round_16px)] grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[1.195] max-md:pt-10 max-md:pb-13 max-md:px-3.5 max-lg:rounded-[19px] max-md:[clip-path:inset(4%_6%_round_16px)] max-md:aspect-[0.71] max-lg:order-[initial] md:max-lg:pt-12 md:max-lg:pb-15 md:max-lg:px-7 md:max-lg:aspect-[1.553]" data-cid="n369">
            <div className="w-[35.5625rem] h-full block absolute top-0 left-0 z-0 min-w-0 pointer-events-none max-md:w-[20.6875rem] md:max-lg:w-177" data-cid="n370" aria-hidden="true">
              <div className="w-[35.5625rem] h-[29.75rem] block absolute top-0 left-0 [background-size:auto,_auto,_auto] [background-position:0%_0%,_0%_0%,_0%_0%] [background-repeat:repeat,_repeat,_repeat] [background-clip:border-box,_border-box,_border-box] [background-origin:padding-box,_padding-box,_padding-box] [background-attachment:scroll,_scroll,_scroll] [background-blend-mode:normal,_normal,_normal] transform-[matrix(1.3,0,0,1.3,0,0)] origin-[284.469px_237.969px] [-webkit-background-clip:border-box,_border-box,_border-box] pointer-events-none max-md:w-[20.6875rem] max-md:h-[29.125rem] max-md:origin-[165.5px_233.031px] md:max-lg:w-177 md:max-lg:h-[28.5rem] md:max-lg:origin-[354px_227.969px]" style={{ backgroundImage: "radial-gradient(95% 70% at 50% 112%, var(--clr-40), var(--clr-41) 72%), radial-gradient(60% 45% at 88% -6%, var(--clr-42), var(--clr-17) 70%), linear-gradient(var(--clr-8) 0%, var(--clr-7) 70%)" }} data-cid="n371" />
              <div className="h-155 block absolute top-[14.875rem] right-[-25.5px] left-[284.5px] -mt-77.5 -ml-77.5 rounded-[50%] pointer-events-none max-md:h-110 max-md:top-[14.5625rem] max-md:right-[-54.5px] max-md:left-[165.5px] max-md:-mt-55 max-md:-ml-55 md:max-lg:top-[14.25rem] md:max-lg:right-11 md:max-lg:left-88.5" style={{ backgroundImage: "radial-gradient(closest-side, var(--clr-43), var(--clr-44) 55%, var(--clr-41))" }} data-cid="n372" />
              <div className="h-[29.75rem] block absolute top-0 inset-x-0 transform-[matrix(1,0,0,1,0,-12)] pointer-events-none max-md:h-[29.125rem] max-md:transform-[matrix(1,0,0,1,0,-4.8)] md:max-lg:h-[28.5rem]" data-cid="n373">
                <i className="h-52.5 block absolute top-[14.875rem] right-[179.5px] left-[284.5px] -mt-[6.5625rem] -ml-[6.5625rem] rounded-[50%] italic shadow-[var(--color-022)_0px_0px_0px_1px_inset] pointer-events-none max-md:h-42.5 max-md:top-[14.5625rem] max-md:right-[80.5px] max-md:left-[165.5px] max-md:-mt-[5.3125rem] max-md:-ml-[5.3125rem] md:max-lg:top-[14.25rem] md:max-lg:right-[15.5625rem] md:max-lg:left-88.5" data-cid="n374" />
                <i className="h-93 block absolute top-[14.875rem] right-[98.5px] left-[284.5px] -mt-46.5 -ml-46.5 rounded-[50%] italic shadow-[var(--color-022)_0px_0px_0px_1px_inset] pointer-events-none max-md:h-75 max-md:top-[14.5625rem] max-md:right-[15.5px] max-md:left-[165.5px] max-md:-mt-37.5 max-md:-ml-37.5 md:max-lg:top-[14.25rem] md:max-lg:right-42 md:max-lg:left-88.5" data-cid="n375" />
              </div>
              <i className="h-px block absolute top-6.5 inset-x-0 italic bg-color-022 pointer-events-none max-md:top-3 md:max-lg:top-4" data-cid="n376" />
              <i className="h-px block absolute bottom-6.5 inset-x-0 italic bg-color-022 pointer-events-none max-md:bottom-3 md:max-lg:bottom-4" data-cid="n377" />
              <i className="w-px h-full block absolute top-0 left-7.5 italic bg-color-022 pointer-events-none max-md:left-2.5 md:max-lg:left-4" data-cid="n378" />
              <i className="w-px h-full block absolute top-0 right-7.5 italic bg-color-022 pointer-events-none max-md:right-2.5 md:max-lg:right-4" data-cid="n379" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-6.5 left-7.5 -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-3 max-md:left-2.5 md:max-lg:top-4 md:max-lg:left-4 before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-45 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-45" data-cid="n380" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-6.5 left-[33.625rem] -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-3 max-md:left-80 md:max-lg:top-4 md:max-lg:left-[43.1875rem] before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-45 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-45" data-cid="n381" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-[28.0625rem] left-7.5 -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-[28.3125rem] max-md:left-2.5 md:max-lg:top-[27.4375rem] md:max-lg:left-4 before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-45 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-45" data-cid="n382" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-[28.0625rem] left-[33.625rem] -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-[28.3125rem] max-md:left-80 md:max-lg:top-[27.4375rem] md:max-lg:left-[43.1875rem] before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-45 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-45" data-cid="n383" />
            </div>
            <div className="w-full max-w-99 h-full block relative z-1 transform-[matrix(1,0,0,1,0,20)] max-md:transform-[matrix(1,0,0,1,0,8)]" data-cid="n384">
              <i className="w-99 h-[21.75rem] block absolute top-0 left-0 opacity-8 rounded-2xl italic bg-color-001 shadow-[var(--border)_0px_0px_0px_1px] transform-[matrix(0.88,0,0,0.88,0,28)] origin-[198px_173.969px] max-md:w-[18.9375rem] max-md:h-[23.375rem] max-md:origin-[151.5px_187.031px]" data-cid="n385" aria-hidden="true" />
              <i className="w-99 h-[21.75rem] block absolute top-0 left-0 opacity-16 rounded-2xl italic bg-color-001 shadow-[var(--border)_0px_0px_0px_1px] transform-[matrix(0.94,0,0,0.94,0,14)] origin-[198px_173.969px] max-md:w-[18.9375rem] max-md:h-[23.375rem] max-md:origin-[151.5px_187.031px]" data-cid="n386" aria-hidden="true" />
              <div className="h-full block relative z-1 rounded-2xl overflow-hidden text-sm leading-[1.25rem] tracking-[-0.07px] bg-color-001 shadow-[var(--surface-3)_0px_0px_0px_1px,var(--clr-46)_0px_2px_6px_0px,var(--clr-47)_0px_40px_70px_-28px] max-md:text-[0.8125rem] max-md:tracking-[-0.06px]" data-cid="n387" aria-hidden="true">
                <div className="h-9.5 border-b border-solid border-b-border flex px-3.5 justify-between items-center gap-2.5 text-color-006 text-xs leading-4.5" data-cid="n388">
                  <span className="block" data-cid="n389">
                    inspect.mjs
                  </span>
                  <span className="flex gap-1" data-cid="n390">
                    <code className="block py-0.5 px-1.5 rounded-[5px] text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-xs leading-[1.0625rem] bg-surface-4" data-cid="n391">
                      1440
                    </code>
                    <code className="block py-0.5 px-1.5 rounded-[5px] text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-xs leading-[1.0625rem] bg-surface-4" data-cid="n392">
                      768
                    </code>
                    <code className="block py-0.5 px-1.5 rounded-[5px] text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-xs leading-[1.0625rem] bg-surface-4" data-cid="n393">
                      390
                    </code>
                  </span>
                </div>
                <div className="h-[16.875rem] block relative pt-1 pb-1.5 px-3.5 overflow-hidden max-md:h-[18.5rem]" data-cid="n394">
                  {mediaTile2Data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} styles={MediaTile2_styles[i]} />)}
                </div>
                <div className="h-10 border-t border-solid border-t-border flex px-3.5 justify-between items-center gap-2.5 text-color-002 text-xs font-semibold leading-4.5 bg-clr-39" data-cid="n445">
                  <span className="grid justify-items-start overflow-hidden text-foreground grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[2.918] max-md:aspect-[2.919]" data-cid="n446">
                    <span className="block opacity-0 col-start-1 row-start-1 whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,0,-18)]" data-cid="n447">
                      Round 1
                    </span>
                    <span className="block col-start-1 row-start-1 whitespace-nowrap text-nowrap" data-cid="n448">
                      Round 2
                    </span>
                  </span>
                  <span className="grid justify-items-end overflow-hidden grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[5.114] max-md:aspect-[5.116]" data-cid="n449">
                    <span className="block opacity-0 col-start-1 row-start-1 text-color-008 whitespace-nowrap text-nowrap transform-[matrix(1,0,0,1,0,-18)]" data-cid="n450">
                      3 FAIL, 2 WARN
                    </span>
                    <span className="block col-start-1 row-start-1 text-color-011 whitespace-nowrap text-nowrap" data-cid="n451">
                      0 FAIL, 0 WARN
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[29.75rem] flex py-12 pr-12 pl-13 flex-col justify-center max-md:h-[19.4375rem] max-lg:pt-6.5 max-lg:pb-7 max-lg:px-5.5 md:max-lg:h-[17.8375rem]" data-cid="n452">
            <span className="block mb-3 text-color-008 text-[0.9375rem] font-semibold leading-[1.375rem] tracking-[-0.14px]" data-cid="n453">
              Inspector
            </span>
            <h3 className="block max-w-75 text-[2rem] font-semibold leading-[2.3125rem] tracking-[-0.96px] text-balance max-lg:max-w-60 max-lg:text-[1.5625rem] max-lg:leading-[1.8125rem] max-lg:tracking-[-0.75px]" data-cid="n454" data-component="heading">
              Checks its own page in a real browser
            </h3>
            <p className="w-full max-w-104.5 block mt-3.5 text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.16px] text-pretty" data-cid="n455">
              It opens the page at 1440, 768 and 390 pixels and fails it on slop. Then it fixes the top three problems in its own screenshots, up to three rounds.
            </p>
            <code className="h-7.5 flex mt-6.5 px-[0.6875rem] rounded-[9px] items-center self-start text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-[0.8125rem] leading-[1.1875rem] bg-surface-4 shadow-[var(--border)_0px_0px_0px_1px_inset] max-lg:mt-5" data-cid="n456">
              scripts/inspect.mjs
            </code>
          </div>
        </article>
        <article className="h-117 min-h-117 grid p-1.5 rounded-[28px] grid-cols-[568.922px_499.078px] grid-rows-[456px] bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:h-[47.3rem] max-lg:rounded-3xl max-md:grid-rows-[408.25px_336.562px] max-lg:grid-cols-1 max-lg:min-h-0 md:max-lg:h-[723.7px] md:max-lg:grid-rows-[426.25px_285.438px]" data-cid="n457">
          <div className="grid relative isolate py-16 px-11 rounded-[22px] items-center justify-items-center overflow-hidden [clip-path:inset(14%_16%_round_16px)] grid-cols-[minmax(0,_1fr)] grid-rows-1 aspect-[5/4] max-md:pt-10 max-md:pb-13 max-md:px-3.5 max-lg:rounded-[19px] max-md:[clip-path:inset(4%_6%_round_16px)] max-md:aspect-[0.811] md:max-lg:pt-12 md:max-lg:pb-15 md:max-lg:px-7 md:max-lg:aspect-[1.661]" data-cid="n458">
            <div className="w-[35.5625rem] h-full block absolute top-0 left-0 z-0 min-w-0 pointer-events-none max-md:w-[20.6875rem] md:max-lg:w-177" data-cid="n459" aria-hidden="true">
              <div className="w-[35.5625rem] h-114 block absolute top-0 left-0 transform-[matrix(1.3,0,0,1.3,0,0)] origin-[284.461px_228px] pointer-events-none max-md:w-[20.6875rem] max-md:h-[408.3px] max-md:origin-[165.5px_204.125px] md:max-lg:w-177 md:max-lg:h-[426.3px] md:max-lg:origin-[354px_213.125px]" style={{ backgroundImage: "linear-gradient(var(--clr-51) 0%, var(--clr-52) 52%, var(--clr-53) 100%)" }} data-cid="n460" />
              <div className="h-155 block absolute top-57 right-[-25.5px] left-[284.5px] -mt-77.5 -ml-77.5 rounded-[50%] pointer-events-none max-md:h-110 max-md:top-[204.1px] max-md:right-[-54.5px] max-md:left-[165.5px] max-md:-mt-55 max-md:-ml-55 md:max-lg:top-[213.1px] md:max-lg:right-11 md:max-lg:left-88.5" style={{ backgroundImage: "radial-gradient(closest-side, var(--clr-33), var(--surface-2) 55%, var(--clr-34))" }} data-cid="n461" />
              <div className="h-114 block absolute top-0 inset-x-0 transform-[matrix(1,0,0,1,0,-12)] pointer-events-none max-md:h-[408.3px] max-md:transform-[matrix(1,0,0,1,0,-4.8)] md:max-lg:h-[426.3px]" data-cid="n462">
                <i className="h-52.5 block absolute top-57 right-[179.5px] left-[284.5px] -mt-[6.5625rem] -ml-[6.5625rem] rounded-[50%] italic shadow-[var(--surface-5)_0px_0px_0px_1px_inset] pointer-events-none max-md:h-42.5 max-md:top-[204.1px] max-md:right-[80.5px] max-md:left-[165.5px] max-md:-mt-[5.3125rem] max-md:-ml-[5.3125rem] md:max-lg:top-[213.1px] md:max-lg:right-[15.5625rem] md:max-lg:left-88.5" data-cid="n463" />
                <i className="h-93 block absolute top-57 right-[98.5px] left-[284.5px] -mt-46.5 -ml-46.5 rounded-[50%] italic shadow-[var(--surface-5)_0px_0px_0px_1px_inset] pointer-events-none max-md:h-75 max-md:top-[204.1px] max-md:right-[15.5px] max-md:left-[165.5px] max-md:-mt-37.5 max-md:-ml-37.5 md:max-lg:top-[213.1px] md:max-lg:right-42 md:max-lg:left-88.5" data-cid="n464" />
              </div>
              <i className="h-px block absolute top-6.5 inset-x-0 italic bg-surface-5 pointer-events-none max-md:top-3 md:max-lg:top-4" data-cid="n465" />
              <i className="h-px block absolute bottom-6.5 inset-x-0 italic bg-surface-5 pointer-events-none max-md:bottom-3 md:max-lg:bottom-4" data-cid="n466" />
              <i className="w-px h-full block absolute top-0 left-7.5 italic bg-surface-5 pointer-events-none max-md:left-2.5 md:max-lg:left-4" data-cid="n467" />
              <i className="w-px h-full block absolute top-0 right-7.5 italic bg-surface-5 pointer-events-none max-md:right-2.5 md:max-lg:right-4" data-cid="n468" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-6.5 left-7.5 -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-3 max-md:left-2.5 md:max-lg:top-4 md:max-lg:left-4 before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n469" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-6.5 left-[33.625rem] -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-3 max-md:left-80 md:max-lg:top-4 md:max-lg:left-[43.1875rem] before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n470" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-[26.8125rem] left-7.5 -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-[395.3px] max-md:left-2.5 md:max-lg:top-[409.3px] md:max-lg:left-4 before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n471" />
              <i className="w-[0.8125rem] h-[0.8125rem] block absolute top-[26.8125rem] left-[33.625rem] -mt-1.5 -ml-1.5 italic pointer-events-none max-md:top-[395.3px] max-md:left-80 md:max-lg:top-[409.3px] md:max-lg:left-[43.1875rem] before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-1.5 before:w-px before:h-[0.8125rem] before:bg-clr-35 after:content-[''] after:block after:absolute after:inset-y-1.5 after:inset-x-0 after:w-[0.8125rem] after:h-px after:bg-clr-35" data-cid="n472" />
            </div>
            <div className="w-full max-w-99 h-[318.3px] block relative z-1 transform-[matrix(1,0,0,1,0,20)] max-md:h-[316.3px] max-md:transform-[matrix(1,0,0,1,0,8)]" data-cid="n473">
              <i className="w-99 h-[318.3px] block absolute top-0 left-0 opacity-[0.275] rounded-2xl italic bg-color-001 shadow-[var(--border)_0px_0px_0px_1px] transform-[matrix(0.88,0,0,0.88,0,28)] origin-[198px_159.125px] max-md:w-[18.9375rem] max-md:h-[316.3px] max-md:origin-[151.5px_158.125px]" data-cid="n474" aria-hidden="true" />
              <i className="w-99 h-[318.3px] block absolute top-0 left-0 opacity-55 rounded-2xl italic bg-color-001 shadow-[var(--border)_0px_0px_0px_1px] transform-[matrix(0.94,0,0,0.94,0,14)] origin-[198px_159.125px] max-md:w-[18.9375rem] max-md:h-[316.3px] max-md:origin-[151.5px_158.125px]" data-cid="n475" aria-hidden="true" />
              <div className="h-[318.3px] block relative z-1 rounded-2xl overflow-hidden text-sm leading-[1.25rem] tracking-[-0.07px] bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--clr-36)_0px_2px_4px_0px,var(--clr-37)_0px_34px_60px_-26px] max-md:h-[316.3px] max-md:text-[0.8125rem] max-md:tracking-[-0.06px]" data-cid="n476" aria-hidden="true">
                <div className="h-9.5 border-b border-solid border-b-border flex px-3.5 justify-between items-center gap-2.5 text-color-006 text-xs leading-4.5" data-cid="n477">
                  <span className="block" data-cid="n478">
                    Overview
                  </span>
                  <span className="block" data-cid="n479">
                    This week
                  </span>
                </div>
                <div className="w-full border-b border-solid border-b-border grid grid-cols-3 grid-rows-1 aspect-[4.5] max-md:aspect-[3.523]" data-cid="n480">
                  <div className="block min-w-0 pt-[0.8125rem] pb-3 px-3.5 max-md:pt-3 max-md:pb-[0.6875rem] max-md:px-[0.6875rem]" data-cid="n481">
                    <span className="block text-color-006 text-[0.6875rem] leading-[1.0625rem]" data-cid="n482">
                      Orders
                    </span>
                    <b className="h-6 flex mt-[0.1875rem] overflow-hidden text-[1.1875rem] font-semibold leading-6 tracking-[-0.38px] max-md:text-[1.0625rem] max-md:tracking-[-0.34px]" data-cid="n483">
                      <span className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }} data-cid="n484">
                        <span className="block transform-[matrix(1,0,0,1,0,-264)]" data-cid="n485">
                          <span className="block" data-cid="n486">
                            0
                          </span>
                          <span className="block" data-cid="n487">
                            1
                          </span>
                          <span className="block" data-cid="n488">
                            2
                          </span>
                          <span className="block" data-cid="n489">
                            3
                          </span>
                          <span className="block" data-cid="n490">
                            4
                          </span>
                          <span className="block" data-cid="n491">
                            5
                          </span>
                          <span className="block" data-cid="n492">
                            6
                          </span>
                          <span className="block" data-cid="n493">
                            7
                          </span>
                          <span className="block" data-cid="n494">
                            8
                          </span>
                          <span className="block" data-cid="n495">
                            9
                          </span>
                          <span className="block" data-cid="n496">
                            0
                          </span>
                          <span className="block" data-cid="n497">
                            1
                          </span>
                          <span className="block" data-cid="n498">
                            2
                          </span>
                          <span className="block" data-cid="n499">
                            3
                          </span>
                          <span className="block" data-cid="n500">
                            4
                          </span>
                          <span className="block" data-cid="n501">
                            5
                          </span>
                          <span className="block" data-cid="n502">
                            6
                          </span>
                          <span className="block" data-cid="n503">
                            7
                          </span>
                          <span className="block" data-cid="n504">
                            8
                          </span>
                          <span className="block" data-cid="n505">
                            9
                          </span>
                        </span>
                      </span>
                      <span className="block" data-cid="n506">
                        ,
                      </span>
                      {tileData.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                    </b>
                    <em className="block mt-0.5 text-color-025 text-[0.6875rem] font-semibold leading-[1.0625rem]" data-cid="n573">
                      +6.2%
                    </em>
                  </div>
                  <div className="border-l border-solid border-l-border block min-w-0 pt-[0.8125rem] pb-3 px-3.5 max-md:pt-3 max-md:pb-[0.6875rem] max-md:px-[0.6875rem]" data-cid="n574">
                    <span className="block text-color-006 text-[0.6875rem] leading-[1.0625rem]" data-cid="n575">
                      Revenue
                    </span>
                    <b className="h-6 flex mt-[0.1875rem] overflow-hidden text-[1.1875rem] font-semibold leading-6 tracking-[-0.38px] max-md:text-[1.0625rem] max-md:tracking-[-0.34px]" data-cid="n576">
                      <span className="block" data-cid="n577">
                        €
                      </span>
                      <span className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }} data-cid="n578">
                        <span className="block transform-[matrix(1,0,0,1,0,-312)]" data-cid="n579">
                          <span className="block" data-cid="n580">
                            0
                          </span>
                          <span className="block" data-cid="n581">
                            1
                          </span>
                          <span className="block" data-cid="n582">
                            2
                          </span>
                          <span className="block" data-cid="n583">
                            3
                          </span>
                          <span className="block" data-cid="n584">
                            4
                          </span>
                          <span className="block" data-cid="n585">
                            5
                          </span>
                          <span className="block" data-cid="n586">
                            6
                          </span>
                          <span className="block" data-cid="n587">
                            7
                          </span>
                          <span className="block" data-cid="n588">
                            8
                          </span>
                          <span className="block" data-cid="n589">
                            9
                          </span>
                          <span className="block" data-cid="n590">
                            0
                          </span>
                          <span className="block" data-cid="n591">
                            1
                          </span>
                          <span className="block" data-cid="n592">
                            2
                          </span>
                          <span className="block" data-cid="n593">
                            3
                          </span>
                          <span className="block" data-cid="n594">
                            4
                          </span>
                          <span className="block" data-cid="n595">
                            5
                          </span>
                          <span className="block" data-cid="n596">
                            6
                          </span>
                          <span className="block" data-cid="n597">
                            7
                          </span>
                          <span className="block" data-cid="n598">
                            8
                          </span>
                          <span className="block" data-cid="n599">
                            9
                          </span>
                        </span>
                      </span>
                      <span className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }} data-cid="n600">
                        <span className="block transform-[matrix(1,0,0,1,0,-432)]" data-cid="n601">
                          <span className="block" data-cid="n602">
                            0
                          </span>
                          <span className="block" data-cid="n603">
                            1
                          </span>
                          <span className="block" data-cid="n604">
                            2
                          </span>
                          <span className="block" data-cid="n605">
                            3
                          </span>
                          <span className="block" data-cid="n606">
                            4
                          </span>
                          <span className="block" data-cid="n607">
                            5
                          </span>
                          <span className="block" data-cid="n608">
                            6
                          </span>
                          <span className="block" data-cid="n609">
                            7
                          </span>
                          <span className="block" data-cid="n610">
                            8
                          </span>
                          <span className="block" data-cid="n611">
                            9
                          </span>
                          <span className="block" data-cid="n612">
                            0
                          </span>
                          <span className="block" data-cid="n613">
                            1
                          </span>
                          <span className="block" data-cid="n614">
                            2
                          </span>
                          <span className="block" data-cid="n615">
                            3
                          </span>
                          <span className="block" data-cid="n616">
                            4
                          </span>
                          <span className="block" data-cid="n617">
                            5
                          </span>
                          <span className="block" data-cid="n618">
                            6
                          </span>
                          <span className="block" data-cid="n619">
                            7
                          </span>
                          <span className="block" data-cid="n620">
                            8
                          </span>
                          <span className="block" data-cid="n621">
                            9
                          </span>
                        </span>
                      </span>
                      <span className="block" data-cid="n622">
                        .
                      </span>
                      <span className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }} data-cid="n623">
                        <span className="block transform-[matrix(1,0,0,1,0,-336)]" data-cid="n624">
                          <span className="block" data-cid="n625">
                            0
                          </span>
                          <span className="block" data-cid="n626">
                            1
                          </span>
                          <span className="block" data-cid="n627">
                            2
                          </span>
                          <span className="block" data-cid="n628">
                            3
                          </span>
                          <span className="block" data-cid="n629">
                            4
                          </span>
                          <span className="block" data-cid="n630">
                            5
                          </span>
                          <span className="block" data-cid="n631">
                            6
                          </span>
                          <span className="block" data-cid="n632">
                            7
                          </span>
                          <span className="block" data-cid="n633">
                            8
                          </span>
                          <span className="block" data-cid="n634">
                            9
                          </span>
                          <span className="block" data-cid="n635">
                            0
                          </span>
                          <span className="block" data-cid="n636">
                            1
                          </span>
                          <span className="block" data-cid="n637">
                            2
                          </span>
                          <span className="block" data-cid="n638">
                            3
                          </span>
                          <span className="block" data-cid="n639">
                            4
                          </span>
                          <span className="block" data-cid="n640">
                            5
                          </span>
                          <span className="block" data-cid="n641">
                            6
                          </span>
                          <span className="block" data-cid="n642">
                            7
                          </span>
                          <span className="block" data-cid="n643">
                            8
                          </span>
                          <span className="block" data-cid="n644">
                            9
                          </span>
                        </span>
                      </span>
                      <span className="block" data-cid="n645">
                        k
                      </span>
                    </b>
                    <em className="block mt-0.5 text-color-025 text-[0.6875rem] font-semibold leading-[1.0625rem]" data-cid="n646">
                      +3.1%
                    </em>
                  </div>
                  <div className="border-l border-solid border-l-border block min-w-0 pt-[0.8125rem] pb-3 px-3.5 max-md:pt-3 max-md:pb-[0.6875rem] max-md:px-[0.6875rem]" data-cid="n647">
                    <span className="block text-color-006 text-[0.6875rem] leading-[1.0625rem]" data-cid="n648">
                      Returns
                    </span>
                    <b className="h-6 flex mt-[0.1875rem] overflow-hidden text-[1.1875rem] font-semibold leading-6 tracking-[-0.38px] max-md:text-[1.0625rem] max-md:tracking-[-0.34px]" data-cid="n649">
                      <span className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }} data-cid="n650">
                        <span className="block transform-[matrix(1,0,0,1,0,-288)]" data-cid="n651">
                          <span className="block" data-cid="n652">
                            0
                          </span>
                          <span className="block" data-cid="n653">
                            1
                          </span>
                          <span className="block" data-cid="n654">
                            2
                          </span>
                          <span className="block" data-cid="n655">
                            3
                          </span>
                          <span className="block" data-cid="n656">
                            4
                          </span>
                          <span className="block" data-cid="n657">
                            5
                          </span>
                          <span className="block" data-cid="n658">
                            6
                          </span>
                          <span className="block" data-cid="n659">
                            7
                          </span>
                          <span className="block" data-cid="n660">
                            8
                          </span>
                          <span className="block" data-cid="n661">
                            9
                          </span>
                          <span className="block" data-cid="n662">
                            0
                          </span>
                          <span className="block" data-cid="n663">
                            1
                          </span>
                          <span className="block" data-cid="n664">
                            2
                          </span>
                          <span className="block" data-cid="n665">
                            3
                          </span>
                          <span className="block" data-cid="n666">
                            4
                          </span>
                          <span className="block" data-cid="n667">
                            5
                          </span>
                          <span className="block" data-cid="n668">
                            6
                          </span>
                          <span className="block" data-cid="n669">
                            7
                          </span>
                          <span className="block" data-cid="n670">
                            8
                          </span>
                          <span className="block" data-cid="n671">
                            9
                          </span>
                        </span>
                      </span>
                      <span className="block" data-cid="n672">
                        .
                      </span>
                      <span className="h-6 block overflow-hidden" style={{ maskImage: "linear-gradient(var(--clr-2) 0px, var(--clr-13) 16%, var(--clr-13) 86%, var(--clr-2) 100%)" }} data-cid="n673">
                        <span className="block transform-[matrix(1,0,0,1,0,-336)]" data-cid="n674">
                          <span className="block" data-cid="n675">
                            0
                          </span>
                          <span className="block" data-cid="n676">
                            1
                          </span>
                          <span className="block" data-cid="n677">
                            2
                          </span>
                          <span className="block" data-cid="n678">
                            3
                          </span>
                          <span className="block" data-cid="n679">
                            4
                          </span>
                          <span className="block" data-cid="n680">
                            5
                          </span>
                          <span className="block" data-cid="n681">
                            6
                          </span>
                          <span className="block" data-cid="n682">
                            7
                          </span>
                          <span className="block" data-cid="n683">
                            8
                          </span>
                          <span className="block" data-cid="n684">
                            9
                          </span>
                          <span className="block" data-cid="n685">
                            0
                          </span>
                          <span className="block" data-cid="n686">
                            1
                          </span>
                          <span className="block" data-cid="n687">
                            2
                          </span>
                          <span className="block" data-cid="n688">
                            3
                          </span>
                          <span className="block" data-cid="n689">
                            4
                          </span>
                          <span className="block" data-cid="n690">
                            5
                          </span>
                          <span className="block" data-cid="n691">
                            6
                          </span>
                          <span className="block" data-cid="n692">
                            7
                          </span>
                          <span className="block" data-cid="n693">
                            8
                          </span>
                          <span className="block" data-cid="n694">
                            9
                          </span>
                        </span>
                      </span>
                      <span className="block" data-cid="n695">
                        %
                      </span>
                    </b>
                    <em className="block mt-0.5 text-color-025 text-[0.6875rem] font-semibold leading-[1.0625rem]" data-cid="n696">
                      −0.3
                    </em>
                  </div>
                </div>
                <div className="block pt-3 px-3.5" data-cid="n697">
                  <div className="block text-color-006 text-[0.6875rem] leading-[1.0625rem]" data-cid="n698">
                    Revenue by day
                  </div>
                  <div className="h-29.5 grid relative mt-2.5 gap-[0.4375rem] grid-rows-[118px] grid-cols-7" data-cid="n699">
                    <span className="h-px border-t border-dashed border-t-clr-54 block absolute bottom-[4.5rem] inset-x-0 z-1 min-w-0" data-cid="n700">
                      <span className="w-[3.7125rem] h-4 block absolute bottom-[0.1875rem] px-1 rounded-sm text-color-002 text-[0.6875rem] leading-[1rem] bg-color-005" data-cid="n701">
                        avg €5.5k
                      </span>
                    </span>
                    <span className="flex relative items-end" data-cid="n702">
                      <i className="w-full h-[3.4375rem] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n703" />
                    </span>
                    <span className="flex relative items-end" data-cid="n704">
                      <i className="w-full h-[69.5px] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n705" />
                    </span>
                    <span className="flex relative items-end" data-cid="n706">
                      <i className="w-full h-[3.1125rem] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n707" />
                    </span>
                    <span className="flex relative items-end" data-cid="n708">
                      <i className="w-full h-[83.9px] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n709" />
                    </span>
                    <span className="flex relative items-end" data-cid="n710">
                      <i className="w-full h-[4.8375rem] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n711" />
                    </span>
                    <span className="flex relative items-end" data-cid="n712">
                      <i className="w-full h-[6.6375rem] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n713">
                        <b className="h-full block absolute top-0 inset-x-0 rounded-tl-[5px] rounded-tr-[5px] font-bold bg-clr-10" data-cid="n714" />
                      </i>
                      <span className="h-[22.5px] flex absolute bottom-[7.075rem] -inset-x-10 min-w-0 justify-center pointer-events-none" data-cid="n715">
                        <span className="block py-[0.1875rem] px-[0.4375rem] rounded-md text-color-001 text-[0.6875rem] font-semibold leading-[1.0625rem] whitespace-nowrap text-nowrap bg-foreground pointer-events-none" data-cid="n716">
                          Sat €8.1k
                        </span>
                      </span>
                    </span>
                    <span className="flex relative items-end" data-cid="n717">
                      <i className="w-full h-[3.85rem] block relative rounded-tl-[5px] rounded-tr-[5px] italic bg-color-013" data-cid="n718" />
                    </span>
                  </div>
                </div>
                <div className="border-t border-solid border-t-border grid pt-[0.4375rem] pb-3 px-3.5 gap-[0.4375rem] grid-rows-[15.8px] text-color-006 text-[0.6875rem] leading-[1rem] text-center grid-cols-7" data-cid="n719">
                  <span className="block" data-cid="n720">
                    Mon
                  </span>
                  <span className="block" data-cid="n721">
                    Tue
                  </span>
                  <span className="block" data-cid="n722">
                    Wed
                  </span>
                  <span className="block" data-cid="n723">
                    Thu
                  </span>
                  <span className="block" data-cid="n724">
                    Fri
                  </span>
                  <span className="block" data-cid="n725">
                    Sat
                  </span>
                  <span className="block" data-cid="n726">
                    Sun
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-114 flex py-12 pr-13 pl-12 flex-col justify-center max-md:h-[21.0375rem] max-lg:pt-6.5 max-lg:pb-7 max-lg:px-5.5 md:max-lg:h-[17.8375rem]" data-cid="n727">
            <span className="block mb-3 text-color-008 text-[0.9375rem] font-semibold leading-[1.375rem] tracking-[-0.14px]" data-cid="n728">
              App screens
            </span>
            <h3 className="block max-w-75 text-[2rem] font-semibold leading-[2.3125rem] tracking-[-0.96px] text-balance max-lg:max-w-60 max-lg:text-[1.5625rem] max-lg:leading-[1.8125rem] max-lg:tracking-[-0.75px]" data-cid="n729" data-component="heading">
              Builds dashboards and app screens too
            </h3>
            <p className="w-full max-w-104.5 block mt-3.5 text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.16px] text-pretty" data-cid="n730">
              Since v2.1 it tells a page from an app screen and builds admin views, settings and dashboards by their own rules: quiet panels, aligned figures, colour spent on data.
            </p>
            <code className="h-7.5 flex mt-6.5 px-[0.6875rem] rounded-[9px] items-center self-start text-color-002 [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-[0.8125rem] leading-[1.1875rem] bg-surface-4 shadow-[var(--border)_0px_0px_0px_1px_inset] max-lg:mt-5" data-cid="n731">
              inspect.mjs --app
            </code>
          </div>
        </article>
      </div>
    </section>
  );
}
