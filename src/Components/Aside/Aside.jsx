import { FaGithubAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import style from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={style.contain}>
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
        href="https://www.linkedin.com/in/marian-sofia-gutierrez-76b891267/"
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
  );
};

export default Aside;
