/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file feature-section-with-hover-effects.tsx
 * @file Feature grid used on the landing page, showing curated benefits with icons.
 */

import { cn } from "@/lib/utils";
import {
  IconBrandYoutube,
  IconFilter,
  IconRocket,
  IconClock,
  IconBrain,
  IconTrendingUp,
  IconCode,
  IconBookmark,
} from "@tabler/icons-react";

/**
 * Render a collection of feature cards with hover effects.
 * @returns {JSX.Element} The features section component.
 */
export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Curated for Coders",
      description:
        "Only the best coding content from YouTube, Instagram, and more — filtered for quality.",
      icon: <IconFilter />,
    },
    {
      title: "Short-form Learning",
      description:
        "Bite-sized coding tutorials and tips that fit into your busy schedule.",
      icon: <IconClock />,
    },
    {
      title: "Topic Filters",
      description:
        "Focus on the languages, frameworks, and tools you care about most.",
      icon: <IconCode />,
    },
    {
      title: "Daily Refresh",
      description: "New content curated daily to keep your skills sharp and current.",
      icon: <IconRocket />,
    },
    {
      title: "Smart Algorithm",
      description: "AI-powered recommendations that understand what makes content valuable for developers.",
      icon: <IconBrain />,
    },
    {
      title: "Top Creators",
      description:
        "Follow the best educators and influencers in the tech space.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Save for Later",
      description:
        "Bookmark content to revisit when you have time to dive deeper.",
      icon: <IconBookmark />,
    },
    {
      title: "Multi-platform",
      description: "Aggregate content from YouTube, Instagram, TikTok, and more in one feed.",
      icon: <IconBrandYoutube />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto bg-neutral-950/50 rounded-2xl border border-white/5">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

/**
 * Individual feature card displayed in the features grid.
 * @param {object} props - Props for the feature component.
 * @param {string} props.title - Title of the feature.
 * @param {string} props.description - Short description for the feature.
 * @param {React.ReactNode} props.icon - Icon element for the feature.
 * @param {number} props.index - Index of the feature in the list, used for layout rules.
 * @returns {JSX.Element} The feature card element.
 */
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/5",
        (index === 0 || index === 4) && "lg:border-l border-white/5",
        index < 4 && "lg:border-b border-white/5"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-white/70">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-white/40 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/60 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
