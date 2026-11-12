import AboutMe from "./AboutMe"
import Project from "./Project"
import TechStack from "./TechStack"



function App() {
  return (
    <main>
      {/* About me */}
      <section className="h-screen snap-start">
        <AboutMe />
      </section>

      {/* Projects */}
      <section className="h-screen snap-start">
        <Project />
      </section>

      {/* Tech stack */}
      <section className="h-screen snap-start">
        <TechStack />
      </section>
    </main>
  )
}

export default App