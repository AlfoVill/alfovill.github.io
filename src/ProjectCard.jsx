function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__meta">
        {project.discipline} · {project.year}
      </p>
    </article>

    )
}

export default ProjectCard