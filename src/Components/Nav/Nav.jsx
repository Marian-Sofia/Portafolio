import style from './Nav.module.css'
import { BiCodeBlock } from 'react-icons/bi'

const Nav = () => {
  return (
    <div className={style.container}>
      <div className={style.containTitle}>
        <BiCodeBlock className={style.icon}/>
        <div className={style.title}>DEVELOPER</div>
      </div>
      <div className={style.btn}>About Me</div>
      <div className={style.btn}>Study and Projects</div>
      <div className={style.btn}>Skills</div>
      <div className={style.btn}>Contact</div>
    </div>
  )
}

export default Nav;