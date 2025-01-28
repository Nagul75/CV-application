import "./styles/Work.css"

export default function (educationData, handleChange) {
    const {company, position, dateWorked, workDetails} = educationData
    const {setCompany, setPosition, setWorkDate, setWorkDetails} = handleChange
    return (
        <div className="work-container">
            <div className="work">
                <div className="">
                  Company:<input type="text" onChange={(e) => setCompany(e.target.value)} value={company}></input>
                </div>
                <div className="position">
                  Position:<input type="text" onChange={(e) => setPosition(e.target.value)} value={position}></input>
                </div>
                <div className="date">
                  Date:<input type="text" onChange={(e) => setWorkDate(e.target.value)} value={dateWorked}></input>
                </div>
                <div className="details">
                  Details: <textarea onChange={(e) => setWorkDetails(e.target.value)} value={workDetails}></textarea>
                </div>
            </div>
        </div>
    )
}