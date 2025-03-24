
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Acerca() {

  const [text] = useTypewriter({
    words: ["Hola Soy Daniel Ponce"],
    loop: true,
  })

  return (
    <section id="Acerca" className="min-h-screen flex items-center">

      <div className="px-10 py-20 text-center gap-5 flex md:flex-row flex-col justify-around items-center">
        <img data-aos="fade-down" src='./00_Foto_Perfil.png' alt="" className="w-48 md:w-1/4 border-8 border-opacity-30 border-gray-500 " />
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
          <p className="text-start" data-aos="fade-up">Egresado de Ingeniería Mecatrónica con un fuerte interés en la tecnología y el desarrollo web. Mi aprendizaje en este campo comenzó de forma autodidacta a través de documentación y cursos, lo que me permitió adquirir experiencia en tecnologías como HTML, CSS, JavaScript, React, NodeJS, PHP, Laravel, Java, SQL y Git.
           <br /> 
          He desarrollado proyectos Full Stack, utilizando NodeJS o Laravel en el backend y React en el frontend. En 2024 trabajé como desarrollador de páginas web con WordPress y en el ámbito de automatizaciones digitales usando n8n. Siempre estoy en constante aprendizaje, buscando especializarme en las tecnologías que manejo y explorando nuevas herramientas para mejorar mis habilidades.</p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <a 
                  href="./CV_PONCE-MONTIEL.pdf" 
                  target="_blank" 
                  className="button shadow-xl font-bold  border-1 text-white rounded-sm py-4 px-8 uppercase relative overflow-hidden">Descargar CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

