import Header from "./components/Header"
import Section from "./components/Section"
import Profile from "./components/Profile"

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
            <Profile/>
          </Section>
          <Section text="Education">
          </Section>
          <Section text = "Work">
          </Section>
          <Section text = "Projects">
          </Section>
          <Section text="Technical Skills">
          </Section>
        </div>
      </div>
    </div>
  )
}


export default App