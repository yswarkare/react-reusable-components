## Custom Tabs

##### Simple example
```
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CustomTabs from "../../CustomComponents/CustomTabs/CustomTabs";
import TabPanel from '../../CustomComponents/CustomTabs/TabPanel';
import FixedHeader from '../../CustomComponents/CustomTabs/FixedHeader';
import UploadIcon from '../../CustomComponents/UploadIcon/UploadIcon';
import ViewIconButton from '../../CustomComponents/ViewIconButton/ViewIconButton';
import ProjectStatusTab from './ProjectStatusTab/ProjectStatusTab';
import SPOCActionsTab from "./SPOCActionsTab/SPOCActionsTab";
import VolunteerActionsTab from "./VolunteerActionsTab/VolunteerActionsTab";
import { linkEduFileManager } from '../../../AmpactEduRoutes';
// import FixedFooter from '../../CustomComponents/CustomTabs/FixedFooter';


class ProjectMonitoring extends Component {

    constructor(props){
        super(props)
        this.state = {
            tabs: [
                { header: "Project Status" },
                { header: "SPOC Actions" },
                { header: "Volunteer Actions" }
            ],
            activeIndex: 0,
        }
    }

    setActiveIndex = (index) => {
        index = parseInt(index);
        this.setState({ activeIndex: index });
    }

    render () {
        return (
            <Fragment>
            <div id="project-monitoring" className="w-full h-inherit bg-white pb-8 border-0 rounded-t-md flex flex-col justify-center content-center items-center">
                <CustomTabs 
                    tabBarName="project-monitoring" 
                    tabs={this.state.tabs} 
                    getActiveIndex={(index)=>{this.setActiveIndex(index)}}
                    activeColor={`bg-edu-primary-800`}
                    inactiveColor={`bg-edu-primary-300`}
                >
                    <FixedHeader>
                    <div className="w-full h-inherit px-2 py-4 flex flex-row justify-end content-center items-center">
                        <div className="w-fit h-inherit px-2 flex flex-col justify-center content-center items-center">
                            <UploadIcon
                            buttonColor={`bg-edu-primary`}
                            ></UploadIcon>
                        </div>
                        <div className="w-fit h-inherit px-2 flex flex-col justify-center content-center items-center">
                            <ViewIconButton
                            buttonColor={`bg-edu-primary`}
                            link={linkEduFileManager}
                            ></ViewIconButton>
                        </div>
                    </div>
                    </FixedHeader>
                    <TabPanel>
                        <ProjectStatusTab {...this.props}></ProjectStatusTab>
                    </TabPanel>
                    <TabPanel>
                        <SPOCActionsTab {...this.props}></SPOCActionsTab>
                    </TabPanel>
                    <TabPanel>
                        <VolunteerActionsTab {...this.props}></VolunteerActionsTab>
                    </TabPanel>
                    {/* <FixedFooter>
                        <div className="details-container w-full">
                            <InputField label="name"></InputField>
                        </div>
                    </FixedFooter> */}
                </CustomTabs>
            </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMonitoring);
```
___
#### Use with Routes

```
import React, { Component, Fragment, Suspense } from 'react';
import CustomTabs from "../../CustomComponents/CustomTabs/CustomTabs";
import { link_ArchivedSus360Dashboard, link_ArchivedTimeline, link_ArchivedAnalysis } from '../../../routes';
import Loader from '../../Loader/Loader';
import { Redirect, Route, Switch } from 'react-router';
import AuthValidator from '../../AuthValidator/AuthValidator';
import { Helmet } from 'react-helmet';

class ViewAssessment extends Component {

    constructor(props){
        super(props)
        this.state = {
            tabs: [
                {
                    header: "Sus360\u00B0 Compass", 
                    link: `${link_ArchivedSus360Dashboard}/${parseInt(localStorage.getItem("completed_id"))}` 
                },
                {
                    header: "Timeline",
                    link: `${link_ArchivedTimeline}/${parseInt(localStorage.getItem("completed_id"))}` 
                },
                { 
                    header: "Analysis",
                    link: `${link_ArchivedAnalysis}/${parseInt(localStorage.getItem("completed_id"))}`
                }
            ],
            activeIndex: 0,
        }
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    setActiveIndex = (index) => {
        index = parseInt(index);
        this.setState({ activeIndex: index });
    }


    render () {
        return (
            <Fragment>
                <Helmet>
					<title data-react-helmet="true">Archived Assessment</title>
					<meta name="Archived Assessment" content="Assessments" data-react-helmet="true"></meta>
				</Helmet>
                <div id={`view-assessment-profile`} className={`w-full px-4 py-8 bg-white rounded-md flex flex-col justify-center content-center items-center`}>
                    <div className={`w-full flex flex-col justify-center content-center items-center`}>
                        <span className={`text-3xl text-primary`}>
                            {`Archived Assessment`}
                        </span>
                    </div>
                    <div className={`w-full pt-8 flex flex-col justify-center content-center items-center`}>
                    <CustomTabs
                        tabBarName="archived-assessment" 
                        tabs={this.state.tabs} 
                        getActiveIndex={(index)=>{this.setActiveIndex(index)}}
                        activeColor={`bg-primary-color-600`}
                        inactiveColor={`bg-primary-color-400`}
                    >
                    </CustomTabs>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            {
                                this.props?.routes?.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <AuthValidator
                                                    authorizedcomponent={route.component}
                                                    urlpath={route.path}
                                                    routes={route?.routes}
                                                    archived={true}
                                                    {...props}
                                                />
                                            )}
                                        />
                                    ) : null;
                                })
                            }
                            <Redirect from="/" to="/404" />
                        </Switch>
                    </Suspense>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default ViewAssessment;
```