
import Acerca from "./components/Acerca"
import Inicio from "./components/Inicio"
import Navegacion from "./components/Navegacion"
import Proyectos from "./components/Proyectos"
import Servicios from "./components/Servicios"
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  
  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  })

  return (
    <>
      <div className="bg-slate-900">
        <Navegacion/>
        <Inicio/>
        <Acerca/>
        <Servicios/>
        <Proyectos/>
      </div>
    </>
  )
}

export default App
