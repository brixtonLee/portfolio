import React from 'react';
import './homepage.styles.scss';

import Poster from '../../components/poster/poster.component';
import SkillStack from '../../components/skill-stack/skill-stack.component';
const Homepage = () => {
    return (
        <div className="homepage">
            <Poster/>
            <SkillStack/>
        </div>

    )
}

export default Homepage;