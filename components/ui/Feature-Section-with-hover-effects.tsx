import { cn } from "@/lib/utils";
import {
  Terminal,
  Shuffle,
  DollarSign,
  Cloud,
  Share2,
  HelpCircle,
  Zap,
  Heart,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Cloud & DevOps",
      description:
        "AWS infrastructure, Lambda, CI/CD pipelines, cloud cost optimization, and server management.",
      icon: <Cloud />,
    },
    {
      title: "Frontend Development",
      description:
        "React.js, Next.js, TypeScript, responsive design, and modern UI frameworks.",
      icon: <Zap />,
    },
    {
      title: "Backend Development",
      description:
        "Node.js, Express.js, RESTful APIs, WebSocket, and database management.",
      icon: <Terminal />,
    },
    {
      title: "Database Management",
      description:
        "MongoDB, data modeling, optimization, and database architecture.",
      icon: <Share2 />,
    },
    {
      title: "System Architecture",
      description:
        "Microservices, serverless architecture, and scalable system design.",
      icon: <Shuffle />,
    },
    {
      title: "Performance Optimization",
      description:
        "API optimization, cloud performance tuning, and application efficiency.",
      icon: <Heart />,
    },
    {
      title: "Development Practices",
      description:
        "Agile methodologies, version control, code review, and team collaboration.",
      icon: <HelpCircle />,
    },
    {
      title: "Integration & Deployment",
      description:
        "Third-party API integration, payment systems, and deployment automation.",
      icon: <DollarSign />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

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
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
