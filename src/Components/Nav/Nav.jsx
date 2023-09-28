import { useState } from 'react'
import style from './Nav.module.css'
import { BiCodeBlock } from 'react-icons/bi'
import { CgMenuGridO } from 'react-icons/cg'
import { FaGithubAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className={style.container}>
      <div className={style.containTitle}>
        <div className={style.title}>DESAROLLO WEB</div>
      </div>

      <CgMenuGridO className={style.iconMenu} onClick={() => setMenu(!menu)} />

      <div className={style.btnNav}>
        <a href='#inicio' className={style.btn}>Inicio</a>
        <a href='#proyectos' className={style.btn}>Proyectos</a>
        <a href='#sobreMi' className={style.btn}>Sobre Mi</a>
        <a href='#aptitudes' className={style.btn}>Aptitudes</a>
      </div>


      {menu ?
        <div>
          <div className={style.menu}>
            <a href='#inicio' className={style.btn}>Inicio</a>
            <a href='#proyectos' className={style.btn}>Proyectos</a>
            <a href='#sobreMi' className={style.btn}>Sobre Mi</a>
            <a href='#aptitudes' className={style.btn}>Skills</a>
          </div>
          <div className={style.contain}>
            <span className={style.contact}>Contactame:</span>
            <a
              className={style.link}
              title="GitHub"
              href="https://github.com/Marian-Sofia"
              target="_blanck"
            >
              <FaGithubAlt className={style.icon} />
            </a>

            <a
              className={style.link}
              title="Gmail"
              href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=CllgCJvqsPmZwsgkdgJXfJdtDhcNcvStbgsBZjBBDjQLmZMMLpzSScDZDcJXFZRzglHdPBrSjqB"
              target="_blanck"
            >
              <BiLogoGmail className={style.icon} />
            </a>

            <a
              className={style.link}
              title="LinkedIn"
              href="https://www.linkedin.com/in/marian-sofia"
              target="_blanck"
            >
              <AiFillLinkedin className={style.icon} />
            </a>

            <a
              className={style.link}
              title="WhatsApp"
              href="https://wa.me/+573134961006?text=Buen%20día"
              target="_blanck"
            >
              <AiOutlineWhatsApp className={style.icon} />
            </a>
          </div>
        </div> :
        ''}

    </div>
  )
}

export default Nav;