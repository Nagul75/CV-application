import "./styles/Education.css"

export default function Education(educationData, handleChange) {
    const {institute, location, date_start, date_end} = educationData
    const {setInstitute, setLocation, setDateStart, setDateEnd} = handleChange
    return (
        <div className="education-container">
            <div className="education">
                <div className="education-input">
                  Institute:<input type="text" onChange={(e) => setInstitute(e.target.value)} value={institute}></input>
                </div>
                <div className="education-input">
                  Location:<input type="text" onChange={(e) => setLocation(e.target.value)} value={location}></input>
                </div>
                <div className="education-input">
                  Year-Start:<input type="text" onChange={(e) => setDateStart(e.target.value)} value={date_start}></input>
                </div>
                <div className="education-input">
                  Year-End:<input type="text" onChange={(e) => setDateEnd(e.target.value)} value={date_end}></input>
                </div>
            </div>
        </div>
    )
}