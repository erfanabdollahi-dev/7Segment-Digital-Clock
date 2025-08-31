import React from "react"
import '../style.css'
import Clock from "./Clock";
import Timer from "./Timer";
import StopWatch from "./Stop-Watch";




class App extends React.Component{
    constructor(){
        super();
        this.state = {
            mode: 0,
        }
    }
    
    buttonConfig(){
        const buttons = document.querySelectorAll(".btn");
        
        
        buttons[0].classList.add("active");
        
        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
               
                if (btn.classList.contains("active")) return;
                
                
                buttons.forEach(b => {
                    b.classList.remove("active");
                    b.classList.remove("disabled");
                    
                    
                });
                
     
                btn.classList.add("active");
                this.setState({
                    mode: index,
                })
                
                
                
                
               
                buttons.forEach((b, i) => {
                    if (i !== index){
                        
                        b.classList.add("disabled");
                    
                    } 
                    
                });
                
            });
        });
    }
    
    
    componentDidMount(){
        this.buttonConfig()
        
        
    }
    componentDidUpdate(){
       
    
    }
    render(){
        const {mode} = this.state;
        
        let content = 0;

        if (mode === 0){
            content = <Clock/>
        }
        else if (mode ===1){
            content = <StopWatch/>
        }
        else{
            content = <Timer/>
        }
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
            </div>
        );
    }
    
}


export default App;