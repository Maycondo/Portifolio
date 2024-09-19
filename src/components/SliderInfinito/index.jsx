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
import "./style.css"

const LOGOS = [
     // eslint-disable-next-line react/jsx-key
  <SiJavascript className="icon icon-mobile icon-tablet icon-desktop" />,
     // eslint-disable-next-line react/jsx-key
  <SiHtml5 className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiCss3 className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiPython className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiReact className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiDjango className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiNodedotjs className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiGit className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiGithub className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiPostgresql className="icon icon-mobile icon-tablet icon-desktop" />,
       // eslint-disable-next-line react/jsx-key
  <SiCsharp className="icon icon-mobile icon-tablet icon-desktop" />
];

export default function InfiniteSlider() {
  return (
    <>
      <div className="relative m-4 h-40 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*22)] mt-4">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[12vw] sm:w-[8vw] md:w-[6vw] lg:w-[5vw] items-center justify-center"
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
        <div className="animate-infinite-slider-reverse flex w-[calc(250px*22)] mt-4">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[12vw] sm:w-[8vw] md:w-[6vw] lg:w-[6vw] items-center justify-center"
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
