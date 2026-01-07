import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Nexa Consultancy Logo"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
}
