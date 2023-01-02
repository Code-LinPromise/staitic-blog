import React from 'react';
import s from "./style.module.scss"

const TopNav = () => {
    return (
        <div className={s.wrapper}>
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
                    <span className="iconfont icon-github-fill"></span>
                </div>
            </div>
        </div>
    );
};

export default TopNav;