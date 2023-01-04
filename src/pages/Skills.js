import'./Skills.css'
import { Textsnippet } from "../components/Textsnippet";

export const Skills=()=>{
    return(
        <main>
            <div className="skillsbox">
            <div>
                <ul>
                    <h2>Testing</h2>
                        <li>Static and dynamic testing</li>
                        <li>Unit testing</li>
                        <li>Debugging & bug prevention</li>
                        <li>Test Driven Development</li>
                        <li>Mocha</li>
                        <li>Cypress</li>
                        <li>Insomnia</li>
                    </ul>
                </div>
                <div>
                <ul>
                    <h2>Main Languages and Software</h2>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Java</li>
                        <li>React</li>
                        <li>HTML, CSS</li>
                        <li>Node.js</li>
                        <li>PostgreSQL</li>
                        <li>CRUD operations</li>
                        <li>NPM</li>
                        <li>MongoDB</li>
                        <li>Spring</li>
                        <li>Flask</li>
                        <li>RESTful APIs</li>
                        <li>Document Object Model</li>
                    </ul>
                </div>

                <div>
                <ul>
                    <h2>Other tools and skills</h2> 
                        <li>Git & Github</li>
                        <li>VSCode</li>
                        <li>IntelliJ</li>
                        <li>Postico</li>
                        <li>Agile methodologies</li>
                        <li>System diagrams (class, object, use-case etc.)</li>
                        <li>Wireframing</li>
                        <li>GIMP image editing</li>
                    </ul>
                </div>
            </div>
            <Textsnippet text="I'm experienced in UX/UI user-centred design, quantitative and qualitative data collection and analysis, SPSS, and leading focus groups. I'm also fluent in English, German and French."/>
        </main>
    )
}