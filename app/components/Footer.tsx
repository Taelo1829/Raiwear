import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center font-mono py-5 items-centers">
        <div className="container flex justify-around items-center ">
          <Link href="/terms" className="hover:underline">
            terms of use
          </Link>
          <Link href="privacy" className="hover:underline">
            privacy and cookies policy
          </Link>
        </div>
      </div>
      <div className="block md:hidden fixed bottom-0 md:relative w-screen p-5 bg-white border border-1 border-black">
        <div className="flex justify-between w-100">
          <Link href={"/collection"}>collection</Link>
          <Link href={"/about-us"}>about us</Link>
          <Link href={"/contact-us"}>contact us</Link>
          <Link href={"/blog"}>blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
