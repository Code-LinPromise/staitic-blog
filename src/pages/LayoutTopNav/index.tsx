import React from 'react';
import TopNav from "../../Components/TopNav";
import {Outlet} from "react-router-dom";

const LayoutTopNav = () => {
    return (
        <>
            <TopNav/>
            <Outlet/>
        </>
    );
};

export default LayoutTopNav;