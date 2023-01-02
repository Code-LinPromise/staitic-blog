import React from 'react';
import TopNav from "../../Components/TopNav";
import ContentBox from "../../Components/ContentBox";
import  s from "./style.module.scss"
import Tag from "../../Components/Tag";
const Home = () => {
    const array:string[]=["all","genesis","help"]
    return (
        <>
            <TopNav/>
            <div className={s.wrapper}>
                <ContentBox/>
                <ul className={s.tag}>
                    {
                        array.map((item:string,index:number)=>{
                            return <li key={index}><Tag title={item}/></li>
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Home;