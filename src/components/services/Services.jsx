import { useState } from "react"
import './services.css'

const Services = () => {

  const [modal, setModal] = useState(0)

  const handleClickView = (index) => {
    setModal(index)
  }

  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Portolofio</h2>
        <span className="section__subtitle">Mis Trabajos</span>
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <img className='services__icons' src="../../src/assets/gunayala.jpeg" alt="foto gunayala web" />
              <h3 className="services__title">Gunayala <br /> Web</h3>
            </div>

            <span onClick={() => handleClickView(1)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

            <div className={modal === 1 ? "services__modal active__modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => handleClickView(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Gunayala Web</h3>
                <a href="https://main--gunayala.netlify.app/" target="_blank" className="services__modal-description">*Clickee aqui para conocer Gunayala Web</a>
                {/*       <p className="services__modal-description">https://main--gunayala.netlify.app/</p> */}

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">React</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">Tailwind</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">Node.js</p>
                  </li>


                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">SQL</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <img className='services__icons' src="../../src/assets/serveMaster.jpeg" alt="foto serve master web" />
              <h3 className="services__title">Serve Master <br /> Web</h3>
            </div>

            <span onClick={() => handleClickView(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

            <div className={modal === 2 ? "services__modal active__modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => handleClickView(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Serve Master Web</h3>
                <a href="https://servemaster.com.ar/" target="_blank" className="services__modal-description">*Clickee aqui para conocer Serve Master</a>


                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">React</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">Tailwind</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">CSS</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <img className='services__icons' src="../../src/assets/age-calculator.jpeg" alt="foto age calculator web" />
              <h3 className="services__title">Age Calculator <br /> Web</h3>
            </div>

            <span onClick={() => handleClickView(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i> </span>

            <div className={modal === 3 ? "services__modal active__modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => handleClickView(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">Age Calculator Web</h3>
                <a href="https://calculatorageone.netlify.app/" target="_blank" className="services__modal-description">*Clickee aqui para conocer Age Calculator</a>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">React</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">Tailwind</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">CSS</p>
                  </li>


                  {/*                   <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">I position your companie brand</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icons"></i>
                    <p className="services__modal-info">Desing and mockups of products companies</p>
                  </li>  */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services