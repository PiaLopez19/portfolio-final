import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Folio</h1>
        <ul className="footer__list">

          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#" className="footer__link">home</a>
          </li>

        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/piaalopez/?hl=es-la" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/pia-lopez-b98404264/" className="footer__social-link" target="_blank">
            <i class="bx bxl-dribbble"></i>
          </a>

          <a href="https://github.com/PiaLopez19" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className='footer__copy'>Pia Lopez. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer