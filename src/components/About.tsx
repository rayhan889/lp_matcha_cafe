import { locations } from "../constants/locations";
import { ArrowUpRight, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className=" h-fit container mx-auto max-w-7xl px-5 lg:px-0 py-14">
      <div className="flex flex-col w-full gap-y-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-10 md:gap-0">
          <h2 className="text-zinc-950 font-bold text-3xl">About Us</h2>
          <p className=" text-zinc-500 tracking-wide text-justify md:w-[30rem] w-fit text-sm">
            We bring authentic Japanese matcha to life. Sourced from premium tea
            farms, our matcha is crafted into rich drinks and desserts, blending
            tradition with modern flavors.
          </p>
        </div>
        <hr className="w-full h-1 text-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-x-8 gap-y-8">
          {locations.map((location, i) => (
            <div key={i} className="h-12 w-full flex flex-col justify-start">
              <h3 className="text-lg font text-zinc-950 flex items-center gap-x-2">
                <span>{location.city}</span>
                <ArrowUpRight className="w-4 h-4" />
              </h3>
              <span className="text-sm text-zinc-500 flex items-center gap-x-2">
                <MapPin className="w-4 h-4" />
                <p>{location.street}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
