import Icon13 from "../svgs/svg-icon13";
import TextLink4, { type TextLink4Data } from "../components/text-link4";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import Logo from "../components/logo";
import { TextLink4_cids, Logo_cids } from "../_cids";
import { TextLink4_styles, Logo_styles } from "../_styles";
import { logos as logosContent } from "../content";
const TextLink4_data: TextLink4Data[] = [
    { ariaselected: "true", id: "install-tab-cli", label: "npx skills" },
    { ariaselected: "false", id: "install-tab-claude", label: "Claude Code" },
    { ariaselected: "false", id: "install-tab-codex", label: "Codex" }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ textLink4Data = TextLink4_data, logos = logosContent } = {}) {
  return (
    <section className="block relative pt-36 max-md:pt-26" data-cid="n893" aria-labelledby="install-title" id="install">
      <div className="w-220 block mx-auto max-md:w-[21.4375rem] md:max-lg:w-180" data-cid="n894">
        <div className="block max-w-220 mb-10 text-center max-md:mb-7" data-cid="n895">
          <span className="inline-flex mb-3.5 items-center gap-[0.4375rem] text-color-008 text-[0.9375rem] font-semibold leading-[1.4375rem] tracking-[-0.15px]" data-cid="n896">
            <Icon13 cid={"n897"} />
            Install
          </span>
          <h2 className="block text-[2.75rem] font-semibold leading-[3rem] tracking-[-1.54px] text-balance max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-1.05px]" data-cid="n898" data-component="heading" id="install-title">
            Works in the agent you already use.
          </h2>
          <p className="block max-w-136 mt-4 mx-auto text-color-002 text-[1.0625rem] leading-[1.625rem] tracking-[-0.17px] text-pretty max-md:leading-[1.5625rem] max-md:tracking-[-0.16px] max-md:[font-size:inherit]" data-cid="n899">
            No API keys and nothing else to install. The skill runs its scripts with Node 22 or newer and an installed Chrome, Edge or Chromium.
          </p>
        </div>
        <div className="block p-6 rounded-3xl bg-color-001 shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] max-md:p-3.5" data-cid="n900">
          <div className="w-[18.65rem] flex max-w-full p-1 rounded-[13px] gap-0.5 overflow-auto bg-surface-4" data-cid="n901" aria-label="Ways to install" role="tablist">
            {textLink4Data.map((d, i) => <TextLink4 key={i} d={d} cids={TextLink4_cids[i]} styles={TextLink4_styles[i]} />)}
          </div>
          <div className="block" data-cid="n905" aria-labelledby="install-tab-cli" id="install-panel" role="tabpanel">
            <div className="block [animation-name:tab-swap] [animation-duration:0.34s] [animation-timing-function:cubic-bezier(0.25,_1,_0.5,_1)] [animation-fill-mode:both]" data-cid="n906">
              <div className="h-13 grid mt-4.5 gap-2 grid-cols-[832px] grid-rows-[52px] max-md:grid-cols-[320.8px] md:max-lg:grid-cols-[672px]" data-cid="n907">
                <button className="h-13 border border-solid border-clr-2 flex max-w-full pr-1.5 pl-4.5 rounded-[11px] items-center gap-4.5 text-color-001 text-left bg-foreground cursor-pointer max-md:pl-3.5 max-md:gap-2" data-cid="n908" data-component="button" aria-label="Copy: npx skills add Leonxlnx/taste-skill" type="button">
                  <code className="h-[1.3125rem] block min-w-0 flex-1 overflow-hidden [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] whitespace-nowrap text-nowrap max-md:h-4.5 max-md:text-xs max-md:leading-4.5 max-md:tracking-[-0.12px]" data-cid="n909">
                    <span className="inline opacity-45 mr-[0.5625rem] max-md:hidden" data-cid="n910">
                      $
                    </span>
                    <span className="inline" data-cid="n911">
                      <span className="inline" data-cid="n912">
                        npx
                      </span>
                    </span>
                    <span className="inline" data-cid="n913">
                      {" "}
                      <span className="inline" data-cid="n914">
                        skills
                      </span>
                    </span>
                    <span className="inline" data-cid="n915">
                      {" "}
                      <span className="inline" data-cid="n916">
                        add
                      </span>
                    </span>
                    <span className="inline" data-cid="n917">
                      {" "}
                      <span className="inline" data-cid="n918">
                        Leonxlnx/taste-skill
                      </span>
                    </span>
                  </code>
                  <span className="w-9 h-9 grid rounded-[7px] items-center shrink-0 grid-rows-[36px] justify-items-center bg-surface-3 grid-cols-[minmax(0,_1fr)]" data-cid="n919" aria-hidden="true">
                    <Icon4 cid={"n920"} />
                    <Icon5 cid={"n921"} />
                  </span>
                  <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n922" aria-live="polite" />
                </button>
              </div>
              <p className="block mt-4 text-color-002 text-sm leading-[1.375rem] max-md:h-[4.0625rem] md:max-lg:h-[2.7125rem]" data-cid="n923">
                {"Installs "}
                <code className="inline py-px px-1.5 rounded-md text-foreground [font-family:'Google_Sans_Code',_ui-monospace,_'SF_Mono',_Menlo,_Consolas,_monospace] text-[0.8125rem] leading-[1.25rem] bg-surface-4" data-cid="n924">
                  design-taste-frontend
                </code>
                {" with the skills CLI, for any agent that reads SKILL.md files. Run it again to update."}
              </p>
            </div>
          </div>
        </div>
        <ul className="grid mt-4 rounded-[20px] gap-px grid-rows-[98.3px] overflow-hidden [list-style-type:none] list-outside bg-border shadow-[var(--border)_0px_0px_0px_1px,var(--border)_0px_1px_2px_0px,var(--clr-25)_0px_18px_40px_-28px] grid-cols-6 max-md:grid-rows-[98.25px_98.25px] max-md:grid-cols-3" data-cid="n925">
          {logos.map((d, i) => <Logo key={i} d={d} cids={Logo_cids[i]} styles={Logo_styles[i]} />)}
        </ul>
      </div>
    </section>
  );
}
