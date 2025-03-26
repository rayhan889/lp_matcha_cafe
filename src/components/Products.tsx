import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Star, Coffee, Donut, ArrowUpRight } from "lucide-react";
import { products as productsLists, Product } from "../constants/products";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabKey, setActiveTabKey] = useState("best_seller");
  const ref = useRef<HTMLDivElement>(null);

  const productTabs = [
    {
      title: "Best",
      icon: Star,
      tabIndex: 0,
      tabKey: "best_seller",
    },
    {
      title: "Drinks",
      icon: Coffee,
      tabIndex: 1,
      tabKey: "drink",
    },
    {
      title: "Desserts",
      icon: Donut,
      tabIndex: 2,
      tabKey: "dessert",
    },
  ];

  const cafeOverViewTextLines = [
    "Get",
    "to",
    "Know",
    "the",
    "World",
    "of",
    "Matcha",
  ];

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

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (index === 0) {
      setActiveTabKey("best_seller");
    } else if (index === 1) {
      setActiveTabKey("drink");
    } else if (index === 2) {
      setActiveTabKey("dessert");
    }
  };

  useEffect(() => {
    if (productsLists) {
      setProducts(
        productsLists.filter(product => {
          return product.category === activeTabKey;
        })
      );
    }
  }, [activeTabKey]);

  return (
    <section className="min-h-fit  bg-zinc-950" id="products">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 w-full h-full py-5 md:py-24">
        <div className="w-full  h-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-3 text-white font-bold items-center">
            <span className="text-xl">マッチャ の 世界 を 知る</span>
            <div className="flex flex-wrap justify-center gap-x-1">
              {cafeOverViewTextLines.map((word, i) => {
                return (
                  <motion.div
                    key={i}
                    ref={ref}
                    initial="initial"
                    animate={isInview ? "animate" : ""}
                    custom={i}
                    variants={pullupVariant}
                    className="font-bold text-3xl"
                  >
                    {word === "" ? <span>&nbsp;</span> : word}
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center gap-3 w-full md:w-fit justify-center md:justify-start">
              {productTabs.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(item.tabIndex)}
                  className={`flex border w-fit cursor-pointer ${
                    activeTab === item.tabIndex
                      ? " bg-emerald-400 border-emerald-400"
                      : "bg-transparent border-zinc-700"
                  } rounded-full text-white p-4 md:px-6 md:py-2 text-sm font-medium items-center gap-2 group`}
                >
                  <item.icon
                    size={20}
                    className={`transition-transform duration-300 ${
                      activeTab === item.tabIndex
                        ? "scale-120 md:scale-100"
                        : "group-hover:-translate-y-1"
                    }`}
                  />
                  <span className="hidden md:block">{item.title}</span>
                </button>
              ))}
            </div>
            <button className="hidden md:flex border border-zinc-700 w-fit cursor-pointer rounded-full bg-transparent text-white px-6 py-2 text-sm font-medium items-center gap-2 group">
              See All Products
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-2">
            {products?.map((product, i) => (
              <div
                key={i}
                className={`p-1 rounded-sm h-auto ${
                  i < 2
                    ? "md:col-span-3"
                    : i == 2
                    ? "md:col-span-4"
                    : i == 3
                    ? "md:col-span-2"
                    : i == 4
                    ? "md:col-span-2"
                    : i == 5
                    ? "md:col-span-4"
                    : ""
                }`}
              >
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
          <div className="md:hidden w-full flex justify-end">
            <button className="flex border border-zinc-700 w-fit cursor-pointer rounded-full bg-transparent text-white px-6 py-2 text-sm font-medium items-center gap-2 group">
              See All Products
              <ArrowUpRight
                size={20}
                className="group-hover:rotate-45 transition-transform duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
