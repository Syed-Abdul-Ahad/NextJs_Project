"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function NavBarClient({ session }: { session: any }) {
  return (
    <div className="bg-white shadow-sm px-5 py-3 font-work-sans">
      <nav className="flex justify-between items-center p-4">
      <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

    <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="cursor-pointer">Create</span>
              </Link>
              <button className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/" })}>
                <span>Logout</span>
              </button>
              <Link className="cursor-pointer flex gap-2 justify-center items-center" href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span><FaGithub size={24}/>
              </Link>
            </>
          ) : (
            <button className="cursor-pointer flex gap-2 justify-center items-center" onClick={() => signIn("github")}>
            <span>Login</span> <FaGithub size={24}/>
          </button>
          )}
        </div>   
      </nav>
    </div>
  );
}