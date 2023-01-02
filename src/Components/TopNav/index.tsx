import React from 'react';
import s from "./style.module.scss"
import {useEffect} from "react";

const TopNav = () => {
    useEffect(()=>{
        window.WIDGET = {
            "CONFIG": {
                "modules": "01234",
                "background": "5",
                "tmpColor": "888888",
                "tmpSize": "16",
                "cityColor": "888888",
                "citySize": "16",
                "aqiColor": "FF9900",
                "aqiSize": "16",
                "weatherIconSize": "24",
                "alertIconSize": "18",
                "padding": "10px 10px 10px 10px",
                "shadow": "0",
                "language": "auto",
                "fixed": "false",
                "vertical": "top",
                "horizontal": "left",
                "key": "888b69b5741c42e8a53c6e002682147c"
            }
        }
        const script = document.createElement('script')
        script.setAttribute('src', "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0")
        document.body.append(script)
    },[])
    return (
        <div className={s.wrapper}>
            <div className={s.widget}>
                <div id="he-plugin-simple" ></div>
            </div>
            <div className={s.top}>
                <h2 className={s.name}>smllhack</h2>
                <ul className={s.link}>
                    <li>Posts</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Links</li>
                </ul>
                <div className={s.logo}>
                    <span className="iconfont icon-shezhi"></span>
                    <a href="https://github.com/Code-LinPromise/Ninth-group-homework" target="_blank"><span className="iconfont icon-github-fill"></span></a>
                </div>
            </div>
        </div>
    );
};

export default TopNav;