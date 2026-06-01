import { type TimelineItem } from "../components/Timeline";

export const publicationsTimelineElements: TimelineItem[] = [
  {
    id: 1,
    title: "USC LA Geospatial Summit",
    location: "University of Southern California",
    description:
      "Presented GIS and remote sensing research focused on spatial analysis, time-series methods, and environmental applications.",
    date: "FEB 2026",
    type: "presentation",
    color: "blue",
    img_path: "usc.png",
  },
  {
    id: 2,
    title: "CSUNposium Research Poster",
    location: "California State University, Northridge",
    description:
      "Presented applied AI research focused on smart manufacturing, computer vision, and MRF analytics.",
    date: "APR 2026",
    type: "presentation",
    color: "blue",
    img_path: "csun.svg",
  },
  {
    id: 3,
    title: "Smart Manufacturing Manuscript",
    location: "Journal of Manufacturing Systems",
    description:
      "Manuscript on VLM-based jam material detection, OCR-to-knowledge-graph pipelines, MRAG, and digital twin systems.",
    date: "IN PROGRESS",
    type: "publication",
    color: "blue",
    img_path: "",
  },
  {
    id: 4,
    title: "Remote Sensing Manuscript",
    location: "Remote Sensing Applications: Society and Environment",
    description:
      "Manuscript on time-series SST analysis, ENSO conditioning, EOFs, clustering, and spatial trend analysis.",
    date: "IN PROGRESS",
    type: "publication",
    color: "blue",
    img_path: "",
  },
];

export default publicationsTimelineElements.reverse();
