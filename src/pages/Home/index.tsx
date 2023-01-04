import React from 'react';
import ContentBox from "../../Components/ContentBox";
import  s from "./style.module.scss"
import Tag from "../../Components/Tag";
import BigCard from "../../Components/BigCard";
import SmallCard from "../../Components/SmallCard";
import  {useUserInfo} from "../../store";
type smallUser ={
    userLogo:string,
    userName:string,
    tagTitle:string,
    image:string,
    title:string,
    details:string,
    time:string
}
type bigUser={
    image:string,
    userLogo:string,
    TagTitle:string,
    title:string,
    details:string,
    time:string,
    userName:string
}

const Home = () => {
    const array:string[]=["all","genesis","help","碎碎念"]
    const smallUserInfo:smallUser[] = useUserInfo((state)=>state.smallUser)
    const bigUserInfo:bigUser[] =useUserInfo((state)=>state.bigUser)
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
                    <BigCard image={bigUserInfo[0].image} userLogo={bigUserInfo[0].userLogo}
                             userName={bigUserInfo[0].userName} TagTitle={bigUserInfo[0].TagTitle} time={bigUserInfo[0].time}
                             details={bigUserInfo[0].details} title={bigUserInfo[0].title}
                    />
                </div>
                <ul className={s.smallCard}>
                    {
                        smallUserInfo.map((item:smallUser,index:number)=>{
                            return <li key={index} >
                                <SmallCard userLogo={item.userLogo} userName={item.userName}
                                           tagTitle={item.tagTitle} image={item.image} title={item.title}
                                           details={item.details}
                                           time={item.time}
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Home;