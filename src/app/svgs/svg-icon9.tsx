export default function Icon9({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-5 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" viewBox="0 0 20 20" data-cid={cid}>
      <path d="M3.2 16.8 10.7 9.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m11.3 8.7 1.6-1.6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M15 1.6c.3 1.6 1.4 2.7 3 3-1.6.3-2.7 1.4-3 3-.3-1.6-1.4-2.7-3-3 1.6-.3 2.7-1.4 3-3z" fill="currentColor" />
      <path d="M6.5 2.8c.2.9.9 1.6 1.8 1.8-.9.2-1.6.9-1.8 1.8-.2-.9-.9-1.6-1.8-1.8.9-.2 1.6-.9 1.8-1.8z" fill="currentColor" opacity=".55" />
      <circle cx="16.4" cy="11.4" r=".9" fill="currentColor" opacity=".55" />
    </svg>
  );
}
