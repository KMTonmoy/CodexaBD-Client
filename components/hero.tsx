"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const titleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const descriptionContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const fastLetter = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
  }

  const title = "Let Codexa Elevate\nYour Digital Presence"
  const description =
    "Unlock the potential of modern web development with Codexa. We create exceptional digital solutions that enhance user experience and drive results for your business."

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-2xl"></div>
      </div>

      <div className="space-y-4 max-w-4xl">
        {/* Animated Title with Line Break */}
        <motion.h1
          className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-center space-y-2"
          variants={titleContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {title.split("\n").map((line, i) => (
            <div key={i} className="flex justify-center flex-wrap">
              {line.split("").map((char, index) => (
                <motion.span key={index} variants={letter} className={char === " " ? "w-2" : ""}>
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h1>

        {/* Animated Description (Faster) */}
        <motion.p
          className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 flex flex-wrap justify-center"
          variants={descriptionContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {description.split("").map((char, index) => (
            <motion.span key={index} variants={fastLetter} className={char === " " ? "w-1" : ""}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      <div className="flex gap-4">
        <Button variant="gradient" size="lg" className="group">
          <Link href="/contact">
            Start Your Journey
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
          </Link>
        </Button>
      </div>

      <div className="mt-16 relative w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 via-blue-500/10 to-transparent rounded-xl"></div>
        <Image
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
          alt="Web development workspace"
          width={1200}
          height={600}
          className="rounded-xl shadow-2xl border border-white/10"
        />
      </div>
    </motion.section>
  )
}
