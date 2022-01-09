import React, { Component, Fragment } from 'react';
import "./FlipCard.css";


class FlippingCards extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        // console.log(this.props)
    }

    render () {
        return (
            <Fragment>
                <div className={`${this.props?.disabled === true? "flip-card-disabled" : 'flip-card'} w-fit h-fit flex flex-col justify-center content-center items-center ${this.props?.containerClasses} z-10`}
                    data-width={this.props?.width || 128} 
                    data-height={this.props?.height || 128}
                >
                    <div className={`flip-card-inner w-full flex flex-col justify-center content-center items-center`}
                    disabled={this.props?.disabled}
                    >
                        {
                            this.props?.children
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default FlippingCards;