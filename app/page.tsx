"use client";
import Cloudflare from "@/components/icons/Cloudflare";
import Express from "@/components/icons/Express";
import Github from "@/components/icons/Github";
import HonoIcon from "@/components/icons/Hono";
import MongoDBIcon from "@/components/icons/MongoDb";
import Next from "@/components/icons/Next";
import Nodejs from "@/components/icons/Nodejs";
import PostgresIcon from "@/components/icons/Postgres";
import PrismaIcon from "@/components/icons/Prisma";
import React from "@/components/icons/React";
import RecoilIcon from "@/components/icons/Recoil";
import ReduxIcon from "@/components/icons/Redux";
import TailwindIcon from "@/components/icons/Tailwind";
import Typescript from "@/components/icons/Typescript";
import ProjectCard from "@/components/ProjectCard";
import StackCard from "@/components/StackCard";
import { motion } from "framer-motion";

export default function Home() {
  const techIcons = [
    <React key="react" />,
    <Typescript key="typescript" />,
    <TailwindIcon />,
    <Nodejs />,
    <Express />,
    <Next />,
    <Cloudflare />,
  ];
  return (
    <div className="flex flex-col items-start justify-center text-white text-center px-4 py-10 max-w-[40rem]">
      <motion.div
        className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-b from-white via-white to-slate-700 bg-clip-text"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Manish Daksh
      </motion.div>

      <motion.div
        className="mt-2 text-lg md:text-xl text-gray-400 font-medium "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Software Developer
      </motion.div>

      <motion.div
        className="mt-1 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="pt-10 text-start">
        I am your friendly neighbourhood Software Developer based out of India. I spend my days (and often nights) in Crafting Code, Creating Experiences. I like to build cool stuff on Internet.
      </div>
      <div className="py-4">
        <img src="/github.png" alt="github Strikes" />
      </div>
      <div className="text-start">
        <div className="text-2xl font-bold pb-5">Proof Of Work</div>
        <div className="grid grid-cols-1 gap-7 md:grid md:grid-cols-2 md:gap-8">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
        <div>
          <div className="text-2xl font-bold py-5">Stack</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-3">
            <StackCard icon={<Nodejs/>} text="JavaScript"/>
            <StackCard icon={<Typescript/>} text="TypeScript"/>
            <StackCard icon={<React/>} text="React"/>
            <StackCard icon={<ReduxIcon/>} text="Redux"/>
            <StackCard icon={<RecoilIcon/>} text="Recoil"/>
            <StackCard icon={<Nodejs/>} text="NodeJs"/>
            <StackCard icon={<Next/>} text="NextJs"/>
            <StackCard icon={<TailwindIcon/>} text="Tailwind"/>
            <StackCard icon={<Express/>} text="Express"/>
            <StackCard icon={<HonoIcon/>} text="HonoJs"/>
            <StackCard icon={<Cloudflare/>} text="Cloudfare"/>
            <StackCard icon={<MongoDBIcon/>} text="MongoDB"/>
            <StackCard icon={<PostgresIcon/>} text="Postgres"/>
            <StackCard icon={<PrismaIcon/>} text="Prisma"/>
          </div>
        </div>
      </div>
    </div>
  );
}
