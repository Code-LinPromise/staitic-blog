import React from 'react';
import  s from "./style.module.scss"
import Tag from "../Tag";

type Props ={
    userLogo:string,
    userName:string,
    tagTitle:string,
    image:string,
    title:string,
    details:string,
    time:string
}
const SmallCard = (props:Props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.top}>
                <div className={s.user}>
                    <img src={props.userLogo} alt=""/>
                    <strong>{props.userName}</strong>
                </div>
                <div>
                    <Tag title={props.tagTitle}/>
                </div>
            </div>
            <div className={s.image}>
                <img src={props.image} alt=""/>
            </div>
            <div className={s.title}>
                <h2>{props.title}</h2>
            </div>
            <div className={s.details}>
                <p>{props.details}</p>
            </div>
            <div className={s.time}>
                <span >{props.time}</span>
                <span style={{visibility:"hidden"}}>{props.time}</span>
            </div>
        </div>
    );
};

export default SmallCard;