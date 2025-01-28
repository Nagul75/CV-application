import Header from "./components/Header"
import Section from "./components/Section"
import "./App.css"

function App() {
  return(
    <div className="page-container">
      <div className="page">
        <Header></Header>
        <div className="section-container">
        <Section text = "Profile">
        </Section>
        <Section text="Education">
        </Section>
        <Section text = "Work">
        </Section>
        <Section text = "Projects">
        </Section>
        <Section text="Technical Skills">
        </Section>
        <Section text="Achievements And Certifications">
        </Section>
        </div>
      </div>
    </div>
  )
}


export default App