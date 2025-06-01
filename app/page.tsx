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
import Image from "next/image";

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
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <Image  className="rounded-full"
            src="/profile.jpg"
            alt="profile"
            height={100}
            width={120}
          />
        </motion.div>
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

      <div className="flex flex-col items-start text-white text-left max-w-[35rem] w-full">
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
          <Image 
           src="/github.png"
            alt="github Strikes"
            width={560}
            height={100}
            />
        </div>

        <div className="text-start w-full">
          <div className="text-2xl font-bold pb-5">Proof Of Work</div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
            <ProjectCard
              key={1}
              title="Initiate"
              content="A website that makes website for you based on your prompts( Anthropic AI )."
              gitLink="https://github.com/TheManishDaksh/Initiate-fe"
              icons={Initiate}
            />
            <ProjectCard
            key={2}
              title="Vercel"
              content="A small form of vercel for understanding the basic structure and flow of vecel"
              gitLink="https://github.com/TheManishDaksh/vercel"
              icons={vercel}
            />
            <ProjectCard
              key={3}
              title="Brainly"
              content="A Second Brain application for keeping up the daily task, reminders and goals"
              gitLink="https://github.com/TheManishDaksh/Brainly-fe"
              icons={brainly}
            />
            <ProjectCard
            key={4}
              title="Muse"
              content="A blogging application for keeping up my learning and writing skills"
              gitLink="https://github.com/TheManishDaksh/muse"
              liveLink="https://muse-pi.vercel.app/"
              icons={muse}
            />
            <ProjectCard
            key={5}
              title="Paytm"
              content="This is a ongoing projetc of making a pautm like application"
              gitLink="https://github.com/TheManishDaksh/paytm"
              icons={paytm}
            />
            <ProjectCard
            key={6}
              title="TravelO"
              content="A travel website in which ypu can select destination for vacation and hotels"
              gitLink="https://github.com/TheManishDaksh/travel_fe"
              liveLink="https://mahi-travels.vercel.app/"
              icons={travel}
            />
          </div>

          <div>
            <div className="text-2xl font-bold py-5">Stack</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-3">
              <StackCard key={1} icon={<Nodejs />} text="JavaScript" />
              <StackCard key={2} icon={<Typescript />} text="TypeScript" />
              <StackCard key={3} icon={<React />} text="React" />
              <StackCard key={4} icon={<ReduxIcon />} text="Redux" />
              <StackCard key={5} icon={<RecoilIcon />} text="Recoil" />
              <StackCard key={6} icon={<Nodejs />} text="NodeJs" />
              <StackCard key={7} icon={<Next />} text="NextJs" />
              <StackCard key={8} icon={<TailwindIcon />} text="Tailwind" />
              <StackCard key={9} icon={<Express />} text="Express" />
              <StackCard key={10} icon={<HonoIcon />} text="HonoJs" />
              <StackCard key={11} icon={<Cloudflare />} text="Cloudfare" />
              <StackCard key={12} icon={<MongoDBIcon />} text="MongoDB" />
              <StackCard key={13} icon={<PostgresIcon />} text="Postgres" />
              <StackCard key={14} icon={<PrismaIcon />} text="Prisma" />
            </div>
          </div>

          <div className="text-start py-10">
            My Strength is building core web applications which solve problems
            and scalable. I'm currently working with full Stack Development.
            feel free for contacting me for any work or project.
          </div>

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
