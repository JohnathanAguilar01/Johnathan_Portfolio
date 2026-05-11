import ScrollAnimation from "./ScrollAnimation";
import newsElements from "../assets/newsElements";
import { textAccentColor, bgAccentColor } from "../assets/accentColor";

function News() {
  return (
    <div className="flex w-screen flex-col items-center dark:bg-zinc-900 bg-zinc-100 px-4 py-14 xl:px-32 2xl:px-150">
      <ScrollAnimation delay={200} translateBefore="-translate-y-1/2">
        <div className="mb-8 max-w-3xl text-center">
          <h2
            className={`mb-2 text-3xl font-bold ${textAccentColor} md:text-5xl`}
          >
            News
          </h2>

          <p className="text-base leading-relaxed md:text-lg">
            Recent milestones in my academic and research journey.
          </p>
        </div>
      </ScrollAnimation>

      <div className="w-full max-w-3xl space-y-3">
        {newsElements.map((news, index) => (
          <ScrollAnimation
            key={news.id}
            delay={200 + index * 75}
            translateBefore="translate-y-1/4"
          >
            <div className="rounded-xl border border-blue-300/20 bg-white/5 px-5 py-3 transition duration-300 hover:bg-white/10">
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <h3
                  className={`text-base font-bold ${textAccentColor} md:text-lg`}
                >
                  {news.month}
                </h3>

                <ul className="space-y-1">
                  {news.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="grid grid-cols-[8px_1fr] gap-3 text-sm leading-relaxed md:text-base"
                    >
                      <span
                        className={`mt-[0.6em] h-1.5 w-1.5 rounded-full ${bgAccentColor}`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
export default News;
