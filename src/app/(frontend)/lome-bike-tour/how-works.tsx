import React from 'react'
import Link from 'next/link'

const HowWorks = () => {
  return (
    <section className="relative px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />
      <div className="md:w-5/6 mx-auto flex flex-col gap-10 py-12 pb-10 mt-10">
        <h1 className="chakra-petch-bold text-2xl md:text-4xl text-shadow-medium">Comment ça marche?</h1>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative">
            <div className="absolute h-full w-full left-1 top-1 bg-green-900 rounded-md"></div>
            <div className="relative h-full p-6 bg-yellow-400 flex flex-col gap-6 rounded-md text-black">
              <p className="chakra-petch-bold text-8xl md:text-[160px]">1</p>
              <div className="flex flex-col gap-3">
                <p className="chakra-petch-medium font-bold text-sm md:text-xl">
                  Fill Out Our Simple Form
                </p>
                <p className="chakra-petch-medium text-sm md:text-xl">
                  Let us know which service you're interested in, your budget, and what you aim to
                  achieve.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute h-full w-full left-1 top-1 bg-green-900 rounded-md"></div>
            <div className="relative h-full p-6 bg-yellow-400 flex flex-col gap-6 rounded-md text-black">
              <p className="chakra-petch-bold text-8xl md:text-[160px]">2</p>
              <div className="flex flex-col gap-3">
                <p className="chakra-petch-medium font-bold text-sm md:text-xl">
                  Book a Consultation
                </p>
                <p className="chakra-petch-medium text-sm md:text-xl">
                  We’ll review your details and schedule a personalized call to dive into how we can
                  help you.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute h-full w-full left-1 top-1 bg-green-900 rounded-md text-black"></div>
            <div className="relative h-full p-6 bg-yellow-400 flex flex-col gap-6 rounded-md text-black">
              <p className="chakra-petch-bold text-8xl md:text-[160px]">3</p>
              <div className="flex flex-col gap-3">
                <p className="chakra-petch-medium font-bold text-sm md:text-xl">
                  Kick Off Your Event
                </p>
                <p className="chakra-petch-medium text-sm md:text-xl">
                  Whether it’s a hackathon, mixer, or product launch, we’ll take care of the details
                  and ensure it’s a success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            href="/lome-bike-tour/register"
            data-tally-open="w8j1kA"
            data-tally-layout="modal"
            data-tally-hide-title="1"
            data-tally-emoji-text="Engage"
            data-tally-emoji-animation="heart-beat"
            data-tally-auto-close="0"
            className="relative z-10 group w-fit"
          >
            <div className="relative z-10 px-5 py-3 text-sm lg:text-base font-bold text-primary border transition-all duration-300 rounded-md bg-yellow-400 border-green-900">
              <div className="flex items-center gap-2 text-cream">
                <p>Reserve ta place maintenant</p>
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
                  className="lucide lucide-arrow-right w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="group-hover:left-[2px] group-hover:top-[2px] absolute h-full w-full left-1 top-1 transition-all duration-200 ease-in-out rounded-md bg-green-900"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowWorks