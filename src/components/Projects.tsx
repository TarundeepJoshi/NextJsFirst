"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      className="h-auto w-full rounded-md relative flex flex-col items-center justify-center antialiased"
      id="projects"
    >
      <div className="relative group w-fit inline-block self-center">
        <div className="text-[#8892b0] rounded-xl w-fit">
          <h1 className="font-jetbrain text-center text-5xl mt-14">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
              Projects
            </span>
            <span className="text-foreground">:</span>
          </h1>
        </div>
      </div>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            BlogPost Website
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Built with React, Tailwind CSS, Appwrite.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://images.unsplash.com/photo-1720347576847-b329e760359e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://tinyurl.com/yshw4nfh"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              LIVE LINK →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Spotify Clone
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Built with HTML, CSS, JavaScript.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://images.unsplash.com/photo-1720347632731-9b66a36e59fb?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://tinyurl.com/mry2tkew"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              LIVE LINK →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Amazon UI Clone
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Built with HTML, CSS, JavaScript.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://images.unsplash.com/photo-1720347632710-46fd5b6183cd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://tinyurl.com/3a9bjm66"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              LIVE LINK →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
