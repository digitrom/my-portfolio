import React from "react";
import style from "./Skill.module.css"

type SkillPropsType = {
    title: string
    icon: string
    description: string

}

const Skill = (props:SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>{props.icon}</div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Skill;