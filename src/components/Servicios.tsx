import Skills from "./Skills";
import { skillsData } from "../data/skills-data";

export default function Servicios() {
  return (
    <section id="Servicios" className="flex flex-col items-center justify-around p-20 min-h-screen">
        <h1 className="text-5xl font-semibold mb-5 leading-normal uppercase text-[#A8B2D1]">Habilidades</h1>
        <div className="slider">
              <div 
              className='slide-track' 
              style={{
                "--cantidad": skillsData[0].length,
                "--animacion": 'scroll-1'} as React.CSSProperties }>

              {skillsData[0].map( skill => (
                <Skills
                key={skill.id}
                nombre={skill.nombre}
                logo={skill.logo}
                />
              ))}
              {skillsData[0].map( skill => (
                <Skills
                key={skill.id}
                nombre={skill.nombre}
                logo={skill.logo}
                />
              ))}
            </div>
 
        </div>

        <div className="slider">
            <div 
              className='slide-track' 
              style={{
                "--cantidad": skillsData[0].length,
                "--animacion": 'scroll-2'} as React.CSSProperties }>

              {skillsData[1].map( skill => (
                <Skills
                key={skill.id}
                nombre={skill.nombre}
                logo={skill.logo}
                />
              ))}
              
              {skillsData[1].map( skill => (
                <Skills
                key={skill.id}
                nombre={skill.nombre}
                logo={skill.logo}
                />
              ))}
            </div>
 
        </div>

    </section>
  )
}
