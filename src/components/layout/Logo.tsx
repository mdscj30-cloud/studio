import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  // Using a placeholder for the dark logo as a fix. The user can replace /logo.png locally.
  const logoSrc = variant === 'dark' ? 'https://placehold.co/160x160/5A2D82/FFF/png?text=Logo' : '/logo-white.png';
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
