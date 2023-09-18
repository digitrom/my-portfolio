import React from 'react';
import style from './Projects.module.scss'
import  styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from '../assets/images/15.png'
import socialImage from '../assets/images/social-network-app.png'

const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`
    };
    const todo = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div>
                  <Title title={'My projects'}/>
                </div>
                <div className={style.projects}>
                    <Project style={todo} title={'Counter'} description={'counter js'}/>
                    <Project style={social} title={'Social network'} description={'social network typescript social network typescript social network typescript'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;