import React from 'react';


const paragraphStyle={
    fontSize: '2em',
    color: 'red',
    fontWeight: 'bold'
}


function Component(props){
    return(
        <>
            <h2 style={{color: 'red', backgroundColor: 'blue', border: '5px solid tomato', margin: '2em'}}>React JSX Components {props.headname} </h2>
            <p style={paragraphStyle}>React JS Paragraph</p>
        </>
    )
}

export default Component;