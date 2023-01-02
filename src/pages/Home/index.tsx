import React from 'react';
import TopNav from "../../Components/TopNav";
import ContentBox from "../../Components/ContentBox";
import  s from "./style.module.scss"
const Home = () => {
    return (
        <>
            <TopNav/>
            <div className={s.wrapper}>
                <ContentBox/>
            </div>
        </>
    );
};

export default Home;