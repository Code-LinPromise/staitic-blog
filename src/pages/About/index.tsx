import React from 'react';
import FontStyle from "../../Components/FontStyle";
import  s from "./style.module.scss"

const About = () => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.name}>
                    <FontStyle title={"smllhack 的诞生"}/>
                </div>
            </div>
        </>
    );
};

export default About;