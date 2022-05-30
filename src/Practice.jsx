import React, {useState} from 'react';
import NavbarPractice  from './components/NavbarPractice';
import TextUtils from './components/TextUtils';

export default function Practice(){

    const [mode, setMode]=useState('light');

    const toggleMode=()=>{
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor="grey"
        }else{
            setMode('light')
            document.body.style.backgroundColor="white"
        }
    }

    return(
        <>
            <NavbarPractice mode={mode} toggleMode={toggleMode} />
            <TextUtils mode={mode} />
        </>
    );
}