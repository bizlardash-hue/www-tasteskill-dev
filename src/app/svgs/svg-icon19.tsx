export default function Icon19({ cid }: { cid?: string }) {
  return (
    <svg className="w-[0.9375rem] h-[0.9375rem] block shrink-0 overflow-hidden align-middle text-muted-foreground" data-component="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" focusable="false" data-cid={cid}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 8v8" />
      <path d="M11 6h5a2 2 0 0 1 2 2v8" />
      <path d="M14 9l-3-3l3-3" />
    </svg>
  );
}
