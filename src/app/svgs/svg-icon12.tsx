export default function Icon12({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-5 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" viewBox="0 0 20 20" data-cid={cid}>
      <rect x="1.5" y="3" width="17" height="14" rx="3.5" fill="currentColor" />
      <circle cx="4.5" cy="5.9" r=".85" fill="var(--cream)" />
      <circle cx="6.8" cy="5.9" r=".85" fill="var(--cream)" />
      <path d="M1.5 8.6h17" stroke="var(--cream)" strokeWidth="1" opacity=".55" />
      <path d="m3.4 12.2 1-1 1 1 1-1 1 1" stroke="var(--cream)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 11.2h3.3M12.5 13.6h2.1" stroke="var(--cream)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10 8.6V17" stroke="var(--cream)" strokeWidth="1.4" />
      <path d="M10 .9v2.1M10 17v2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="13" r="2.3" fill="var(--cream)" />
      <circle cx="10" cy="13" r="1.1" fill="currentColor" />
    </svg>
  );
}
