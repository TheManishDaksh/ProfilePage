"use client";
import Cloudflare from "@/components/icons/Cloudflare";
import Express from "@/components/icons/Express";
import Github from "@/components/icons/Github";
import HonoIcon from "@/components/icons/Hono";
import Mail from "@/components/icons/Mail";
import MongoDBIcon from "@/components/icons/MongoDb";
import Next from "@/components/icons/Next";
import Nodejs from "@/components/icons/Nodejs";
import PostgresIcon from "@/components/icons/Postgres";
import PrismaIcon from "@/components/icons/Prisma";
import React from "@/components/icons/React";
import RecoilIcon from "@/components/icons/Recoil";
import ReduxIcon from "@/components/icons/Redux";
import TailwindIcon from "@/components/icons/Tailwind";
import Twitter from "@/components/icons/Twitter";
import Typescript from "@/components/icons/Typescript";
import ProjectCard from "@/components/ProjectCard";
import StackCard from "@/components/StackCard";
import { motion } from "framer-motion";

export default function Home() {
  const paytm = [
    <Next/>,
    <TailwindIcon />,
    <Express />,
    <PrismaIcon/>,
    <PostgresIcon/>
  ];
  const Initiate = [
    <React/>,
    <TailwindIcon />,
    <Express />,
  ];
  const brainly = [
    <React/>,
    <TailwindIcon />,
    <Express />,
    <MongoDBIcon/>
  ];
  const muse = [
    <React/>,
    <TailwindIcon />,
    <HonoIcon />,
    <PrismaIcon/>,
    <PostgresIcon/>
  ];
  const vercel = [
    <React/>,
    <TailwindIcon />,
    <Express />,
    <Cloudflare/>,
  ];
  const travel = [
    <React/>,
    <TailwindIcon />,
    <Express />,
    <MongoDBIcon/>,
    <Nodejs/>
  ];
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full px-4 md:px-10 py-10 gap-10 bg-gradient-to-br from-slate-500 via-slate-950 to-white min-h-screen">
      {/* Left Profile Section */}
      <div className="hidden md:block">
        <div>
          <img
            className="w-[120px] rounded-full"
            src="/profile.jpg"
            alt="profile"
          />
        </div>
        <div className="flex items-center pt-4 gap-4">
          <a
            href="https://x.com/manish_dakshh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/TheManishDaksh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>

      {/* Right Main Content Section */}
      <div className="flex flex-col items-start text-white text-left max-w-[40rem] w-full">
        <motion.div
          className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-b from-white via-white to-slate-700 bg-clip-text"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Manish Daksh
        </motion.div>

        <motion.div
          className="mt-2 text-lg md:text-xl text-gray-400 font-medium"
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

        <div className="pt-10">
          I am your friendly neighbourhood Software Developer based out of
          India. I spend my days (and often nights) in Crafting Code, Creating
          Experiences. I like to build cool stuff on Internet.
        </div>

        <div className="py-4">
          <img src="/github.png" alt="github Strikes" />
        </div>

        {/* Proof of Work Section */}
        <div className="text-start w-full">
          <div className="text-2xl font-bold pb-5">Proof Of Work</div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
            <ProjectCard
              title="Initiate"
              content="A website that makes website for you based on your prompts( Anthropic AI )."
              gitLink="https://github.com/TheManishDaksh/Initiate-fe"
              icons={Initiate}
            />
            <ProjectCard
              title="Vercel"
              content="A small form of vercel for understanding the basic structure and flow of vecel"
              gitLink="https://github.com/TheManishDaksh/vercel"
              icons={vercel}
            />
            <ProjectCard
              title="Brainly"
              content="A Second Brain application for keeping up the daily task, reminders and goals"
              gitLink="https://github.com/TheManishDaksh/Brainly-fe"
              icons={brainly}
            />
            <ProjectCard
              title="Muse"
              content="A blogging application for keeping up my learning and writing skills"
              gitLink="https://github.com/TheManishDaksh/muse"
              liveLink="https://muse-pi.vercel.app/"
              icons={muse}
            />
            <ProjectCard
              title="Paytm"
              content="This is a ongoing projetc of making a pautm like application"
              gitLink="https://github.com/TheManishDaksh/paytm"
              icons={paytm}
            />
            <ProjectCard
              title="TravelO"
              content="A travel website in which ypu can select destination for vacation and hotels"
              gitLink="https://github.com/TheManishDaksh/travel_fe"
              liveLink="https://mahi-travels.vercel.app/"
              icons={travel}
            />
          </div>

          {/* Stack Section */}
          <div>
            <div className="text-2xl font-bold py-5">Stack</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-3">
              <StackCard icon={<Nodejs />} text="JavaScript" />
              <StackCard icon={<Typescript />} text="TypeScript" />
              <StackCard icon={<React />} text="React" />
              <StackCard icon={<ReduxIcon />} text="Redux" />
              <StackCard icon={<RecoilIcon />} text="Recoil" />
              <StackCard icon={<Nodejs />} text="NodeJs" />
              <StackCard icon={<Next />} text="NextJs" />
              <StackCard icon={<TailwindIcon />} text="Tailwind" />
              <StackCard icon={<Express />} text="Express" />
              <StackCard icon={<HonoIcon />} text="HonoJs" />
              <StackCard icon={<Cloudflare />} text="Cloudfare" />
              <StackCard icon={<MongoDBIcon />} text="MongoDB" />
              <StackCard icon={<PostgresIcon />} text="Postgres" />
              <StackCard icon={<PrismaIcon />} text="Prisma" />
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-start py-10">
            My Strength is building core web applications which solve problems
            and scalable. I'm currently working with full Stack Development.
            feel free for contacting me for any work or project.
          </div>

          {/* Connect Section */}
          <div>
            <div className="text-2xl font-bold py-5">Connect</div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-10">
                <span>
                  <Github />
                </span>
                <span>
                  <a
                    className="hover:underline"
                    href="https://github.com/TheManishDaksh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @TheManishDaksh
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-8">
                <span>
                  <Twitter />
                </span>
                <span>
                  <a
                    className="hover:underline"
                    href="https://x.com/manish_dakshh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @manish_dakshh
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-14">
                <span>
                  <Mail />
                </span>
                <span>
                  <p className="hover:underline">manishk78625@gmail.com</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
