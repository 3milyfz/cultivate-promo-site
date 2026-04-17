"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  showChevron?: boolean;
}

export function Menu({
  trigger,
  children,
  align = "left",
  showChevron = true,
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex cursor-pointer items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown
            className="ml-2 -mr-1 h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-9 focus:outline-none dark:bg-gray-800 dark:ring-gray-700`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

interface MenuItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export function MenuItem({
  children,
  onClick,
  disabled = false,
  icon,
  isActive = false,
}: MenuItemProps) {
  return (
    <button
      className={`group relative block h-full w-full text-center ${
        disabled
          ? "cursor-not-allowed text-gray-400 dark:text-gray-500"
          : "text-gray-600 dark:text-gray-300"
      } ${isActive ? "bg-white/10" : ""}`}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex h-full items-center justify-center">
        {icon && (
          <span className="h-6 w-6 transition-all duration-200 group-hover:[&_svg]:stroke-[2.5]">
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  );
}

interface MenuContainerProps {
  children: React.ReactNode;
  triggerSize?: number;
  itemWidth?: number;
  itemHeight?: number;
  itemGap?: number;
  itemAlign?: "left" | "right";
}

export function MenuContainer({
  children,
  triggerSize = 48,
  itemWidth = 48,
  itemHeight = 48,
  itemGap = 40,
  itemAlign = "left",
}: MenuContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const borderRadius = Math.max(12, Math.floor(Math.min(itemWidth, itemHeight) * 0.3));

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div
      className="relative z-[130]"
      data-expanded={isExpanded}
      style={{ width: `${triggerSize}px` }}
    >
      <div className="relative">
        <div
          className="group relative z-[140] cursor-pointer bg-gray-100 will-change-transform dark:bg-gray-800"
          style={{
            width: `${triggerSize}px`,
            height: `${triggerSize}px`,
            borderRadius: `${borderRadius}px`,
          }}
          onClick={handleToggle}
        >
          {childrenArray[0]}
        </div>

        {childrenArray.slice(1).map((child, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 bg-gray-100 will-change-transform dark:bg-gray-800"
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              borderRadius: `${borderRadius}px`,
              transform: `translateY(${isExpanded ? (index + 1) * itemGap : 0}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: 139 - index,
              clipPath: `inset(0 round ${borderRadius}px)`,
              transition: `transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
                         opacity ${isExpanded ? "300ms" : "350ms"}`,
              backfaceVisibility: "hidden",
              perspective: 1000,
              WebkitFontSmoothing: "antialiased",
              left: itemAlign === "left" ? 0 : "auto",
              right: itemAlign === "right" ? 0 : "auto",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
