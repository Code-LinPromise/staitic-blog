import React from 'react';
import {RightCircleOutlined } from '@ant-design/icons';
import  s from "./style.module.scss"

type Props={
    itemName:string
    itemContent:string
    itemIcon:string,
    itemUrl:string
}
const StudyCard = (props:Props) => {
    const {itemName,itemContent,itemIcon,itemUrl} = props
    return (
        <div className={s.LinkItem}>
            <a className={s.ItemBody} href={itemUrl} title={itemContent} target="_blank">
                <img src={itemIcon} className={s.ItemAvatar} />
                <div className={s.ItemTitle}>
                    {itemName}
                </div>
                <div className={s.ItemContent}>
                    {itemContent}
                </div>
                <div className={s.ItemArrow}>
                    <RightCircleOutlined style={{color:"#999999",fontSize:"16px"}} />
                </div>
            </a>
        </div>
    )
};

export default StudyCard;