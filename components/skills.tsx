export default function Skills() {
  const skillCategories = [
    {
      category: "Hardware & Electronics",
      skills: [
        "PCB Debugging",
        "System Calibration",
        "Electrical Schematics",
        "Oscilloscope",
        "Motor Control Theory",
        "EEPROM Programming",
        "Signal Tracing",
      ],
    },
    {
      category: "Programming & Development",
      skills: ["Python", "C/C++", "Verilog/VHDL", "Linux", "Automation Scripting", "Embedded Systems"],
    },
    {
      category: "System & Network",
      skills: ["Troubleshooting", "Network Protocols", "System Diagnostics", "Linux CLI", "Power Sequencing"],
    },
    {
      category: "Data & Analysis",
      skills: ["Data Analysis", "Microsoft Office", "Scientific Workflows", "Test Equipment", "Environmental Testing"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b-2 border-blue-500 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
