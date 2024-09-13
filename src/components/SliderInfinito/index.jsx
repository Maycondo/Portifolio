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

  
  const LOGOS = [
    // eslint-disable-next-line react/jsx-key
    <SiJavascript size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiHtml5 size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiCss3 size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiPython size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiReact size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiDjango size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiNodedotjs size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiGit size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiGithub size={45} style={{ color: "gray" }} />,
    // eslint-disable-next-line react/jsx-key
    <SiPostgresql size={45} style={{ color: "gray" }} />, // Representando SQL
    // eslint-disable-next-line react/jsx-key
    <SiCsharp size={45} style={{ color: "gray" }} />
  ];
  
  
  export default function InfiniteSlider() {
    return (
     <>
      <div className="relative m-4 h-40 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100  after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*22)] mt-4">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[8vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[8vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
        <div className="animate-infinite-slider-reverse flex w-[calc(250px*22)] mt-4">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[8vw] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[8vw] items-center justify-center"
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
  