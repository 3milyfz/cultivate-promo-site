/* Cultivate hero based on Tailark-style layout, with Cultivate-specific copy. */
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { cn } from "@/lib/utils";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export function HeroSection() {
  return (
      <main className="overflow-hidden bg-[color:var(--color-earth-50)] text-zinc-900">
        <div
          aria-hidden
          className="pointer-events-none isolate hidden inset-0 z-[2] opacity-40 lg:block"
        >
          <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(148,163,184,0.16)_0,rgba(148,163,184,0.04)_50%,rgba(148,163,184,0)_80%)]" />
          <div className="absolute left-0 top-0 h-[80rem] w-56 -rotate-45 [translate:5%_-50%] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(148,163,184,0.14)_0,rgba(148,163,184,0.02)_80%,transparent_100%)]" />
          <div className="absolute left-0 top-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(148,163,184,0.12)_0,rgba(148,163,184,0.02)_80%,transparent_100%)]" />
        </div>

        <section>
          <div className="relative pt-16 md:pt-20">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 0.6,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1600093463592-9f61807aef11?auto=format&fit=crop&w=1400&q=80"
                alt="Ontario farm landscape at sunrise"
                className="absolute inset-x-0 top-52 -z-20 hidden rounded-3xl object-cover lg:block"
              />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgba(247,245,242,1)_70%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="https://cultivate-fe.vercel.app/"
                    className="group mx-auto flex w-fit items-center gap-4 rounded-full border border-[#E0F2EB] bg-white px-3.5 py-1 shadow-sm transition-all duration-300 hover:bg-[#E0F2EB]/60"
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#00674F]">
                      Cultivate beta · Live in Ontario
                    </span>
                    <span className="block h-4 w-px bg-zinc-200" />
                    <div className="h-6 w-6 overflow-hidden rounded-full bg-[#00674F] text-white duration-500 group-hover:bg-[#00543f]">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex h-6 w-6">
                          <ArrowRight className="m-auto h-3 w-3" />
                        </span>
                        <span className="flex h-6 w-6">
                          <ArrowRight className="m-auto h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:mt-16 xl:text-[3.6rem]">
                    Connecting Ontario&apos;s local farms to modern kitchens.
                  </h1>
                  <p className="mx-auto mt-6 max-w-2xl text-balance text-sm text-zinc-700 sm:text-base">
                    Cultivate is a chat-first B2B platform that connects
                    Ontario&apos;s self-sufficient farmers with restaurants and
                    food startups. Glean, our AI assistant, turns harvests into
                    listings and helps buyers source local produce in natural
                    language.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div className="rounded-[14px] border border-[#E0F2EB] bg-[#E0F2EB]/60 p-0.5">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-[11px] px-5 text-base"
                    >
                      <Link href="https://cultivate-fe.vercel.app/">
                        <span className="text-nowrap">
                          Open live Cultivate app
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-10 rounded-xl px-5 text-base"
                  >
                    <Link href="/promo#demo-tutorial">
                      <span className="text-nowrap">Watch tutorials</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.8,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-[color:var(--color-earth-50)]"
                />
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg">
                  <img
                    className="relative aspect-[15/8] w-full rounded-xl object-cover"
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
                    alt="Cultivate dashboard concept with listings and chat"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        <section className="pb-16 pt-10 md:pb-24">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/workflow-architecture"
                className="flex items-center text-sm text-[#00674F] duration-150 hover:opacity-75"
              >
                <span>See core workflows &amp; architecture</span>
                <ChevronRight className="ml-1 inline-block h-3 w-3" />
              </Link>
            </div>
            <div className="group-hover:blur-[1px] group-hover:opacity-60 mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-12 gap-y-6 text-xs text-zinc-600 transition-all duration-500 sm:grid-cols-3 sm:gap-x-16 sm:gap-y-10">
              <div>
                <p className="font-semibold text-zinc-900">For farmers</p>
                <p className="mt-1">
                  Turn surplus or imperfect harvests into live listings in under
                  a minute using chat and photos.
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900">
                  For restaurants &amp; food startups
                </p>
                <p className="mt-1">
                  Describe sourcing needs in natural language and get
                  AI-ranked, local matches with distance and price context.
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900">
                  For evaluators &amp; instructors
                </p>
                <p className="mt-1">
                  Use the beta site and docs as a complete artifact: live app,
                  workflows, architecture, and contribution history.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

