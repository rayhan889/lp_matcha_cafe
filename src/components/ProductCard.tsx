import { useRef } from "react";
import { Product } from "../constants/products";
import { motion, useInView } from "motion/react";

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInview = useInView(ref, { once: true });

  const pullupVariant = {
    initial: {
      x: index % 2 === 0 ? -20 : 20,
      opacity: 0,
    },
    animate: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInview ? "animate" : ""}
      custom={index}
      variants={pullupVariant}
      className="flex flex-col w-full gap-6 cursor-pointer"
    >
      <div className="flex flex-col w-full space-y-3.5 text-white">
        <div className="font-bold text-end flex items-center gap-4 justify-between">
          <hr className="text-zinc-700 h-1 flex-1" />
          <span className="whitespace-nowrap">{product.japaneseName}</span>
        </div>
        <div className="flex flex-col items-start w-full space-y-2">
          <h3 className="text-2xl">{product.name}</h3>
          <p className="text-sm text-zinc-500 md:min-h-16 lg:min-h-12 text-justify">
            {product.description}
          </p>
        </div>
      </div>
      <img
        src={product.picture}
        alt={product.name}
        className="w-full h-[20rem] rounded-sm object-cover"
      />
    </motion.div>
  );
};

export default ProductCard;
