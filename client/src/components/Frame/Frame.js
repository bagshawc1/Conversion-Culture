import React from "react";
// import styled from "styled-components";



const Frame = props => {
    return (
        <div>
            <iframe allowFullScreen={true} frameBorder={0} height={1080} title={'frame'} src={props.activeFrame} />
            <p>{props.activeFrame}</p>
        </div>
    )
}

export default Frame;
