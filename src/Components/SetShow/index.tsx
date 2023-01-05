import React from 'react';
import s from "./style.module.scss"
import light from "../../assets/light.png"
import dark from "../../assets/dark.png"
import followOS from "../../assets/followOS.png"
import switchTheme from "../../assets/switch.png"

type Props={
    setIsShow:React.Dispatch<boolean>,
    setShift:React.Dispatch<boolean>,
}
const SetShow = (props:Props) => {
    function offShow(){
        props.setIsShow(false)
    }
    function setLight(){
        props.setShift(true)
    }
    function setDark(){
        props.setShift(false)
    }
    function setFollowOS(){
        const time =new Date()
        const hours =time.getHours()
        if(hours>=18 || hours<=8){
            props.setShift(false)
        }
        else{
            props.setShift(true)
        }
    }
    return (
        <div className={s.wrapper}>
            <div className={s.shadow} onClick={offShow}>
            </div>
            <div className={s.card}>
                <strong>选择一个你喜欢的主题</strong>
                <p>你可以选择 light 和 dark 两种主题色，选择一种你喜欢的主题色吧~</p>
                <ul className={s.imgs}>
                    <li onClick={setLight}><img src={light} alt=""/></li>
                    <li onClick={setDark}><img src={dark} alt=""/></li>
                    <li onClick={setFollowOS}><img src={followOS} alt=""/></li>
                </ul>
                <p>你可以在任何地方通过开关随时修改你的主题</p>
                <div>
                    <img src={switchTheme} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default SetShow;