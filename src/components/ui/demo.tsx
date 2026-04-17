"use client";

import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu";
import { Menu as MenuIcon, X, Home, Mail, User, Settings } from "lucide-react";

export function MenuDemo() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="space-y-2 text-center">
        <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold text-transparent dark:from-gray-100/80 dark:to-gray-100">
          Fluid Navigation
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A fluid circular menu with smooth transitions
        </p>
      </div>

      <div className="relative">
        <div className="-z-10 absolute inset-0 rounded-full bg-gradient-to-b from-gray-900/10 to-transparent blur-3xl dark:from-gray-100/10" />
        <MenuContainer>
          <MenuItem
            icon={
              <div className="relative h-6 w-6">
                <div className="absolute inset-0 origin-center scale-100 rotate-0 opacity-100 transition-all duration-300 ease-in-out [div[data-expanded=true]_&]:scale-0 [div[data-expanded=true]_&]:rotate-180 [div[data-expanded=true]_&]:opacity-0">
                  <MenuIcon size={24} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 origin-center scale-0 -rotate-180 opacity-0 transition-all duration-300 ease-in-out [div[data-expanded=true]_&]:scale-100 [div[data-expanded=true]_&]:rotate-0 [div[data-expanded=true]_&]:opacity-100">
                  <X size={24} strokeWidth={1.5} />
                </div>
              </div>
            }
          />
          <MenuItem icon={<Home size={24} strokeWidth={1.5} />} />
          <MenuItem icon={<Mail size={24} strokeWidth={1.5} />} />
          <MenuItem icon={<User size={24} strokeWidth={1.5} />} />
          <MenuItem icon={<Settings size={24} strokeWidth={1.5} />} />
        </MenuContainer>
      </div>
    </div>
  );
}
