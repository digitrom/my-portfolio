import React from 'react';
import style from './Projects.module.css'
import  styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={styleContainer.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project projectImage={''} title={'Counter'} description={'counter js'}/>
                    <Project projectImage={''} title={'social network'} description={'social network typescript social network typescript social network typescript'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;