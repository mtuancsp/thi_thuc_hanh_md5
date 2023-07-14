import {Link, useNavigate} from "react-router-dom";
import React from "react";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Navbar&nbsp;|&nbsp;
                            <Link to="/">Home</Link>
                        </h2>
                    </div>
                    <div className="col-sm-6">
                        <input style={{float: 'right'}} readOnly placeholder="Search something ..." type="text"/>
                    </div>
                </div>
            </div>
        </>
    );
}


