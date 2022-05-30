import React from 'react';

export default function Alert(props){
    return(
        <>
            <div className="alert alert-success">
                <strong>Success!</strong> {props.alert}
            </div>
        </>
    )
}