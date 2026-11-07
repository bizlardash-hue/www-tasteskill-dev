export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-[0.9375rem] block opacity-40 overflow-hidden align-middle pointer-events-none focus:outline-clr-111 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="15" stroke="currentColor" viewBox="0 0 24 24" width="15" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
