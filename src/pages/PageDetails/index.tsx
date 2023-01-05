import React, {useEffect, useState} from 'react';
import s from "./style.module.scss"
import Tag from "../../Components/Tag";
import {useUserInfo} from "../../store";
import {useParams} from "react-router-dom";


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

const PageDetails = () => {
    const [userDetails,setUserDetails]=useState<User>({
        userLogo:"",
        userName:"",
        tagTitle:"",
        image:"",
        title:"",
        details:"",
        time:"",
        id:0
    })
    const { id }=useParams()
    const  userInfo =useUserInfo(state=>state.User)
    useEffect(()=>{
        const info:User[]= userInfo.filter((item,index)=>{
            if(id && typeof id ==="number"){
                if(item.id == id){
                    return item
                }
            }
        })
        setUserDetails(info[0])
    },[])
    return (
        <div className={s.wrapper}>
            <div className={s.userInfo}>
                <img src={userDetails.userLogo} alt=""/>
                <strong>{userDetails.userName}</strong>
                <div className={s.tag}>
                    <Tag title={userDetails.tagTitle}/>
                </div>
            </div>
            <div className={s.time}>
                <span >{userDetails.time}</span>
            </div>
                 <img src={userDetails.image} alt=""/>
            <div>
                <h2>{userDetails.title}</h2>
            </div>
            <div>
                <p>{userDetails.details}</p>
            </div>
        </div>
    );
};

export default PageDetails;