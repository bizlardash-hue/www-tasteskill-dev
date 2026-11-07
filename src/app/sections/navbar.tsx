import TextLink from "../components/text-link";
import Icon from "../svgs/svg-icon";
import TextLink2 from "../components/text-link2";
import Icon2 from "../svgs/svg-icon2";
import { TextLink_cids, TextLink2_cids } from "../_cids";
import { TextLink_styles } from "../_styles";
import { textLinkData as textLinkDataContent, textLink2Data as textLink2DataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ textLinkData = textLinkDataContent, textLink2Data = textLink2DataContent } = {}) {
  return (
    <nav className="h-12.5 grid fixed top-4.5 -right-20 left-[clamp(187.5px,_50%,_calc(100%_-_187.5px))] z-50 pr-[0.4375rem] pl-3.5 rounded-2xl items-center gap-x-5 grid-cols-[201.625px_255.734px_201.641px] grid-rows-[50px] text-[0.9375rem] leading-[1.4375rem] tracking-[-0.15px] whitespace-nowrap text-nowrap [backdrop-filter:blur(14px)_saturate(1.4)] transform-[matrix(1,0,0,1,-360,0)] max-md:top-3 max-md:right-[-155.5px] max-md:pl-3 max-md:grid-cols-[166.891px_137.109px] max-md:transform-[matrix(1,0,0,1,-171.5,0)] md:max-lg:-right-84 2xl:right-60 after:content-[''] after:block after:absolute after:inset-0 after:-z-1 after:h-12.5 after:bg-clr-0 after:shadow-[var(--border)_0px_0px_0px_1px,var(--clr-1)_0px_8px_24px_-14px] after:opacity-0 after:rounded-tl-2xl" data-cid="n1" data-component="nav" aria-label="Main">
      <a className="flex items-center gap-1.5 text-color-001 text-base font-semibold leading-[1.4375rem] tracking-[-0.46px] cursor-pointer" data-cid="n2" data-component="link" aria-label="Taste Skill home" href="/">
        <img className="w-[1.3125rem] h-[1.3125rem] block max-w-full overflow-clip aspect-[auto_21/21] align-middle text-clr-2 transform-[matrix(1,0,0,1,0,1)]" data-cid="n3" data-component="image" alt="" height="21" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet="/assets/cloned/images/3ff46a787810.avif 1x" width="21" />
        Taste Skill
      </a>
      <div className="flex gap-6 max-md:hidden" data-cid="n4">
        {textLinkData.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} styles={TextLink_styles[i]} />)}
      </div>
      <div className="h-9 flex items-center gap-1.5" data-cid="n9">
        <a className="h-9 flex px-[0.8125rem] rounded-[11px] items-center gap-[0.4375rem] text-sm font-medium leading-[1.3125rem] bg-color-001 shadow-[var(--clr-3)_0px_0px_6px_1px_inset,var(--clr-4)_0px_4px_12px_-4px] cursor-pointer hover:bg-clr-91 focus:bg-clr-110" data-cid="n10" data-component="link" href="https://github.com/Leonxlnx/taste-skill" rel="noreferrer" target="_blank">
          <Icon cid={"n11"} />
          <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden [clip-path:inset(50%)]" data-cid="n12">
            {"Taste Skill on GitHub, "}
          </span>
          <span className="block text-clr-5" data-cid="n13">
            111.6k
          </span>
          <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden [clip-path:inset(50%)]" data-cid="n14">
            {" stars"}
          </span>
        </a>
        <button className="w-9 h-9 hidden min-w-0 rounded-[10px] items-center justify-items-center text-color-014 text-center bg-surface-3 cursor-pointer max-md:grid max-md:grid-cols-[36px] max-md:grid-rows-[36px]" data-cid="n15" aria-controls="nav-panel" aria-expanded="false" aria-label="Open menu" type="button">
          <span className="w-4 h-2.5 block relative before:content-[''] before:block before:absolute before:top-px before:inset-x-0 before:h-[1.5px] before:bg-color-014 before:rounded-tl-xs max-md:before:bottom-[7.5px] max-md:before:w-4 after:content-[''] after:block after:absolute after:bottom-px after:inset-x-0 after:h-[1.5px] after:bg-color-014 after:rounded-tl-xs max-md:after:top-[7.5px] max-md:after:w-4" data-cid="n16" aria-hidden="true" />
        </button>
      </div>
      <div className="w-180 h-60.5 block absolute top-14.5 left-0 opacity-0 min-w-0 p-1.5 rounded-2xl bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-6)_0px_24px_44px_-26px] transform-[matrix(1,0,0,1,0,-6)] pointer-events-none" data-cid="n17" id="nav-panel">
        {textLink2Data.map((d, i) => <TextLink2 key={i} d={d} cids={TextLink2_cids[i]} />)}
        <a className="h-11.5 flex px-3 rounded-[11px] justify-between items-center text-base font-medium leading-6 cursor-pointer pointer-events-none" data-cid="n22" data-component="link" href="https://tastecode.dev/" rel="noreferrer" target="_blank">
          TasteCode
          <Icon2 cid={"n23"} />
        </a>
      </div>
    </nav>
  );
}
