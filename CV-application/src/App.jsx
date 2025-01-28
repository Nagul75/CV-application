import Header from "./components/Header"
import Section from "./components/Section"
import "./App.css"

function App() {
  return(
    <div className="page-container">
      <div className="page">
        <Header></Header>
        <Section text = "Profile"></Section>
      </div>
    </div>
  )
}


export default App