import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = (props) => {

    return (
        <div id="wrapper">
            <Sidebar></Sidebar>
            <Topbar></Topbar>
            <section className="home">
                <div>{props.children}</div>
            </section>
        </div>
    );
};

export default Layout;