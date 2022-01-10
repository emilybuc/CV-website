import React from "react";
import Wave from "react-wavify";
import { WavesContainer } from "./Waves.styles.js"

const wavePos1 = {
    position: "absolute",
    top: "50px",
    width: "100%"
};

const wavePos2 = {
    position: "absolute",
    top: "20px",
    width: "100%"
};

const wavePos3 = {
    position: "absolute",
    top: "10px",
    width: "100%"
};

const wavePos4 = {
    position: "absolute",
    top: "0",
    width: "100%"
};
const pauseStatus = false;


export default () => {
    return (
        <WavesContainer>
            <div style={wavePos4}>
                <Wave
                    fill="rgb(90, 0, 201)"
                    paused={pauseStatus}
                    options={{
                        height: 95,
                        amplitude: 20,
                        speed: 0.2,
                        points: 6
                    }}
                />
            </div>
            <div style={wavePos3}>
                <Wave
                    fill="#5241f0"
                    paused={pauseStatus}
                    options={{
                        height: 100,
                        amplitude: 15,
                        speed: 0.2,
                        points: 3
                    }}
                />
            </div>
            <div style={wavePos2}>
                <Wave
                    fill="rgb(30,132,201)"
                    paused={pauseStatus}
                    options={{
                        height: 115,
                        amplitude: 10,
                        speed: 0.2,
                        points: 6
                    }}
                />
            </div>
            <div style={wavePos1}>
                <Wave
                    fill="rgb(0,155,177)"
                    paused={pauseStatus}
                    options={{
                        height: 105,
                        amplitude: 10,
                        speed: 0.2,
                        points: 7
                    }}
                />
            </div>
        </WavesContainer>
    )
}