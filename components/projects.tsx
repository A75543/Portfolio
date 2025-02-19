import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Oscilloscope Using FPGA and ADC",
      description:
        "Implemented horizontal and vertical sync signals to control 8-bit color VGA output for real-time display. Developed an FPGA-based oscilloscope using Verilog to process and visualize waveforms. Designed an analog signal processing circuit and validated performance through extensive lab testing.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20231130_101451%20(1)-OxbEkFCLiA6fRZRM77pSOd31s4usy4.png",
      github: "https://github.com/A75543/VHDL-Oscilloscope",
    },
    {
      id: 2,
      title: "Fast Multiplier Layout",
      description:
        "Designed an 8-bit fast multiplier using a Wallace tree in Magic VLSI layout software. Implemented both signed and unsigned multiplication with 2's complement optimization. Focused on efficient hardware design and layout techniques for performance improvement.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VLSI%20Presentation-JR1hC3WXaMQMgVjcxhksQjsAqD8V7s.png",
      github: "https://github.com/A75543/FastMultiplier",
    },
    {
      id: 3,
      title: "Environmental and Personal Information Processor",
      description:
        "Led the design and implementation of a smartwatch with environmental sensors using the ATmega2560. Developed real-time data acquisition and communication firmware in C. Optimized power consumption to enhance energy efficiency and battery life.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EPIP_layout-itjDDZhYsARPoJYzqufsziJzzEqx60.png",
      github: "https://github.com/A75543/Environmental-and-Personal-Information-Processor",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={project.github}
              key={project.id}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Github className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
