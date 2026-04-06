"use client";

import Image from "next/image";
import {
  LineChart,
  Mic,
  Sprout,
  Upload,
  UserCircle2,
  Volume2,
} from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const steps = [
  {
    id: "register",
    icon: UserCircle2,
    title: "Sign up and choose your role",
    instruction:
      "Register with Auth0, pick farmer or restaurant, and set your Canadian postal code so listings and matches stay location-aware.",
    videoUrl: "/log_in.mp4",
    imageSrc:
      "/get_started.png",
    imageAlt: "Person using a laptop at a desk",
  },
  {
    id: "farmer-listing",
    icon: Sprout,
    title: "Farmer: draft a listing with Glean",
    instruction:
      "Upload an image of your produce, let Glean generate a supply listing in under a minute.",
    videoUrl: "/cv.mp4",
    imageSrc:
      "/listing_example.png",
    imageAlt: "Fresh vegetables at a market stall",
  },
  {
    id: "voice-input",
    icon: Mic,
    title: "Farmer: voice to text input",
    instruction:
      "Dictate listing details hands-free; speech is transcribed into the form so you can refine and post without typing everything.",
    videoUrl: "/speech_to_text.mov",
    imageSrc:
      "https://images.unsplash.com/photo-1590602847861-f357a9332aaf?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Studio microphone close-up",
  },
  {
    id: "dynamic-pricing",
    icon: LineChart,
    title: "Farmer premium: dynamic pricing",
    instruction:
      "With premium enabled, pricing can adjust from live signals—keep offers competitive while you focus on the harvest.",
    videoUrl: "/dp_new.mov",
    imageSrc:
      "/dp_new_example.png",
    imageAlt: "Showing dynamic pricing in action",
  },
  {
    id: "restaurant-csv",
    icon: Upload,
    title: "Restaurant: source produce via chat + CSV",
    instruction:
      "Upload a CSV of what you need, then chat with Glean for three options. Example demand: \" 30 kg tomato, 18 kg spinach, 50 kg carrot, 25 kg cucumber\"",
    videoUrl: "/llm_opt.mp4",
    imageSrc:
      "/llm_opt.png",
    imageAlt: "Showing restaurant sourcing end to end",
  },
] as const;

function isVideoPlaceholder(url: string) {
  return url.startsWith("[");
}

function StepMedia({
  videoUrl,
  imageSrc,
  imageAlt,
}: {
  videoUrl: string;
  imageSrc: string;
  imageAlt: string;
}) {
  if (!isVideoPlaceholder(videoUrl)) {
    return (
      <video
        className="h-full w-full rounded-xl object-contain object-center"
        controls
        playsInline
        preload="metadata"
        poster={imageSrc}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1400}
      height={720}
      className="h-full w-full rounded-xl object-contain object-center"
      draggable={false}
      sizes="(max-width: 768px) 100vw, 1024px"
    />
  );
}

function SoundOnMark() {
  return (
    <div
      className="pointer-events-none absolute right-2 top-2 z-10 flex max-w-44 flex-col gap-0.5 rounded-lg border border-white/20 bg-zinc-950/92 px-2.5 py-1.5 shadow-md backdrop-blur-sm sm:right-3 sm:top-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:py-1.5 sm:pl-3 sm:pr-3.5"
      role="note"
      aria-label="This step includes audio. Turn on your device volume."
    >
      <span className="flex items-center gap-1.5">
        <Volume2
          className="h-4 w-4 shrink-0 text-[#7ee8c8]"
          strokeWidth={2.25}
          aria-hidden
        />
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-white">
          Sound on
        </span>
      </span>
      <span className="pl-6 text-[10px] leading-tight text-zinc-400 sm:pl-0 sm:text-xs sm:text-zinc-300">
        Turn your volume up
      </span>
    </div>
  );
}

export function PromoTutorialScroll() {
  return (
    <div className="flex flex-col overflow-hidden pb-24 pt-0 md:pb-32">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const stepLabel = `${index + 1}. ${step.title}`;
        return (
          <ContainerScroll
            key={step.id}
            alignFirstStep={index === 0}
            titleComponent={
              <div className="space-y-4 px-2 pb-0 md:pb-1">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-[#00674F] shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-[#00A27A]">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 dark:text-white md:text-5xl lg:text-6xl">
                  {stepLabel}
                </h2>
              </div>
            }
          >
            <div className="flex h-full min-h-0 flex-col gap-3 p-2 md:gap-4 md:p-2">
              <div className="relative flex min-h-[12rem] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
                {step.id === "voice-input" ? <SoundOnMark /> : null}
                <StepMedia
                  videoUrl={step.videoUrl}
                  imageSrc={step.imageSrc}
                  imageAlt={step.imageAlt}
                />
              </div>
              <p className="shrink-0 text-left text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-[15px]">
                {step.instruction}
              </p>
              {isVideoPlaceholder(step.videoUrl) ? (
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  Placeholder: set <code className="rounded bg-zinc-200 px-1 py-0.5 text-[11px] dark:bg-zinc-800">{step.videoUrl}</code>{" "}
                  to your hosted clip URL to replace the still with video.
                </p>
              ) : null}
            </div>
          </ContainerScroll>
        );
      })}
    </div>
  );
}
