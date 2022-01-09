import React, { Component, Fragment } from 'react';


class FormattedText extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: this.props?.value || "",
            prevValue: this.props?.value || "",
            textArray: [],
            classes: this.props?.className,
        }
    }

    componentDidMount = () => {
        let textString = this.state.value;
        let textArray = this.state.textArray;
        if (typeof(textString) === "string") {
            textArray = textString.split("/");
            this.setState({ textArray: textArray });
            console.log(textArray);
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        if (state.prevValue !== props.value) {
            state.prevValue = props.value;
            state.value = props.value;
            let textString = state.value;
            if (typeof(textString) === "string") {
                state.textArray = textString.split("/");
            }
            return state;
        }
        return null;
    }

    render () {
        return (
        <Fragment>
            <span className={this.state?.classes}>
            {
                this.state?.textArray?.map?.((item, index)=> {
                    console.log(item, item.charCodeAt(0))
                    // if (item.startsWith()) {
                    //     return (
                    //         <span className={this.state.classes} key={index}>{item}</span>
                    //     )
                    // } else {
                    //     return (
                    //         <Fragment key={index}>
                    //             <span className={this.state.classes} key={index}>{item}</span>
                    //         </Fragment>
                    //     )
                    // }
                    return (
                        <Fragment key={index}>
                            {
                                item.charCodeAt(0) === 0 &&
                                <span>{"\u0000"}</span>
                            }
                            {item}
                        </Fragment>
                    )
                })
            }
            </span>
        </Fragment>
        )
    }
}


export default FormattedText;