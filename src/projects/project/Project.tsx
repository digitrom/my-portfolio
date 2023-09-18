import React from 'react';
import Button from "../../button/Button";
import style from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: {
        color: string,
        backgroundImage: string
    }
}


const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}><Button title={'View'}/></div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;