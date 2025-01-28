import "./styles/Profile.css"

export default function Profile() {
    console.log("Profile is being rendered")
    return (
        <div className="profile-container">
            <div className="profile">
                <div className="name">
                  Name:<input type="text"></input>
                </div>
                <div className="email">
                    Email:<input type="text"></input>
                </div>
                <div className="phone">
                    Phone:<input type="text"></input>
                </div>
                <div className="github">
                    Github:<input type="text"></input>
                </div>
                <div className="linkedin">
                    Linkedin:<input type="text"></input>
                </div>
            </div>
        </div>
    )
}