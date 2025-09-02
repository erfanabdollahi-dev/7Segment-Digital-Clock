import React from "react"
import ReactDOM from "react-dom/client"
import '../style.css'
import { Digit } from "./Digit"
import Log from "./Log"
import { TextContext } from "./testContext.jsx"

class StopWatch extends React.Component{
    constructor(){
        super();
        this.state = {
            h: "00",
            m: "00",
            s: "00",
            isRunnig : false,
            totalSeconds : 0
        };
    }
    
    
    start = ()=>{
        
        if(this.state.isRunnig) return;
        this.setState({
            isRunnig: true
        })
        this.intervalID =  setInterval(() => {
            
            
            
            const h = Math.floor(this.state.totalSeconds/3600); //first divide by 3600 to get hours and then use floor exclude the minuts
            const m = Math.floor((this.state.totalSeconds % 3600)/ 60); //then seconds % 3600 to get the remainig seconds then divide with 60 to get minutes
            const s = this.state.totalSeconds % 60;  // gives the mainder of seconds
            
            this.setState({
                h: String(h).padStart(2, "0"),
                m: String(m).padStart(2, "0"),
                s: String(s).padStart(2, "0"),
                totalSeconds : this.state.totalSeconds+ 1,
                
                
            })
        }, 1000)
    }
    
    
    
    stop = ()=>{
        clearInterval(this.intervalID)
        this.setState({
            isRunnig : false,
        })
        
    }
    
    reset = ()=>{
        clearInterval(this.intervalID);
        this.context.setTimeArr([])
        this.setState({
            h: "00",
            m: "00",
            s: "00",
            totalSeconds : 0,
            isRunnig : false,
        })
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
        
    }
    
    Log = ()=>{
        if(!this.state.isRunnig)return;
        const  {h, m, s} = this.state
        let newTime = String(h.padStart(2,"0")) + ':'+ String(m.padStart(2,"0")) + ':'+ String(s.padStart(2,"0"))
        this.context.setTimeArr([ newTime,...this.context.timearr ])

        
    }
    
    static contextType = TextContext;


    render(){
        const { h, m, s } = this.state;
        return (
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
            <div className="stop-watch" >
            <button onClick={this.start}>START</button>
            <button onClick={this.stop}>STOP</button>
            <button onClick={this.reset}>RESET</button>
            <button onClick={this.Log} >LOG</button>
            
            
            </div>
            
            </>
        )
    }
}

export default StopWatch;