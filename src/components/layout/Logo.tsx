import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const logoSrc = variant === 'dark' ? '/logo.png' : '/logo-white.png';
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logoSrc}
        alt="Nexa Consultancy Logo"
        width={40}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
}
