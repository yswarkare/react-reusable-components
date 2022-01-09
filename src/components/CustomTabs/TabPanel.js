import React, { Component, Fragment } from 'react';


class TabPanel extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }


    render () {
        return (
            <Fragment>
            <div className={`w-full flex flex-col justify-center content-center items-center ${this.props.addClasses?this.props.addClasses:""}`}>
                { this.props.children }
            </div>
            </Fragment>
        )
    }
}


export default TabPanel;