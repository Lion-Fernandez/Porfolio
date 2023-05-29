import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import swal from 'sweetalert';
// import swal from '@sweetalert/with-react';
import socialButCss from './socialBut.module.css';


const SocialBut = () => {

    const myMail = () => {
        let mail = "leonardojulianfernandez@gmail.com";
        navigator.clipboard.writeText(mail);

        swal(
            {
                icon: "success",
                text: "Mi mail: leonardojulianfernandez@gmail.com \n Se a copiado al portapapeles",
                value: true,
                visible: true,
                className: `${socialButCss.swalModal}`,
                closeModal: true,
                button: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: `${socialButCss.btn}`,
                    closeModal: true
                  }
            })

    }

    return (
        <div className={socialButCss.cnt}>
            <a className={socialButCss.btn} type="button" target="_blank" href="https://github.com/Lion-Fernandez">
                <strong><FontAwesomeIcon icon={faGithub} /></strong>
                <div id={socialButCss.containerStars}>
                    <div id={socialButCss.stars}></div>
                </div>
            </a>

            <a className={socialButCss.btn} type="button" target="_blank" href="https://www.linkedin.com/in/lion-fernandez/">
                <strong><FontAwesomeIcon icon={faLinkedin} /></strong>
                <div id={socialButCss.containerStars}>
                    <div id={socialButCss.stars}></div>
                </div>
            </a>
            <a className={socialButCss.btn} type="button" onClick={myMail} >
                <strong><FontAwesomeIcon icon={faEnvelope} /></strong>
                <div id={socialButCss.containerStars}>
                    <div id={socialButCss.stars}></div>
                </div>
            </a>
            <a className={socialButCss.btn} type="button" target="_blank" href="https://drive.google.com/file/d/1JtTdLG1JBzJs5N3RqZZmOwmHAzU10xn8/view?usp=sharing">
                <strong>CV</strong>
                <div id={socialButCss.containerStars}>
                    <div id={socialButCss.stars}></div>
                </div>
            </a>
        </div>
    )
}

export default SocialBut;
