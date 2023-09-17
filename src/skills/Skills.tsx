import React from "react";
import Skill from "./skill/Skill";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
               <Title title={'My Skills'}/>
                <div className={style.skills}>
                    <Skill
                        title={'React'}
                        description={'Ut enim ad minim veniam, quis nostrud' +
                            ' exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}
                        icon={'hey'}
                    />
                    <Skill
                        title={'JS'}
                        description={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}
                        icon={'hey'}
                    />
                    <Skill
                        title={'HTML'}
                        description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamt.' }
                        icon={'hey'}
                    />
                </div>
            </div>
        </div>
    );
}


export default Skills;