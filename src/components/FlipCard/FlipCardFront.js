import React, { Component, Fragment } from 'react';
import "./FlipCard.css";


class FlipCardFront extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render () {
        return (
            <Fragment>
                <div className={`flip-card-front flex flex-col justify-center content-center items-center ${this.props.frontSideClasses}`}>
                    {
                        this.props?.children
                    }
                </div>
            </Fragment>
        )
    }
}


export default FlipCardFront;