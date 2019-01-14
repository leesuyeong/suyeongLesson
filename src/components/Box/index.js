import React from 'react';

const Box = (props) =>{
    return(
        <div style={{
            border : "3px solid green",
        }}>
        {props.children}
        </div>
    )

}
export default Box;

