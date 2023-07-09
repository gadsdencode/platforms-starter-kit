import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex h-screen bg-black">
      <div className="m-auto w-48">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
        />
      </div>
    </div>
  );
}
