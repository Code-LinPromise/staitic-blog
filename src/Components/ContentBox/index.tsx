import React from 'react';
import  s from  "./style.module.scss"

type Props={
    title:string
}
const ContentBox = (props:Props) => {
    const {title}=props
    return (
        <div className={s.wrapper}>
            <h1>{title}</h1>
        </div>
    );
};

export default ContentBox;