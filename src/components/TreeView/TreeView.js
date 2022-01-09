import React, { Component, Fragment } from 'react';
import { Options } from "./Options";
// import TreeItem from './TreeItem';


class TreeView extends Component {

    constructor(props){
        super(props)
        this.state = {
            options: new Options(this.props?.options) || [],
            prevOptions: new Options(this.props?.options) || [],
        }
        this.itemRef = React.createRef();
    }

    componentDidMount = () => {
        console.log(this.state.options)
    }

    static getDerivedStateFromProps = (props, state) => {
        // console.log(state.prevOptions !== props.options)
        // state.options = props.options;
        // state.prevOptions = props.options;
        if (state.prevOptions !== props.options) {
            state.options = props.options;
            state.prevOptions = props.options;
            return state;
        }
        return state;
    }

    setOptions = (options) => {
        this.setState({ options: options });
        console.log(options)
        this.forceUpdate()
    }

    toggleExpansion = (index, index_02, index_03) => {
        console.log(index, index_02, index_03)
        let newOptions = this.state?.options;
        if (index_02 || index_02 === 0) {
            if (index_03 || index_03 === 0) {
                newOptions[index].children[index_02].children[index_03].expanded = !newOptions[index].children[index_02].children[index_03].expanded;
            } else {
                newOptions[index].children[index_02].expanded = !newOptions[index].children[index_02].expanded;
            }
        } else {
            newOptions[index].expanded = !newOptions[index]?.expanded;
        }
        this.setState({ options: newOptions });
    }

    render () {
        return (
            <Fragment>
                {
                    this.state?.options?.map((impactArea, index)=>{
                        return (
                            <Fragment key={index}>
<div className={`impact-area container appear-from-right my-1 ml-4 w-full bg-gray-100 rounded-1/4 flex flex-col justify-center content-center items-center`}>
    <div className={`header cursor-pointer w-full border-gray-status border-1 rounded-1/4 flex flex-row justify-start content-center items-start ${ impactArea.expanded === true ? "bg-gray-200 hover:bg-gray-300" :"bg-gray-100 hover:bg-gray-300"}`}
        onClick={()=>{this.toggleExpansion(index)}}
    >
        <div className={`w-8 flex flex-row justify-center content-center items-center`}>
        {
            impactArea.children?.length ? (
                <span className={`cursor-pointer px-2 py-1 text-base text-gray-status transform transition translate duration-200 ${ impactArea.expanded === true ? "rotate-45" :"-rotate-45"} `}>
                    {`\u25E2`}
                </span>
            ) : ( <span>{` `}</span> )
        }
        </div>
        {
            impactArea?.icon &&
            <img className={`w-6 h-6 mx-1 my-1`} src={impactArea?.icon} alt={`icon`}></img>
        }
        <span className={`w-full px-2 py-1 ${this.props?.titleClasses}`}>
            {`${impactArea?.name}`}
        </span>
        {
            impactArea?.priority?.label &&
            <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                {`${impactArea?.priority?.label || ""}`}
            </span>
        }
        {
            impactArea.children?.length ? (    
                <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                    {/* {`${ impactArea.children?.length || 0 }`} */}
                </span>
            ) : ( <span>{` `}</span> )
        }
        {
            impactArea?.numberOfActions &&
            <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                {`${impactArea?.numberOfActions}`}
            </span>
        }
    </div>
    {
        impactArea.expanded === true &&
        <div className={`content-section appear-from-right w-full flex flex-col justify-center content-center items-center`}>
            <span className={`${this.props?.contentClasses}`}>
                {/* {`${impactArea?.name}`} */}
                {/* {`${impactArea?.priority?.label || ""}`} */}
            </span>
        </div>
    }
    {
        impactArea.expanded === true && (impactArea?.children?.length > 0) && impactArea.children?.map((hat, index_02) => {
            if (hat?.priority?.label) {
                console.log(hat?.priority?.label)
            }
            return (
                <Fragment key={index_02}>
                    <div className={`hats container appear-from-right my-1 ml-4 w-full bg-gray-100 rounded-1/4 flex flex-col justify-center content-center items-center`}>
                        <div className={`header cursor-pointer w-full border-gray-status border-1 rounded-1/4 flex flex-row justify-start content-center items-start ${ hat.expanded === true ? "bg-gray-200 hover:bg-gray-300" :"bg-gray-100 hover:bg-gray-300"}`}
                            style={{
                                backgroundColor: `${hat?.bgColor}`,
                                borderColor: `${hat?.bgColor}`,
                            }}
                            onClick={()=>{this.toggleExpansion(index, index_02)}}
                        >
                            <div className={`w-8 flex flex-row justify-center content-center items-center`}>
                            {
                                hat.children?.length ? (
                                    <span className={`cursor-pointer px-2 py-1 text-base text-white transform transition translate duration-200 ${ hat.expanded === true ? "rotate-45" :"-rotate-45"} `}>
                                        {`\u25E2`}
                                    </span>
                                ) : ( <span>{` `}</span> )
                            }
                            </div>
                            {
                                hat?.icon &&
                                <img className={`w-6 h-6 mx-1 my-1 bg-white rounded-xl`} src={hat?.icon} alt={`icon`}></img>
                            }
                            <span className={`w-full px-2 py-1 text-white ${this.props?.titleClasses}`}>
                                {`${hat?.name}`}
                            </span>
                            {
                                hat.children?.length ? (    
                                    <span className={`w-fit px-2 py-1 text-white ${this.props?.titleClasses}`}>
                                        {`${ hat.children?.length || 0 }`}
                                    </span>
                                ) : ( <span>{` `}</span> )
                            }
                        </div>
                        {
                            hat.expanded === true &&
                            <div className={`content-section appear-from-right w-full flex flex-col justify-center content-center items-center`}>
                                <span className={`${this.props?.contentClasses}`}>
                                    {/* {`${hat?.name}`} */}
                                </span>
                            </div>
                        }
                        {
                            hat.expanded === true && (hat?.children?.length > 0) && hat.children?.map((item_03, index_03) => {
                                return (
                                    <Fragment key={index_03}>
<div className={`actions container appear-from-right my-1 ml-4 w-full bg-gray-100 rounded-1/4 flex flex-col justify-center content-center items-center`}>
        <div className={`header cursor-pointer w-full border-gray-status border-2 rounded-1/4 flex flex-row justify-start content-center items-start ${ item_03.expanded === true ? "bg-gray-200 hover:bg-gray-300" :"bg-gray-100 hover:bg-gray-300"}`}
            style={{
                // backgroundColor: `${hat?.bgColor}`,
                borderColor: `${hat?.bgColor}`,
            }}
            onClick={()=>{this.toggleExpansion(index, index_02, index_03)}}
        >
            <div className={`w-8 flex flex-row justify-center content-center items-center`}>
            {
                item_03.childrem?.length ? (
                    <span className={`cursor-pointer px-2 py-1 text-base text-gray-status transform transition translate duration-200 ${ item_03.expanded === true ? "rotate-45" :"-rotate-45"} `}>
                        {`\u25E2`}
                    </span>
                ) : ( <span>{` `}</span> )
            }
            </div>
            {
                item_03?.icon &&
                <img className={`w-6 h-6 mx-1 my-1`} src={item_03?.icon} alt={`icon`}></img>
            }
            <span className={`w-full px-2 py-1 ${this.props?.titleClasses}`}>
                {`${item_03?.name}`}
            </span>
            {
                item_03?.priority?.label &&
                <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                    {`${item_03?.priority?.label || ""}`}
                </span>
            }
            {
                item_03?.numberOfActions &&
                <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                    {`${item_03?.numberOfActions}`}
                </span>
            }
            {
                item_03.childrem?.length ? (    
                    <span className={`w-fit px-2 py-1 ${this.props?.titleClasses}`}>
                        {`${ item_03.childrem?.length || 0 }`}
                    </span>
                ) : ( <span>{` `}</span> )
            }
        </div>
        {
            item_03.expanded === true &&
            <div className={`content-section appear-from-right w-full flex flex-col justify-center content-center items-center`}>
                <span className={`${this.props?.contentClasses}`}>
                    {/* {`${item_03?.name}`} */}
                    {/* {`${item_03?.priority?.label || ""}`} */}
                </span>
            </div>
        }
        {
            item_03.expanded === true && (item_03?.childrem?.length > 0) && item_03.childrem?.map((item, index) => {
                if (item?.priority?.label) {
                    console.log(item?.priority?.label)
                }
                return (
                    <Fragment key={index}>
                        
                    </Fragment>
                )
            })
        }
        <div className={`footer w-full flex flex-row justify-center content-center items-center`}>

        </div>
    </div>
                                    </Fragment>
                                )
                            })
                        }
                        <div className={`footer w-full flex flex-row justify-center content-center items-center`}>

                        </div>
                    </div>
                </Fragment>
            )
        })
    }
    <div className={`footer w-full flex flex-row justify-center content-center items-center`}>

    </div>
</div>
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        )
    }
}


export default TreeView;