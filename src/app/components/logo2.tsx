export type Logo2Data = Record<string, never>;
/** A logo. */
export default function Logo2({ d, cids }: { d: Logo2Data; cids: string[] }) {
  return (
    <span data-cid={cids[0]} className="w-6.5 h-4.5 block rounded-sm overflow-hidden bg-color-024">
      <img data-cid={cids[1]} className="w-full h-4.5 block max-w-full overflow-clip object-cover aspect-[auto_180/128] align-middle" data-component="image" alt="" height="128" sizes="28px" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="180" />
    </span>
  );
}
