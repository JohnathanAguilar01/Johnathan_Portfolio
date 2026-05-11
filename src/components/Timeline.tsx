import { FaGraduationCap, FaBookOpen, FaMicroscope } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import ScrollAnimation from "./ScrollAnimation";

export type TimelineItem = {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  type?: "school" | "research" | "publication" | "presentation";
  color?: string;
  img_path?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  side?: "left" | "right" | "both";
};

const Timeline: React.FC<TimelineProps> = ({ items, side = "both" }) => {
  const getIcon = (type?: TimelineItem["type"]) => {
    switch (type) {
      case "school":
        return <FaGraduationCap size={18} />;

      case "research":
        return <FaMicroscope size={18} />;

      case "publication":
        return <FaBookOpen size={18} />;

      case "presentation":
        return <MdCoPresent size={20} />;

      default:
        return <FaGraduationCap size={18} />;
    }
  };

  const getWrapperPosition = (index: number) => {
    if (side === "right") return "justify-start";
    if (side === "left") return "justify-end";

    return index % 2 === 0 ? "md:justify-start" : "md:justify-end";
  };

  const linePosition = () => {
    if (side === "right") return "left-5";
    if (side === "left") return "right-5";

    return "left-5 md:left-1/2 md:-translate-x-1/2";
  };

  const iconPosition = () => {
    if (side === "right") return "left-0";
    if (side === "left") return "right-0";

    return "left-0 md:left-1/2 md:-translate-x-1/2";
  };

  const cardSpacing = () => {
    if (side === "right") return "ml-16 w-[calc(100%-4rem)]";
    if (side === "left") return "mr-16 w-[calc(100%-4rem)]";

    return "ml-16 w-[calc(100%-4rem)] md:ml-0 md:w-[44%]";
  };

  const animationDirection =
    side === "left" ? "-translate-x-1/2" : "translate-x-1/2";

  return (
    <div className="relative w-full">
      {/* Vertical line */}
      <div
        className={`absolute top-0 h-full w-[2px] bg-blue-200 ${linePosition()}`}
      />

      <div className="space-y-12">
        {items.map((item, index) => (
          <ScrollAnimation
            key={item.id}
            delay={500}
            translateBefore={animationDirection}
          >
            <div
              className={`relative flex w-full ${getWrapperPosition(index)}`}
            >
              {/* Icon node */}
              <div
                className={`absolute top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md ${iconPosition()}`}
              >
                {getIcon(item.type)}
              </div>

              {/* Card */}
              <div
                className={`flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-zinc-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:flex-row ${cardSpacing()}`}
              >
                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-sm font-semibold text-blue-600">
                    {item.date}
                  </p>

                  <h3 className="text-xl font-bold text-zinc-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-base text-zinc-600">
                    {item.location}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                {item.img_path && (
                  <div className="w-full shrink-0 lg:w-24 xl:w-28">
                    <img
                      src={item.img_path}
                      alt={item.location}
                      className="h-24 w-full rounded-xl object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
