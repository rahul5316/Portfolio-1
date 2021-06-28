import "./Intro.scss"
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import { init } from 'ityped';
import { useEffect,useRef } from "react";
import Particles from "react-particles-js";
import particle_settings from "../../config/particles-config";
import React from "react";

export default function Intro() {

    const textRef = useRef();
    const mystr = ['Developer.','Data Science Enthusiast.','Competitive Programmer.', 'Gamer!'];

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            strings: mystr,
            backDelay:900,})
    },)

    return (
        <div className="animated-background">
            <Particles params={particle_settings}/>
            <div className="intro" id="intro">
                <div className="left">
                    <div className="imgcontainer">
                        <img src="assets\linkdin_dp.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Hi There! I am</h2>
                        <h1>Anshul Raj.</h1>
                        <h3><span ref={textRef}></span></h3>
                        <a href="#projects" className="downarrow"><ExpandMoreSharpIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
