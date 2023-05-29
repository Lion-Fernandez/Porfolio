import NavbarCss from "./Navbar.module.css";
import SocialBut from '../SocialBut';

export default function Navbar() {

  return (

    <nav className={NavbarCss.menuContainer}>
      <div className={NavbarCss.menuStart}>
        <img src="http://drive.google.com/uc?export=view&id=195SiwlRuN6Ptzv1AlSH6RXujRvweZuue" alt="Leonardo Fernandez Porfolio" />
      </div>
      <div className={NavbarCss.menuCenter}>
        <p> Leonardo Fernandez Porfolio</p>
      </div>
      <div className={NavbarCss.menuEnd}>
        <SocialBut />
      </div>
    </nav>
  );



};
