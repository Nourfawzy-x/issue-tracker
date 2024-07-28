import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    { label: "Issues", href: "/Issues" },
  ];
  return (
    <nav className="flex space-x-6 mb-5 border-b px-5 items-center h-14">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
