import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import ListRow4 from "../components/list-row4";
import ListRow5 from "../components/list-row5";
import ListRow6 from "../components/list-row6";
import { ListRow4_cids, ListRow5_cids, ListRow6_cids } from "../_cids";
import { ListRow4_styles, ListRow5_styles, ListRow6_styles } from "../_styles";
import { listRow4Data as listRow4DataContent, listRow5Data as listRow5DataContent, listRow6Data as listRow6DataContent } from "../content";
/** Site footer. */
export default function Footer({ listRow4Data = listRow4DataContent, listRow5Data = listRow5DataContent, listRow6Data = listRow6DataContent } = {}) {
  return (
    <footer className="h-[1185.3px] block relative isolate pt-[5.6rem] px-6 overflow-hidden text-accent bg-clr-7 max-md:h-[1199.1px] max-md:pt-18 max-md:px-4 md:max-lg:h-[57.8rem] md:max-lg:pt-16 2xl:h-[1331.3px] 2xl:pt-28" data-cid="n1257">
      <div className="flex flex-col items-center text-center" data-cid="n1258">
        <h2 className="block max-w-172.5 text-color-003 text-7xl font-semibold leading-[4.5rem] tracking-[-3.44px] text-balance max-md:max-w-[23.4375rem] max-md:text-[2.375rem] max-md:leading-9.5 max-md:tracking-[-1.82px] md:max-lg:max-w-105 md:max-lg:text-[2.6875rem] md:max-lg:leading-[2.6875rem] md:max-lg:tracking-[-2.06px] 2xl:max-w-195 2xl:text-[5.125rem] 2xl:leading-20.5 2xl:tracking-[-3.94px]" data-cid="n1259" data-component="heading">
          <span className="inline-block mt-[-5.7px] mb-[-11.5px] -mx-0.5 pt-[5.7px] pb-[11.5px] px-0.5 overflow-clip align-top max-md:-mt-[0.1875rem] max-md:-mb-1.5 max-md:mx-[-1.1px] max-md:pt-[0.1875rem] max-md:pb-1.5 max-md:px-[1.1px] md:max-lg:-mt-[0.2125rem] md:max-lg:mb-[-6.9px] md:max-lg:mx-[-1.3px] md:max-lg:pt-[0.2125rem] md:max-lg:pb-[6.9px] md:max-lg:px-[1.3px] 2xl:-mt-[0.4125rem] 2xl:mb-[-13.1px] 2xl:mx-[-2.5px] 2xl:pt-[0.4125rem] 2xl:pb-[13.1px] 2xl:px-[2.5px]" data-cid="n1260">
            <span className="inline-block" data-cid="n1261">
              Install
            </span>
          </span>
          {" "}
          <span className="inline-block mt-[-5.7px] mb-[-11.5px] -mx-0.5 pt-[5.7px] pb-[11.5px] px-0.5 overflow-clip align-top max-md:-mt-[0.1875rem] max-md:-mb-1.5 max-md:mx-[-1.1px] max-md:pt-[0.1875rem] max-md:pb-1.5 max-md:px-[1.1px] md:max-lg:-mt-[0.2125rem] md:max-lg:mb-[-6.9px] md:max-lg:mx-[-1.3px] md:max-lg:pt-[0.2125rem] md:max-lg:pb-[6.9px] md:max-lg:px-[1.3px] 2xl:-mt-[0.4125rem] 2xl:mb-[-13.1px] 2xl:mx-[-2.5px] 2xl:pt-[0.4125rem] 2xl:pb-[13.1px] 2xl:px-[2.5px]" data-cid="n1262">
            <span className="inline-block" data-cid="n1263">
              Taste
            </span>
          </span>
          {" "}
          <span className="inline-block mt-[-5.7px] mb-[-11.5px] -mx-0.5 pt-[5.7px] pb-[11.5px] px-0.5 overflow-clip align-top max-md:-mt-[0.1875rem] max-md:-mb-1.5 max-md:mx-[-1.1px] max-md:pt-[0.1875rem] max-md:pb-1.5 max-md:px-[1.1px] md:max-lg:-mt-[0.2125rem] md:max-lg:mb-[-6.9px] md:max-lg:mx-[-1.3px] md:max-lg:pt-[0.2125rem] md:max-lg:pb-[6.9px] md:max-lg:px-[1.3px] 2xl:-mt-[0.4125rem] 2xl:mb-[-13.1px] 2xl:mx-[-2.5px] 2xl:pt-[0.4125rem] 2xl:pb-[13.1px] 2xl:px-[2.5px]" data-cid="n1264">
            <span className="inline-block" data-cid="n1265">
              Skill
            </span>
          </span>
          {" "}
          <span className="inline-block mt-[-5.7px] mb-[-11.5px] -mx-0.5 pt-[5.7px] pb-[11.5px] px-0.5 overflow-clip align-top max-md:-mt-[0.1875rem] max-md:-mb-1.5 max-md:mx-[-1.1px] max-md:pt-[0.1875rem] max-md:pb-1.5 max-md:px-[1.1px] md:max-lg:-mt-[0.2125rem] md:max-lg:mb-[-6.9px] md:max-lg:mx-[-1.3px] md:max-lg:pt-[0.2125rem] md:max-lg:pb-[6.9px] md:max-lg:px-[1.3px] 2xl:-mt-[0.4125rem] 2xl:mb-[-13.1px] 2xl:mx-[-2.5px] 2xl:pt-[0.4125rem] 2xl:pb-[13.1px] 2xl:px-[2.5px]" data-cid="n1266">
            <span className="inline-block" data-cid="n1267">
              in
            </span>
          </span>
          {" "}
          <span className="inline-block mt-[-5.7px] mb-[-11.5px] -mx-0.5 pt-[5.7px] pb-[11.5px] px-0.5 overflow-clip align-top max-md:-mt-[0.1875rem] max-md:-mb-1.5 max-md:mx-[-1.1px] max-md:pt-[0.1875rem] max-md:pb-1.5 max-md:px-[1.1px] md:max-lg:-mt-[0.2125rem] md:max-lg:mb-[-6.9px] md:max-lg:mx-[-1.3px] md:max-lg:pt-[0.2125rem] md:max-lg:pb-[6.9px] md:max-lg:px-[1.3px] 2xl:-mt-[0.4125rem] 2xl:mb-[-13.1px] 2xl:mx-[-2.5px] 2xl:pt-[0.4125rem] 2xl:pb-[13.1px] 2xl:px-[2.5px]" data-cid="n1268">
            <span className="inline-block" data-cid="n1269">
              one
            </span>
          </span>
          {" "}
          <span className="inline-block mt-[-5.7px] mb-[-11.5px] -mx-0.5 pt-[5.7px] pb-[11.5px] px-0.5 overflow-clip align-top max-md:-mt-[0.1875rem] max-md:-mb-1.5 max-md:mx-[-1.1px] max-md:pt-[0.1875rem] max-md:pb-1.5 max-md:px-[1.1px] md:max-lg:-mt-[0.2125rem] md:max-lg:mb-[-6.9px] md:max-lg:mx-[-1.3px] md:max-lg:pt-[0.2125rem] md:max-lg:pb-[6.9px] md:max-lg:px-[1.3px] 2xl:-mt-[0.4125rem] 2xl:mb-[-13.1px] 2xl:mx-[-2.5px] 2xl:pt-[0.4125rem] 2xl:pb-[13.1px] 2xl:px-[2.5px]" data-cid="n1270">
            <span className="inline-block" data-cid="n1271">
              command.
            </span>
          </span>
        </h2>
        <div className="w-[34.5%] h-14.5 block max-w-full mt-[43.5px] max-md:w-full max-md:h-13.5 max-lg:mt-8 md:max-lg:w-[59.5%] 2xl:w-[23%] 2xl:mt-11" data-cid="n1272">
          <button className="w-full h-14.5 border border-solid border-clr-2 inline-flex max-w-full pr-[0.5625rem] pl-5.5 rounded-[15px] items-center gap-5.5 text-foreground text-left bg-color-003 shadow-[var(--clr-85)_0px_0px_0px_6px,var(--clr-86)_0px_28px_64px_-28px] cursor-pointer max-md:h-13.5 max-md:pl-3.5 max-md:justify-between max-md:gap-2 focus:shadow-[var(--clr-85)_0px_0px_0px_6px,var(--clr-86)_0px_28.1758px_64.5273px_-27.8242px]" data-cid="n1273" data-component="button" aria-label="Copy: npx skills add Leonxlnx/taste-skill" type="button">
            <code className="h-[23.3px] block min-w-0 overflow-hidden [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-base font-medium leading-[1.4375rem] tracking-[-0.15px] whitespace-nowrap text-nowrap max-md:h-4.5 max-md:text-xs max-md:leading-4.5 max-md:tracking-[-0.12px]" data-cid="n1274">
              <span className="inline opacity-40 mr-[0.5625rem] max-md:hidden" data-cid="n1275">
                $
              </span>
              <span className="inline" data-cid="n1276">
                <span className="inline" data-cid="n1277">
                  npx
                </span>
              </span>
              <span className="inline" data-cid="n1278">
                {" "}
                <span className="inline" data-cid="n1279">
                  skills
                </span>
              </span>
              <span className="inline" data-cid="n1280">
                {" "}
                <span className="inline" data-cid="n1281">
                  add
                </span>
              </span>
              <span className="inline" data-cid="n1282">
                {" "}
                <span className="inline" data-cid="n1283">
                  Leonxlnx/taste-skill
                </span>
              </span>
            </code>
            <span className="w-10 h-10 grid rounded-[9px] items-center shrink-0 grid-rows-[40px] justify-items-center bg-border grid-cols-[minmax(0,_1fr)]" data-cid="n1284" aria-hidden="true">
              <Icon4 cid={"n1285"} />
              <Icon5 cid={"n1286"} />
            </span>
            <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n1287" aria-live="polite" />
          </button>
        </div>
        <p className="block max-w-120 mt-4.5 text-color-012 text-base leading-[1.4375rem] text-balance" data-cid="n1288">
          Free and MIT licensed. Run it again any time to update.
        </p>
      </div>
      <div className="w-270 border-t border-solid border-t-clr-87 grid mt-[9.6rem] mx-auto pt-9 gap-8 grid-rows-[159.5px] grid-cols-[1.4fr_1fr_1fr_1fr] max-md:w-[21.4375rem] max-md:mt-24 max-md:grid-rows-[78.625px_159.5px_125.5px] max-md:grid-cols-2 max-lg:mx-0 md:max-lg:w-180 md:max-lg:mt-28 2xl:mt-42" data-cid="n1289">
        <div className="flex flex-col gap-3 max-md:col-span-full" data-cid="n1290">
          <a className="w-[101.9px] flex items-center gap-1.5 text-color-001 text-base font-semibold leading-[1.4375rem] tracking-[-0.46px] cursor-pointer" data-cid="n1291" data-component="link" href="/">
            <img className="w-[1.3125rem] h-[1.3125rem] block max-w-full overflow-clip aspect-[auto_21/21] align-middle text-clr-2 transform-[matrix(1,0,0,1,0,1)]" data-cid="n1292" data-component="image" alt="" height="21" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet="/assets/cloned/images/3ff46a787810.avif 1x" width="21" />
            Taste Skill
          </a>
          <p className="w-full max-w-70 block text-sm leading-[1.375rem]" data-cid="n1293">
            The design skill for AI coding agents. Built by Leon Lin and blueemi.
          </p>
        </div>
        <nav className="block" data-cid="n1294" data-component="nav" aria-label="Product">
          <h3 className="block text-color-012 text-[0.8125rem] font-medium leading-[1.25rem]" data-cid="n1295" data-component="heading">
            Product
          </h3>
          <ul className="grid mt-3.5 gap-2.5 grid-rows-[24px_24px_24px_24px] [list-style-type:none] list-outside grid-cols-1" data-cid="n1296">
            {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} cids={ListRow4_cids[i]} styles={ListRow4_styles[i]} />)}
          </ul>
        </nav>
        <nav className="h-[159.5px] block" data-cid="n1305" data-component="nav" aria-label="Open source">
          <h3 className="block text-color-012 text-[0.8125rem] font-medium leading-[1.25rem]" data-cid="n1306" data-component="heading">
            Open source
          </h3>
          <ul className="h-31.5 grid mt-3.5 gap-2.5 grid-rows-[24px_24px_24px_24px] [list-style-type:none] list-outside grid-cols-1" data-cid="n1307">
            {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} cids={ListRow5_cids[i]} styles={ListRow5_styles[i]} />)}
          </ul>
        </nav>
        <nav className="block" data-cid="n1316" data-component="nav" aria-label="People">
          <h3 className="block text-color-012 text-[0.8125rem] font-medium leading-[1.25rem]" data-cid="n1317" data-component="heading">
            People
          </h3>
          <ul className="h-23 grid mt-3.5 gap-2.5 grid-rows-[24px_24px_24px] [list-style-type:none] list-outside grid-cols-1" data-cid="n1318">
            {listRow6Data.map((d, i) => <ListRow6 key={i} d={d} cids={ListRow6_cids[i]} styles={ListRow6_styles[i]} />)}
          </ul>
        </nav>
      </div>
      <div className="w-270 h-[19.5px] flex relative mt-14 mx-auto flex-wrap justify-between gap-y-2 gap-x-6 text-color-012 text-[0.8125rem] leading-[1.25rem] max-md:w-[21.4375rem] max-md:h-21.5 max-md:flex-col max-lg:mx-0 md:max-lg:w-180 md:max-lg:h-[2.9375rem]" data-cid="n1325">
        <p className="block" data-cid="n1326">
          © 2026 Taste Skill. MIT licensed. Taste Skill has no token or coin.
        </p>
        <p className="block" data-cid="n1327">
          {"Photographs in the example pages come from open collections, "}
          <a className="inline text-accent underline cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001" data-cid="n1328" data-component="link" href="https://github.com/Leonxlnx/taste-skill/blob/main/examples/v2/CREDITS.md" rel="noreferrer" target="_blank">
            credited in the repo
          </a>
          .
        </p>
      </div>
      <div className="h-80 block relative mt-16 -mx-6 pointer-events-none max-md:h-37.5 max-md:mt-12 max-md:-mx-4 md:max-lg:h-48 md:max-lg:mt-10 2xl:h-100 2xl:mt-18" data-cid="n1329" aria-hidden="true">
        <div className="w-512 h-176 block absolute -bottom-88 -left-96 -z-1 opacity-55 transform-[matrix(0.72,0,0,0.42,0,98.56)] origin-[1024px_352px] pointer-events-none max-md:w-150 max-md:h-82.5 max-md:-bottom-[10.3125rem] max-md:left-[-112.5px] max-md:transform-[matrix(0.72,0,0,0.42,0,46.2)] max-md:origin-[300px_165px] md:max-lg:w-[76.8rem] md:max-lg:h-[26.4rem] md:max-lg:-bottom-[13.2rem] md:max-lg:-left-[14.4rem] md:max-lg:transform-[matrix(0.72,0,0,0.42,0,59.1347)] md:max-lg:origin-[614.391px_211.195px] 2xl:w-768 2xl:h-220 2xl:-bottom-110 2xl:-left-144 2xl:transform-[matrix(0.72,0,0,0.42,0,123.2)] 2xl:origin-[1536px_440px]" style={{ backgroundImage: "radial-gradient(closest-side, var(--clr-52) 0%, var(--clr-12) 10%, var(--clr-11) 26%, var(--clr-10) 40%, var(--color-008) 54%, var(--clr-88) 70%, var(--clr-89) 86%, var(--clr-90) 100%)" }} data-cid="n1330" />
        <p className="h-[21.2rem] flex absolute bottom-0 inset-x-0 justify-center text-color-003 text-[20rem] font-semibold leading-80 tracking-[-19.2px] whitespace-nowrap text-nowrap [translate:0px_96px] pointer-events-none max-md:h-[5.7125rem] max-md:text-[5.375rem] max-md:leading-[5.375rem] max-md:tracking-[-5.17px] max-md:[translate:0px_25.875px] md:max-lg:h-[203.5px] md:max-lg:text-[12rem] md:max-lg:leading-48 md:max-lg:tracking-[-11.52px] md:max-lg:[translate:0px_57.6px] 2xl:h-[31.8rem] 2xl:text-[30rem] 2xl:leading-120 2xl:tracking-[-28.8px] 2xl:[translate:0px_144px]" data-cid="n1331">
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1332">
            T
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1333">
            a
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1334">
            s
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1335">
            t
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1336">
            e
          </span>
          <span className="w-[5%] block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:w-[4.5%] max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1337">
            {" "}
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1338">
            S
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1339">
            k
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1340">
            i
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1341">
            l
          </span>
          <span className="block pt-[1.2rem] [background-clip:text] transform-[matrix(1,0,0,1,0,352.755)] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)] pointer-events-none max-md:pt-[0.325rem] max-md:transform-[matrix(1,0,0,1,0,95.0788)] md:max-lg:pt-[11.5px] md:max-lg:transform-[matrix(1,0,0,1,0,211.656)] 2xl:pt-[1.8rem] 2xl:transform-[matrix(1,0,0,1,0,529.149)]" style={{ backgroundImage: "linear-gradient(var(--color-003) 34%, var(--clr-12) 84%)" }} data-cid="n1342">
            l
          </span>
        </p>
      </div>
    </footer>
  );
}
