import { useState } from 'react'
import Intro from './Intro'
import Role from './Role'
import Projects from './Projects'

function App() {
  const [activeScene, setActiveScene] = useState('intro')

  function handleEnter() {
    setActiveScene('roles')
  }

  function handleShowProjects() {
  setActiveScene('projects')
}

  return (
    <main>
      {activeScene === 'intro' && (
        <Intro
          name="Alfonso Villaseñor Galindo"
          onEnter={handleEnter}
        />
      )}

      {activeScene === 'roles' && (
  <Role onContinue={handleShowProjects} />
)}

      {activeScene === 'projects' && <Projects />}
    </main>
  )
}

export default App