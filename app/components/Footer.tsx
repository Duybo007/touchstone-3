import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-between h-20 bg-[#17253F] items-center text-white text-2xl">
      <div className="pl-4">
        <img src="/logo.png" alt="" className="w-16" />
      </div>

      <div className="flex gap-4 px-6">
        <FaFacebook />
        <FaInstagramSquare />
        <FaYoutube />
        <FaLinkedin />
      </div>
    </div>
  );
}

export default Footer;
