export type TextLink3Data = {
  ariaselected: string;
  id: string;
  label: string;
};
/** A text link. */
export default function TextLink3({ d, cids }: { d: TextLink3Data; cids: string[] }) {
  return (
    <button data-cid={cids[0]} className="h-8.5 block relative z-1 px-3.5 rounded-[10px] shrink-0 text-color-019 text-sm font-medium leading-[1.3125rem] tracking-[-0.14px] text-center cursor-pointer max-md:px-1.5 max-md:text-[0.8125rem] max-md:leading-[1.1875rem] max-md:tracking-[-0.12px]" data-component="button" aria-controls="work-stage" aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
      {d.label}
    </button>
  );
}
