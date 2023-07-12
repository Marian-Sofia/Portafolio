import style from './Nav.module.css'
import { BiCodeBlock } from 'react-icons/bi'

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.containTitle}>
        <BiCodeBlock className={style.icon}/>
        <div className={style.title}>DESAROLLO WEB</div>
      </div>
      <a href='#home' className={style.btn}>Inicio</a>
      <a href='#about' className={style.btn}>Sobre Mi</a>
      <div className={style.btn}>Estudio y Proyectos</div>
      <div className={style.btn}>Aptitudes</div>
      <div className={style.btn}>Contacto</div>
    </div>
  )
}

export default Nav;