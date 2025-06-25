import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Education</h3>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">California State University East Bay</h4>
                  <p className="text-lg text-gray-700">
                    Bachelor of Science in Computer Engineering, Minor in Computer Science
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Hayward, CA</p>
                  <p className="text-gray-600">May 2025</p>
                </div>
              </div>
              <p className="text-gray-600 font-medium">
                Organizations/Awards: IEEE Region 6 Student Presentation winner
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Experience</h3>

            {/* Cisco Position */}
            <div className="mb-6 border-l-4 border-blue-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">Technical Intern I</h4>
                  <p className="text-lg text-gray-700 font-medium">Cisco</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">San Jose, CA</p>
                  <p className="text-gray-600">May 2025 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>
                  Interfaced with embedded systems and performed system-level diagnostics using Linux CLI and test
                  equipment.
                </li>
                <li>
                  Automated environmental testing and data workflows with scripting to improve repeatability and reduce
                  human error.
                </li>
                <li>
                  Performed calibration and validation of hardware prototypes through signal tracing, EEPROM
                  programming, and power sequencing.
                </li>
                <li>Interpreted schematics to debug faults, execute solder rework, and restore PCB functionality.</li>
              </ul>
            </div>

            {/* Research Assistant Position */}
            <div className="mb-6 border-l-4 border-green-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">Student Research Assistant</h4>
                  <p className="text-lg text-gray-700 font-medium">California State University, East Bay</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Hayward, CA</p>
                  <p className="text-gray-600">January 2024 - May 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Automated large-scale data extraction and entry using Python for thermochemical modeling.</li>
                <li>Analyzed datasets and formatted outputs for high-accuracy simulations and data reporting.</li>
                <li>Contributed to automation of scientific workflows for chemical engineering research.</li>
              </ul>
            </div>
          </div>

          {/* Leadership */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Leadership</h3>
            <div className="border-l-4 border-yellow-500 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">
                    Chair - Institute of Electrical and Electronic Engineers (IEEE)
                  </h4>
                  <p className="text-lg text-gray-700 font-medium">California State University, East Bay</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Hayward, CA</p>
                  <p className="text-gray-600">August 2023 – May 2025</p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Led members through technical events, speaker panels, and engineering workshops.</li>
                <li>Fostered collaboration and career development for engineering students.</li>
              </ul>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <Button asChild size="lg">
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
