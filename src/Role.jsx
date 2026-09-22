const roles = [
  'Director',
  'Motion Designer',
  'Video Editor',
]
function Role({ onContinue }) {
    return (
        <section className="role">
            <h2 className="role__title">Roles</h2>
           <ul className="role__list">
  {roles.map((role) => (
    <li className="role__item" key={role}>{role}</li>
  ))}
</ul>
<button
  className="role__continue"
  type="button"
  onClick={onContinue}
>
  Ver Proyectos
</button>
        </section>
    )
}

export default Role
