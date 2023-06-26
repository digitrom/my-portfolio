import React from 'react';
import styleContainer from './Projects.module.css'
import style from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={styleContainer.projectsBlock}>
            <div className={`${styleContainer.projectContainer} ${style.container}`}>
                <h2 className={styleContainer.title}>My Projects</h2>
                <div className={styleContainer.project}>
                    <Project projectImage={''} title={'Counter'} description={'counter js'}/>
                    <Project projectImage={''} title={'social network'} description={'social network typescript social network typescript social network typescript'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;