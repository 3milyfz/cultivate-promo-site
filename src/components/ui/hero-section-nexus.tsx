"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type FormEvent,
  type SVGProps,
} from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  type VariantLabels,
  type Target,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: boolean | Target | VariantLabels;
  animate?: boolean | VariantLabels | TargetAndTransition;
  exit?: Target | VariantLabels;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2200,
      staggerDuration = 0.01,
      staggerFrom = "last",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && (Intl as any).Segmenter) {
        try {
          const segmenter = new (Intl as any).Segmenter("en", {
            granularity: "grapheme",
          });
          return Array.from(
            segmenter.segment(text),
            (segment: { segment: string }) => segment.segment
          );
        } catch (error) {
          console.error(
            "Intl.Segmenter failed, falling back to simple split:",
            error
          );
          return text.split("");
        }
      }
      return text.split("");
    };

    const elements = useMemo(() => {
      const currentText: string = texts[currentTextIndex] ?? "";
      if (splitBy === "characters") {
        const words = currentText.split(/(\s+)/);
        let charCount = 0;
        return words
          .filter((part) => part.length > 0)
          .map((part) => {
            const isSpace = /^\s+$/.test(part);
            const chars = isSpace ? [part] : splitIntoCharacters(part);
            const startIndex = charCount;
            charCount += chars.length;
            return { characters: chars, isSpace, startIndex };
          });
      }
      if (splitBy === "words") {
        return currentText
          .split(/(\s+)/)
          .filter((word) => word.length > 0)
          .map((word, i) => ({
            characters: [word],
            isSpace: /^\s+$/.test(word),
            startIndex: i,
          }));
      }
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i) => ({
          characters: [line],
          isSpace: false,
          startIndex: i,
        }));
      }
      return currentText.split(splitBy).map((part, i) => ({
        characters: [part],
        isSpace: false,
        startIndex: i,
      }));
    }, [texts, currentTextIndex, splitBy]);

    const totalElements = useMemo(
      () =>
        elements.reduce((sum, el) => {
          return sum + el.characters.length;
        }, 0),
      [elements]
    );

    const getStaggerDelay = useCallback(
      (index: number, total: number): number => {
        if (total <= 1 || !staggerDuration) return 0;
        const stagger = staggerDuration;
        switch (staggerFrom) {
          case "first":
            return index * stagger;
          case "last":
            return (total - 1 - index) * stagger;
          case "center": {
            const center = (total - 1) / 2;
            return Math.abs(center - index) * stagger;
          }
          case "random":
            return Math.random() * (total - 1) * stagger;
          default:
            if (typeof staggerFrom === "number") {
              const fromIndex = Math.max(0, Math.min(staggerFrom, total - 1));
              return Math.abs(fromIndex - index) * stagger;
            }
            return index * stagger;
        }
      },
      [staggerFrom, staggerDuration]
    );

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex);
        onNext?.(newIndex);
      },
      [onNext]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;
      if (nextIndex !== currentTextIndex) handleIndexChange(nextIndex);
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;
      if (prevIndex !== currentTextIndex) handleIndexChange(prevIndex);
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        if (validIndex !== currentTextIndex) handleIndexChange(validIndex);
      },
      [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) handleIndexChange(0);
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    useEffect(() => {
      if (!auto || texts.length <= 1) return;
      const intervalId = window.setInterval(next, rotationInterval);
      return () => window.clearInterval(intervalId);
    }, [next, rotationInterval, auto, texts.length]);

    return (
      <motion.span
        className={cn(
          "inline-flex flex-wrap whitespace-pre-wrap relative align-bottom pb-[10px]",
          mainClassName
        )}
        {...rest}
        layout
      >
        <span className="sr-only">{texts[currentTextIndex]}</span>
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentTextIndex}
            className={cn(
              "inline-flex flex-wrap relative",
              splitBy === "lines"
                ? "flex-col items-start w-full"
                : "flex-row items-baseline"
            )}
            layout
            aria-hidden="true"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {elements.map((elementObj, elementIndex) => (
              <span
                key={elementIndex}
                className={cn(
                  "inline-flex",
                  splitBy === "lines" ? "w-full" : "",
                  splitLevelClassName
                )}
                style={{ whiteSpace: "pre" }}
              >
                {elementObj.characters.map((char, charIndex) => {
                  const globalIndex = elementObj.startIndex + charIndex;
                  return (
                    <motion.span
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${char}-${charIndex}`}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(globalIndex, totalElements),
                      }}
                      className={cn(
                        "inline-block leading-none tracking-tight",
                        elementLevelClassName
                      )}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    );
  }
);
RotatingText.displayName = "RotatingText";

const ShinyText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "",
}) => (
  <span className={cn("relative overflow-hidden inline-block", className)}>
    {text}
    <span
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        animation: "shine 2s infinite linear",
        opacity: 0.5,
        pointerEvents: "none",
      }}
    />
  </span>
);

interface Dot {
  x: number;
  y: number;
  baseColor: string;
  targetOpacity: number;
  currentOpacity: number;
  opacitySpeed: number;
  baseRadius: number;
  currentRadius: number;
}

const InteractiveHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const dotsRef = useRef<Dot[]>([]);
  const gridRef = useRef<Record<string, number[]>>({});
  const canvasSizeRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  const DOT_SPACING = 25;
  const BASE_OPACITY_MIN = 0.4;
  const BASE_OPACITY_MAX = 0.5;
  const BASE_RADIUS = 1;
  const INTERACTION_RADIUS = 150;
  const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
  const OPACITY_BOOST = 0.6;
  const RADIUS_BOOST = 2.5;
  const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5));

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      mousePositionRef.current = { x: null, y: null };
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const canvasX = event.clientX - rect.left;
    const canvasY = event.clientY - rect.top;
    mousePositionRef.current = { x: canvasX, y: canvasY };
  }, []);

  const createDots = useCallback(() => {
    const { width, height } = canvasSizeRef.current;
    if (width === 0 || height === 0) return;

    const newDots: Dot[] = [];
    const newGrid: Record<string, number[]> = {};
    const cols = Math.ceil(width / DOT_SPACING);
    const rows = Math.ceil(height / DOT_SPACING);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * DOT_SPACING + DOT_SPACING / 2;
        const y = j * DOT_SPACING + DOT_SPACING / 2;
        const cellX = Math.floor(x / GRID_CELL_SIZE);
        const cellY = Math.floor(y / GRID_CELL_SIZE);
        const cellKey = `${cellX}_${cellY}`;

        if (!newGrid[cellKey]) {
          newGrid[cellKey] = [];
        }

        const dotIndex = newDots.length;
        newGrid[cellKey].push(dotIndex);

        const baseOpacity =
          Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) +
          BASE_OPACITY_MIN;
        newDots.push({
          x,
          y,
          baseColor: `rgba(87, 220, 205, ${BASE_OPACITY_MAX})`,
          targetOpacity: baseOpacity,
          currentOpacity: baseOpacity,
          opacitySpeed: Math.random() * 0.005 + 0.002,
          baseRadius: BASE_RADIUS,
          currentRadius: BASE_RADIUS,
        });
      }
    }
    dotsRef.current = newDots;
    gridRef.current = newGrid;
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    const width = container ? container.clientWidth : window.innerWidth;
    const height = container ? container.clientHeight : window.innerHeight;

    if (
      canvas.width !== width ||
      canvas.height !== height ||
      canvasSizeRef.current.width !== width ||
      canvasSizeRef.current.height !== height
    ) {
      canvas.width = width;
      canvas.height = height;
      canvasSizeRef.current = { width, height };
      createDots();
    }
  }, [createDots]);

  const animateDots = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const dots = dotsRef.current;
    const grid = gridRef.current;
    const { width, height } = canvasSizeRef.current;
    const { x: mouseX, y: mouseY } = mousePositionRef.current;

    if (!ctx || !dots || !grid || width === 0 || height === 0) {
      animationFrameId.current = window.requestAnimationFrame(animateDots);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const activeDotIndices = new Set<number>();
    if (mouseX !== null && mouseY !== null) {
      const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE);
      const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE);
      const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE);
      for (let i = -searchRadius; i <= searchRadius; i++) {
        for (let j = -searchRadius; j <= searchRadius; j++) {
          const checkCellX = mouseCellX + i;
          const checkCellY = mouseCellY + j;
          const cellKey = `${checkCellX}_${checkCellY}`;
          if (grid[cellKey]) {
            grid[cellKey].forEach((dotIndex) =>
              activeDotIndices.add(dotIndex)
            );
          }
        }
      }
    }

    dots.forEach((dot, index) => {
      dot.currentOpacity += dot.opacitySpeed;
      if (
        dot.currentOpacity >= dot.targetOpacity ||
        dot.currentOpacity <= BASE_OPACITY_MIN
      ) {
        dot.opacitySpeed = -dot.opacitySpeed;
        dot.currentOpacity = Math.max(
          BASE_OPACITY_MIN,
          Math.min(dot.currentOpacity, BASE_OPACITY_MAX)
        );
        dot.targetOpacity =
          Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) +
          BASE_OPACITY_MIN;
      }

      let interactionFactor = 0;
      dot.currentRadius = dot.baseRadius;

      if (
        mouseX !== null &&
        mouseY !== null &&
        activeDotIndices.has(index)
      ) {
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distSq = dx * dx + dy * dy;

        if (distSq < INTERACTION_RADIUS_SQ) {
          const distance = Math.sqrt(distSq);
          interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS);
          interactionFactor *= interactionFactor;
        }
      }

      const finalOpacity = Math.min(
        1,
        dot.currentOpacity + interactionFactor * OPACITY_BOOST
      );
      dot.currentRadius =
        dot.baseRadius + interactionFactor * RADIUS_BOOST;

      const colorMatch = dot.baseColor.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
      );
      const r = colorMatch ? colorMatch[1] : "87";
      const g = colorMatch ? colorMatch[2] : "220";
      const b = colorMatch ? colorMatch[3] : "205";

      ctx.beginPath();
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity.toFixed(3)})`;
      ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrameId.current = window.requestAnimationFrame(animateDots);
  }, []);

  useEffect(() => {
    handleResize();

    const handleMouseLeave = () => {
      mousePositionRef.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId.current = window.requestAnimationFrame(animateDots);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleResize, handleMouseMove, animateDots]);

  const contentDelay = 0.3;
  const itemDelayIncrement = 0.1;

  const bannerVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: contentDelay },
    },
  };
  const headlineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement,
      },
    },
  };
  const subHeadlineVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 2,
      },
    },
  };
  const formVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 3,
      },
    },
  };
  const trialTextVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 4,
      },
    },
  };
  const worksWithVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: contentDelay + itemDelayIncrement * 5,
      },
    },
  };
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: contentDelay + itemDelayIncrement * 6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[color:var(--color-earth-50)] pt-10 text-zinc-800">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(247,245,242,1) 80%), radial-gradient(ellipse at top, rgba(232,250,243,0.8) 0%, transparent 55%)",
        }}
      />

      <main
        id="overview"
        className="relative z-20 flex flex-col items-center justify-center px-4 pb-20 pt-16 text-center"
      >
        <motion.div variants={bannerVariants} initial="hidden" animate="visible">
          <ShinyText
            text="Chat-first local food sourcing"
            className="cursor-default rounded-full border border-[#E0F2EB] bg-[#E0F2EB]/60 px-3.5 py-1 text-[11px] font-semibold text-[#00674F] sm:text-xs"
          />
        </motion.div>

        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="mb-5 max-w-4xl text-3xl font-semibold leading-tight text-zinc-900 sm:text-5xl lg:text-[52px]"
        >
          Connecting Ontario&apos;s local farms
          <br />
          <span className="inline-block h-[1.2em] overflow-hidden align-bottom sm:h-[1.2em] lg:h-[1.2em]">
            <RotatingText
              texts={[
                "to modern kitchens.",
                "with restaurants and food startups.",
                "to buyers who value local.",
              ]}
              mainClassName="mx-1 text-[#0CF2A0]"
              staggerFrom="last"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "110%", opacity: 0 }}
              staggerDuration={0.01}
              transition={{ type: "spring", damping: 18, stiffness: 250 }}
              rotationInterval={2600}
              splitBy="characters"
              auto
              loop
            />
          </span>
        </motion.h1>

        <motion.p
          variants={subHeadlineVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-6 max-w-3xl text-sm text-zinc-700 sm:text-base lg:text-lg"
        >
          Cultivate is a chat-first B2B platform that connects Ontario&apos;s
          self-sufficient farmers with restaurants and food startups. By
          combining instant, conversational listing creation with an AI-powered
          matching algorithm, Cultivate makes it easy for farmers to gain online
          visibility and for buyers to reliably source local ingredients without
          spreadsheets or endless phone calls.
        </motion.p>

        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-6 flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row"
          onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          <motion.a
            href="[PROMO_VIDEO_URL]"
            className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-[#00674F] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#00543f] hover:shadow-md sm:w-auto"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Watch 2-minute promo
          </motion.a>
          <a
            href="/demo"
            className="w-full rounded-md border border-zinc-200 bg-white/60 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:border-[#00674F]/60 hover:text-[#00674F] sm:w-auto"
          >
            Jump to tutorials
          </a>
        </motion.form>

        <motion.p
          variants={trialTextVariants}
          initial="hidden"
          animate="visible"
          className="mb-10 text-xs text-zinc-500"
        >
        </motion.p>

        <motion.div
          variants={worksWithVariants}
          initial="hidden"
          animate="visible"
          className="mb-10 flex flex-col items-center justify-center space-y-3 text-xs text-zinc-600"
        >
          <span className="font-medium uppercase tracking-wider text-gray-500">
            Built for
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span className="flex items-center whitespace-nowrap">
              🌾 Self-sufficient farmers
            </span>
            <span className="flex items-center whitespace-nowrap">
              🍽️ Restaurants &amp; food startups
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-5xl px-4 sm:px-0"
        >
          <div className="grid gap-4 rounded-lg border border-zinc-200 bg-white/90 p-4 text-left text-xs sm:grid-cols-[1.5fr,1.2fr] sm:p-6 shadow-sm">
            <div className="flex flex-col justify-between space-y-3">
              <h2 className="text-sm font-semibold text-zinc-900">
                Promo video &amp; primary workflow
              </h2>
              <p className="text-zinc-700">
                The promo video shows a farmer creating a listing via chat and a
                restaurant using AI-powered matching to discover local supply,
                compare options, and start a conversation. It is the fastest way
                to understand Cultivate end to end.
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-[11px] text-zinc-600">
                <li>What Cultivate is and who it is for</li>
                <li>How Glean turns surplus harvests into listings</li>
                <li>How restaurants filter, match, and contact farmers</li>
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-md border border-dashed border-[#E0F2EB] bg-[#E0F2EB]/60 p-4 text-center text-[11px] text-[#315f34]">
              <div className="space-y-2">
                <p className="font-semibold text-[#315f34]">
                  Promo video placeholder
                </p>
                <p>
                  Replace <code>[PROMO_VIDEO_URL]</code> with your hosted 1–3
                  minute overview. This card is intentionally simple so you can
                  swap the asset without changing layout.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default InteractiveHero;

