import React, { Component, Fragment } from 'react';
import "./FlipCard.css"


class FlipCardBack extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render () {
        return (
            <Fragment>
                <div className={`flip-card-back flex flex-col justify-center content-center items-center ${this.props.backSideClasses}`}
                >
                    {
                        this.props?.children
                    }
                </div>
            </Fragment>
        )
    }
}


export default FlipCardBack;