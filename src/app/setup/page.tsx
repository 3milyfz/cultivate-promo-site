import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Get started | Cultivate Beta",
  description:
    "Create a Cultivate account, choose farmer or restaurant, and set your postal code to use the beta app.",
};

const LIVE_APP_URL = "https://cultivate-fe.vercel.app/";

type StepImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type OnboardingStep = {
  title: string;
  description: string;
  imageCaption: string;
  images?: StepImage[];
};

const onboardingSteps: OnboardingStep[] = [
  {
    title: "Create your account",
    description:
      "Open Cultivate and sign up through our secure login. You will use the same account each time you return to the app.",
    imageCaption: "Sign-up and login screens in the Cultivate app",
    images: [
      {
        src: "/setup/landing.png",
        alt: "Cultivate home screen with Get started and Log in",
        width: 1024,
        height: 610,
      },
      {
        src: "/setup/sign-up.png",
        alt: "Cultivate welcome screen with email and password fields to sign up",
        width: 1024,
        height: 582,
      },
    ],
  },
  {
    title: "Choose farmer or restaurant",
    description:
      "Select the role that matches how you will use Cultivate. Farmers list produce and connect with buyers; restaurants and food startups discover local supply and start conversations.",
    imageCaption: "Farmer and restaurant role selection in the Cultivate app",
    images: [
      {
        src: "/setup/role-selection.png",
        alt: "Welcome to Cultivate screen asking how you will use the platform, with Farmer and Restaurant options",
        width: 1024,
        height: 581,
      },
    ],
  },
  {
    title: "Enter your postal code",
    description:
      "Add a Canadian postal code so listings and matches stay local to your area. You can update this later from your profile if you move.",
    imageCaption: "Canadian postal code entry during Cultivate onboarding",
    images: [
      {
        src: "/setup/postal-code.png",
        alt: "Welcome to Cultivate screen asking for Canadian postal code with Back and Create account buttons",
        width: 1024,
        height: 582,
      },
    ],
  },
];

function StepImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div
      className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#E0F2EB] bg-[#E0F2EB]/45 px-4 py-8 text-center sm:py-12"
      role="img"
      aria-label={caption}
    >
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00674F]">
        Image placeholder
      </span>
      <p className="max-w-sm text-xs text-zinc-600">{caption}</p>
    </div>
  );
}

function StepVisual({
  caption,
  images,
}: {
  caption: string;
  images?: StepImage[];
}) {
  if (images?.length) {
    return (
      <div className="flex flex-col gap-3">
        {images.map((img, i) => (
          <figure
            key={img.src}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          </figure>
        ))}
      </div>
    );
  }

  return <StepImagePlaceholder caption={caption} />;
}

export default function GetStartedPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10">
      <header className="space-y-4 border-b border-zinc-200 pb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Get started
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          How to use Cultivate
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-zinc-600">
          These steps walk you through opening the live beta app, not installing
          the codebase. Complete them once to start listing produce or sourcing
          locally as a buyer.
        </p>
        <a
          href={LIVE_APP_URL}
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center justify-center rounded-md bg-[#00674F] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#00543f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A27A]/70"
        >
          Open Cultivate App
        </a>
      </header>

      <ol className="space-y-10">
        {onboardingSteps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-6 rounded-xl border border-zinc-200 bg-white/90 p-5 shadow-sm lg:grid-cols-[1fr,1.15fr] lg:items-start lg:p-6"
          >
            <div className="flex flex-col gap-3 lg:order-2">
              <StepVisual caption={step.imageCaption} images={step.images} />
            </div>
            <div className="flex gap-3 lg:order-1">
              <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E0F2EB] text-sm font-semibold text-[#00674F]">
                {index + 1}
              </span>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-zinc-900">
                  {step.title}
                </h2>
                <p className="text-sm text-zinc-700">{step.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="rounded-xl border border-[#E0F2EB] bg-[#E0F2EB]/35 p-5 text-sm text-zinc-700">
        <p className="font-semibold text-[#315f34]">Developer setup</p>
        <p className="mt-2 text-xs leading-relaxed">
          If you need to run Cultivate locally or contribute code, see the{" "}
          <a
            href="/contributing"
            className="font-medium text-[#00674F] underline-offset-2 hover:underline"
          >
            Contribute
          </a>{" "}
          page and the repository README instead of this page.
        </p>
      </section>
    </div>
  );
}
