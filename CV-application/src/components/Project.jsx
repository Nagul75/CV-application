import "./styles/Project.css"

export default function Project({projectData, handleChange}) {
    const {projectTitle, projectTech, projectDetails} = projectData
    const {setProjectTitle, setProjectTech, setProjectDetails} = handleChange
    return (
        <div className="project-container">
            <div className="project">
                <div className="project-input">
                  Title:<input type="text" onChange={(e) => setProjectTitle(e.target.value)} value={projectTitle}></input>
                </div>
                <div className="project-input">
                  Tech Used:<input type="text" onChange={(e) => setProjectTech(e.target.value)} value={projectTech}></input>
                </div>
                <div className="project-input">
                  Details:<textarea onChange={(e) => setProjectDetails(e.target.value)} value = {projectDetails}></textarea>
                </div>
            </div>
        </div>
    )
}