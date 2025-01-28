import "./styles/Education.css"

export default function Education(educationData, handleChange) {
    const {institute, location, date_start, date_end} = educationData
    const {setInstitute, setLocation, setDateStart, setDateEnd} = handleChange
    return (
        <div className="education-container">
            <div className="education">
                <div className="institute">
                  Institute Name:<input type="text" onChange={(e) => setInstitute(e.target.value)} value={institute}></input>
                </div>
                <div className="location">
                  Location:<input type="text" onChange={(e) => setLocation(e.target.value)} value={location}></input>
                </div>
                <div className="date_start">
                  Year Start:<input type="text" onChange={(e) => setDateStart(e.target.value)} value={date_start}></input>
                </div>
                <div className="date_end">
                  Year End:<input type="text" onChange={(e) => setDateEnd(e.target.value)} value={date_end}></input>
                </div>
            </div>
        </div>
    )
}