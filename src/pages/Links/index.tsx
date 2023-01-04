import React from 'react';
import s from "./style.module.scss"
import bgImage from "../../assets/links_banner.svg"

const Links = () => {
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
            </div>
        </>
    );
};

export default Links;