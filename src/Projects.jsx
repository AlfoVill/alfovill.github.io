import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 'project-01',
    title: 'Proyecto de prueba',
    discipline: 'Motion Design',
    year: '2026',
    video: null,
  },
]
function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects