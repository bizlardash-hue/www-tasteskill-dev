export type FeatureGridItemData = {
  variant: string;
  title: string;
  description: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "what-does-the-skill-need":
      return (
        <div className="block pt-6.5 pb-7 px-7 bg-color-001 max-md:py-5.5 max-md:px-5" data-cid="n1096">
          <div className="h-full block" data-cid="n1097">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]" data-cid="n1098" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-2 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.07px] text-pretty" data-cid="n1099">
              {d.description}
            </p>
          </div>
        </div>
      );
    case "how-long-does-a-build-take":
      return (
        <div className="h-[154.7px] block pt-6.5 pb-7 px-7 bg-color-001 max-md:h-[144.7px] max-md:py-5.5 max-md:px-5 md:max-lg:h-[11.125rem]" data-cid="n1100">
          <div className="block" data-cid="n1101">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]" data-cid="n1102" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-2 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.07px] text-pretty" data-cid="n1103">
              {d.description}
            </p>
          </div>
        </div>
      );
    case "where-do-the-pictures-come-from":
      return (
        <div className="block pt-6.5 pb-7 px-7 bg-color-001 max-md:py-5.5 max-md:px-5" data-cid="n1104">
          <div className="h-full block" data-cid="n1105">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]" data-cid="n1106" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-2 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.07px] text-pretty" data-cid="n1107">
              {d.description}
            </p>
          </div>
        </div>
      );
    case "does-it-work-with-react-vue-svelte-or-plai":
      return (
        <div className="h-[11.125rem] block pt-6.5 pb-7 px-7 bg-color-001 max-md:h-[10.475rem] max-md:py-5.5 max-md:px-5 md:max-lg:h-[12.575rem]" data-cid="n1108">
          <div className="block" data-cid="n1109">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]" data-cid="n1110" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-2 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.07px] text-pretty" data-cid="n1111">
              {d.description}
            </p>
          </div>
        </div>
      );
    case "is-it-for-dashboards-and-app-screens":
      return (
        <div className="h-[11.125rem] block pt-6.5 pb-7 px-7 bg-color-001 max-md:h-[10.5rem] max-md:py-5.5 max-md:px-5 md:max-lg:h-[12.575rem]" data-cid="n1112">
          <div className="block" data-cid="n1113">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]" data-cid="n1114" data-component="heading">
              {d.title}
            </h3>
            <p className="block mt-2 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.07px] text-pretty" data-cid="n1115">
              {d.description}
            </p>
          </div>
        </div>
      );
    case "where-did-the-older-skills-go":
      return (
        <div className="block pt-6.5 pb-7 px-7 bg-color-001 max-md:py-5.5 max-md:px-5" data-cid="n1116">
          <div className="h-full block" data-cid="n1117">
            <h3 className="block text-[1.0625rem] font-semibold leading-[1.4375rem] tracking-[-0.34px]" data-cid="n1118" data-component="heading">
              {d.title}
            </h3>
            <p className="h-[5.8125rem] block mt-2 text-color-002 text-[0.9375rem] leading-[1.4375rem] tracking-[-0.07px] text-pretty max-lg:h-[116.3px]" data-cid="n1119">
              {"Soft, minimalist, brutalist, gpt-taste, Stitch, v1 and v2 (experimental) live in "}
              <a className="inline pb-px text-foreground font-medium [background-size:0%_1px,_100%_1px] [background-position:0px_100%,_0px_100%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground)), linear-gradient(var(--clr-84), var(--clr-84))" }} data-cid="n1120" data-component="link" href="https://github.com/Leonxlnx/taste-skill-classics" rel="noreferrer" target="_blank">
                taste-skill-classics
              </a>
              {", the image skills in "}
              <a className="inline pb-px text-foreground font-medium [background-size:0%_1px,_100%_1px] [background-position:0px_100%,_0px_100%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground)), linear-gradient(var(--clr-84), var(--clr-84))" }} data-cid="n1121" data-component="link" href="https://github.com/Leonxlnx/imagegen-skills" rel="noreferrer" target="_blank">
                imagegen-skills
              </a>
              {", under the same install names. "}
              <a className="inline pb-px text-foreground font-medium [background-size:0%_1px,_100%_1px] [background-position:0px_100%,_0px_100%] [background-repeat:no-repeat,_no-repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--foreground), var(--foreground)), linear-gradient(var(--clr-84), var(--clr-84))" }} data-cid="n1122" data-component="link" href="/docs#moved-skills">
                See where every skill went
              </a>
              .
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}
