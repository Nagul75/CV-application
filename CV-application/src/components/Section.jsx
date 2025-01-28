import  "./styles/Section.css"

export default function Section({text, children}) {
    return (
        <section>
            {text}
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}