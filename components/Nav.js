import Link from 'next/link';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignOut from './Auth/SignOut';

export default async function Navbar() {
  const session = await getServerSession(authOptions); //server side fetching of session
  // console.log({ session });
  return (
    <div className="relative z-100 opacity-90 flex flex-wrap mb-20">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-zinc-100 gap-10  p-8  text-base sm:text-lg">
        <Link href={'/'}>
          <Image
            src="/Isale-Eko-logo.jpg"
            alt="Isale-Eko Logo"
            width={'45'}
            height={'45'}
            className="p-0 m-0"
          />
        </Link>
        <div className="flex gap-2 sm:gap-10 text-xs sm:text-base">
          <Link href={'/'} className="hover:text-blue-800">
            Home
          </Link>
          <Link href={'/about'} className="hover:text-blue-800">
            About
          </Link>
          <Link href={'/contact'} className="hover:text-blue-800">
            Contact
          </Link>
          {/*
            <Link href={'/termlyResult'} className="hover:text-blue-800">
            Termly
          </Link>
        */}

          {/*dynamic signin */}
          {session ? (
            <>
              <Link href={'/listResults'} className="hover:text-blue-800">
                Result
              </Link>
              <SignOut />
              <Link href={'/profile'} className="text-blue-800">
                {session?.user?.name}
              </Link>
            </>
          ) : (
            <div>
              <Link href={'/signin'} className="hover:text-blue-800">
                SignIn
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
