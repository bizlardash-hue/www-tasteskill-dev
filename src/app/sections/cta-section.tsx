import Icon14 from "../svgs/svg-icon14";
import Icon15 from "../svgs/svg-icon15";
import Icon16 from "../svgs/svg-icon16";
import Icon17 from "../svgs/svg-icon17";
import Icon18 from "../svgs/svg-icon18";
import Icon19 from "../svgs/svg-icon19";
import Icon20 from "../svgs/svg-icon20";
import Icon21 from "../svgs/svg-icon21";
import Icon22 from "../svgs/svg-icon22";
import Icon23 from "../svgs/svg-icon23";
import Icon24 from "../svgs/svg-icon24";
import Icon25 from "../svgs/svg-icon25";
import Icon26 from "../svgs/svg-icon26";
import Icon27 from "../svgs/svg-icon27";
import Logo2, { type Logo2Data } from "../components/logo2";
import MediaTile3, { type MediaTile3Data } from "../components/media-tile3";
import Icon28 from "../svgs/svg-icon28";
import Icon29 from "../svgs/svg-icon29";
import Icon30 from "../svgs/svg-icon30";
import Icon31 from "../svgs/svg-icon31";
import Icon32 from "../svgs/svg-icon32";
import Tile2, { type Tile2Data } from "../components/tile2";
import Icon33 from "../svgs/svg-icon33";
import { Logo2_cids, MediaTile3_cids, Tile2_cids } from "../_cids";
import { MediaTile3_styles, Tile2_styles } from "../_styles";
import { ctaSectionContent } from "../content";
const Logo2_data: Logo2Data[] = [
    {  },
    {  },
    {  }
];
const MediaTile3_data: MediaTile3Data[] = [
    { kind: "icon", text: "Building the website", text2: "index.html, styles.css" },
    { kind: "icon", text: "Starting the preview", text2: "127.0.0.1:4173" },
    { text: "Reviewing the design", text2: "1440 and 390" }
];
const Tile2_data: Tile2Data[] = [
    {  },
    {  },
    {  }
];
/** Cta section. */
export default function CtaSection({ logo2Data = Logo2_data, mediaTile3Data = MediaTile3_data, tile2Data = Tile2_data, content = ctaSectionContent } = {}) {
  return (
    <section className="block relative pt-36 max-md:pt-26" data-cid="n944" aria-labelledby="tastecode-title">
      <div className="w-270 block mx-auto max-md:w-[21.4375rem] md:max-lg:w-180" data-cid="n945">
        <div className="h-[52.2625rem] block relative isolate pt-14 px-14 rounded-[28px] overflow-hidden text-color-003 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] max-md:h-[1270.3px] max-md:pt-8 max-md:px-5 max-md:rounded-[22px] md:max-lg:h-[72.775rem]" style={{ backgroundImage: "radial-gradient(40% 44% at 94% -8%, var(--clr-16), var(--clr-2) 70%), linear-gradient(var(--clr-7) 0%, var(--clr-7) 42%, var(--clr-63) 72%, var(--clr-64) 100%)" }} data-cid="n946">
          <div className="grid items-end gap-8 grid-cols-[598.578px_337.422px] grid-rows-[186.2px] max-lg:items-start max-lg:gap-6 max-md:grid-rows-[246.5px_98px] max-lg:grid-cols-1 md:max-lg:grid-rows-[171.078px_44px]" data-cid="n947">
            <div className="block" data-cid="n948">
              <p className="w-full max-w-136 flex mt-3.5 items-center gap-2.5 text-color-012 text-[1.0625rem] leading-[1.625rem] text-pretty" data-cid="n949">
                <img className="w-9 h-9 block max-w-full rounded-[9px] overflow-clip aspect-[auto_36/36] align-middle shadow-[var(--surface-3)_0px_0px_0px_1px]" data-cid="n950" data-component="image" alt="" height="36" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="36" />
                <span className="h-[26.3px] block max-md:h-[52.7px]" data-cid="n951">
                  <b className="inline text-color-001 font-semibold" data-cid="n952">
                    TasteCode
                  </b>
                  {" by the Taste Skill team"}
                </span>
              </p>
              <h2 className="block mt-5.5 text-[2.75rem] font-semibold leading-[3rem] tracking-[-1.54px] text-balance max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-1.05px]" data-cid="n953" data-component="heading" id="tastecode-title">
                {content.title}
              </h2>
              <p className="w-full max-w-136 block mt-3.5 text-color-012 text-[1.0625rem] leading-[1.625rem] text-pretty" data-cid="n954">
                A workspace for Codex, Claude Code and Grok with a design agent built in. Free and open source.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5" data-cid="n955">
              <a className="h-11 flex px-4.5 rounded-[11px] justify-center items-center gap-2 text-foreground text-[0.9375rem] font-medium leading-[1.4375rem] tracking-[-0.15px] whitespace-nowrap text-nowrap bg-color-003 cursor-pointer max-md:flex-1 hover:bg-color-001" data-cid="n956" data-component="button" href={content.actions[0].href} rel="noreferrer" target="_blank">
                {content.actions[0].label}
                <Icon14 cid={"n957"} />
              </a>
              <a className="h-11 flex px-4.5 rounded-[11px] justify-center items-center gap-2 text-color-001 text-[0.9375rem] font-medium leading-[1.4375rem] tracking-[-0.15px] whitespace-nowrap text-nowrap bg-surface-3 shadow-[var(--surface-3)_0px_0px_0px_1px_inset] cursor-pointer max-md:flex-1" data-cid="n958" data-component="button" href={content.actions[1].href} rel="noreferrer" target="_blank">
                <Icon15 cid={"n959"} />
                {content.actions[1].label}
              </a>
            </div>
          </div>
          <div className="h-140 block relative mt-13 -mb-4.5 max-md:h-[53.2375rem] max-md:mt-9 md:max-lg:h-[835.3px]" data-cid="n960">
            <p className="w-px h-px block absolute max-w-136 mt-3.5 -mb-px -mx-px overflow-hidden text-color-012 text-[1.0625rem] leading-[1.625rem] text-pretty [clip-path:inset(50%)]" data-cid="n961">
              A TasteCode window with its design agent at work on a brief for a coffee shop website. It locks in the brief, creates a brand direction, plans the page, gathers photographs, builds the site, starts a local preview and reviews the page at 1440 and 390 pixels wide.
            </p>
            <div className="w-[133.1rem] h-196 block absolute -bottom-98 -left-[36.3rem] opacity-50 transform-[matrix(0.72,0,0,0.5,0,0)] origin-[1064.8px_784px] pointer-events-none max-md:w-[53.025rem] max-md:h-[53.2375rem] max-md:bottom-[-425.9px] max-md:left-[-272.7px] max-md:origin-[424.188px_851.75px] md:max-lg:w-[83.6rem] md:max-lg:h-[73.0875rem] md:max-lg:bottom-[-584.7px] md:max-lg:-left-[22.8rem] md:max-lg:origin-[668.797px_1169.39px]" style={{ backgroundImage: "radial-gradient(50% 50%, var(--clr-65) 0%, var(--clr-66) 12%, var(--clr-67) 24%, var(--clr-68) 38%, var(--clr-69) 56%, var(--clr-70) 78%)" }} data-cid="n962" aria-hidden="true" />
            <div className="h-100 block absolute -bottom-50 -inset-x-[6.05rem] z-2 opacity-[0.6807] [mix-blend-mode:screen] pointer-events-none max-md:h-65 max-md:-bottom-32.5 max-md:-inset-x-[7.575rem] max-md:opacity-[0.9885] md:max-lg:-inset-x-[3.8rem] md:max-lg:opacity-[0.9913] 2xl:opacity-[0.8985]" style={{ backgroundImage: "radial-gradient(50% 50%, var(--clr-71) 0%, var(--clr-72) 20%, var(--clr-73) 44%, var(--clr-41) 70%)" }} data-cid="n963" aria-hidden="true" />
            <div className="block relative z-1 transform-[matrix3d(0.88,0,0,0,0,0.776994,0.413135,0,0,-0.469472,0.882948,0,0,134.4,0,1)] origin-[484px_560px] mx-auto max-md:transform-[matrix(1,0,0,1,0,72)] max-md:origin-[151.5px_425.875px] max-md:mx-0 md:max-lg:transform-[matrix3d(0.88,0,0,0,0,0.776994,0.413135,0,0,-0.469472,0.882948,0,0,200.467,0,1)] md:max-lg:origin-[304px_835.281px] before:content-[''] before:block before:absolute before:inset-0 before:w-242 before:h-140 before:shadow-[var(--clr-74)_0px_-24px_80px_-28px] before:rounded-tl-[14px] max-md:before:w-[18.9375rem] max-md:before:h-[53.2375rem] md:max-lg:before:w-152 md:max-lg:before:h-[835.3px]" data-cid="n964">
              <div className="w-full h-140 grid relative rounded-tl-[14px] rounded-tr-[14px] grid-cols-[184px_367.766px_416.234px] grid-rows-[560px] overflow-hidden text-color-004 [font-family:system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_sans-serif] text-[0.8125rem] leading-[1.25rem] tracking-[-0.04px] text-left bg-clr-75 max-md:h-[53.2375rem] max-md:rounded-tl-xl max-md:rounded-tr-xl max-md:grid-cols-[303px] max-md:grid-rows-[441.75px_410px] max-md:leading-[1.1875rem] md:max-lg:h-[835.3px] md:max-lg:grid-cols-[608px] md:max-lg:grid-rows-[395.281px_440px] before:content-[''] before:block before:absolute before:inset-0 before:z-3 before:w-242 before:h-140 before:shadow-[var(--surface-3)_0px_0px_0px_1px_inset] before:rounded-tl-[14px] max-md:before:w-[18.9375rem] max-md:before:h-[53.2375rem] max-md:before:rounded-tl-xl md:max-lg:before:w-152 md:max-lg:before:h-[835.3px]" data-cid="n965" aria-hidden="true">
                <aside className="h-140 border-r border-solid border-r-clr-76 flex min-w-0 py-3 px-2.5 flex-col text-color-009 text-[0.8125rem] leading-[1.1875rem] bg-clr-77 max-lg:hidden" data-cid="n966">
                  <div className="flex pt-[0.3125rem] pb-4.5 px-[0.4375rem] gap-[0.4375rem]" data-cid="n967">
                    <i className="w-[0.6875rem] h-[0.6875rem] block rounded-[50%] italic bg-clr-78" data-cid="n968" />
                    <i className="w-[0.6875rem] h-[0.6875rem] block rounded-[50%] italic bg-clr-79" data-cid="n969" />
                    <i className="w-[0.6875rem] h-[0.6875rem] block rounded-[50%] italic bg-clr-80" data-cid="n970" />
                  </div>
                  <div className="h-[5.5625rem] grid gap-px grid-cols-[163px] grid-rows-[29px_29px_29px]" data-cid="n971">
                    <div className="flex justify-between items-center" data-cid="n972">
                      <span className="h-[1.8125rem] flex px-2 rounded-lg items-center gap-[0.5625rem] overflow-hidden whitespace-nowrap text-nowrap" data-cid="n973">
                        <Icon16 cid={"n974"} />
                        New chat
                      </span>
                      <span className="w-6.5 h-6.5 grid items-center grid-cols-[26px] grid-rows-[26px] justify-items-center text-muted-foreground" data-cid="n975">
                        <Icon17 cid={"n976"} />
                      </span>
                    </div>
                    <span className="h-[1.8125rem] flex px-2 rounded-lg items-center gap-[0.5625rem] overflow-hidden whitespace-nowrap text-nowrap" data-cid="n977">
                      <Icon18 cid={"n978"} />
                      New project
                    </span>
                    <span className="h-[1.8125rem] flex px-2 rounded-lg items-center gap-[0.5625rem] overflow-hidden whitespace-nowrap text-nowrap" data-cid="n979">
                      <Icon19 cid={"n980"} />
                      Pull requests
                    </span>
                  </div>
                  <div className="flex pt-4.5 pb-1.5 px-2 justify-between items-center text-muted text-xs leading-[1.0625rem]" data-cid="n981">
                    <span className="block" data-cid="n982">
                      Projects
                    </span>
                    <Icon20 cid={"n983"} />
                  </div>
                  <ul className="h-[8.9375rem] block [list-style-type:none] list-outside" data-cid="n984">
                    <li className="list-item" data-cid="n985">
                      <span className="h-[1.8125rem] flex px-2 rounded-lg items-center gap-[0.5625rem] overflow-hidden whitespace-nowrap text-nowrap" data-cid="n986">
                        <Icon21 cid={"n987"} />
                        bohne-soehne
                      </span>
                      <ul className="block [list-style-type:none] list-outside" data-cid="n988">
                        <li className="h-7 flex ml-[0.9375rem] pr-2 pl-3.5 rounded-lg items-center gap-2 text-color-004 whitespace-nowrap text-nowrap bg-color-023" data-cid="n989">
                          <span className="h-[1.175rem] block min-w-0 flex-1 overflow-hidden" data-cid="n990">
                            {"Bohne & Söhne website"}
                          </span>
                          <span className="w-3 h-3 block shrink-0 text-muted-foreground" data-cid="n991">
                            <Icon22 cid={"n992"} />
                          </span>
                        </li>
                        <li className="h-7 flex ml-[0.9375rem] pr-2 pl-3.5 rounded-lg items-center gap-2 text-muted-foreground whitespace-nowrap text-nowrap" data-cid="n993">
                          <span className="h-[1.175rem] block min-w-0 flex-1 overflow-hidden" data-cid="n994">
                            Opening hours copy
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li className="list-item" data-cid="n995">
                      <span className="h-[1.8125rem] flex px-2 rounded-lg items-center gap-[0.5625rem] overflow-hidden whitespace-nowrap text-nowrap" data-cid="n996">
                        <Icon21 cid={"n997"} />
                        nachtschicht
                      </span>
                    </li>
                    <li className="list-item" data-cid="n998">
                      <span className="h-[1.8125rem] flex px-2 rounded-lg items-center gap-[0.5625rem] overflow-hidden whitespace-nowrap text-nowrap" data-cid="n999">
                        <Icon21 cid={"n1000"} />
                        portfolio
                      </span>
                    </li>
                  </ul>
                </aside>
                <div className="h-140 flex min-w-0 flex-col max-md:h-[27.6125rem] md:max-lg:h-[395.3px]" data-cid="n1001">
                  <div className="h-11 flex pr-3.5 pl-5.5 items-center shrink-0 gap-2 max-md:h-10.5 max-lg:pr-12 max-md:pl-4" data-cid="n1002">
                    <span className="h-[19.5px] block min-w-0 overflow-hidden font-semibold whitespace-nowrap text-nowrap max-md:h-[1.175rem]" data-cid="n1003">
                      {"Bohne & Söhne website"}
                    </span>
                    <Icon23 cid={"n1004"} />
                    <span className="flex ml-[120.3px] gap-3 text-muted-foreground max-md:ml-[32.7px] md:max-lg:ml-[326.5px]" data-cid="n1005">
                      <Icon24 cid={"n1006"} />
                      <Icon25 cid={"n1007"} />
                    </span>
                  </div>
                  <div className="h-129 flex pt-1.5 px-5.5 flex-col flex-1 max-md:h-[24.9875rem] max-md:pt-0.5 max-md:pb-3.5 max-md:px-4 md:max-lg:h-[351.3px] md:max-lg:pb-4" data-cid="n1008">
                    <div className="block max-w-[94%] py-[0.5625rem] px-[0.8125rem] rounded-xl self-end leading-[1.25rem] bg-color-023 max-md:max-w-full max-md:leading-[1.1875rem]" data-cid="n1009">
                      {"Build a one-page website for Bohne & Söhne, a coffee shop and roastery in Leipzig: the storefront, roast day and the questions people ask at the counter."}
                    </div>
                    <ol className="h-[15.9375rem] flex mt-4 flex-col [list-style-type:none] list-outside max-md:h-[272.3px]" data-cid="n1010">
                      <li className="list-item pt-1 pb-2" data-cid="n1011">
                        Brief locked in. Starting the design.
                      </li>
                      <li className="h-[1.9375rem] min-h-[1.9375rem] flex items-center gap-2.5" data-cid="n1012">
                        <span className="w-[0.9375rem] h-[0.9375rem] block relative shrink-0" data-cid="n1013">
                          <span className="w-[0.9375rem] h-[0.9375rem] block absolute top-0 left-0 opacity-0 text-muted-foreground transform-[matrix(0.5,0,0,0.5,0,0)] origin-[7.5px_7.5px]" data-cid="n1014">
                            <Icon26 cid={"n1015"} />
                          </span>
                          <Icon27 cid={"n1016"} />
                        </span>
                        <span className="h-[19.5px] block opacity-70 whitespace-nowrap text-nowrap max-md:h-auto" data-cid="n1017">
                          Creating brand direction
                        </span>
                        <span className="flex ml-[4.875rem] pl-3 gap-1 text-muted text-xs leading-4.5 whitespace-nowrap text-nowrap max-md:ml-[1.9rem] md:max-lg:ml-[19.8875rem]" data-cid="n1018">
                          <i className="w-[0.8125rem] h-[0.8125rem] block rounded-sm italic bg-color-021 shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n1019" />
                          <i className="w-[0.8125rem] h-[0.8125rem] block rounded-sm italic bg-clr-81 shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n1020" />
                          <i className="w-[0.8125rem] h-[0.8125rem] block rounded-sm italic bg-clr-82 shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n1021" />
                          <i className="w-[0.8125rem] h-[0.8125rem] block rounded-sm italic bg-clr-83 shadow-[var(--surface-3)_0px_0px_0px_1px_inset]" data-cid="n1022" />
                        </span>
                      </li>
                      <li className="h-[1.9375rem] min-h-[1.9375rem] flex items-center gap-2.5" data-cid="n1023">
                        <span className="w-[0.9375rem] h-[0.9375rem] block relative shrink-0" data-cid="n1024">
                          <span className="w-[0.9375rem] h-[0.9375rem] block absolute top-0 left-0 opacity-0 text-muted-foreground transform-[matrix(0.5,0,0,0.5,0,0)] origin-[7.5px_7.5px]" data-cid="n1025">
                            <Icon26 cid={"n1026"} />
                          </span>
                          <Icon27 cid={"n1027"} />
                        </span>
                        <span className="h-[19.5px] block opacity-70 whitespace-nowrap text-nowrap max-md:h-auto" data-cid="n1028">
                          Planning the page
                        </span>
                        <span className="block ml-[7.575rem] pl-3 text-muted text-xs leading-4.5 whitespace-nowrap text-nowrap max-md:hidden md:max-lg:ml-[22.5875rem]" data-cid="n1029">
                          4 sections
                        </span>
                      </li>
                      <li className="h-[1.9375rem] min-h-[1.9375rem] flex items-center gap-2.5" data-cid="n1030">
                        <span className="w-[0.9375rem] h-[0.9375rem] block relative shrink-0" data-cid="n1031">
                          <span className="w-[0.9375rem] h-[0.9375rem] block absolute top-0 left-0 opacity-0 text-muted-foreground transform-[matrix(0.5,0,0,0.5,0,0)] origin-[7.5px_7.5px]" data-cid="n1032">
                            <Icon26 cid={"n1033"} />
                          </span>
                          <Icon27 cid={"n1034"} />
                        </span>
                        <span className="h-[19.5px] block opacity-70 whitespace-nowrap text-nowrap max-md:h-auto" data-cid="n1035">
                          Gathering assets
                        </span>
                        <span className="flex ml-[94.5px] pl-3 gap-1 text-muted text-xs leading-4.5 whitespace-nowrap text-nowrap max-md:ml-[45.5px] md:max-lg:ml-[20.925rem]" data-cid="n1036">
                          {logo2Data.map((d, i) => <Logo2 key={i} d={d} cids={Logo2_cids[i]} />)}
                        </span>
                      </li>
                      {mediaTile3Data.map((d, i) => <MediaTile3 key={i} d={d} cids={MediaTile3_cids[i]} styles={MediaTile3_styles[i]} />)}
                      <li className="h-[37.5px] list-item invisible opacity-0 pt-2.5 pb-2 transform-[matrix(1,0,0,1,0,10)] max-md:h-auto" data-cid="n1064">
                        The page passed review. It is open in the preview.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="h-140 border-l border-solid border-l-clr-76 flex min-w-0 flex-col bg-clr-77 max-md:h-102.5 max-lg:border-t max-lg:border-t-clr-76 max-lg:border-l-[0] max-lg:border-initial max-lg:border-l-[initial] md:max-lg:h-110" data-cid="n1065">
                  <div className="h-11 flex relative px-2.5 items-center shrink-0 gap-1" data-cid="n1066">
                    <span className="w-21 h-7 block absolute min-w-0 rounded-lg bg-color-023" data-cid="n1067" />
                    <span className="w-[21.5%] h-7 flex relative z-1 justify-center items-center gap-[0.4375rem] text-[0.8125rem] leading-[1.1875rem] max-md:w-[29.5%] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:w-[14.5%]" data-cid="n1068">
                      <Icon28 cid={"n1069"} />
                      Browser
                    </span>
                    <span className="w-[21.5%] h-7 flex relative z-1 opacity-60 justify-center items-center gap-[0.4375rem] text-[0.8125rem] leading-[1.1875rem] max-md:w-[29.5%] max-md:[font-size:inherit] max-md:leading-[inherit] md:max-lg:w-[14.5%]" data-cid="n1070">
                      <Icon29 cid={"n1071"} />
                      Diff
                    </span>
                  </div>
                  <div className="h-129 block relative flex-1 max-md:h-[22.8125rem] md:max-lg:h-[24.6875rem]" data-cid="n1072">
                    <div className="h-full flex absolute top-0 inset-x-0 flex-col" data-cid="n1073">
                      <div className="h-10 flex pr-2.5 pl-3.5 items-center shrink-0 gap-1.5 text-muted-foreground" data-cid="n1074">
                        <Icon30 cid={"n1075"} />
                        <span className="h-6.5 flex min-w-0 px-2.5 rounded-[7px] items-center flex-1 text-xs leading-4.5 whitespace-nowrap text-nowrap bg-color-021" data-cid="n1076">
                          127.0.0.1:4173
                        </span>
                        <span className="h-6.5 flex opacity-[0.6429] pr-2 pl-1.5 rounded-[7px] items-center gap-1 text-color-009 text-xs leading-[1.0625rem] bg-color-021 transform-[matrix(0.8215,0,0,0.8215,0,0)] origin-[28.7188px_13px] max-lg:invisible max-lg:opacity-0 max-lg:transform-[matrix(0.5,0,0,0.5,0,0)] 2xl:invisible 2xl:opacity-0 2xl:transform-[matrix(0.5,0,0,0.5,0,0)]" data-cid="n1077">
                          <Icon31 cid={"n1078"} />
                          1440
                        </span>
                        <span className="h-6.5 flex invisible opacity-0 pr-2 pl-1.5 rounded-[7px] items-center gap-1 text-color-009 text-xs leading-[1.0625rem] bg-color-021 transform-[matrix(0.5,0,0,0.5,0,0)] origin-[25.2891px_13px]" data-cid="n1079">
                          <Icon32 cid={"n1080"} />
                          390
                        </span>
                      </div>
                      <div className="block relative mx-2.5 rounded-tl-lg rounded-tr-lg flex-1 overflow-hidden bg-color-021" data-cid="n1081">
                        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden [clip-path:inset(0%)] max-md:[clip-path:inset(0%_0%_0.0079%)] md:max-lg:[clip-path:inset(0%_0%_0.0168%)]" data-cid="n1082">
                          <div className="block transform-[matrix(1,0,0,1,0,-15.1938)] origin-[197.617px_0px] max-lg:transform-[matrix(1.0003,0,0,1.0003,0,0)] max-md:origin-[141.5px_0px] md:max-lg:origin-[294px_0px] 2xl:transform-[matrix(1,0,0,1,0,-2.2804)]" data-cid="n1083">
                            {tile2Data.map((d, i) => <Tile2 key={i} d={d} cids={Tile2_cids[i]} styles={Tile2_styles[i]} />)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-7 h-7 grid absolute top-2 right-[0.5625rem] z-2 rounded-lg items-center grid-cols-[28px] grid-rows-[28px] justify-items-center text-muted-foreground text-center cursor-pointer" data-cid="n1087" data-component="button" aria-label="Pause the TasteCode demo" title="Pause the TasteCode demo" type="button">
                <Icon33 cid={"n1088"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
