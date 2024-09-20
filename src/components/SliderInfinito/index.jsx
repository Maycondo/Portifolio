import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiDjango,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiCsharp
} from "react-icons/si";
import "./style.css";

const LOGOS = [
  // eslint-disable-next-line react/jsx-key
  <SiJavascript className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiHtml5 className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiCss3 className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiPython className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiReact className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiDjango className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiNodedotjs className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiGit className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiGithub className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiPostgresql className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />,
  // eslint-disable-next-line react/jsx-key
  <SiCsharp className="text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[2vw]" style={{ color: "grey" }} />
];

export default function InfiniteSlider() {
  return (
    <>
      <div className="relative m-4 h-40 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*22)] mt-4">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[12vw] sm:w-[8vw] md:w-[6vw] lg:w-[8vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[12vw] sm:w-[8vw] md:w-[6vw] lg:w-[8vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
        <div className="animate-infinite-slider-reverse flex w-[calc(250px*22)] mt-4">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[12vw] sm:w-[8vw] md:w-[6vw] lg:w-[8vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[12vw] sm:w-[8vw] md:w-[6vw] lg:w-[6vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
