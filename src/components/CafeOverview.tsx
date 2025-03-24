import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router";

const CafeOverview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const cafeOverViewTextLines = ["Sneak", "Peak", "On", "Our", "Cafe"];

  const isInview = useInView(ref, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

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

  return (
    <div className="relative h-[100vh] w-full">
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{
          duration: 2,
          ease: [0.4, 0, 0.2, 1],
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 100,
          },
        }}
        className="absolute left-0 md:top-0 bottom-0 w-full lg:w-[40vw] h-[50vh] lg:h-full"
      >
        <img
          src="/images/cafe_overview.jpg"
          alt="cafe_overview"
          className="object-cover h-full w-full"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl h-full relative">
        <div className="h-full flex flex-col lg:justify-end lg:items-end">
          {/* Vertical Text */}
          <div className="hidden lg:block absolute right-0 top-1/3 -translate-y-1/2 writing-vertical-rl text-zinc-950 text-4xl font-bold tracking-widest w-1">
            船長がどこにいるか
          </div>

          <div className="h-full py-14 w-full lg:w-fit flex flex-col gap-y-10 md:gap-y-16 items-start justify-start md:justify-end px-5 lg:px-0">
            <div className="flex w-full md:w-auto flex-col gap-2 ">
              <div className="flex flex-wrap w-56 lg:w-auto items-center gap-x-1">
                {cafeOverViewTextLines.map((word, i) => {
                  return (
                    <motion.div
                      key={i}
                      ref={ref}
                      initial="initial"
                      animate={isInview ? "animate" : ""}
                      custom={i}
                      variants={pullupVariant}
                      className="text-zinc-950 font-bold text-3xl"
                    >
                      {word === "" ? <span>&nbsp;</span> : word}
                    </motion.div>
                  );
                })}
              </div>
              <h4 className="flex w-[68vw] md:w-auto items-center text-zinc-500 text-lg gap-x-2">
                <MapPin className="w-6 h-6" />
                <span>Located on Idjen Boulevard, Malang, East Java</span>
              </h4>
            </div>
            <div className="flex flex-col gap-y-4 w-full items-end">
              <div className="flex w-full flex-col justify-between md:flex-row gap-4 md:gap-10">
                <p className="text-sm text-zinc-500 text-justify w-full md:w-[30vw] tracking-wide">
                  Savor the rich flavors of hand-selected matcha, sourced from
                  the finest Japanese tea farms. Every sip is a blend of
                  tradition and craftsmanship, bringing you the perfect balance
                  of taste, aroma, and wellness.
                </p>
              </div>
              <Link
                to={"/"}
                className="border border-gray-300 w-fit cursor-pointer rounded-full bg-transparent text-zinc-950 px-6 py-2 text-sm font-medium flex items-center gap-2 group"
              >
                See Location
                <ArrowUpRight
                  size={20}
                  className="group-hover:rotate-45 transition-transform duration-300 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeOverview;
