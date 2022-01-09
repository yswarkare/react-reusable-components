import React, { Component, Fragment } from 'react';
// import { Options } from "./Options";
import TreeItem from './TreeItem';


class TreeView extends Component {

    constructor(props){
        super(props)
        this.state = {
            options: this.props?.options || [],
            prevOptions: this.props?.options || [],
        }
        this.itemRef = React.createRef();
    }

    componentDidMount = () => {
        console.log(this.state.options)
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log(state.prevOptions !== props.options)
        state.options = props.options;
        state.prevOptions = props.options;
        // if (state.prevOptions !== props.options) {
        //     state.options = props.options;
        //     state.prevOptions = props.options;
        //     return state;
        // }
        return state;
    }

    setOptions = (options) => {
        this.setState({ options: options });
        console.log(options)
        this.forceUpdate()
    }

    toggleExpansion = (index) => {
        let newOptions = this.state?.options;
        console.log(newOptions)
        newOptions[index].expanded = !newOptions[index]?.expanded;
        this.setState({ options: newOptions });
    }

    render () {
        return (
            <Fragment>
                {
                    this.state?.options?.map((item, index)=>{
                        return (
                            <Fragment key={index}>
                                <TreeItem 
                                    ref={this.itemRef}
                                    item={item} 
                                    labels={this.props?.labels}
                                ></TreeItem>
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        )
    }
}


export default TreeView;