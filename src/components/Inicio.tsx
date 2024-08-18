import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Inicio() {


  const [text] = useTypewriter({
    words: ["Bienvenido a"],
    loop: true,
  })

  return (
    <section id="Inicio" className="min-h-screen flex items-center" >
      <div data-aos="fade-up" className="px-10 py-20 text-center gap-5 flex md:flex-row flex-col-reverse justify-around items-center">
        <div className="flex flex-col justify-center items-start text-white w-full md:w-1/2">
          
          <span style={{
            fontSize: '30px',
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


          <span className="text-[#A8B2D1] text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 leading-normal uppercase">Mi Portafolio</span>
          <p className="text-justify">En este portafolio presento algunos de mis proyectos que reflejan mi enfoque en el desarrollo web. En cada proyecto se aspira a demostrar habilidad para combinar funcionalidad y diseño. Usando distintas herramientas priorizando la accesibilidad para los usuarios..</p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
              <div className="flex space-x-5">
                <a href="https://github.com/DanielMontiel1397?tab=repositories" target="_blank" className="text-cyan-400 hover:text-cyan-200 rounded-full glow p-2">
                  <AiFillGithub className="text-3xl"/>
                </a>
                <a href="https://www.linkedin.com/in/sostenes-daniel-ponce-montiel-1831ba250/" target="_blank" className="text-cyan-400 hover:text-cyan-200 rounded-full glow p-2">
                  <FaLinkedinIn className="text-3xl"/>
                </a>
                <a href="https://www.facebook.com/danelponce/" target="_blank" className="text-cyan-400 hover:text-cyan-200 rounded-full glow p-2">
                  <AiFillFacebook className="text-3xl"/>
                </a>
                <a href="https://www.instagram.com/daniel_ponce_montiel/" target="_blank" className="text-cyan-400 hover:text-cyan-200 rounded-full glow p-2">
                  <AiFillInstagram className="text-3xl"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <img src='./00_Foto_Perfil.png' alt="" className="foto-sombra w-48 h md:w-1/4" />
      </div>
    </section>
  )
}
