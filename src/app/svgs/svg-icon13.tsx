export default function Icon13({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-5 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" viewBox="0 0 20 20" data-cid={cid}>
      <rect x="1.5" y="3" width="17" height="14" rx="3.5" fill="currentColor" />
      <path d="m5.2 8 2.6 2.2-2.6 2.2" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 13h4.6" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
