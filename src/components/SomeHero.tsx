"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface SomeHeroProps {
  title: string
  description: string
  imageSrc: string
}

export default function SomeHero({ title, description, imageSrc }: SomeHeroProps) {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 flex flex-col gap-6 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative flex justify-center items-center flex-col gap-6 px-6 md:max-w-[906px] mt-28">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold chakra-petch-bold uppercase text-center">
                Lomé Bike Tour 3
              </h1>

              <div>
                <p className="text-2xl md:text-2lg text-center md:max-w-xl">
                  Faire le tour de lomé à vélo
                </p>
              </div>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center">

                  <div className="group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px] mt-10">
                    <div className="border-border bg-yellow-400 flex h-[43px] items-center justify-center rounded-full border">
                      <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-green-950">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe animate-spin"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Réserve ta place maintenant
                      </p>
                    </div>
                    <div className="border-border flex size-[26px] text-yellow-400 items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>


                </div>
              </div>

              <div className="absolute top-8 md:top-[5rem] -rotate-6 z-10">
                <div className="absolute h-full w-full left-1 top-1 -z-10 bg-green-900  transition-all duration-200 ease-in-out"></div>
                <div className="relative py-2 px-4 flex z-20 justify-between items-center gap-3 md:gap-6 text-[10px] md:text-lg chakra-petch-bold bg-yellow-400 text-green-900">
                  <p className="">Dimanche 14 Décembre, 2025</p>
                  <a
                    href="https://www.google.com/maps/place/Bako+Events+Center/data=!4m2!3m1!1s0x0:0x4df3cc26a8685641?sa=X&amp;ved=1t:2428&amp;ictx=111"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    Stade Omnisport de Lomé
                  </a>
                  <p className="">À partir de 7h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative h-full w-full rounded-lg overflow-hidden"
        >
          <Image src={"/ride-a-bicycle.svg"} alt="Hero image" fill className="object-fill" priority />
        </motion.div>
      </div>
    </section>
  )
}
