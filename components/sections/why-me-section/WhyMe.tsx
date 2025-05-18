import { ContentWrapper } from "@/components/generic/ui/content-wrapper";
import { IconContainer } from "@/components/ui/icon-container";
import { cn } from "@/lib/utils";
import { whyMeItems } from "./whyMeData";
import { Briefcase, Code, Zap, Handshake, LineChart, Ban, Clock, Users } from "lucide-react";

/**
 * WhyMe - Component that displays six key reasons to work with me
 *
 * This component presents a grid of six content cards highlighting
 * key professional advantages using a consistent visual style.
 */
export function WhyMe() {
  // Function to get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="w-4 h-4 text-primary" />;
      case "Code":
        return <Code className="w-4 h-4 text-primary" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-primary" />;
      case "Handshake":
        return <Handshake className="w-4 h-4 text-primary" />;
      case "LineChart":
        return <LineChart className="w-4 h-4 text-primary" />;
      case "Ban":
        return <Ban className="w-4 h-4 text-primary" />;
      case "Clock":
        return <Clock className="w-4 h-4 text-primary" />;
      case "Users":
        return <Users className="w-4 h-4 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
      {whyMeItems.map((item, index) => (
        <ContentWrapper key={index} extendBorders={true} extendAmount={12} borderLeft={false} borderRight={true} className="relative transition-all duration-300 hover:bg-card/30 group">
          <div className="absolute inset-0 overflow-hidden opacity-40 group-hover:opacity-50 transition-opacity duration-300 group-hover:rounded-md">
            <div
              className={cn(
                "absolute inset-0 opacity-30",
                "bg-[length:16px_16px]",
                "bg-[position:right_top]",
                "bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]",
                "dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"
              )}
            />
            <div className="pointer-events-none absolute inset-0 bg-card [mask-image:radial-gradient(ellipse_at_top_right,transparent_0%,black_30%)]"></div>
          </div>
          <div className="flex flex-col gap-3 p-6 relative">
            <div className="flex flex-col items-start gap-2">
              <IconContainer size="sm" className="group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                {getIconComponent(item.iconName)}
              </IconContainer>
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{item.title}</h3>
            </div>
            <p className="text-base text-muted-foreground">{item.description}</p>
          </div>
        </ContentWrapper>
      ))}
    </div>
  );
}
