import Skills from "./Skills";
import { skillsData } from "../data/skills-data";

export default function Servicios() {
  return (
    <section id="Servicios" className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-5xl font-semibold mb-5 leading-normal uppercase text-[#A8B2D1]">Habilidades</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around gap-5">
            {skillsData.map( skill => (
                <Skills
                    key={skill.id}
                    nombre={skill.nombre}
                    logo={skill.logo}
                />
            ))}
 
        </div>
    </section>
  )
}
