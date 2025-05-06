import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center mb-16">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">Have a project in mind? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@Dev Lab.com" className="text-muted-foreground hover:text-primary">
                   devlab.inbox@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary">
                    +88 (016) 2256-4462
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    Dashuria, Ishwardi, Pabna
                    <br />
                    Dashuria Traffic Mor, Near Hanif Counter
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-[300px] border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.4004334!3d37.7857739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c1f0da6a5%3A0xb63b7f112295d508!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-background border rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

