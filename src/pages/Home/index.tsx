import React from 'react';
import ContentBox from "../../Components/ContentBox";
import  s from "./style.module.scss"
import Tag from "../../Components/Tag";
import BigCard from "../../Components/BigCard";
import SmallCard from "../../Components/SmallCard";
import  {useUserInfo} from "../../store";
import {useNavigate} from "react-router-dom";

type User ={
    userLogo:string,
    userName:string,
    tagTitle:string,
    image:string,
    title:string,
    details:string,
    time:string,
    id:number
}



const Home = () => {
    const navigate=useNavigate()
    function goDetails(id){
        navigate(`/details/${id}`)
    }
    const array:string[]=["all","gossip","saying","chicken","create"]
    const smallUserInfo:User[] = useUserInfo((state)=>state.User)
    const bigUserInfo:User =useUserInfo((state)=>state.User[3])
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
                <div className={s.bigCard} onClick={()=>{goDetails(bigUserInfo.id)}}>
                    <BigCard image={bigUserInfo.image} userLogo={bigUserInfo.userLogo}
                             userName={bigUserInfo.userName} TagTitle={bigUserInfo.tagTitle} time={bigUserInfo.time}
                             details={bigUserInfo.details} title={bigUserInfo.title}
                    />
                </div>
                <ul className={s.smallCard}>
                    {
                        smallUserInfo.map((item:smallUser,index:number)=>{
                            return <li key={index} onClick={()=>{goDetails(item.id)}} >
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