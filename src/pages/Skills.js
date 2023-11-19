import'./Skills.css'
import { Textsnippet } from "../components/Textsnippet";

export const Skills=()=>{
    return(
        <main>
            <h1>Skill Set</h1>
            <div className="skillsbox">
                <div>
                    <ul>
                        <h2>Testing</h2>
                            <li>Automated pipeline tests</li>
                            <li>Unit testing</li>
                            <li>Debugging & bug prevention</li>
                            <li>Test Driven Development</li>
                            <li>Playwright</li>
                            <li>Jest</li>
                            <li>Vitest</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                        <h2>Main Languages</h2>
                            <li>TypeScript</li>
                            <li>Semantic HTML</li>
                            <li>CSS & SCSS</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                        <h2>Frameworks & database management</h2> 
                            <li>React</li>
                            <li>Node.js</li>
                            <li>NPM</li>
                            <li>RESTful APIs</li>
                            <li>Spring Boot</li>
                            <li>PostgreSQL</li>
                            <li>H2</li>
                            <li>MariaD</li>
                            <li>Spring</li>
                            <li>Docker</li>
                            <li>Postman</li>
                            <li>Terraform</li>
                            <li>Liquibase</li>
                            <li>AWS cloud deployment</li>
                    </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>Code writing & collaboration</h2>
                                <li>Git & Github</li>
                                <li>VSCode Liveshare</li>
                                <li>IntelliJ Code With Me</li>
                                <li>Agile methodologies</li>
                                <li>Scrum-Ban</li>
                                <li>Jira</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h2>Diagrams & Visual Design</h2>
                                <li>UML diagrams</li>
                                <li>Wireframing</li>
                                <li>GIMP image editing</li>
                                <li>Excalidraw</li>
                                <li>Paint</li> 
                        </ul>
                    </div>
            </div>
            <Textsnippet text="I'm experienced in UX/UI user-centred design, quantitative and qualitative data collection and analysis, SPSS, and leading focus groups. I'm also fluent in English, German and French."/>
        </main>
    )
}