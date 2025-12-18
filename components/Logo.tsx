import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center min-h-[44px] min-w-[44px]">
      <span className="text-heading-20 font-bold">LZTEK</span>
    </Link>
  );
}
