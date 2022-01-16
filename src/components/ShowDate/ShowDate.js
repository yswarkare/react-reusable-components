import React, { Component, Fragment } from 'react';
import { getDateObject } from '../../utils/utilities';


class ShowDate extends Component {

    constructor(props){
        super(props)
        this.state = {
            date: "",
            prevDate: this.props?.date,
            day: getDateObject(this.props?.date)?.day,
            month: getDateObject(this.props?.date)?.month,
            year: getDateObject(this.props?.date)?.year,
            style: this.props.style,
            dotStyle: this.props.dotStyle,
        }
    }

    componentDidMount = () => {
        let newDate =  getDateObject(this.props?.date)
        this.setState({ 
            date: this.props?.date,
            day: newDate.day,
            month: newDate.month,
            year: newDate.year
        });

    }

    static getDerivedStateFromProps = (props, state) => {
        if (state.prevDate !== props?.date) {
            let newDate =  getDateObject(props?.date);
            state.date = props.date;
            state.prevDate = props.date;
            state.day = newDate.day;
            state.month = newDate.month;
            state.year = newDate.year;
            return state;
        }
        return null;
    }

    render () {
        return (
            <Fragment>
            <div className={`flex flex-row justify-center ${this.props.className}`}>
                <span className="" style={this.state?.style}>{`${this.state?.day}`}</span>
                {
                    this.state?.day &&
                    <span className="pb-1 px-1/2 self-end text-tiny1" style={this.state?.dotStyle}>&#9679;</span>
                }
                <span style={this.state?.style}>{`${(this.state?.month)}`}</span>
                {
                    this.state?.month &&
                    <span className="pb-1 px-1/2 self-end text-tiny1" style={this.state?.dotStyle}>&#9679;</span>
                }
                <span style={this.state?.style}>{`${this.state?.year}`}</span>
            </div>
            </Fragment>
        )
    }
}


export default ShowDate;