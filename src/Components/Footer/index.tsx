import React from 'react';
import  s from "./style.module.scss"

const Footer = () => {
    return (
        <div className={s.footer}>
            <span>Powered by React & ReactHooks</span>
            <span>Copyright © 2023 smll</span>
        </div>
    );
};

export default Footer;