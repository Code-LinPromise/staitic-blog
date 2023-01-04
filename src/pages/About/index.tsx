import React from 'react';
import FontStyle from "../../Components/FontStyle";
import  s from "./style.module.scss"

const About = () => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.name}>
                    <FontStyle title={"smllhack 的诞生"}/>
                </div>
                <div className={s.details}>
                    <p>嗨！欢迎来到我们的应用 smllhack 😎，这是一个兴趣使然的项目，smllhack 被设计为一个注重信息展示的应用。</p>
                    <p>如你所见的 smllhack 已是第五个大版本，它已经经过了两次大规模的重构以及 5 次重新设计，最后回归纯真，专注信息展示。</p>
                    <div className={s.img}>
                        <span>smllhack</span>
                    </div>
                </div>
                <div className={s.details}>
                    <p>这么看下来 zzhack 的确没有什么让人惊讶的亮点，没有额外的用户交互，没有炫酷的交互动画，看上去只是一个平静的展示内容的 web 应用，但是它的确适合作为一个单纯的内容输出的站点，而不被逐渐社交化。</p>
                </div>
                <div className={s.name}>
                    <FontStyle title={"关于我们"}/>
                </div>
                <div className={s.details}>
                    Promise、AjaxMactavish、ruikedingzhen、番薯不是红苕，四名前端爱好者。
                </div>
            </div>
        </>
    );
};

export default About;