import styled from "styled-components"

import html from '../images/htmlSkill.svg';
import css from '../images/cssSkill.svg';
import javascript from '../images/javascriptSkill.svg';
import jquery from '../images/jquerySkill.svg';
import react from '../images/reactSkill.svg';
import vue from '../images/vueSkill.svg';

function Skill() {
    return (
        <div id="skill">
            <h2>Skill</h2>
            <div className="skills">
                <div className="skill">
                    <img src={html} />
                    <p>HTML5</p>
                </div>
                <div className="skill">
                    <img src={css} />
                    <p>CSS3</p>
                </div>
                <div className="skill">
                    <img src={javascript} />
                    <p>JavaScript</p>
                </div>
            </div>
            <div className="skills">
                <div className="skill">
                    <img src={jquery} />
                    <p>jQuery</p>
                </div>
                <div className="skill">
                    <img src={react} />
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={vue} />
                    <p>Vue</p>
                </div>
            </div>
        </div>
    )
}
export default Skill;