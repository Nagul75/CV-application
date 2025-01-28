import Header from "./components/Header"
import Section from "./components/Section"
import Profile from "./components/Profile"
import Education from "./components/Education"
import Work from "./components/Work"
import Project from "./components/Project"
import Technical from "./components/Technical"

import { useState } from "react"
import "./App.css"
import person from "./components/data"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [github, setGitHub] = useState("")
  const [linkedin, setLinkedin] = useState("")

  const [institute, setInstitute] = useState("")
  const [location, setLocation] = useState("")
  const [date_start, setDate_start] = useState("")
  const [date_end, setDate_end] = useState("")

  const [projectTitle, setProjectTitle] = useState("")
  const [projectTech, setProjectTech] = useState("")
  const [projectDetails, setProjectDetails] = useState("")

  const [languages, setLanguages] = useState("")
  const [devTools, setDevTools] = useState("")
  const [libraries, setLibraries] = useState("")

  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [dateWorked, setDateWorked] = useState("")
  const [workDetails, setWorkDetails] = useState("")


  return(
    <div className="page-container">
      <div className="page">
        <Header/>
        <div className="section-container">
          <Section text = "Profile">
            <Profile profileData = {{name, email, phone, github, linkedin}} handleChange = {{setName, setEmail, setPhone, setGitHub, setLinkedin}}/>
          </Section>
          <Section text="Education">
            <Education educationData = {{institute, location, date_start, date_end}} handleChange = {{setInstitute, setLocation, setDate_start, setDate_end}}/>
          </Section>
          <Section text = "Work">
            <Work workData = {{company, position, dateWorked, workDetails}} handleChange = {{setCompany, setPosition, setDateWorked, setWorkDetails}}/>
          </Section>
          <Section text = "Projects">
            <Project projectData = {{projectTitle, projectTech, projectDetails}} handleChange = {{setProjectTitle, setProjectTech, setProjectDetails}}/>
          </Section>
          <Section text="Technical Skills">
            <Technical skillData = {{languages, devTools, libraries}} handleChange = {{setLanguages, setDevTools, setLibraries}}/>
          </Section>
        </div>
      </div>
    </div>
  )
}


export default App