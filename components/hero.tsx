import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/142658609-qw14wYQhvSQRvt89J1MJT6Wy6WoeyD.png"
          alt="Alberto Rosas Logo"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 bg-white p-4"
          priority
        />
        <h1 className="text-4xl font-bold mb-2">Alberto Rosas</h1>
        <p className="text-xl mb-4">Computer Engineering Student</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-white/10">
            <a href="https://github.com/A75543" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:text-primary hover:bg-white/10">
            <a
              href="https://www.linkedin.com/in/arosas10/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild className="text-black hover:text-white">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
