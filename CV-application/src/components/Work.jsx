import "./styles/Work.css"

export default function ({workData, handleChange}) {
    const {company, position, dateWorked, workDetails} = workData
    const {setCompany, setPosition, setDateWorked, setWorkDetails} = handleChange
    return (
        <div className="work-container">
            <div className="work">
                <div className="work-input">
                  Company:<input type="text" onChange={(e) => setCompany(e.target.value)} value={company}></input>
                </div>
                <div className="work-input">
                  Position:<input type="text" onChange={(e) => setPosition(e.target.value)} value={position}></input>
                </div>
                <div className="work-input">
                  Date:<input type="text" onChange={(e) => setDateWorked(e.target.value)} value={dateWorked}></input>
                </div>
                <div className="work-input">
                  Details: <textarea onChange={(e) => setWorkDetails(e.target.value)} value={workDetails}></textarea>
                </div>
            </div>
        </div>
    )
}