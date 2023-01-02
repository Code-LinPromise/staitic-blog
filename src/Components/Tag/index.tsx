import React from 'react';
import  s from "./style.module.scss"
type Props={
    title:string
}

const Tag = (props:Props) => {
    const {title}=props
    return (
        <div className={s.wrapper}>
            <span className={["iconfont icon-tag",s.logo].join(" ")}></span>
            <span className={s.font}>{title}</span>
        </div>
    );
};

export default Tag;