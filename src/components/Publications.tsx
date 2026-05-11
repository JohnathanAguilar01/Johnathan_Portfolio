import Timeline from "./Timeline";
import ScrollAnimation from "./ScrollAnimation";
import publicationsTimelineElements from "../assets/publicationsTimelineElements";
import { textAccentColor } from "../assets/accentColor";

function Publications() {
  return (
    <div className="flex w-screen flex-col items-center justify-between dark:bg-zinc-900 bg-zinc-100 px-4 py-24 xl:flex-row xl:px-32 2xl:px-150">
      {/* Timeline left half */}
      <div className="hidden md:block w-full xl:w-1/2">
        <ScrollAnimation delay={200} translateBefore="-translate-x-1/2">
          <Timeline items={publicationsTimelineElements} side="left" />
        </ScrollAnimation>
      </div>

      {/* Text right half */}
      <div className="mb-10 mt-12 flex h-auto w-full max-w-2xl flex-col items-center text-center xl:mb-0 xl:mt-0 xl:ml-10 xl:w-1/2 xl:items-start xl:justify-center xl:text-start">
        <ScrollAnimation delay={200} translateBefore="translate-x-1/2">
          <h2
            className={`mb-4 text-start text-3xl font-bold ${textAccentColor} md:text-5xl`}
          >
            Publications &amp; Presentations
          </h2>

          <p className="max-w-xl text-lg leading-relaxed">
            My research work has led to conference presentations, research
            posters, and manuscript projects across applied AI, smart
            manufacturing, GIS, and remote sensing.
          </p>

          <div className="mt-6 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
              <p className={`text-sm font-semibold ${textAccentColor}`}>
                Themes
              </p>
              <p className="mt-1 text-sm">
                Applied AI, GIS, and remote sensing
              </p>
            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
              <p className={`text-sm font-semibold ${textAccentColor}`}>
                Presentations
              </p>
              <p className="mt-1 text-sm">
                CSUNposium, USC LA Geospatial Summit
              </p>
            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
              <p className={`text-sm font-semibold ${textAccentColor}`}>
                Manuscripts
              </p>
              <p className="mt-1 text-sm">
                Smart manufacturing and remote sensing
              </p>
            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
              <p className={`text-sm font-semibold ${textAccentColor}`}>
                Focus
              </p>
              <p className="mt-1 text-sm">Research with real-world impact</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Timeline left half */}
      <div className="w-full xl:w-1/2 md:hidden">
        <ScrollAnimation delay={200} translateBefore="-translate-x-1/2">
          <Timeline items={publicationsTimelineElements} side="left" />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Publications;
