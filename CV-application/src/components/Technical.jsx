import "./styles/Technical.css"

export default function ({skillData, handleChange}) {
    const {languages, devTools, libraries} = skillData
    const {setLanguages, setDevTools, setLibraries} = handleChange
    return (
        <div className="technical-container">
            <div className="technical">
                <div className="technical-input">
                  Languages:<input type="text" onChange={(e) => setLanguages(e.target.value)} value={languages}></input>
                </div>
                <div className="technical-input">
                  Tools:<input type="text" onChange={(e) => setDevTools(e.target.value)} value={devTools}></input>
                </div>
                <div className="technical-input">
                  Libraries:<input type="text" onChange={(e) => setLibraries(e.target.value)} value={libraries}></input>
                </div>
            </div>
        </div>
    )
}