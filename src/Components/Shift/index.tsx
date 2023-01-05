import React from 'react';
import s from "./style.module.scss"
import {useEffect} from "react";

type Props={
    shift:boolean,
    setShift:React.Dispatch<boolean>
}

const Shift = (props:Props) => {
    useEffect(()=>{
        const shift:HTMLBodyElement | null=document.querySelector("#block")
        if(props.shift && shift!==null){
            shift.style.top="0%"
        }
        else{
            if(shift !== null){
                shift.style.top="50%"
            }
        }
    },[props.shift])
    function shiftLight(){
        props.setShift(true)
    }
    function shiftDark(){
        props.setShift(false)
    }
    return (
        <div className={s.wrapper} >
            <span className={s.block} id="block"></span>
            <span className={["iconfont icon-a-qingtianbaitian",s.light].join(" ")} onClick={shiftLight}>

            </span>
            <span className={["iconfont icon-moonbyueliang",s.dark].join(" ")} onClick={shiftDark}>

            </span>
        </div>
    );
};

export default Shift;