"use client";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { buttonsData } from "@/data/information";

function HeroSection() {
  const handleRoute = (url: any) => {
    window.open(url, "_blank");
  };
  return (
    <div
      className="h-auto md:h-[42rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-28 md:py-0"
      id="hero-section"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-0 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Tarundeep Joshi
        </h1>

        <h2
          className="mt-4 text-3xl  md:text-5xl font-bold max-w-lg mx-auto"
          style={{ color: "#8892b0", textIndent: "2rem" }}
        >
          I build things for the web.
        </h2>

        <div className="mt-6 flex items-center flex-wrap justify-center">
          {buttonsData.map((item) => (
            <span className="mr-2 my-2" key={item.id}>
              <Button
                onClick={() => handleRoute(item.url)}
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                {item.label}
                <span className="ml-2">
                  <item.icon size={23} />
                </span>
              </Button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
