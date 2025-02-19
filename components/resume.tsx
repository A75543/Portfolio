import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div>
              <h4 className="text-xl font-medium">Bachelor of Science in Computer Engineering</h4>
              <h5 className="text-xl font-small">Minor in Computer Science</h5>
              <p className="text-gray-600">California State University East Bay, Expected 2025</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Technical Consultant - Geek Squad</h4>
              <p className="text-gray-600">2024 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Diagnosed and repaired hardware and software issues across various consumer and professional computing devices.</li>
                <li>Conducted advanced troubleshooting of system components, including motherboards, storage devices, and power systems.</li>
                <li>Provided technical support for hardware upgrades, OS installations, and system optimizations.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Student Research Assistant - California State University, East Bay</h4>
              <p className="text-gray-600">2024</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed Python scripts to automate data extraction from the Thermo-Chimie database, improving efficiency in thermochemical data analysis.</li>
                <li>Processed and categorized large datasets, filtering temperature-dependent equilibrium constants for accurate simulations.</li>
                <li>Created structured .dat and .csv files for numerical analysis and input into PhreeQc, ensuring precise chemical speciation modeling.</li>
              </ul>
            </div>
          </div>
          <div className="mb-8">
          <div className="text-center">
            <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Full Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
