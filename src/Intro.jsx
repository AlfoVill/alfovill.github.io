function Intro({ name, onEnter }) {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <button
        className="intro__form"
        type="button"
        onClick={onEnter}
        aria-label="Entrar al portafolio"
      />

      <div className="intro__identity">
        <h1 id="intro-title">{name}</h1>
      </div>
    </section>
  )
}

export default Intro