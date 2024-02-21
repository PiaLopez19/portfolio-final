import { useState } from "react"
import './qualification.css'
const Qualification = () => {

    const [modal, setModal] = useState(1)

    const handleClick = (index) => {
      setModal(index)
    }

    return(
        <section className="qualification section" id='qualification'>
        <h2 className="section__title">Formacion</h2>
        <span className="section__subtitle">Mi Trayectoria Personal</span>
  
        <div className="qualification__container container">
          <div className="qualification__tabs">
  
            <div onClick={() => handleClick(1)} className={modal === 1 ? "qualification__button button--flex qualification__active" :" qualification__button button--flex"}>
              <i className="uil uil-graduation-cap qualification__icons"></i> Educacion
            </div>
  
            <div onClick={() => handleClick(2)} className={modal === 2 ? "qualification__button button--flex qualification__active" :" qualification__button button--flex"}>
              <i className="uil uil-briefcase-alt qualification__icons"></i> Experiencia
            </div>
          </div>
  
          <div className="qualification__sections">
            <div className={modal === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Desarrollo FullStack</h3>
                  <span className="qualification__subtitle">Argentina - Tucuman</span>
                  <div className="quelification__calender">
                    <i className="uil uil-calendar-alt"></i>2023
                  </div>
                </div>
  
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
  
              <div className="qualification__data">
                <div></div>
  
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
  
                <div>
                  <h3 className="qualification__title">SEO Mejora de rendimiento</h3>
                  <span className="qualification__subtitle">Argentina - Tucuman</span>
                  <div className="quelification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>
  
  
              </div>
  
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">3° en Competencia de JavaScript</h3>
                  <span className="qualification__subtitle">Argentina - Tucuman</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>
  
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
  
              <div className="qualification__data">
                <div></div>
  
   {/*              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div> */}
  
  
  
              </div>
            </div>
  
            <div className={modal === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Diseño de Pagina Web</h3>
                  <span className="qualification__subtitle">Argentina - Tucuman</span>
                  <div className="quelification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>
  
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
  
              <div className="qualification__data">
                <div></div>
  
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
  
                <div>
                  <h3 className="qualification__title">Desarrollo Web  Server Master</h3>
                  <span className="qualification__subtitle">Argentina - Tucuman</span>
                  <div className="quelification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>
  
  
              </div>
  
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Desarrollo Web  "Gunayala"</h3>
                  <span className="qualification__subtitle">Argentina - Tucuman</span>
                  <div className="quelification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>
  
                <div>
                  <span className="qualification__rounder"></span>
                  <div className="qualification__line"></div>
                </div>
              </div>
  
              <div className="qualification__data">
                <div></div>
  
         {/*        <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
   */}
  
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Qualification