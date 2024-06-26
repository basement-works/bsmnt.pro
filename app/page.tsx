"use client"

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const geistSans = GeistSans;
const geistMono = GeistMono;

export default function Home() { 
  return (
    <>
      <AuroraBackground className="py-20">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center"
      >
        <div className="mt-">
        <div className="text-3xl font-extrabold md:text-7xl font-bold dark:text-white px-4 lg:text-center text-left">
          Basement Works 👋
        </div>
        <div className={`${geistSans.className} mt-5 font-normal lg:max-w-7xl text-slate-500 max-w-2xl lg:text-lg text-sm lg:px-0 px-4 lg:text-center text-left`}>
          We are a team of specialists who work across different industries of different sizes. 
          <br />
            We are intentional about building with surgical precision and creating extraordinary experiences. 
          <br />
            We go the extra mile, and then walk a couple more, just for fun.
          <br /><br />
            You want more? Well, it&apos;s coming soon...
        </div>
        </div>
      </motion.div>
    </AuroraBackground>
    </>
  );
}
