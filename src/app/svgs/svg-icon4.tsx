export default function Icon4({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-4 block col-start-1 row-start-1 overflow-hidden align-middle focus:outline-clr-111 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" viewBox="0 0 16 16" data-cid={cid}>
      <rect x="5.5" y="5.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 10.5h-.2A1.3 1.3 0 0 1 2 9.2V3.3C2 2.6 2.6 2 3.3 2h5.9c.7 0 1.3.6 1.3 1.3v.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
