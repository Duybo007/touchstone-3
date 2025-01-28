import React from "react";
import Link from 'next/link'

function Header() {
  return (
    <div className="flex justify-between h-20 bg-[#17253F] items-center text-white">
      <div className="pl-4">
        <img src="/logo.png" alt="" className="w-16" />
      </div>
      <h1 className="text-2xl">ABC Fitness Studio</h1>
      <div className="flex gap-4 px-6">
        <Link href="/">Home</Link>
        <Link href="gallery">Gallery</Link>
        <Link href="/about">About Us</Link>
        <Link href="/community">Community</Link>
      </div>
    </div>
  );
}

export default Header;
