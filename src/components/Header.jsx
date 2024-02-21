import './header.css'
import { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    if (!toggle) {
      setToggle(true)
    } else {
      setToggle(false)
    }
  }

  const handleClose = () => {
    if (toggle) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }

  return (
    <header className="header">

      <nav className="nav ">

        <a href="index.html" className="nav__logo">Folio.</a>

        <div className={toggle === true ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">



            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="nav__icon  uil uil-estate"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                <i className="nav__icon uil uil-user"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="nav__icon uil uil-file "></i> Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link active-link">
                <i className="nav__icon uil uil-briefcase "></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link active-link">
                <i className="nav__icon uil uil-scenery"></i> Formacion
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link active-link">
                <i className="nav__icon uil uil-message "></i> Contacto
              </a>
            </li>

          </ul>

          <i onClick={handleClose} className="uil uil-times nav__close"></i>

        </div>

        <div className="nav__toggle ">
          <i onClick={handleClick} class="uil uil-apps"></i>
        </div>

      </nav>

    </header>
  )
}

export default Header