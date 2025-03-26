import { useRef } from "react";
import { motion, useInView } from "motion/react";

const Offer = () => {
  const japaneseTextRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const japaneseFontTextLines = ["カップル", "奥さん", "フレンズ"];

  const isJapaneseTextInView = useInView(japaneseTextRef, { once: true });
  const isCardInView = useInView(cardRef, { once: true });

  const japaneseTextPullupVariant = {
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
    <section className="h-fit" id="offer">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 w-full h-full py-5 md:py-14">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isCardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
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
          className="w-full h-[50vh] rounded-md relative"
        >
          <div className="w-full absolute top-0 left-0 z-2 h-40 bg-gradient-to-b from-black to-black/0 rounded-t-md"></div>
          <div className="flex flex-col justify-between items-center p-6 md:p-12 z-30 absolute h-full">
            <h2 className="text-white font-light text-center text-xl md:text-4xl w-auto md:w-[70%]">
              Bring Your Fiance/Family/Friends on the First Arrival and{" "}
              <b className="font-bold">Save up to 40%</b> on Our Products!
            </h2>
            <div className="w-full flex items-center gap-5 md:gap-12 justify-center text-white font-bold">
              {japaneseFontTextLines.map((word, i) => (
                <motion.div
                  key={i}
                  ref={japaneseTextRef}
                  initial="initial"
                  animate={isJapaneseTextInView ? "animate" : ""}
                  variants={japaneseTextPullupVariant}
                  custom={i}
                  className="text-sm md:text-xl"
                >
                  {word === "" ? <span>&nbsp;</span> : word}
                </motion.div>
              ))}
            </div>
          </div>
          <img
            src="https://03sla7u2w4.ufs.sh/f/fCm9YYN5XvzF2UmCTHLokWe0nsrPcjFwztKYSXTZ5O9mhyCa"
            alt="offer_img"
            className=" w-full h-full object-cover rounded-md z-10"
          />
          <div className="w-full absolute bottom-0 left-0 z-2 h-40 bg-gradient-to-t from-black to-black/0 rounded-b-md"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
