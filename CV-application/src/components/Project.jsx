import "./styles/Project.css"

export default function Project(ProjectData, handleChange) {
    const {title, projectTech, projectDetails} = ProjectData
    const {setTitle, setProjectTech, setProjectDetails} = handleChange
    return (
        <div className="project-container">
            <div className="project">
                <div className="title">
                  Title:<input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
                </div>
                <div className="tech">
                  Tech Used:<input type="text" onChange={(e) => setProjectTech(e.target.value)} value={projectTech}></input>
                </div>
                <div className="details">
                  Details:<textarea onChange={(e) => setProjectDetails(e.target.value)} value = {projectDetails}></textarea>
                </div>
            </div>
        </div>
    )
}