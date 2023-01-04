import React from 'react';
import s from "./style.module.scss"
import bgImage from "../../assets/links_banner.svg"
import {useStudyInfo} from "../../store";
import StudyCard from "../../Components/StudyCard";

type Frame={
    imageUrl:string,
    name:string,
    details:string,
    url:string
}
const Links = () => {
    const studyInfo:Frame[]=useStudyInfo((state)=> state.Frame)
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.img}>
                    <img src={bgImage} alt=""/>
                    <div className={s.font}>
                        <p>温馨提示</p>
                        <p>这里放置了一些学习导航网站，可供大家学习使用。</p>
                    </div>
                </div>
                <ul className={s.studySide}>
                    {
                        studyInfo.map((item:Frame,index:number)=>{
                            return <li key={index} title={item.details}>
                                <StudyCard itemContent={item.details}
                                           itemIcon={item.imageUrl} itemName={item.name}
                                           itemUrl={item.url}
                                />
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Links;