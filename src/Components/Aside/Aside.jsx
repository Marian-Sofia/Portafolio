import { FaGithubAlt } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { AiFillLinkedin } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import style from './Aside.module.css'

const Aside = () => {
  return (
    <div className={style.contain}>
      <a><FaGithubAlt className={style.icon}/></a>
      <a><CgMail className={style.icon}/></a>
      <a><AiFillLinkedin className={style.icon}/></a>
      <a><IoLogoWhatsapp className={style.icon}/></a>
    </div>
  )
}

export default Aside;