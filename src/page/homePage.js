import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {Link, Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../components/sidebar";
import React, { useState } from "react";

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <>
            <Header></Header>
            <hr />
            <Navbar></Navbar>
            <hr />
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1, border: "1px solid black" }}>
                    <Sidebar></Sidebar>
                </div>
                <div style={{ flex: 3 }}>
                    <div style={{ width: "fit-content", margin: "auto" }}>
                        <div style={{ width: "fit-content", margin: "auto" }}>
                            <button className="btn btn-primary" onClick={() => navigate("")}>List Tours</button>&nbsp;   &nbsp;
                            <button className="btn btn-success" onClick={() => navigate("create")}>Add New Tour</button>
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div style={{ flex: 1, border: "1px solid black" }}>
                    <Sidebar></Sidebar>
                </div>
            </div>
            <hr />
            <Footer></Footer>
        </>
    );
}
