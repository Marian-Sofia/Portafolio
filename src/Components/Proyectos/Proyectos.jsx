import style from './Proyectos.module.css'

const Proyectos = () => {
    return (
        <div id='proyectos' className={style.contain}>
            <h1 className={style.title}>Mis Proyectos</h1>
            <div className={style.container}>
                <h2 className={style.proyect}>PI Dogs</h2>
            </div>
            <div className={style.section}>
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <img className={style.img} src='src\Img\landing.png'/>
                        </li>
                        <li className={style.li}>
                            <img className={style.img} src='src\Img\home.png'/>
                        </li>
                        <li className={style.li}>
                            <img className={style.img} src='src\Img\search.png'/>
                        </li>
                        <li className={style.li}>
                            <img className={style.img} src='src\Img\detail.png'/>
                        </li>
                    </ul>
                </div>
            <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque molestias dicta eius, reprehenderit fugit consequuntur sed eveniet non commodi minus facere ex nulla earum tempore aliquam animi ad illum suscipit!</p>
        </div>
    )
}

export default Proyectos;