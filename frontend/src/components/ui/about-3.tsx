import { Button } from "@/components/ui/button";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Domscrolling",
  description = "Domscrolling curates and surfaces the most valuable short-form coding content so you can learn more, faster.",
  mainImage = {
    src: "/sample-images/Screenshot_2025-04-07-10-47-25-976_com.instagram.android.jpg",
    alt: "app preview",
  },
  secondaryImage = {
    src: "/file.svg",
    alt: "placeholder",
  },
  breakout = {
    src: "/vercel.svg",
    alt: "logo",
    title: "Curated content, not noise",
    description:
      "We hand-pick short, high-signal coding reels to help you focus on what matters.",
    buttonText: "Explore the feed",
    buttonUrl: "/register",
  },
  companiesTitle = "Valued by developers worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Helping devs stay sharp with daily curated content and meaningful recommendations.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="pt-24 pb-6 bg-black text-white scale-80 origin-top">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">{title}</h1>
          <p className="text-white/70">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3 items-start">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full max-h-[520px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-white/5 p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold text-white">{breakout.title}</p>
                <p className="text-white/70">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto border-white/10 text-white" asChild>
                <a href={breakout.buttonUrl} className="text-white">{breakout.buttonText}</a>
              </Button>
            </div>
            <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>
        <div className="py-8">
          <p className="text-center text-white/60">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
