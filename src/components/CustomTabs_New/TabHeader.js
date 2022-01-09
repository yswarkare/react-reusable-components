import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class TabHeader extends Component {

    constructor(props){
        super(props)  
        this.state = {
            tabs: this.props.tabs ? this.props.tabs : [{}],
            activeIndex: this.props.activeIndex ? this.props.activeIndex : 0,
            tabBarName: "",
            activeTabClass: `w-full h-13 px-2 py-4 ${this.props?.activeColor || "bg-primary"} text-white text-lg flex flex-row justify-center content-center items-center`,
            inactiveTabClass: `w-full h-13 px-2 py-4 ${this.props?.inactiveColor || "bg-primary-color-300"} text-white text-lg flex flex-row justify-center content-center items-center`,
            firstTabClass: "rounded-tl-md",
            lastTabClass: "rounded-tr-md",
            middleTabClass: "",
        }
        // middleTabClass: "border-r-1 border-l-1 hover:border-r-1 hover:border-l-1 border-white",
    }

    componentDidMount = () => {
        let tabBarName = ""
        if (!this.props.tabBarName && tabBarName !== "") {
            if (this.props.tabs) {
                for (let i = 0; i < this.props.tabs.length; i++) {
                    if (this.props.tabs[i].header) {
                        for (let i = 0; i < this.state.tabs.length; i++) {
                            tabBarName = tabBarName + this.state.tabs[i].header;                            
                        }
                    }
                }
            }
            tabBarName = tabBarName.split(" ").join("");
            this.setState({ tabBarName: tabBarName });
        } else {
            tabBarName = this.props.tabBarName;
        }
        this.setState({ tabBarName: tabBarName });
        console.log(tabBarName)
        let index = localStorage.getItem(tabBarName);
        console.log(index)
        let activeIndex = parseInt(index);
        if (activeIndex) {
            this.setState({ activeIndex: activeIndex });
        } else {
            this.setState({ activeIndex: parseInt(0) });
        }
    }
  
    setActiveTab = (index) => {
        index = parseInt(index);
        localStorage.setItem(this.state.tabBarName, index);
        this.setState({ activeIndex: index });
        if (this.props.getActiveIndex) {
            this.props.getActiveIndex(index);
        }
    }

    render () {
        return (
            <Fragment>
                <div className={`w-full flex flex-row justify-center content-center items-center ${this.props.addClasses?this.props.addClasses:""}`}>
                {
                    this.state.tabs.map((tab, index)=>{
                    return (
                        <Link to={`${tab.link ? tab.link : "#"}`}
                        onClick={()=>{this.setActiveTab(index)}} 
                        key={index}
                        className={`
                        ${this.state.activeIndex === index ? this.state.activeTabClass : this.state.activeIndex !== index ? this.state.inactiveTabClass : ""} 
                        ${index === 0 ? this.state.firstTabClass : ""} 
                        ${(index+1) === (this.state.tabs.length) ? this.state.lastTabClass : ""}
                        ${((index > 0) && (index < this.state?.tabs?.length)) ? this.state.middleTabClass : "not middleTabClass"}
                        `}>
                            {
                                tab.template ? tab.template : 
                                <span className={`text-13 text-white`} >
                                    {`${tab.header ? tab.header : ""}`}
                                </span>
                            }
                        </Link>
                    )
                  })
                }
              </div>
            </Fragment>
        )
    }
}


export default TabHeader;