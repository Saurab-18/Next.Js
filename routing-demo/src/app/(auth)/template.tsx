"use client";
import { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const navLinks = [
    { name: "Register", href: "/register" },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Forgot Password",
      href: "/forgot-password",
    },
  ];

  const [input, setInput] = useState("");

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} />
      <div>
        {navLinks.map((navLink) => {
          return (
            <Link key={navLink.name} href={navLink.href}>
              {navLink.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
