import React from 'react';
import TopNav from "../../Components/TopNav";
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer";
import s from "./style.module.scss"

const LayoutTopNav = () => {
    return (
        <>
            <TopNav/>
            <div className={s.outLet}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default LayoutTopNav;