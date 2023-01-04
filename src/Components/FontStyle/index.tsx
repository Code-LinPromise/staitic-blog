import React from 'react';
import s from "./style.module.scss"
type Props={
    title:string
}

const FontStyle = (props:Props) => {
    return (
        <span className={s.font}>
            {props.title}
        </span>
    );
};

export default FontStyle;