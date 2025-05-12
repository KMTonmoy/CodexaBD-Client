import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-2xl"></div>
      </div>

      <div className="space-y-4 max-w-4xl">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Let Codexa Elevate
          <br />
          Your Digital Presence
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Unlock the potential of modern web development with Codexa. We create exceptional digital solutions that enhance user experience and drive results for your business.
        </p>
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
    </section>
  )
}
