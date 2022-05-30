import React, {useState} from 'react';
import ReactDOM from 'react-dom/client'


export default function About(){

    const [myStyle, setMyStyle]=useState({
        color: 'black', backgroundColor: 'white'
    })
   
    const [btntext, setBtnText]=useState('Enable Dark Mode')

    const changeMode=()=>{
        if(myStyle.color=='black'){
            setMyStyle({
                color: 'white', backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode')
        }else{
            setMyStyle({
                color: 'black', backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode')
        }
    }

    return(
        <>
            <div className="container py-3 mt-3" style={myStyle}>
        
                <h3 className='mt-3'>About US</h3>

                <div id="accordion">
                    <div className="card">
                    <div className="card-header" style={myStyle}>
                        <a className="card-link" data-toggle="collapse" href="#collapseOne">
                        Home
                        </a>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#accordion" style={myStyle}>
                        <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" style={myStyle}>
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                        About
                    </a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion" style={myStyle}>
                        <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-header" style={myStyle}>
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                        Contact
                        </a>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion" style={myStyle}>
                        <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>

                    
                    </div>
                </div>

                <button className='btn btn-primary mt-4' onClick={changeMode}>{btntext}</button>
            </div>

        </>
    )
}