"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Pacifico } from "next/font/google";
import { signOut, useSession } from "next-auth/react";
import { HomeIcon, SearchIcon, GiftIcon, QuestionMarkCircleIcon, ShoppingBagIcon } from '@heroicons/react/outline';

const inter = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function NavBar() {
  const session = useSession();
  const status = session.status;
  console.log(session);

  return (
    <Fragment>
      <div className="bg-gray-600 bg-opacity-10 shadow-2xl sticky top-0 w-full p-4">
        <header className="flex items-center justify-between">
          <div className="flex gap-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {status === "authenticated" ? (
              <div className="flex gap-5 justify-between">
                <Link
                  className="hover:text-primary flex items-center"
                  href={"/cart"}
                >
              <ShoppingBagIcon className="h-6 w-6"/>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center py-2 px-8 rounded-full text-white hover:font-semibold hover:shadow-black/25 hover:shadow-md transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-10 justify-between">
                <Link
                  href={"/login"}
                  className="gap-5 bg-primary py-2 px-8 rounded-full text-white hover:font-semibold hover:shadow-black/25 hover:shadow-md transition-all"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
          <nav className="flex items-center gap-10 font-semibold">
            <Link
              className="text-primary font-bold text-4xl"
              href="/"
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Foodie
            </Link>
            <Link
              href={"/"}
              className="hover:text-primary flex items-center gap-2"
            >
            <HomeIcon className="h-6 w-6"/>
              Home
            </Link>

            <Link
              href="/search"
              className="hover:text-primary flex items-center gap-2"
            >
            <SearchIcon className="h-6 w-6"/>
             Search
            </Link>
            <Link
              className="hover:text-primary flex items-center gap-2"
              href={"/offers"}
            >
            <GiftIcon className="h-6 w-6"/>
              Offers
            </Link>
            <Link
              className="hover:text-primary flex items-center gap-2"
              href={"/help"}
            >
            <QuestionMarkCircleIcon className="h-6 w-6"/>
             Help
            </Link>
          </nav>
        </header>
      </div>
    </Fragment>
  );
}
