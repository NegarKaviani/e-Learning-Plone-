import React from "react";
import logo from "../images/logo.png";

export default function Header () {
    return(
        <div className="logo-line bg-sky-700 h-16 flex flex-row-reverse px-20">
            <img src={logo} className="w-auto h-full object-contain" alt="Logo"/>
        </div>
    )
}