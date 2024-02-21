const Info = () => {
  return (
    <div>
      <div className="about__info grid">

        <div className="about__box">
          <i class='bx bx-award about__icon'></i>
          <h3 className="about__title">Experiencia</h3>
          <span className="about__subtitle">1 Año</span>
        </div>

        <div className="about__box">
          <i class='bx bx-briefcase-alt about__icon'></i>
          <h3 className="about__title">Completado</h3>
          <span className="about__subtitle">8 Projectos</span>
        </div>

        <div className="about__box">
          <i class='bx bx-support about__icon' ></i>
          <h3 className="about__title">Soporte</h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  )
}

export default Info