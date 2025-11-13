"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { GodRays, MeshGradient } from "@paper-design/shaders-react"
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'


const LBTHero = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])


  return (
    <section className=" bg-white flex flex-col gap-6 justify-center items-center overflow-hidden pt-20">
      <div className="flex items-center justify-center min-h-screen px-4 py-12 ">

        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold bg-white mb-2">Join Our Community</h1>
            <p className="text-white text-lg">Complete this form to get started</p>
          </div>

        </div>
      </div>
      {/*<motion.div*/}
      {/*  initial={{ opacity: 0, y: 20 }}*/}
      {/*  animate={{ opacity: 1, y: 0 }}*/}
      {/*  transition={{ duration: 0.5, delay: 0.1 }}*/}
      {/*>*/}
      {/*<div className="relative flex justify-center items-center flex-col gap-6 px-6 md:max-w-[906px] mt-28">*/}
      {/*  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold chakra-petch-bold uppercase text-center">*/}
      {/*    Lomé Bike Tour 3*/}
      {/*  </h1>*/}

      {/*  <div>*/}
      {/*    <p className="text-sm md:text-lg text-center md:max-w-xl">*/}
      {/*      Join Code and Cocktails for a relaxed mix of tech, drinks, and good company. Whether*/}
      {/*      you're a pro or just starting out, connect with others, share ideas, and have fun*/}
      {/*      building something great together—no pressure, just good vibes!*/}
      {/*    </p>*/}
      {/*  </div>*/}

      {/*  <div className="mt-8 text-center">*/}
      {/*    <div className="flex items-center justify-center">*/}

      {/*              <div className="group border-border bg-secondary/70 flex h-[64px] cursor-pointer items-center gap-2 rounded-full border p-[11px] mt-10">*/}
      {/*                <div className="border-border bg-yellow-400 flex h-[43px] items-center justify-center rounded-full border">*/}
      {/*                  <p className="mr-3 ml-2 flex items-center justify-center gap-2 font-medium tracking-tight text-green-950">*/}
      {/*                    <svg*/}
      {/*                      xmlns="http://www.w3.org/2000/svg"*/}
      {/*                      width="24"*/}
      {/*                      height="24"*/}
      {/*                      viewBox="0 0 24 24"*/}
      {/*                      fill="none"*/}
      {/*                      stroke="currentColor"*/}
      {/*                      strokeWidth="2"*/}
      {/*                      strokeLinecap="round"*/}
      {/*                      strokeLinejoin="round"*/}
      {/*                      className="lucide lucide-globe animate-spin"*/}
      {/*                      aria-hidden="true"*/}
      {/*                    >*/}
      {/*                      <circle cx="12" cy="12" r="10"></circle>*/}
      {/*                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>*/}
      {/*                      <path d="M2 12h20"></path>*/}
      {/*                    </svg>*/}
      {/*                    Réserve ta place maintenant*/}
      {/*                  </p>*/}
      {/*                </div>*/}
      {/*                <div className="border-border flex size-[26px] text-yellow-400 items-center justify-center rounded-full border-2 transition-all ease-in-out group-hover:ml-2">*/}
      {/*                  <svg*/}
      {/*                    xmlns="http://www.w3.org/2000/svg"*/}
      {/*                    width="18"*/}
      {/*                    height="18"*/}
      {/*                    viewBox="0 0 24 24"*/}
      {/*                    fill="none"*/}
      {/*                    stroke="currentColor"*/}
      {/*                    strokeWidth="2"*/}
      {/*                    strokeLinecap="round"*/}
      {/*                    strokeLinejoin="round"*/}
      {/*                    className="lucide lucide-arrow-right transition-all ease-in-out group-hover:rotate-45"*/}
      {/*                    aria-hidden="true"*/}
      {/*                  >*/}
      {/*                    <path d="M5 12h14"></path>*/}
      {/*                    <path d="m12 5 7 7-7 7"></path>*/}
      {/*                  </svg>*/}
      {/*                </div>*/}
      {/*              </div>*/}


      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="absolute top-8 md:top-[8rem] -rotate-6 z-10">*/}
      {/*    <div className="absolute h-full w-full left-1 top-1 -z-10 bg-green-900  transition-all duration-200 ease-in-out"></div>*/}
      {/*    <div className="relative py-2 px-4 flex z-20 justify-between items-center gap-3 md:gap-6 text-[10px] md:text-lg chakra-petch-bold bg-yellow-400 text-green-900">*/}
      {/*      <p className="">Dimanche 14 Décembre, 2025</p>*/}
      {/*      <a*/}
      {/*        href="https://www.google.com/maps/place/Bako+Events+Center/data=!4m2!3m1!1s0x0:0x4df3cc26a8685641?sa=X&amp;ved=1t:2428&amp;ictx=111"*/}
      {/*        target="_blank"*/}
      {/*        rel="noreferrer"*/}
      {/*        className=""*/}
      {/*      >*/}
      {/*        Stade Omnisport de Lomé*/}
      {/*      </a>*/}
      {/*      <p className="">À partir de 7h</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*</motion.div>*/}

      {/*<AnimatePresence initial={false}>*/}
      {/*  {isExpanded && (*/}
      {/*    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">*/}
      {/*      <motion.div*/}
      {/*        layoutId="cta-card"*/}
      {/*        transition={{ duration: 0.3 }}*/}
      {/*        style={{*/}
      {/*          borderRadius: "24px",*/}
      {/*        }}*/}
      {/*        layout*/}
      {/*        className="relative flex h-full w-full overflow-y-auto bg-[#004FE5] transform-gpu will-change-transform"*/}
      {/*      >*/}
      {/*        <motion.div*/}
      {/*          initial={{ opacity: 0, scale: 2 }}*/}
      {/*          animate={{ opacity: 1, scale: 1 }}*/}
      {/*          exit={{ opacity: 0 }}*/}
      {/*          layout={false}*/}
      {/*          transition={{ duration: 0.15, delay: 0.05 }}*/}
      {/*          className="absolute h-full inset-0 overflow-hidden pointer-events-none"*/}
      {/*          style={{*/}
      {/*            borderRadius: "24px",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          <MeshGradient*/}
      {/*            speed={1}*/}
      {/*            colors={["#2452F1", "#022474", "#163DB9", "#0B1D99"]}*/}
      {/*            distortion={0.8}*/}
      {/*            swirl={0.1}*/}
      {/*            grainMixer={0}*/}
      {/*            grainOverlay={0}*/}
      {/*            className="inset-0 sticky top-0"*/}
      {/*            style={{ height: "100%", width: "100%" }}*/}
      {/*          />*/}
      {/*        </motion.div>*/}
      {/*        <motion.div*/}
      {/*          initial={{ opacity: 0 }}*/}
      {/*          animate={{ opacity: 1 }}*/}
      {/*          transition={{ delay: 0.15, duration: 0.4 }}*/}
      {/*          className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16"*/}
      {/*        >*/}
      {/*          <div className="flex-1 flex flex-col justify-center space-y-3 w-full">*/}
      {/*            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-none tracking-[-0.03em]">*/}
      {/*              Talk to sales*/}
      {/*            </h2>*/}

      {/*            <div className="space-y-4 sm:space-y-6 pt-4">*/}
      {/*              <div className="flex gap-3 sm:gap-4">*/}
      {/*                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">*/}
      {/*                  <svg*/}
      {/*                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"*/}
      {/*                    fill="none"*/}
      {/*                    viewBox="0 0 24 24"*/}
      {/*                    stroke="currentColor"*/}
      {/*                  >*/}
      {/*                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />*/}
      {/*                  </svg>*/}
      {/*                </div>*/}
      {/*                <div>*/}
      {/*                  <p className="text-sm sm:text-base text-white leading-[150%]">*/}
      {/*                    Learn how Acme can transform your business with tailored solutions and flexible pricing*/}
      {/*                    options.*/}
      {/*                  </p>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="flex gap-3 sm:gap-4">*/}
      {/*                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">*/}
      {/*                  <svg*/}
      {/*                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"*/}
      {/*                    fill="none"*/}
      {/*                    viewBox="0 0 24 24"*/}
      {/*                    stroke="currentColor"*/}
      {/*                  >*/}
      {/*                    <path*/}
      {/*                      strokeLinecap="round"*/}
      {/*                      strokeLinejoin="round"*/}
      {/*                      strokeWidth={2}*/}
      {/*                      d="M13 10V3L4 14h7v7l9-11h-7z"*/}
      {/*                    />*/}
      {/*                  </svg>*/}
      {/*                </div>*/}
      {/*                <div>*/}
      {/*                  <p className="text-sm sm:text-base text-white leading-[150%]">*/}
      {/*                    Experience firsthand how Acme Platform accelerates delivery &amp; drives results.*/}
      {/*                  </p>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}

      {/*            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/20">*/}
      {/*              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-[150%] mb-4">*/}
      {/*                Acme empowers our team to move faster and ship products with confidence.*/}
      {/*              </p>*/}
      {/*              <div className="flex items-center gap-3 sm:gap-4">*/}
      {/*                <img*/}
      {/*                  src="/professional-headshot.png"*/}
      {/*                  alt="Sarah Chen"*/}
      {/*                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"*/}
      {/*                />*/}
      {/*                <div>*/}
      {/*                  <p className="text-base sm:text-lg lg:text-xl text-white">Sarah Chen</p>*/}
      {/*                  <p className="text-sm sm:text-base text-white/70">{"Chrono"}</p>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}

      {/*          <div className="flex-1 w-full">*/}
      {/*            <form className="space-y-4 sm:space-y-5">*/}
      {/*              /!* Name Field *!/*/}
      {/*              <div>*/}
      {/*                <label*/}
      {/*                  htmlFor="name"*/}
      {/*                  className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"*/}
      {/*                >*/}
      {/*                  FULL NAME **/}
      {/*                </label>*/}
      {/*                <input*/}
      {/*                  type="text"*/}
      {/*                  id="name"*/}
      {/*                  name="name"*/}
      {/*                  className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"*/}
      {/*                />*/}
      {/*              </div>*/}

      {/*              /!* Work Email Field *!/*/}
      {/*              <div>*/}
      {/*                <label*/}
      {/*                  htmlFor="email"*/}
      {/*                  className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"*/}
      {/*                >*/}
      {/*                  WORK EMAIL **/}
      {/*                </label>*/}
      {/*                <input*/}
      {/*                  type="email"*/}
      {/*                  id="email"*/}
      {/*                  name="phone"*/}
      {/*                  className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"*/}
      {/*                />*/}
      {/*              </div>*/}

      {/*              <div className="flex flex-col sm:flex-row gap-4">*/}
      {/*                <div className="flex-1">*/}
      {/*                  <label*/}
      {/*                    htmlFor="website"*/}
      {/*                    className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"*/}
      {/*                  >*/}
      {/*                    COMPANY WEBSITE*/}
      {/*                  </label>*/}
      {/*                  <input*/}
      {/*                    type="url"*/}
      {/*                    id="website"*/}
      {/*                    name="website"*/}
      {/*                    className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm h-10"*/}
      {/*                  />*/}
      {/*                </div>*/}
      {/*                <div className="sm:w-32 w-full">*/}
      {/*                  <label*/}
      {/*                    htmlFor="company-size"*/}
      {/*                    className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"*/}
      {/*                  >*/}
      {/*                    COMPANY SIZE*/}
      {/*                  </label>*/}
      {/*                  <select*/}
      {/*                    id="company-size"*/}
      {/*                    name="company-size"*/}
      {/*                    className="w-full px-4 py-2.5 rounded-lg bg-[#001F63] border-0 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none cursor-pointer text-sm h-10"*/}
      {/*                    style={{*/}
      {/*                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,*/}
      {/*                      backgroundRepeat: "no-repeat",*/}
      {/*                      backgroundPosition: "right 0.75rem center",*/}
      {/*                      backgroundSize: "1rem",*/}
      {/*                    }}*/}
      {/*                  >*/}
      {/*                    <option value="1-10">1-10</option>*/}
      {/*                    <option value="11-50">11-50</option>*/}
      {/*                    <option value="51-200">51-200</option>*/}
      {/*                    <option value="201-500">201-500</option>*/}
      {/*                    <option value="501+">501+</option>*/}
      {/*                  </select>*/}
      {/*                </div>*/}
      {/*              </div>*/}

      {/*              /!* Message Field *!/*/}
      {/*              <div>*/}
      {/*                <label*/}
      {/*                  htmlFor="message"*/}
      {/*                  className="block text-[10px] font-mono font-normal text-white mb-2 tracking-[0.5px] uppercase"*/}
      {/*                >*/}
      {/*                  ANYTHING ELSE?*/}
      {/*                </label>*/}
      {/*                <textarea*/}
      {/*                  id="message"*/}
      {/*                  name="message"*/}
      {/*                  rows={3}*/}
      {/*                  className="w-full px-4 py-3 rounded-lg bg-[#001F63] border-0 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none text-sm"*/}
      {/*                />*/}
      {/*              </div>*/}

      {/*              /!* Submit Button *!/*/}
      {/*              <button*/}
      {/*                type="submit"*/}
      {/*                className="w-full px-8 py-2.5 rounded-full bg-white text-[#0041C1] font-medium hover:bg-white/90 transition-colors tracking-[-0.03em] h-10"*/}
      {/*              >*/}
      {/*                Submit*/}
      {/*              </button>*/}
      {/*            </form>*/}
      {/*          </div>*/}
      {/*        </motion.div>*/}

      {/*        /!* Close Button *!/*/}
      {/*        <motion.button*/}
      {/*          onClick={handleClose}*/}
      {/*          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"*/}
      {/*          aria-label="Close"*/}
      {/*        >*/}
      {/*          <X className="h-5 w-5" />*/}
      {/*        </motion.button>*/}
      {/*      </motion.div>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</AnimatePresence>*/}
    </section>
  )
}

export default LBTHero
