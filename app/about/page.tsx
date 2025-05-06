import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">About DevLab</h1>

            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="DevLab team"
                width={800}
                height={400}
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                DevLab is a premier web development and design agency dedicated to creating exceptional digital
                experiences. Founded in 2018, we've grown from a small team of passionate developers to a full-service
                digital agency serving clients across various industries.
              </p>

              <h2>Our Mission</h2>
              <p>
                At DevLab, our mission is to empower businesses with innovative digital solutions that drive growth
                and enhance user experience. We believe in combining cutting-edge technology with creative design to
                deliver websites and applications that not only look great but also perform exceptionally well.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Successful Projects</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">15+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">98%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>

              <h2>Our Approach</h2>
              <p>
                We take a collaborative approach to every project, working closely with our clients to understand their
                unique needs and objectives. Our process is transparent, iterative, and focused on delivering measurable
                results.
              </p>

              <ol>
                <li>
                  <strong>Discovery:</strong> We begin by understanding your business, goals, and target audience.
                </li>
                <li>
                  <strong>Strategy:</strong> We develop a comprehensive plan tailored to your specific needs.
                </li>
                <li>
                  <strong>Design:</strong> Our creative team crafts visually stunning and user-friendly interfaces.
                </li>
                <li>
                  <strong>Development:</strong> We build robust, scalable solutions using the latest technologies.
                </li>
                <li>
                  <strong>Testing:</strong> Rigorous quality assurance ensures everything works flawlessly.
                </li>
                <li>
                  <strong>Launch:</strong> We deploy your project and provide training and support.
                </li>
                <li>
                  <strong>Optimization:</strong> Continuous improvement based on data and feedback.
                </li>
              </ol>

              <h2>Our Values</h2>
              <ul>
                <li>
                  <strong>Innovation:</strong> We stay at the forefront of technology to provide the most effective
                  solutions.
                </li>
                <li>
                  <strong>Quality:</strong> We never compromise on the quality of our work, ensuring every pixel is
                  perfect.
                </li>
                <li>
                  <strong>Integrity:</strong> We build relationships based on trust, honesty, and transparency.
                </li>
                <li>
                  <strong>Collaboration:</strong> We believe the best results come from working together as a team.
                </li>
              </ul>

              <div className="my-12">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="DevLab office"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <h2>Our Expertise</h2>
              <p>
                Our team brings together expertise in web development, UI/UX design, e-commerce solutions, and digital
                marketing. We specialize in creating responsive websites, custom web applications, e-commerce platforms,
                and comprehensive digital strategies.
              </p>

              <p>
                Whether you're a startup looking to establish your online presence or an enterprise seeking digital
                transformation, DevLab has the skills and experience to help you achieve your goals.
              </p>
            </div>

            <div className="mt-12 flex justify-center space-x-4">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

