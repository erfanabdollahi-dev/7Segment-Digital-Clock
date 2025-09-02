import React, { useState, useEffect } from "react";
import '../style.css';
import Clock from "./Clock";
import Timer from "./Timer";
import StopWatch from "./Stop-Watch";
import Log from "./Log";
const App = () => {
    const [mode, setMode] = useState(0);
    const [timearr, setTimeArr] = useState([]);
    
    // Handles button clicks
    const buttonConfig = () => {
        const buttons = document.querySelectorAll(".btn");
        
        buttons[0].classList.add("active");
        
        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                if (btn.classList.contains("active")) return;
                
                buttons.forEach((b) => b.classList.remove("active", "disabled"));
                btn.classList.add("active");
                setMode(index);
                
                buttons.forEach((b, i) => {
                    if (i !== index) b.classList.add("disabled");
                });
            });
        });
    };
    
    useEffect(() => {
        buttonConfig();
        
        return () => {
            const buttons = document.querySelectorAll(".btn");
            buttons.forEach((btn) => {
                const clone = btn.cloneNode(true);
                btn.parentNode.replaceChild(clone, btn);
            });
        };
    }, []);
    
    // Determine which component to render
    let content = null;
    if (mode === 0) content = <Clock />;
    else if (mode === 1) content = <StopWatch timearr={timearr} setTimeArr={setTimeArr} />;
    else content = <Timer />;
    
    return (
        <div className="container">
        <div className="all">
        <div className="buttons">
        <div className="btn" id="btn1"></div>
        <div className="btn" id="btn2"></div>
        <div className="btn" id="btn3"></div>
        </div>
        
        <div className="clock-body">
        <div className="modes">
        <div className="mode" id="clock">CLOCK</div>
        <div className="mode" id="stop-watch">STOP-WATCH</div>
        <div className="mode" id="timer">TIMER</div>
        </div>
        {content}
        </div>
        </div>
        <div className="logs">
        <Log>{timearr}</Log>
        </div>
        
        </div>
    );
};

export default App;
