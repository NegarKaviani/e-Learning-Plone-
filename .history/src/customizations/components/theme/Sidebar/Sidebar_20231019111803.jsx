import React from "react";
import fraud from "../images/fraud_prevention.png";
import itsecurity from "../images/it_security.png";
import data_protection from "../images/data_protection.png";
import wphg from "../images/wphg.png";

export default function Sidebar(){
    return(
        <div className="sidebar w-full lg:w-3/12">
            <div className="box">
                <div className="title-line bg-zinc-300 h-7 flex items-center text-xs pl-3 mb-5 font-semibold">
                    Navigation
                </div>
                <a className="course-nav block bg-white p-3 flex items-center mb-3" href="#/">
                    <div className="logo w-10 h-10 mr-3"><img className="w-full h-full object-contain" src={fraud} alt="" /></div>
                    <p className="text-sm font-semibold">Money Laundering and Fraud Prevention</p>
                </a>
                <a className="course-nav block bg-white p-3 flex items-center mb-3" href="#/">
                    <div className="logo w-10 h-10 mr-3"><img className="w-full h-full object-contain" src={itsecurity}  alt=""/></div>
                    <p className="text-sm font-semibold">It security and information security</p>
                </a>
                <a className="course-nav block bg-white p-3 flex items-center mb-3" href="#/">
                    <div className="logo w-10 h-10 mr-3"><img className="w-full h-full object-contain" src={data_protection}  alt=""/></div>
                    <p className="text-sm font-semibold">Data Protection</p>
                </a>
                <a className="course-nav block bg-white p-3 flex items-center mb-3" href="#/">
                    <div className="logo w-10 h-10 mr-3"><img className="w-full h-full object-contain" src={wphg} alt="WpGH"/></div>
                    <p className="text-sm font-semibold">WpHG-compliance</p>
                </a>
            </div>
            <div className="box">
                <div className="title-line bg-zinc-300 h-7 flex items-center text-xs pl-3 mb-5 font-semibold">
                    Contact
                </div>
                <div className="contact-box pl-6 mb-4">
                    <p className="title font-bold">Technical Support</p>
                    <p className="person">John Doe</p>
                    <p className="info text-sky-800 font-semibold">it@example.com</p>
                </div>
                <div className="contact-box pl-6 mb-4">
                    <p className="title font-bold">Technical Support</p>
                    <p className="person">Jane Roe</p>
                    <p className="info text-sky-800 font-semibold">content@example.com</p>
                </div>
            </div>
        </div>
    )
}