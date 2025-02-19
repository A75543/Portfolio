export default function Skills() {
  const skills = ["PCB Design", "Microcontroller Programming", "Verilog/VHDL", "Digital & Analog Circuit Debugging","VLSI Design & Layout", "System Deployment & Hardware Testing"]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
