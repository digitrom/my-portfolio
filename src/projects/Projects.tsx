import React from 'react';
import style from './Projects.module.css'
import  styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                  <Title title={'My projects'}/>
                </div>
                <div className={style.projects}>
                    <Project projectImage={''} title={'Counter'} description={'counter js'}/>
                    <Project projectImage={''} title={'social network'} description={'social network typescript social network typescript social network typescript'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;