import React from 'react';
import Button from "../../button/Button";
import style from './Project.module.css'

type ProjectPropsType = {
    projectImage: string
    title: string
    description: string
}


const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} >{props.projectImage}<Button title={'View'}/></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

export default Project;