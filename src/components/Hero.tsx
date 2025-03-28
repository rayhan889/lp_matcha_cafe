import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const headerTextLines = [
    ["本物"],
    ["日本語", "マッチー,"],
    ["手作り", "について", "あなた!"],
  ];
  let wordIndex = 0;

  const isInview = useInView(ref, { once: true });

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full" id="hero">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="w-full absolute top-0 left-0 z-2 h-80 bg-gradient-to-b from-black to-black/0"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://03sla7u2w4.ufs.sh/f/fCm9YYN5XvzFfS9HB2N5XvzF7MYdt2so6x9jAUnPpZ1lVhQ8"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="w-full absolute bottom-0 left-0 z-2 h-80 bg-gradient-to-t from-black to-black/0"></div>
      </div>

      <div className="container relative mx-auto h-full max-w-7xl px-5 z-10 lg:px-0 py-5 md:py-20 grid grid-rows-2">
        <div className="h-full w-full flex items-start justify-start pt-14 md:pt-24">
          <div className="flex flex-col gap-3 text-white">
            <div className="text-xs md:text-sm w-[54vw] md:w-fit tracking-tighter uppercase py-3 px-5 rounded-full border border-zinc-500 backdrop-blur-sm bg-black/10">
              🌿 Authentic Japanese Matcha, Crafted for You
            </div>
            <div ref={ref} className="flex flex-col">
              {headerTextLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex flex-wrap gap-x-5">
                  {line.map((word, i) => {
                    const currentWordIndex = wordIndex++;
                    return (
                      <motion.div
                        key={`${lineIndex}-${i}`}
                        initial="initial"
                        animate={isInview ? "animate" : ""}
                        custom={currentWordIndex}
                        variants={pullupVariant}
                        className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter"
                      >
                        {word === "" ? <span>&nbsp;</span> : word}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-full flex items-end justify-end">
          <div className="flex flex-col gap-3 text-white items-end">
            <p className="text-xs md:text-sm text-justify w-[15rem] md:w-[20rem] tracking-wide">
              Savor the rich flavors of hand-selected matcha, sourced from the
              finest Japanese tea farms. Every sip is a blend of tradition and
              craftsmanship, bringing you the perfect balance of taste, aroma,
              and wellness.
            </p>
            <button
              onClick={scrollToAbout}
              className="border border-zinc-500 cursor-pointer rounded-full bg-transparent hover:bg-white hover:text-zinc-950 transition-colors duration-300 text-white px-6 py-2 text-sm font-medium flex items-center gap-2 group"
            >
              Learn More
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-[135deg] transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
