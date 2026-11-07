export default function Icon16({ cid }: { cid?: string }) {
  return (
    <svg className="w-[0.9375rem] h-[0.9375rem] block shrink-0 overflow-hidden align-middle text-muted-foreground" data-component="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" focusable="false" data-cid={cid}>
      <path d="M7 7h-1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97l-8.415 8.385v3h3l8.385-8.415z" />
      <path d="M16 5l3 3" />
    </svg>
  );
}
