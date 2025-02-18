import "./styles/Profile.css"

export default function Profile({profileData, handleChange}) {
    const { name, email, phone, github, linkedin } = profileData;
    const { setName, setEmail, setPhone, setGitHub, setLinkedin } = handleChange;
    return (
        <div className="profile-container">
            <div className="profile">
                <div className="profile-input">
                  Name:<input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <div className="profile-input">
                    Email:<input type="text" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div className="profile-input">
                    Phone:<input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                </div>
                <div className="profile-input">
                    Github:<input type="text" onChange={(e) => setGitHub(e.target.value)} value={github}></input>
                </div>
                <div className="profile-input">
                    Linkedin:<input type="text" onChange={(e) => setLinkedin(e.target.value)} value={linkedin}></input>
                </div>
            </div>
        </div>
    )
}