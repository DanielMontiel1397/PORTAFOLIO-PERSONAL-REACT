
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Acerca() {

  const [text] = useTypewriter({
    words: ["Hola Soy Daniel Ponce"],
    loop: true,
  })

  return (
    <section id="Acerca" className="min-h-screen flex items-center">

      <div className="px-10 py-20 text-center gap-5 flex md:flex-row flex-col justify-around items-center">
        <img data-aos="fade-down" src='./00_Foto_Perfil.png' alt="" className="w-48 md:w-1/4 border-8 border-opacity-30 border-gray-500 rounded" />
        <div className="flex flex-col justify-center items-start text-white w-full md:w-1/2">
          
          <span  style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: 'white',
            transform: 'unset',
            textAlign: 'start'
          }}>
            {text} 
            <span
              style={{color: 'red'}}
            >
                <Cursor/>
            </span>
          </span>


          <span className="text-[#A8B2D1] text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-normal" data-aos="fade-right">Desarrollador web</span>
          <p className="text-justify" data-aos="fade-up">Recien egresado de ingenieria mecatrónica, a lo largo de mi carrera, he adquirido habilidades técnicas en ingeniería mecánica, electrónica y programación, recientemente he ampliado mi conocimiento con cursos especializados en desarrollo web tanto frontend como backend.
          Mi enfoque multidisciplinario me permite abordar proyectos desde una perspectiva integral, combinando mis habilidades de mecatrónica con la capacidad de crear interfaces de usuario funcionales, con una sólida capacidad para resolver problemas y trabajar en equipo para entregar soluciones innovadoras y eficientes. Poseo experiencia práctica en HTML, CSS, JavaScript, React, Node.js, PHP, Java y C++. Busco oportunidades que me permitan contribuir al desarrollo de la empresa, mientras continúo expandiendo mis habilidades en este campo.</p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a href="./CV_PONCE-MONTIEL.pdf" target="_blank" className="neno-button shadow-xl font-bold  border-2 text-white hover:bg-cyan-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Descargar CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

