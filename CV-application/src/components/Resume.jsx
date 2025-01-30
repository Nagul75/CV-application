import "./styles/Resume.css"

export default function Resume({profile, education, project, work, technical}) {
    return (
        <>
            <div className="page-container">
                <div className="page">
                    <div className="header">
                        <h1>{profile.name}</h1>
                    </div>
                    <div className="profile">
                        <p>{profile.email}  |  {profile.phone}  |   {profile.github}  |  {profile.linkedin}</p>
                    </div>
                    <div className="sectionR-container">
                        <div className="section-title">
                            <h2>Education</h2>
                        </div>
                        <div className="section-nameYear">
                            <div>{education.institute}</div>
                            <div>{education.date_start} - {education.date_end}</div>
                        </div>
                        <div className="section-sub">
                            <div>{education.location}</div>
                        </div>
                    </div>
                    <div className="sectionR-container">
                        <div className="section-title">
                            <h2>Work Experience</h2>
                        </div>
                        <div className="section-nameYear">
                            <div>{work.company}</div>
                            <div>{work.dateWorked}</div>
                        </div>
                        <div className="section-sub">
                            <div>{work.position}</div>
                        </div>
                        <div className="section-details">
                            <p>{work.workDetails}</p>
                        </div>
                    </div>
                    <div className="sectionR-container">
                        <div className="section-title">
                            <h2>Projects</h2>
                        </div>
                        <div className="section-nameYear">
                            <div>{project.projectTitle}</div>
                        </div>
                        <div className="section-sub">
                            <div>{project.projectTech}</div>
                        </div>
                        <div className="section-details">
                            <p>{project.projectDetails}</p>
                        </div>
                    </div>
                    <div className="sectionR-container">
                        <div className ="section-title">
                            <h2>Technical Skills</h2>
                        </div>
                        <div className="skills">
                            <p><b>Languages</b>: {technical.languages}</p>
                            <p><b>Developer Tools</b>: {technical.devTools}</p>
                            <p><b>libraries</b>: {technical.libraries}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


