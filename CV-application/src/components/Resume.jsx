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
                    <div className="education">
                        <h2>Education</h2>
                    </div>
                </div>
            </div>
        </>
    )
}