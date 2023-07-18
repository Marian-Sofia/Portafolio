import style from './Skills.module.css'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoRedux, BiLogoTypescript, BiLogoPostgresql, BiLogoGit, BiLogoNodejs} from 'react-icons/bi'
import { SiExpress, SiPrisma, SiSequelize } from 'react-icons/si'

const Skills = () => {
    return (
        <div className={style.contain} id='aptitudes'>
            <h1 className={style.title}>Mis Aptitudes</h1>
            <div className={style.container}>
                <BiLogoHtml5 title='HTML5' className={style.icon}/>
                <BiLogoCss3 title='CSS3' className={style.icon}/>
                <BiLogoJavascript title='' className={style.icon}/>
                <SiExpress title='EXPRESS' className={style.icon}/>
                <BiLogoReact title='REACT' className={style.icon}/>
                <BiLogoRedux title='REDUX' className={style.icon}/>
                <BiLogoTypescript title='TYPESCRIPT' className={style.icon}/>
                <SiPrisma title='PRISMA' className={style.icon}/>
                <BiLogoPostgresql title='POSTGRE' className={style.icon}/>
                <SiSequelize title='SEQUELIZE' className={style.icon}/>
                <BiLogoGit title='GIT' className={style.icon}/>
                <BiLogoNodejs title='NODEJS' className={style.icon}/>
            </div>
        </div>
    )
}

export default Skills;