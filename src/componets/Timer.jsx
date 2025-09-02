import React from "react"
import ReactDOM from "react-dom/client"
import '../style.css'
import { Digit } from "./Digit";


class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            h : "00",
            m : "00",
            s : "00",
            isRunning: false,
            
        }
    }
    startTimer = () => {
        // preventing multiple starts
        if(this.state.isRunning)return;
        
        
        
        
        const hours = parseInt(document.getElementById("hours").value) || 0;
        const minutes = parseInt(document.getElementById("minutes").value) || 0;
        const seconds = parseInt(document.getElementById("seconds").value) || 0;
        
        let totalSeconds = hours* 3600 + minutes * 60 +  seconds;
        
        
        if(totalSeconds <= 0 ){
            return
        }
        
        this.setState({ isRunning: true});
        
        this.intervalId = setInterval(() => { 
            
            if(totalSeconds <= 0){
                clearInterval(this.intervalId);
                this.setState({ isRunning: false });
                window.alert("ding ding ding")
                
                return;
            }
            
            totalSeconds--;
            
            const h = Math.floor(totalSeconds/3600); //first divide by 3600 to get hours and then use floor exclude the minuts
            const m = Math.floor((totalSeconds % 3600)/ 60); //then seconds % 3600 to get the remainig seconds then divide with 60 to get minutes
            const s = totalSeconds % 60;  // gives the mainder of seconds
            
            this.setState({
                h: String(h).padStart(2, "0"),
                m: String(m).padStart(2, "0"),
                s: String(s).padStart(2, "0"),
                
                
            })
            
        }, 1000);
        
    }
    
    resetTimer = ()=> {
        clearInterval(this.intervalId)
        this.setState({
            isRunning : false,
            h: '00',
            m: '00',
            s : '00',
            
            
        })
        
        
        
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalId)
        this.setState({
            isRunning : false,
            h: 0,
            m: 0,
            s : 0,
            
        })
    }
    
    
    render(){
        const { h, m, s } = this.state;
        return(
            <>
            
            <div className="clock">
            <Digit number={+h[0]} />
            <Digit number={+h[1]} />
            
            <div className="colon">
            <div className="dot"></div>
            <div className="dot"></div>
            </div>
            
            <Digit number={+m[0]} />
            <Digit number={+m[1]} />
            
            <div className="colon">
            <div className="dot"></div>
            <div className="dot"></div>
            </div>
            
            <Digit number={+s[0]} />
            <Digit number={+s[1]} />
            </div>
            
            <div className="timer">
            <div className="timer-input">
            <input id="hours" type="number"defaultValue={0} min={0} max={99} />
            <input id="minutes" type="number"defaultValue={0} min={0} max={60} />
            <input id="seconds" type="number"defaultValue={0}  min={0} max={60}/>
            </div>
            <div className="timer-buttons">
            <button type="button" onClick={this.startTimer} >START</button>
            <button type="button" onClick={this.resetTimer} >RESET</button>
            </div>
            </div>
            
            </>
            
        )
        
    }
}


export default Timer;