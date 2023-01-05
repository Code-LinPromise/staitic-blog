import React from 'react';
import  s from "./style.module.scss"
import  imgSvg from "../../assets/githubImage.svg"
import ProjectItem from "../../Components/ProjectItem";
import {useProjectInfo} from "../../store";


type ProjectItem={
    title:string,
    details:string,
    url:string
}

const Projects = () => {
    const projectInfo :ProjectItem[]=useProjectInfo((state)=>state.projectInfo)
    return (
        <>
            <div className={s.wrapper}>
                <img src={imgSvg} alt=""/>
                <ul className={s.list}>
                    {
                        projectInfo.map((item,index)=>{
                            return <li key={index}> <ProjectItem title={item.title} details={item.details} url={item.url}/></li>
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Projects;