import React, { Component, Fragment, Suspense } from 'react';
import Loader from '../../Loader/Loader';
import TabHeader from './TabHeader';


class CustomTabs extends Component {

    constructor(props){
        super(props)
        this.state = {
            tabs: this.props?.tabs || {},
            tabBarName: this.props?.tabBarName || "",
            activeIndex: this.props?.activeIndex || 0,
            tabHeaders: [""],
            headerClasses: "",
            panelClasses: "",
            tabsClasses: "",
            tabPanels: []
        }
    }

    componentDidMount = () => {
        if (this.props?.tabsClasses) { this.setState({ tabsClasses: this.props?.tabsClasses }) }
        if (this.props?.tabHeaders) { this.setState({ tabHeaders: this.props?.tabHeaders }) }
        if (this.props?.headerClasses) { this.setState({ headerClasses: this.props?.headerClasses }) }
        if (this.props?.panelClasses) { this.setState({ panelClasses: this.props?.panelClasses }) }
        let tabBarName = ""
        if (!this.props?.tabBarName && tabBarName !== "") {
            if (this.props?.tabs) {
                for (let i = 0; i < this.props?.tabs.length; i++) {
                    if (this.props?.tabs[i].header) {
                        for (let i = 0; i < this.state.tabs.length; i++) {
                            tabBarName = tabBarName + this.state.tabs[i].header;                            
                        }
                    }
                }
            }
            tabBarName = tabBarName.split(" ").join("");
            this.setState({ tabBarName: tabBarName });
        } else {
            tabBarName = this.props?.tabBarName;
        }
        this.setState({ tabBarName: tabBarName });
        let index = localStorage.getItem(tabBarName);
        let activeIndex = parseInt(index);
        if (activeIndex) {
            this.setState({ activeIndex: activeIndex });
        } else {
            this.setState({ activeIndex: parseInt(0) });
        }
        if (this.props?.children) {
            let panels = []
            for (let i = 0; i < this.props.children?.length; i++) {
                let element = this.props.children[i];
                if(element.type.name === "TabPanel") {
                    panels.push(element);
                }
            }
            this.setState({ tabPanels: panels })
        }
    }

    setActiveIndex = (index) => {
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
            <div className={`w-full flex flex-col justify-center content-center items-center ${this.props.addClasses?this.props.addClasses:""}`}>
                <TabHeader 
                tabBarName={this.state.tabBarName} 
                tabs={this.state.tabs} 
                getActiveIndex={(index)=>{this.setActiveIndex(index)}} 
                activeIndex={this.state.activeIndex} 
                activeColor={this.props?.activeColor}
                inactiveColor={this.props?.inactiveColor}
                ></TabHeader>
                {
                    this.props.children && this.props?.children?.map((element, index)=>{
                        if (element.type.name === "FixedHeader") {
                            return (
                                <Fragment key={index}>
                                    {element}
                                </Fragment>
                            )
                        }
                    })
                }
                {
                    this.props?.children && this.state?.tabPanels &&
                    <Fragment>
                    <Suspense fallback={Loader}>
                        {this.state.tabPanels[this.state.activeIndex]}
                    </Suspense>
                    </Fragment>
                }
                {
                    this.props.children && this.props?.children?.map((element, index)=>{
                        if (element.type.name === "FixedFooter") {
                            return (
                                <Fragment key={index}>
                                    {element}
                                </Fragment>
                            )
                        }
                    })
                }
            </div>
            </Fragment>
        )
    }
}


export default CustomTabs;