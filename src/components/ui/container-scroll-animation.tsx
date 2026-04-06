"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  type MotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

/** Scroll progress 0→1 is mapped over this fraction of the section so motion completes earlier. */
const SCROLL_PROGRESS_BAND = 0.2;

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
  alignFirstStep = false,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Pull step 1 to the top of the scroll section so there’s no empty band above it. */
  alignFirstStep?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(
    scrollYProgress,
    [0, SCROLL_PROGRESS_BAND],
    [14, 0],
    { clamp: true },
  );
  const scale = useTransform(
    scrollYProgress,
    [0, SCROLL_PROGRESS_BAND],
    scaleDimensions(),
    { clamp: true },
  );
  const translate = useTransform(
    scrollYProgress,
    [0, SCROLL_PROGRESS_BAND],
    [0, -56],
    { clamp: true },
  );

  return (
    <div
      className={
        className ??
        cn(
          "relative flex h-[56rem] justify-center p-2 md:h-[76rem] md:p-16",
          alignFirstStep
            ? "items-start pt-0 md:pt-1"
            : "items-center",
        )
      }
      ref={containerRef}
    >
      <div
        className={cn(
          "relative isolate w-full",
          alignFirstStep
            ? "pt-0 pb-8 md:pt-1 md:pb-24"
            : "py-8 md:py-24",
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export function Header({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="relative z-20 mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

export function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="relative z-0 mx-auto mt-1 h-[min(32rem,85vh)] w-full max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 shadow-2xl md:mt-2 md:h-[min(46rem,78vh)] md:p-6"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
}
