import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { services } from "../constants/serivces";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const Service = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const cafeOverViewTextLines = [
    "Make",
    "Your",
    "Own",
    "Matcha,",
    "Because",
    "Why",
    "Not?",
  ];

  const isTextInView = useInView(textRef, { once: true });
  const isCardInView = useInView(cardRef, { once: true });

  const textPullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.5,
      },
    }),
  };

  const cardPullupVariant = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.5,
      },
    }),
  };

  return (
    <section className="h-fit" id="service">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 w-full h-full py-5 md:py-24">
        <div className="w-full  h-full flex flex-col md:gap-24 gap-14">
          <div className="w-full flex flex-col gap-3 text-zinc-950 font-bold items-center">
            <span className="text-xl">マッチーを自分で作って!</span>
            <div className="flex flex-wrap justify-center gap-x-1">
              {cafeOverViewTextLines.map((word, i) => {
                return (
                  <motion.div
                    key={i}
                    ref={textRef}
                    initial="initial"
                    animate={isTextInView ? "animate" : ""}
                    custom={i}
                    variants={textPullupVariant}
                    className="font-bold text-3xl"
                  >
                    {word === "" ? <span>&nbsp;</span> : word}
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:flex flex-col md:grid md:grid-cols-2 lg:flex-row items-center gap-6 md:gap-14">
            {services.map((service, i) => (
              <motion.div
                key={i}
                ref={cardRef}
                initial="initial"
                animate={isCardInView ? "animate" : ""}
                variants={cardPullupVariant}
                custom={i}
                className={`flex flex-col w-full items-center space-y-6 group ${
                  i === services.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-[70vw] h-[70vw] md:h-[15vw] md:w-[15vw] relative flex overflow-hidden rounded-full">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 w-full h-full text-4xl font-bold absolute z-20 flex items-center justify-center rounded-full bg-black/40">
                    {service.japaneseNumber}
                  </span>
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={service.picture}
                      alt={service.title}
                      className=" rounded-full object-cover w-full h-full group-hover:scale-125 origin-center transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-[20rem]">
                  <h2 className="text-xl text-zinc-950 font-bold">
                    {i + 1}. {service.title}
                  </h2>
                  <p className="text-zinc-500 text-sm text-justify">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <Link
              to={"/"}
              className="border border-gray-300 w-fit cursor-pointer rounded-full bg-transparent text-zinc-950 px-6 py-2 text-sm font-medium flex items-center gap-2 group"
            >
              Make a Reservation
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform duration-300 ease-in-out"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
