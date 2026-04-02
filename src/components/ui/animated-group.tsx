'use client';

import React, { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function isPlainTarget(
  v: unknown
): v is Record<string, unknown> & { transition?: unknown } {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Merge partial `container` overrides with defaults so `hidden` exists and `visible.transition` deep-merges. */
function mergeContainerVariants(
  defaults: Variants,
  custom?: Variants
): Variants {
  if (!custom) return defaults;

  const merged: Variants = {
    ...defaults,
    ...custom,
    hidden: custom.hidden !== undefined ? custom.hidden : defaults.hidden,
  };

  const defV = defaults.visible;
  const custV = custom.visible;

  if (isPlainTarget(defV) && isPlainTarget(custV)) {
    const defT =
      defV.transition &&
      typeof defV.transition === "object" &&
      !Array.isArray(defV.transition)
        ? (defV.transition as Record<string, unknown>)
        : {};
    const custT =
      custV.transition &&
      typeof custV.transition === "object" &&
      !Array.isArray(custV.transition)
        ? (custV.transition as Record<string, unknown>)
        : {};
    merged.visible = {
      ...defV,
      ...custV,
      transition: { ...defT, ...custT },
    };
  } else if (custV !== undefined) {
    merged.visible = custV;
  } else {
    merged.visible = defV;
  }

  return merged;
}

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 8 },
      },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = mergeContainerVariants(
    selectedVariants.container,
    variants?.container
  );
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };

