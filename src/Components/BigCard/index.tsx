import React from 'react';
import  s from "./style.module.scss"
import Tag from "../Tag";

type Props={
    image:string,
    userLogo:string,
    TagTitle:string,
    title:string,
    details:string,
    time:string,
    userName:string
}
const BigCard = (props:Props) => {
    return (
        <div className={s.wrapper}>
          <div className={s.left} >
              <img src={props.image} alt=""/>
          </div>
          <div className={s.right}>
              <div className={s.leftTop}>
                  <div className={s.user}>
                      <img src={props.userLogo} alt=""/>
                      <strong>{props.userName}</strong>
                  </div>
                  <div><Tag title={props.TagTitle}/></div>
              </div>
              <div className={s.leftBottom}>
                  <h2>{props.title}</h2>
                  <p>{props.details}</p>
              </div>
              <div className={s.time}>
                  <span style={{visibility:"hidden"}}>{props.time}</span>
                  <span>{props.time}</span>
              </div>
          </div>
        </div>
    );
};

export default BigCard;