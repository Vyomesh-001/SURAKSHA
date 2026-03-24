"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Download,
  Globe,
  LogIn,
  Menu,
  Phone,
  User,
  X,
  AlertTriangle,
} from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/solution", label: "Solution" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/blockchain", label: "Blockchain" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-amber-400 text-sm font-bold text-white">
            A
          </span>
          <span className="hidden font-bold tracking-tight text-slate-900 sm:inline">
            AARAMBCHAIN
          </span>
          <span className="rounded-full bg-amber-300/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-slate-900">
            Tourist Safety
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-amber-100/80 text-amber-900"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700"
            >
              <Globe className="h-4 w-4" />
              English
              <span className="text-base leading-none" aria-hidden>
                🇺🇸
              </span>
              <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1 w-36 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                <button
                  type="button"
                  className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                  onClick={() => setLangOpen(false)}
                >
                  English
                </button>
                <button
                  type="button"
                  className="block w-full px-3 py-2 text-left text-sm text-slate-400"
                  disabled
                >
                  हिंदी (soon)
                </button>
              </div>
            )}
          </div>

          <a
            href="#download"
            className="flex items-center gap-1 rounded-full border-2 border-emerald-600 px-3 py-1.5 text-sm font-medium text-emerald-700"
          >
            <Download className="h-4 w-4" />
            Download App
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLoginOpen(!loginOpen)}
              className="flex items-center gap-1 rounded-full border-2 border-blue-600 px-3 py-1.5 text-sm font-medium text-blue-700"
            >
              <LogIn className="h-4 w-4" />
              Login
              <ChevronDown className="h-3 w-3" />
            </button>
            {loginOpen && (
              <div className="absolute right-0 mt-1 w-52 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                <Link
                  href="/login/admin"
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setLoginOpen(false)}
                >
                  <User className="h-4 w-4 text-blue-600" />
                  Authority (Admin)
                </Link>
                <Link
                  href="/login/user"
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setLoginOpen(false)}
                >
                  <User className="h-4 w-4 text-emerald-600" />
                  Tourist (User)
                </Link>
                <Link
                  href="/login"
                  className="block border-t border-slate-100 px-3 py-2 text-xs text-slate-500 hover:bg-slate-50"
                  onClick={() => setLoginOpen(false)}
                >
                  Compare login options →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/emergency"
            className="flex items-center gap-1 rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
          >
            <AlertTriangle className="h-4 w-4" />
            Emergency SOS
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-1 rounded-full border-2 border-amber-400 px-3 py-1.5 text-sm font-medium text-slate-800"
          >
            <Phone className="h-4 w-4" />
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login/admin"
              className="mt-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800"
            >
              Login — Admin
            </Link>
            <Link
              href="/login/user"
              className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800"
            >
              Login — Tourist
            </Link>
            <Link
              href="/emergency"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2 text-sm font-semibold text-white"
            >
              <AlertTriangle className="h-4 w-4" />
              Emergency SOS
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-amber-400 py-2 text-sm font-medium text-slate-800"
            >
              <Phone className="h-4 w-4" />
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
