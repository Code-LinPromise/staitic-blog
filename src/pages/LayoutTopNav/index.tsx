import React, {useEffect} from 'react';
import TopNav from "../../Components/TopNav";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer";
import s from "./style.module.scss"
import Shift from "../../Components/Shift";
import  {useState} from "react";

const LayoutTopNav = () => {
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
    return (
        <>
            <TopNav/>
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