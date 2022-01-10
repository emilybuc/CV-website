import React, { Component } from "react";
import Waves from '../Waves/Waves'
import { SocialIcon } from "react-social-icons";
import { HeroBanner } from "./HeroBanner.styles";

const nameStyle = {
    color: "#E5E5E5",
    fontFamily: "Helvetica",
    letterSpacing: 15,
    fontWeight: "bold",
    fontSize: "10vmin",
    textShadow: "2px 2px 8px rgba(0,0,0, 0.25)",
    textAlign: "center",
    marginTop: "15vh",
    marginBottom: "0px"
};

const buttonStyle = {
    stroke: "#FFF",
    margin: "10px"
};

const centerButtons = {
    margin: "auto",
    width: "50%",
    textAlign: "center"
};


export default () => {
    return (
        <HeroBanner>
            <Waves />
            <h1 style={nameStyle}>Emily Buckley</h1>
            <div style={centerButtons}>
                <SocialIcon
                    className="button-style"
                    bgColor="rgba(0,0,0,0)"
                    fgColor="#FFF"
                    network="linkedin"
                    url="https://www.linkedin.com/in/emily-buckley-a91a7118a/"
                    style={buttonStyle}
                />
                <SocialIcon
                    className="button-style"
                    bgColor="rgba(0,0,0,0)"
                    fgColor="#FFF"
                    network="github"
                    url="https://github.com/emilybuc"
                    style={buttonStyle}
                />
                <SocialIcon
                    className="button-style"
                    bgColor="rgba(0,0,0,0)"
                    fgColor="#FFF"
                    network="mailto"
                    url="mailto:emilyclairebuckley@hotmail.com"
                    style={buttonStyle}
                />
            </div>
        </HeroBanner>

    );
}
