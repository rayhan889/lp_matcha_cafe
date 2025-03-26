import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Copyright,
} from "lucide-react";
import { navLinks, othersLinks } from "../constants/navlinks";

const Footer = () => {
  const schedule = [
    {
      day: "Monday",
      open: "08:00",
      close: "17:00",
    },
    {
      day: "Tuesday",
      open: "08:00",
      close: "17:00",
    },
    {
      day: "Wednesday",
      open: "08:00",
      close: "17:00",
    },
    {
      day: "Thursday",
      open: "08:00",
      close: "17:00",
    },
    {
      day: "Friday",
      open: "08:00",
      close: "17:00",
    },
    {
      day: "Saturday",
      open: "08:00",
      close: "17:00",
    },
  ];
  return (
    <section className="h-fit bg-zinc-950" id="products">
      <div className="container mx-auto max-w-7xl px-5 lg:px-0 w-full h-full py-5 md:py-24">
        <div className="w-full h-full flex flex-col justify-between text-white gap-10 md:gap-16">
          <div className="w-full h-fit flex flex-col md:flex-row md:justify-between items-start gap-10">
            <div className="flex flex-col space-y-3 w-full md:w-1/2">
              <h1 className="text-4xl text-center md:text-left md:text-7xl font-bold">
                IJOIJO
              </h1>
              <div className="flex items-center gap-5 w-fit">
                <span className="text-sm flex items-center gap-1 text-zinc-400">
                  <Mail className="w-4 h-4" />
                  booking@IJOIJO.com
                </span>
                <span className="text-sm flex items-center gap-1 text-zinc-400">
                  <Phone className="w-4 h-4" />
                  +62 81234567890
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:flex flex-row items-start justify-end gap-4 md:gap-16 md:w-1/2 w-full">
              <div className="flex flex-col gap-2 md:gap-6 w-fit">
                <h4 className="text-lg">Menu</h4>
                <ul className="flex flex-col gap-2 text-zinc-400">
                  {navLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 md:gap-6 w-fit">
                <h4 className="text-lg">Others</h4>
                <ul className="flex flex-col gap-2 text-zinc-400">
                  {othersLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 md:gap-6 w-full md:w-fit col-span-2">
                <h4 className="text-lg">Open at</h4>
                <ul className="flex flex-col gap-2 text-zinc-400">
                  {schedule.map((schedule, i) => (
                    <>
                      <li
                        key={i}
                        className="w-full flex items-center justify-between"
                      >
                        <h5>{schedule.day}</h5>
                        <p>
                          {schedule.open} - {schedule.close}
                        </p>
                      </li>
                      <hr className="w-full border-zinc-700" />
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
            <div className="flex items-center w-full md:w-fit gap-6 justify-center">
              <div className="rounded-full border p-3 border-zinc-500 bg-transparent flex items-center justify-center">
                <Instagram size={20} />
              </div>
              <div className="rounded-full border p-3 border-zinc-500 bg-transparent flex items-center justify-center">
                <Facebook size={20} />
              </div>
              <div className="rounded-full border p-3 border-zinc-500 bg-transparent flex items-center justify-center">
                <Twitter size={20} />
              </div>
            </div>
            <span className="flex items-center gap-2">
              <Copyright size={16} />
              IJOIJO, All rights reserved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
