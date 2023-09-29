import style from './Page.module.css'
import Aside from '../Aside/Aside'
import AboutMe from '../Sobre Mi/AboutMe';
import Home from '../Home/Home';
import Proyectos from '../Proyectos/Proyectos';
import Skills from '../Skills/Skills';

const Page = () => {
  return (
    <div className={style.contain}>
      <Aside/>
      <Home/>
      {/* <Proyectos/>
      <AboutMe/>
      <Skills/> */}
    </div>
  )
}

export default Page;