import Icon7 from "../svgs/svg-icon7";
import ListRow, { type ListRowData } from "../components/list-row";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import Icon8 from "../svgs/svg-icon8";
import { ListRow_cids, ListRow2_cids } from "../_cids";
import { ListRow_styles, ListRow2_styles } from "../_styles";
const ListRow_data: ListRowData[] = [
    { text: "The name as a monument", text2: "The name, set huge", text3: "1", text4: "The name, set huge" },
    { text: "Sentence is the layout", text2: "One sentence, poster size", text3: "2", text4: "One sentence, poster size" },
    { text: "The pinned poster", text2: "One thing stays put", text3: "3", text4: "One thing stays put" },
    { text: "Colour chapters", text2: "A colour per section", text3: "4", text4: "A colour per section" },
    { text: "The place carries it", text2: "A full-screen photo", text3: "5", text4: "A full-screen photo" },
    { text: "The page is the object", text2: "Built like a menu", text3: "6", text4: "Built like a menu" },
    { text: "One motif", text2: "One shape runs it all", text3: "7", text4: "One shape runs it all" },
    { text: "The product performs", text2: "The product, working", text3: "8", text4: "The product, working" },
    { text: "The quiet instrument", text2: "Small type, big space", text3: "9", text4: "Small type, big space" },
    { text: "The object, large", text2: "One object, cropped", text3: "10", text4: "One object, cropped" },
    { text: "The specimen catalogue", text2: "Items as specimens", text3: "11", text4: "Items as specimens" },
    { text: "Dressed as something else", text2: "Fintech as streetwear", text3: "12", text4: "Fintech as streetwear" },
    { text: "The contact sheet", text2: "All the work, small", text3: "13", text4: "All the work, small" },
    { text: "The printed annual", text2: "Set like a magazine", text3: "14", text4: "Set like a magazine" },
    { text: "Loud and flat", text2: "Like a street poster", text3: "15", text4: "Like a street poster" },
    { text: "The split stage", text2: "One half never moves", text3: "16", text4: "One half never moves" },
    { text: "The well-kept board", text2: "Tiles, edge to edge", text3: "17", text4: "Tiles, edge to edge" },
    { text: "Uneven photographs", text2: "Like a gallery wall", text3: "18", text4: "Like a gallery wall" },
    { text: "The dark room", text2: "Lit things in the dark", text3: "19", text4: "Lit things in the dark" },
    { text: "Type and nothing else", text2: "Only words and colour", text3: "20", text4: "Only words and colour" }
];
const ListRow2_data: ListRow2Data[] = [
    { text: "3", text2: "The pinned poster", text3: "One thing stays put" },
    { text: "10", text2: "The object, large", text3: "One object, cropped" },
    { text: "17", text2: "The well-kept board", text3: "Tiles, edge to edge" }
];
/** Twenty Directions Three section. */
export default function TwentyDirectionsThreeSection({ listRowData = ListRow_data, listRow2Data = ListRow2_data } = {}) {
  return (
    <section className="h-760 block relative bg-background max-md:h-[192.85rem] md:max-lg:h-[243.2rem] 2xl:h-1026" data-cid="n126" aria-labelledby="drum-title" id="directions">
      <div className="h-200 block sticky top-0 overflow-clip bg-background max-md:h-203 md:max-lg:h-256 2xl:h-270" data-cid="n127">
        <header className="h-[212.3px] block absolute top-[94.9px] inset-x-[3.125rem] z-3 max-w-220 mx-[9.375rem] text-center max-md:h-[198.7px] max-md:top-[89.3px] max-md:inset-x-4 max-lg:mx-0 md:max-lg:h-[13.2125rem] md:max-lg:top-56 md:max-lg:inset-x-[1.875rem] 2xl:h-[241.7px] 2xl:top-[11.2625rem] 2xl:inset-x-14 2xl:mx-116" data-cid="n128">
          <p className="inline-flex mb-4 justify-center items-center gap-[0.4375rem] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[-0.15px]" data-cid="n129">
            <Icon7 cid={"n130"} />
            The draw
          </p>
          <h2 className="block [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-[3.125rem] font-semibold leading-[3.1875rem] tracking-[-2.08px] text-balance max-md:text-[2rem] max-md:leading-[2.0625rem] max-md:tracking-[-1.35px] md:max-lg:text-5xl md:max-lg:leading-[3.0625rem] md:max-lg:tracking-[-2px] 2xl:text-[4rem] 2xl:leading-[4.0625rem] 2xl:tracking-[-2.69px]" data-cid="n131" data-component="heading" id="drum-title">
            <span className="block" data-cid="n132">
              Twenty directions.
            </span>
            {" "}
            <span className="block" data-cid="n133">
              Three dealt per page.
            </span>
          </h2>
          <p className="h-[52.7px] block max-w-132 mt-5 mx-auto text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.17px] text-pretty max-md:h-[4.65rem] max-md:leading-[1.5625rem] max-md:tracking-[-0.16px] max-md:[font-size:inherit] md:max-lg:h-14 md:max-lg:text-lg md:max-lg:leading-[1.75rem] md:max-lg:tracking-[-0.18px]" data-cid="n134">
            {"Instead of the one average page every model makes, "}
            <code className="inline text-foreground [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-[0.9375rem] leading-[1.5rem] max-md:text-sm max-md:leading-[1.375rem] md:max-lg:text-base md:max-lg:leading-[1.5625rem]" data-cid="n135">
              draw.mjs
            </code>
            {" deals three of these at random, away from your recent builds."}
          </p>
        </header>
        <div className="h-full block absolute top-0 inset-x-0 [clip-path:inset(352px_0px)] pointer-events-none max-md:[clip-path:inset(388.1px_0px)] md:max-lg:[clip-path:inset(483.2px_0px)] 2xl:[clip-path:inset(474.7px_0px)]" data-cid="n136">
          <ol className="w-320 h-200 block absolute left-0 text-center [list-style-type:none] list-outside transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,-358.8,1)] origin-[640px_400px] pointer-events-none max-md:w-[23.4375rem] max-md:h-203 max-md:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,-243.6,1)] max-md:origin-[187.5px_406px] md:max-lg:w-192 md:max-lg:h-256 md:max-lg:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,-307.2,1)] md:max-lg:origin-[384px_512px] 2xl:w-480 2xl:h-270 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,-488.5,1)] 2xl:origin-[960px_540px]" data-cid="n137">
            {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} styles={ListRow_styles[i]} />)}
          </ol>
        </div>
        <div className="w-[47.1375rem] h-[13.9625rem] block absolute top-128 left-0 z-3 opacity-0 max-w-[calc(100%_-_99.84px)] mx-[16.4375rem] text-center" data-cid="n278">
          <ol className="w-[47.1375rem] h-[74.7px] flex mb-7.5 flex-wrap justify-center gap-2.5 [list-style-type:none] list-outside max-md:w-[248.5px] max-md:h-[158.5px] max-lg:max-w-full max-md:mb-5.5 max-md:mx-9 max-lg:flex-col max-lg:items-stretch max-md:gap-2 md:max-lg:w-[16.3125rem] md:max-lg:h-[15.25rem] md:max-lg:mx-[72.9px]" data-cid="n279" aria-label="Dealt for this page">
            {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} cids={ListRow2_cids[i]} styles={ListRow2_styles[i]} />)}
          </ol>
          <p className="block opacity-0 mb-6.5 [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-[2.375rem] font-semibold leading-[2.5625rem] tracking-[-1.46px] text-balance transform-[matrix(1,0,0,1,0,24)]" data-cid="n292">
            Your agent picks the one that fits.
          </p>
          <a className="h-13 inline-flex opacity-0 pr-5.5 pl-6 rounded-[13px] items-center gap-2.5 text-color-001 [font-family:'Google_Sans_Flex',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] font-medium leading-4 tracking-[-0.16px] whitespace-nowrap text-nowrap bg-foreground shadow-[var(--clr-29)_0px_1px_2px_0px,var(--clr-30)_0px_14px_30px_-16px] transform-[matrix(1,0,0,1,0,23.4)] cursor-pointer pointer-events-none hover:bg-clr-96 focus:bg-clr-115" data-cid="n293" href="/docs#how-it-works">
            See how a build runs
            <Icon8 cid={"n294"} />
          </a>
        </div>
        <p className="h-[1.5625rem] block absolute right-[72.65rem] bottom-16 left-[3.125rem] z-2 max-w-[calc(50%_-_24px)] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.19px] whitespace-nowrap text-nowrap max-lg:h-[1.3rem] max-md:right-[303.1px] max-md:bottom-[4.0625rem] max-md:left-4 max-lg:leading-[1.3125rem] max-lg:tracking-[-0.16px] max-lg:[font-size:inherit] md:max-lg:right-[42.6375rem] md:max-lg:bottom-[5.125rem] md:max-lg:left-[1.875rem] 2xl:hidden" data-cid="n295" aria-hidden="true">
          <span className="h-full inline-block overflow-clip align-top" data-cid="n296">
            <span className="h-full inline-block text-color-008 font-semibold" data-cid="n297">
              1
            </span>
          </span>
          <span className="inline text-clr-27" data-cid="n298">
            {" of 20"}
          </span>
        </p>
        <p className="h-[1.5625rem] block absolute right-[3.125rem] bottom-16 left-[66.2875rem] z-2 max-w-[calc(100%_-_224.64px)] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.19px] text-right whitespace-nowrap text-nowrap max-lg:h-[1.3rem] max-md:right-4 max-md:bottom-[4.0625rem] max-md:left-[208.9px] max-md:max-w-[calc(100%_-_136px)] max-lg:leading-[1.3125rem] max-lg:tracking-[-0.16px] max-lg:[font-size:inherit] md:max-lg:right-[1.875rem] md:max-lg:bottom-[5.125rem] md:max-lg:left-[36.75rem] md:max-lg:max-w-[calc(100%_-_163.904px)] 2xl:hidden" data-cid="n299" aria-hidden="true">
          <span className="h-full inline-block overflow-clip align-top" data-cid="n300">
            <span className="h-full inline-block" data-cid="n301">
              The name, set huge
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}
