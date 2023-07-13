import style from './Skills.module.css'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoLess, BiLogoTypescript, BiLogoPostgresql, BiLogoGit, BiLogoNodejs, BiLogoSlack } from 'react-icons/bi'
import { SiExpress, SiNextdotjs, SiPrisma, SiSequelize } from 'react-icons/si'
import { PiFileSqlFill } from 'react-icons/pi'

const Skills = () => {
    return (
        <div className={style.contain} id='aptitudes'>
            <h1 className={style.title}>Mis Aptitudes</h1>
            <div className={style.container}>
                <BiLogoHtml5 className={style.icon}/>
                <BiLogoCss3 className={style.icon}/>
                <BiLogoJavascript className={style.icon}/>
                <SiExpress className={style.icon}/>
                <BiLogoReact className={style.icon}/>
                <BiLogoRedux className={style.icon}/>
                <BiLogoTypescript className={style.icon}/>
                <SiPrisma className={style.icon}/>
                <BiLogoPostgresql className={style.icon}/>
                <PiFileSqlFill className={style.icon}/>
                <SiSequelize className={style.icon}/>
                <BiLogoGit className={style.icon}/>
                <BiLogoNodejs className={style.icon}/>
            </div>
        </div>
    )
}

export default Skills;