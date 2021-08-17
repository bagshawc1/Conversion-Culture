import React from "react";
import './PageBanner.css'
import { CSSTransition, SwitchTransition } from "react-transition-group";

const PageBanner = props => {

    return (
        <SwitchTransition>
            <CSSTransition
                key={props.activeFrame}
                timeout={1000}
                classNames="transition"
                addEndListener={(node, done) => {
                    node.addEventListener("transitioned", done, false)}
            }>
                <iframe allowFullScreen={true} frameBorder={0} height={1080} title={'frame'} src={props.activeFrame}/>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default PageBanner;
