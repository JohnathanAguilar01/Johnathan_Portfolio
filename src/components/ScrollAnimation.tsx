import { useEffect, useState, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay for animations
  veiwThreshold?: number;
  translateBefore?: string;
  translateAfter?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 0,
  veiwThreshold = 0.2,
  translateBefore = "translate-y-10",
  translateAfter = "translate-y-0",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          // setIsVisible(false);
        }
      },
      { threshold: veiwThreshold }, // Element becomes visible when 20% of it is in the viewport
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 " + translateAfter
          : "opacity-0 " + translateBefore
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
