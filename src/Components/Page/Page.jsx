import style from './Page.module.css'
import Aside from '../Aside/Aside'
import AboutMe from '../About Me/AboutMe';
import Home from '../Home/Home';

const Page = () => {
  return (
    <div className={style.contain}>
      <Aside/>
      <Home/>
      <AboutMe/>
    </div>
  )
}

export default Page;