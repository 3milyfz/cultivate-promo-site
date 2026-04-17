"use client";

import { Menu as MenuIcon, X } from "lucide-react";
import { MenuContainer, MenuItem } from "@/components/ui/fluid-menu";

const links = [
  { href: "/", label: "Overview" },
  { href: "/demo", label: "Demo" },
  { href: "/workflow-architecture", label: "Architecture" },
  { href: "/wiki", label: "Wiki" },
  { href: "/contributing", label: "Contribute" },
  { href: "/setup", label: "Get Started" },
];

export function SiteHeader() {
  const navigate = (href: string) => {
    window.location.href = href;
  };

  return (
    <header className="relative z-[120] border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <div className="flex items-center gap-2">
          <a href="/" aria-label="Cultivate home" className="flex items-center gap-2">
            <img src="/cultivate-logo-wordmark.png" alt="Cultivate" className="h-7 w-auto" />
            <span className="ml-1 rounded-full bg-[#E0F2EB] px-2 py-0.5 text-[11px] font-medium text-[#00674F]">
              Beta
            </span>
          </a>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <a href="/" className="hover:text-zinc-900">
            Overview
          </a>
          <a href="/demo" className="hover:text-zinc-900">
            Demo
          </a>
          <a href="/workflow-architecture" className="hover:text-zinc-900">
            Workflow & Architecture
          </a>
          <a href="/wiki" className="hover:text-zinc-900">
            Wiki
          </a>
          <a href="/contributing" className="hover:text-zinc-900">
            Contribute
          </a>
        </nav>

        <a
          href="/setup"
          className="hidden rounded-md bg-[#00674F] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#00543f] md:inline-flex"
        >
          Get Started
        </a>

        <div className="flex items-center self-center md:hidden">
          <MenuContainer
            triggerSize={48}
            itemWidth={168}
            itemHeight={40}
            itemGap={36}
            itemAlign="right"
          >
            <MenuItem
              icon={
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center origin-center scale-100 rotate-0 opacity-100 transition-all duration-300 ease-in-out [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180 [div[data-expanded=true]_&]:opacity-0">
                    <MenuIcon size={14} strokeWidth={1.75} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center origin-center scale-0 -rotate-180 opacity-0 transition-all duration-300 ease-in-out [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0 [div[data-expanded=true]_&]:opacity-100">
                    <X size={14} strokeWidth={1.75} />
                  </div>
                </div>
              }
            />
            {links.map((link) => {
              return (
                <MenuItem
                  key={link.href}
                  onClick={() => navigate(link.href)}
                >
                  <span className="px-3 text-[11px] font-semibold whitespace-nowrap">
                    {link.label}
                  </span>
                </MenuItem>
              );
            })}
          </MenuContainer>
        </div>
      </div>
    </header>
  );
}
