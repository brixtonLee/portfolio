import React from 'react';
import './skill-stack.styles.scss';

const SkillStack = () => {
    return (
        <div className="skill_and_language">
            <div className="skill-stack">
                <p className="skill-stack__name">Javascript / Typescript</p>
                <div class="skill-stack__container">
                <div class="skill-stack__percentage js">90%</div>
                </div>

                <p className="skill-stack__name">React JS</p>
                <div class="skill-stack__container">
                <div class="skill-stack__percentage react">75%</div>
                </div>

                <p className="skill-stack__name">Node JS</p>
                <div class="skill-stack__container">
                <div class="skill-stack__percentage node">65%</div>
                </div>

                <p className="skill-stack__name">HTML / CSS</p>
                <div class="skill-stack__container">
                <div class="skill-stack__percentage html_css">80%</div>
                </div>

                <p className="skill-stack__name">PHP / Laravel</p>
                <div class="skill-stack__container">
                <div class="skill-stack__percentage php">70%</div>
                </div>
            </div>

            <div className="language-stack">
                <p className="language-stack__name">English</p>
                <div class="language-stack__container">
                    <div class="language-stack__percentage js">90%</div>
                </div>

                <p className="language-stack__name">Mandarin</p>
                <div class="language-stack__container">
                    <div class="language-stack__percentage react">75%</div>
                </div>

                <p className="language-stack__name">Malay</p>
                <div class="language-stack__container">
                    <div class="language-stack__percentage node">65%</div>
                </div>
            </div>
        </div>
        
    )
}

export default SkillStack;