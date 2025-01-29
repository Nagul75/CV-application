import "./styles/Project.css"

export default function Project(ProjectData, handleChange) {
    const {title, projectTech, projectDetails} = ProjectData
    const {setTitle, setProjectTech, setProjectDetails} = handleChange
    return (
        <div className="project-container">
            <div className="project">
                <div className="project-input">
                  Title:<input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
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