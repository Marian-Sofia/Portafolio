import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.contain} id="home">
            <h1 className={style.title}>Welcome, I'm Marian Sofia</h1>
            <h3 className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi consequuntur necessitatibus ipsam nobis inventore, explicabo adipisci fugiat delectus earum quam suscipit, ratione aliquid reprehenderit? Praesentium beatae pariatur architecto!</h3>
        </div>
    )
}

export default Home;