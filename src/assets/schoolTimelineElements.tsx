import { type TimelineItem } from "../components/Timeline";

const schoolTimelineElements: TimelineItem[] = [
  {
    id: 0,
    title: "Smart Manufacturing Research",
    location: "CSUN ARCS Fellow & WM Intern",
    description: "Applied AI, computer vision, and digital twin systems",
    date: "SEPT 2026-Present",
    type: "research",
    color: "blue",
    img_path: "wm-logo.png",
  },
  {
    id: 1,
    title: "GIS Research Assistant",
    location: "California State University, Northridge (CSUN)",
    description:
      "NASA JPL Sponsored reseach on time-series clusturing & remote sensing analysis",
    date: "OCT 2026-Present",
    type: "research",
    color: "blue",
    img_path: "csun.svg",
  },
  {
    id: 2,
    title: "B.S. Computer Science, Minor in Data Science",
    location: "California State University, Northridge (CSUN)",
    description: "GPA: 3.95/4.0",
    date: "AUG 2023-MAY 2026",
    type: "school",
    color: "blue",
    img_path: "csun.svg",
  },
  {
    id: 3,
    title: "NASA JPL Summer Intern",
    location: "NASA Jet Propulsion Laboratory",
    description: "Deep learning research for SWOT sea-surface-height analysis",
    date: "JUN 2026-AUG 2026",
    type: "research",
    color: "blue",
    img_path: "jpl.png",
  },
  {
    id: 4,
    title: "M.S. Computer Science",
    location: "University of California, Los Angeles",
    description: "GPA:",
    date: "SEPT 2026-MAY 2028",
    type: "school",
    color: "blue",
    img_path: "UCLA_logo.webp",
  },
];

export default schoolTimelineElements.reverse();
