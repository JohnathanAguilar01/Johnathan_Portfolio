import Timeline from "./Timeline";
import ScrollAnimation from "./ScrollAnimation";
import schoolTimelineElements from "../assets/schoolTimelineElements";

function Education() {
  return (
    <div className="flex w-screen flex-col items-center justify-between px-4 py-24 xl:flex-row xl:px-32 2xl:px-150">
      <ScrollAnimation
        className="mb-10 flex h-auto max-w-2xl flex-col items-center text-center xl:mb-0 xl:mr-10 xl:items-start xl:justify-center xl:text-start"
        delay={200}
        translateBefore="-translate-x-1/2"
      >
        {/*
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
          Academic Path
        </p>
        */}

        <h2 className="mb-4 text-start text-3xl font-bold text-blue-300 md:text-5xl">
          Education &amp; Research
        </h2>

        <p className="max-w-xl text-lg leading-relaxed text-zinc-300">
          My academic path connects computer science, data science, and applied
          AI research, from undergraduate foundations at CSUN to graduate study
          at UMass Amherst.
        </p>

        <div className="mt-6 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className="text-sm font-semibold text-blue-300">Focus</p>
            <p className="mt-1 text-sm text-zinc-400">
              Emodied AI, computer vision, and Mutli-modal foundation models
            </p>
          </div>

          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className="text-sm font-semibold text-blue-300">Current</p>
            <p className="mt-1 text-sm text-zinc-400">
              Research + NASA JPL internship
            </p>
          </div>

          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className="text-sm font-semibold text-blue-300">Next Step</p>
            <p className="mt-1 text-sm text-zinc-400">
              Begin my M.S. at UMass Amherst and join a research lab as a
              volunteer RA
            </p>
          </div>

          <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-4">
            <p className="text-sm font-semibold text-blue-300">Goal</p>
            <p className="mt-1 text-sm text-zinc-400">
              Pursue a Ph.D. in multimodal foundation models and embodied AI
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200} translateBefore="translate-x-1/2">
        <div className="w-full">
          <Timeline items={schoolTimelineElements} side="right" />
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Education;
