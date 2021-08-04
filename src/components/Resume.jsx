import React from 'react';
import './BodySection.css';
import ProgrammingLanguages from './ProgrammingLanguages.jsx';
import Frameworks from './Frameworks.jsx';
import Software from './Software.jsx';

function Resume() {
    return(
        <div className="sectionBody">
            <h1 id="skills">Technical Skills</h1>
            <ProgrammingLanguages/> 
            <Frameworks/>
            <Software/>
            <div className="lists">
                <ul aria-label="Other:">
                    <li>Word</li>
                    <li>PowerPoint</li>
                    <li>Excel</li>
                    <li>Photoshop</li>
                    <li>GIMP</li>
                    <li>Canva</li>
                    <li>Premiere Pro</li>
                    <li>Olive Editor</li>
                </ul>
            </div>
            <div id="experience">
                <h1>Experience</h1>
                    <h2>Information and Computer Science Student Council</h2>
                        <div className="xp">
                            <h3>External Vice President <span>(June 2021 - Present)</span></h3>
                        </div>

                        <div className="xp">
                            <h3>Corporate Outreach Chair <span>(June 2020 - June 2021)</span></h3> 
                            Lead the Corporate Outreach committee which works with companies to plan and promote club events.
                        </div>

                        <div className="xp">
                            <h3>Events Committee Member <span>(September 2018 - June 2020)</span></h3>
                            Worked as a member of the Events Committee. Helped plan out different educational and fun events.
                        </div>

                    <h2>Middle Earth ACE Programmer <span>(September 2020 - June 2021)</span></h2> 
                    <div className="xp">
                        Stands for Academic and Community Excellence Programmer. Worked for UCI's 
                        Middle Earth Student Housing <br/> with a team to plan events for 
                        residents that promote academic and health wellness. Also created posters <br/> 
                        for these events with Canva.
                    </div>

                    <h2>Information and Computer Science Tutor</h2> 
                        <div className="xp">
                            <h3>Principles of Systems Design <span>(January 2021 - March 2021)</span></h3>
                            Worked in labs to help students in the Principles of Systems Design class (ICS 53). <br/>
                            Explained system concepts like processes, memory, threads, etc. and helped debug C code.
                        </div>
                        <div className="xp">
                            <h3>Introduction to Programming <span>(March 2021 - June 2021)</span></h3>
                            Worked in labs to help students in the Introduction to Programming class (ICS 31). <br/>
                            Explained basic programming concepts like variables, loops, etc. and helped with debugging Python code.
                        </div>
                        

                    <h2>Learning Assistant</h2>
                        <div className="xp">
                            <h3>Discrete Mathematics <span>(January 2021 - March 2021)</span></h3>
                                Helped with Discrete Mathematics class (I&C SCI 6D). Led breakout rooms to have 
                                students solve given problems <br/> and helped answer questions about the 
                                course material in lectures or office hours. Also helped caption lecture <br/>
                                and discussion videos for students to watch.
                        </div>
                        <div className="xp">
                            <h3>Boolean Algebra <span>(March 2020 - June 2020)</span></h3>
                                Helped with Boolean Algebra class (I&C SCI 6B). Led breakout rooms to have 
                                students solve given problems <br/> and helped answer questions about the 
                                course material in lectures, discussion, or office hours. 
                        </div>
            </div>

            <h1>Coursework</h1>
                <li>Computational Vision and Photography</li>
                <li>Project in Computer Vision</li>
                <li>Digital Image Processing</li>
                <li>Introduction to Virtual Reality</li>
                <li>Human Computer Interaction</li>
                <li>Intro to Artificial Intelligence</li>
                <li>Machine Learning and Data Minig</li>
                <li>Computer Networks</li>
        </div>
    );
}

export default Resume;
