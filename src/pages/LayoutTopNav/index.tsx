import React, {useEffect} from 'react';
import TopNav from "../../Components/TopNav";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer";
import s from "./style.module.scss"
import Shift from "../../Components/Shift";
import  {useState} from "react";
import SetShow from "../../Components/SetShow";

const LayoutTopNav = () => {
    const [isShow,setIsShow]=useState(false)
    const [shift,setShift]=useState(true)
    useEffect(()=>{
        const body =document.querySelector("body")
        if(shift){
            if(body!==null){
                body.className="light"
            }
        }
        else{
            if(body!==null){
                body.className="dark"
            }
        }
    },[shift])
    useEffect(()=>{
        const time =new Date()
        const hours =time.getHours()
        if(hours>=18 || hours<=8){
            setShift(false)
        }
        else{
            setShift(true)
        }
    },[])
    return (
        <>
            {isShow && <SetShow setIsShow={setIsShow} setShift={setShift}/>}
            <TopNav setIsShow={setIsShow}/>
            <div className={s.outLet}>
                <Outlet/>
            </div>
            <div className={s.shift}>
                <Shift shift={shift} setShift={setShift}/>
            </div>
            <Footer/>
        </>
    );
};

export default LayoutTopNav;