import style from './Nav.module.css'
import { BiCodeBlock } from 'react-icons/bi'

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.containTitle}>
        <BiCodeBlock className={style.icon}/>
        <div className={style.title}>DESAROLLO WEB</div>
      </div>
      <a href='#inicio' className={style.btn}>Inicio</a>
      <a href='#proyectos' className={style.btn}>Proyectos</a>
      <a href='#sobreMi' className={style.btn}>Sobre Mi</a>
      <a href='#aptitudes' className={style.btn}>Aptitudes</a>
    </div>
  )
}

export default Nav;