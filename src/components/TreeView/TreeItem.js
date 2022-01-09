import React, { Component, Fragment } from 'react';
import Item from './Item';


class TreeItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            item: this.props.item,
            prevItem: this.props.item,
            expanded: true,
            data: [],
        }
    }

    componentDidMount = () => {
        this.setState({ data: this.state.item[this.props?.labels[0]] })
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log(this.props.item)
    //     if (this.props.item !== prevProps.item) {
    //         this.setState({ item: this.props.item })
    //         this.forceUpdate()
    //     }
    // }

    static getDerivedStateFromProps = (props, state) => {
        // console.log(props)
        // console.log(state.prevItem !== props.item)
        if (state.prevItem !== props.item) {
            console.log("update")
            state.item = props.item;
            state.prevItem = props.item;
            return state;
        }
        state.item = props.item;
        state.prevItem = props.item;
        return state;
        // return null;
    }

    toggleExpansion = () => {
        if (this.state.data?.length) {
            this.setState({ expanded: !this.state.expanded });
        }
    }

    render () {
        return (
            <Fragment>
                <div className={`container appear-from-right my-1 ml-4 w-full bg-gray-100 rounded-1/4 flex flex-col justify-center content-center items-center`}>
                    <div className={`header cursor-pointer w-full border-gray-status border-1 rounded-1/4 flex flex-row justify-start content-center items-start ${ this.state.expanded === true ? "bg-gray-200 hover:bg-gray-300" :"bg-gray-100 hover:bg-gray-300"}`}
                        onClick={()=>{this.toggleExpansion()}}
                    >
                        <div className={`w-8 flex flex-row justify-center content-center items-center`}>
                        {
                            this.state.data?.length ? (
                                <span className={`cursor-pointer px-2 py-1 text-base text-gray-status transform transition translate duration-200 ${ this.state.expanded === true ? "rotate-45" :"-rotate-45"} `}>
                                    {`\u25E2`}
                                </span>
                            ) : ( <span>{` `}</span> )
                        }
                        </div>
                        {
                            this.state?.item?.icon &&
                            <img className={`w-6 h-6 mx-1 my-1`} src={this.state?.item?.icon} alt={`icon`}></img>
                        }
                        <span className={`w-full px-2 py-1 ${this.props?.titleClasses}`}>
                            {`${this.state.item?.name}`}
                        </span>
                        {
                            this.state.item?.priority?.label &&
                            <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                                {`${this.state.item?.priority?.label || ""}`}
                            </span>
                        }
                        {
                            this.state.item?.numberOfActions &&
                            <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                                {`${this.state.item?.numberOfActions}`}
                            </span>
                        }
                        {
                            this.state.data?.length ? (    
                                <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                                    {`${ this.state.data?.length || 0 }`}
                                </span>
                            ) : ( <span>{` `}</span> )
                        }
                    </div>
                    {
                        this.state.expanded === true &&
                        <div className={`content-section appear-from-right w-full flex flex-col justify-center content-center items-center`}>
                            <span className={`${this.props?.contentClasses}`}>
                                {/* {`${this.state.item?.name}`} */}
                                {/* {`${this.state.item?.priority?.label || ""}`} */}
                            </span>
                        </div>
                    }
                    {
                        this.state.expanded === true && (this.state?.data?.length > 0) && this.state.data?.map((item, index) => {
                            if (item?.priority?.label) {
                                console.log(item?.priority?.label)
                            }
                            return (
                                <Fragment key={index}>
                                    <Item item={item} labels={this.props?.labels}></Item>
                                </Fragment>
                            )
                        })
                    }
                    <div className={`footer w-full flex flex-row justify-center content-center items-center`}>

                    </div>
                </div>
            </Fragment>
        )
    }
}


export default TreeItem;