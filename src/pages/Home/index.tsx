import React from 'react';
import TopNav from "../../Components/TopNav";
import ContentBox from "../../Components/ContentBox";
import  s from "./style.module.scss"
import Tag from "../../Components/Tag";
import BigCard from "../../Components/BigCard";
import SmallCard from "../../Components/SmallCard";
import BigCardImage from "../../assets/source-4280758_1920.jpg"
import UserLpt from "../../assets/userLpt.jpg"
import UserLjb from "../../assets/userLjb.jpg"
import SmallCardLjb from "../../assets/fir-tree-7620654_1920.jpg"

const Home = () => {
    const array:string[]=["all","genesis","help","碎碎念"]
    const user:object[]=[
        {

        },
        {

        }
    ]
    return (
        <>
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
                <ul className={s.smallCard}>
                    {
                        user.map((item:object,index:number)=>{
                            return <li key={index}>
                                <SmallCard userLogo={UserLjb} userName={"AjaxMactavish"}
                                           tagTitle={"依托农协"} image={SmallCardLjb} title={"大萨达所多"}
                                           details={"哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或"}
                                           time={"Tue，Jan 3，2023"}
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={s.footer}>
                <span>Powered by React & ReactHooks</span>
                <span>Copyright © 2023 smll</span>
            </div>
        </>
    );
};

export default Home;