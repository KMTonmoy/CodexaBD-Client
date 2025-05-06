 import Footer from "@/components/footer"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    bio: "Alex founded Dev Lab with a vision to create digital experiences that drive business growth. With over 15 years of experience in web development and digital strategy, he leads the team with passion and innovation.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sophia Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "Sophia brings over a decade of experience in UI/UX design to Dev Lab. Her keen eye for aesthetics and user-centered approach ensures that every project not only looks beautiful but also delivers exceptional user experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    bio: "Marcus is a full-stack developer with expertise in React, Node.js, and cloud architecture. He's passionate about writing clean, efficient code and implementing innovative technical  for complex challenges.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
    bio: "Priya specializes in creating intuitive user experiences through research-driven design. Her background in psychology gives her unique insights into user behavior, which she applies to create interfaces that are both beautiful and functional.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    bio: "David is an expert in database design, API development, and server architecture. His focus on performance optimization and security ensures that all Dev Lab projects are built on a solid foundation.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emma Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    bio: "Emma ensures that projects are delivered on time and within scope. Her exceptional communication skills and attention to detail keep teams aligned and clients informed throughout the development process.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
 
        <main className="container py-24">
          <div className="mx-auto max-w-[58rem] text-center mb-16">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-5xl md:text-6xl">Our Team</h1>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Meet the talented individuals behind Dev Lab' success. Our diverse team brings together expertise in
              design, development, and digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-background border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/30 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>

                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    )}
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    )}
                    {member.social.github && (
                      <Link
                        href={member.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. If you're passionate about web
              development, design, or digital strategy, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-primary to-blue-600 text-primary-foreground px-8 py-3 rounded-md font-medium hover:brightness-110 hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

