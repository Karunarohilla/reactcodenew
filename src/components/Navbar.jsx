import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import About from './About';
import TextForm from './TextForm';

export default function Navbar(props){
    return(
        <>
        

            <nav className ={`navbar navbar-expand-sm bg-${props.mode} navbar-${props.mode} `}>
                
                <a className="navbar-brand" href="/">TextUtils</a>
                
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>

                    {/* <li className="nav-item">
                        <a className="nav-link" href="/textutils">TextUtils</a>
                    </li> */}
                </ul>

                <form className="form-inline" style={{paddingLeft: '40em'}}>
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                    <div className="custom-control custom-switch ml-5">
                        <input type="checkbox" className="custom-control-input" id="switch1" name="example" onClick={props.toggleMode} />
                        <label className="custom-control-label" htmlFor="switch1"></label>
                    </div>
                </form>
            </nav>
           
            
        </>
    )
}