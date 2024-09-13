import Navbar from './Navbar.jsx'
import MainPage from './MainPage.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import ExperiencePage from './ExperiencePage.jsx'
import Tutoring from './Tutoring.jsx'
import Contact from './Contact.jsx'
import './App.css'

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />  
        <div className="content-container">
          <MainPage /> 
          <ProjectsPage />
          <ExperiencePage />
          {/* <Tutoring /> */}
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
