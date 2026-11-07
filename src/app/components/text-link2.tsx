export type TextLink2Data = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink2({ d, cids }: { d: TextLink2Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="h-11.5 flex px-3 rounded-[11px] justify-between items-center text-base font-medium leading-6 cursor-pointer pointer-events-none" data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
