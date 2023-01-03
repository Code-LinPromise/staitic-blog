import React from 'react';
import TopNav from "../../Components/TopNav";
import ContentBox from "../../Components/ContentBox";
import  s from "./style.module.scss"
import Tag from "../../Components/Tag";
import BigCard from "../../Components/BigCard";
import BigCardImage from "../../assets/source-4280758_1920.jpg"
import UserLpt from "../../assets/userLpt.jpg"

const Home = () => {
    const array:string[]=["all","genesis","help","碎碎念"]
    return (
        <>
            <TopNav/>
            <div className={s.wrapper}>
                <ContentBox title={"Do more useless things"}/>
                <ul className={s.tag}>
                    {
                        array.map((item:string,index:number)=>{
                            return <li key={index}><Tag title={item}/></li>
                        })
                    }
                </ul>
                <div className={s.bigCard}>
                    <BigCard image={BigCardImage} userLogo={UserLpt}
                             userName={"Promise"} TagTitle={"All"} time={"Fri, Nov 25 2022"}
                             details={"哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"} title={"qweqweqwe"}
                    />
                </div>
            </div>
            <br/><br/><br/><br/>
        </>
    );
};

export default Home;