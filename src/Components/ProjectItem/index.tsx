import React from 'react';
import s from  "./style.module.scss"

type Props={
    title:string,
    details:string,
    url:string
}
const ProjectItem = (props:Props) => {
    return (
        <a className={s.wrapper} href={props.url}>
            <span>{props.title}</span>
            <div>
                <p>{props.details}</p>
            </div>
        </a>
    );
};

export default ProjectItem;