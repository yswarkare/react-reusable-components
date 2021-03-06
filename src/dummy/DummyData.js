
export const currentDate = new Date();
export const currentDateString = JSON.stringify(currentDate);

export const stages = [{
    id: "01",
    name: "Stage 1",
    status: "Completed",
    signOffStatus: "Yes",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
},{
    id: "02",
    name: "Stage 2",
    status: "On-Time",
    signOffStatus: "No",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
},{
    id: "03",
    name: "Stage 3",
    status: "Overdue",
    signOffStatus: "Yes",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
},{
    id: "04",
    name: "Stage 4",
    status: "Long Overdue",
    signOffStatus: "No",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
},{
    id: "05",
    name: "Stage 5",
    status: "On-Hold",
    signOffStatus: "Yes",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
},{
    id: "06",
    name: "Stage 6",
    status: "Not Started",
    signOffStatus: "No",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
},{
    id: "07",
    name: "Stage 7",
    status: "Completed",
    signOffStatus: "Yes",
    actualStartDate: new Date("2021-05-14"),
    actualEndDate: new Date("2021-05-15"),
    plannedStartDate: new Date("2021-05-16"),
    plannedEndDate: new Date("2021-05-17"),
}]

export const applicableModules_01 = ["Polls/Surveys", "Team Collaboration", "Engagement Progress Tracking", "TCFD Alignment", "User Creation", "GHG Assessment", "ICP Calculations", "Risk and Opportunities Assessment", "CDP Disclosure", "Workshop Monitoring", "Classroom Monitoring", "Project Monitoring", "Reports and Matrices", "SBT Definitions", "Partner Functions"]

export const applicableModules_02 = ['Polls/Surveys', 'Team Collaboration', 'Engagement Progress Tracking', 'TCFD Recommendations', 'User Creations', 'GHG Assessments', 'Internal Carbon Pricing (ICP)', 'Risk and Opportunities Assessments', 'Carbon Disclosure Project (CDP)', "Classroom Monitoring",'Workshop Monitoring', 'Project Monitoring', 'Reporting & Metrics', 'Science Based Targets (SBTs)', 'Partner Functions',]

export const applicableModules = [
    { 
        id: 1, 
        fullLabel: 'Polls/Surveys',
        label: "Polls/Surveys", 
        value: false ,
    },{
        id: 2,
        fullLabel: 'Team Collaboration',
        label: "Team Collaboration",
        value: false,
    },{
        id: 3,
        fullLabel: 'Engagement Progress Tracking',
        label: "Engagement Progress Tracking",
        value: false,
    },{
        id: 4,
        fullLabel: 'TCFD Recommendations',
        label: "TCFD Alignment",
        value: false,
    },{
        id: 5,
        fullLabel: 'User Creations',
        label: "User Creation",
        value: false,
    },{
        id: 6,
        fullLabel: 'GHG Assessments',
        label: "GHG Assessment",
        value: false,
    },{
        id: 7,
        fullLabel: 'Internal Carbon Pricing (ICP)',
        label: "ICP Calculations",
        value: false,
    },{
        id: 8,
        fullLabel: 'Risk and Opportunities Assessments',
        label: "Risk and Opportunities Assessment",
        value: false,
    },{
        id: 9,
        fullLabel: 'Carbon Disclosure Project (CDP)',
        label: "CDP Disclosure",
        value: false,
    },{
        id: 10,
        fullLabel: 'Workshop Monitoring',
        label: "Workshop Monitoring",
        value: false,
    },{
        id: 11,
        fullLabel: 'Classroom Monitoring',
        label: "Classroom Monitoring",
        value: false,
    }
    ,{
        id: 12,
        fullLabel: 'Project Monitoring',
        label: "Project Monitoring",
        value: false,
    },{
        id: 13,
        fullLabel: 'Reporting & Metrics',
        label: "Reports and Matrices",
        value: false,
    },{
        id: 14,
        fullLabel: 'Science Based Targets (SBTs)',
        label: "SBT Definitions",
        value: false,
    },{
        id: 15,
        fullLabel: 'Partner Functions',
        label: "Partner Functions",
        value: false,
    }
]

export const serviceOfferings = [{
    id: 1,
    name: "SAAS_CCMM_Level_1",
    label: "SAAS CCMM Level 1",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "02",
        name: "Stage 2",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "03",
        name: "Stage 3",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "04",
        name: "Stage 4",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "05",
        name: "Stage 5",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: true },
        { id: 2, label: "Team Collaboration", value: true },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: true },
        { id: 9, label: "CDP Disclosure", value: false },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Classroom Monitoring", value: false },
        { id: 12, label: "Project Monitoring", value: true },
        { id: 13, label: "Reports and Matrices", value: true },
        { id: 14, label: "SBT Definitions", value: false},
        { id: 15, label: "Partner Functions", value: true}
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 2,
    name: "SAAS_CCMM_Level_2",
    label: "SAAS CCMM Level 2",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "02",
        name: "Stage 2",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "03",
        name: "Stage 3",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "04",
        name: "Stage 4",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "05",
        name: "Stage 5",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "06",
        name: "Stage 6",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: true },
        { id: 2, label: "Team Collaboration", value: true },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: true },
        { id: 7, label: "ICP Calculations", value: true },
        { id: 8, label: "Risk and Opportunities Assessment", value: true },
        { id: 9, label: "CDP Disclosure", value: false},
        { id: 10, label: "Workshop Monitoring", value: false},
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: true },
        { id: 14, label: "Partner Functions", value: true}
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 3,
    name: "SAAS_CCMM_Level_3",
    label: "SAAS CCMM Level 3",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "02",
        name: "Stage 2",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "03",
        name: "Stage 3",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "04",
        name: "Stage 4",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "05",
        name: "Stage 5",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "06",
        name: "Stage 6",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "07",
        name: "Stage 7",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: true },
        { id: 2, label: "Team Collaboration", value: true },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: true },
        { id: 7, label: "ICP Calculations", value: true },
        { id: 8, label: "Risk and Opportunities Assessment", value: true },
        { id: 9, label: "CDP Disclosure", value: false},
        { id: 10, label: "Workshop Monitoring", value: false},
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: true },
        { id: 14, label: "Partner Functions", value: true}
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 4,
    name: "SAAS_CCMM_Level_4",
    label: "SAAS CCMM Level 4",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "02",
        name: "Stage 2",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "03",
        name: "Stage 3",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "04",
        name: "Stage 4",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "05",
        name: "Stage 5",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: false },
        { id: 2, label: "Team Collaboration", value: false },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: true },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: true },
        { id: 9, label: "CDP Disclosure", value: false },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: false },
        { id: 14, label: "Partner Functions", value: true}
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 5,
    name: "SAAS_CCMM_Level_5",
    label: "SAAS CCMM Level 5",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "02",
        name: "Stage 2",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "03",
        name: "Stage 3",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "04",
        name: "Stage 4",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    },{
        id: "",
        stageId: "05",
        name: "Stage 5",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: false },
        { id: 2, label: "Team Collaboration", value: false },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: true },
        { id: 9, label: "CDP Disclosure", value: true },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: false },
        { id: 14, label: "Partner Functions", value: true}
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 6,
    name: "AMPACTcorp_Licenses",
    label: "AMPACTcorp Licenses",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: true },
        { id: 2, label: "Team Collaboration", value: true },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: true },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: true },
        { id: 7, label: "ICP Calculations", value: true },
        { id: 8, label: "Risk and Opportunities Assessment", value: true },
        { id: 9, label: "CDP Disclosure", value: true },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: true },
        { id: 14, label: "Partner Functions", value: true }
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 7,
    name: "Impact_Assessment",
    label: "Impact Assessment",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: false },
        { id: 2, label: "Team Collaboration", value: false },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: false },
        { id: 9, label: "CDP Disclosure", value: false },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: false },
        { id: 14, label: "Partner Functions", value: true }
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 8,
    name: "GHG_Assessment",
    label: "GHG Assessment",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: false },
        { id: 2, label: "Team Collaboration", value: false },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: false },
        { id: 9, label: "CDP Disclosure", value: false },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Project Monitoring", value: false },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: false },
        { id: 14, label: "Partner Functions", value: false}
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
},{
    id: 9,
    name: "Residential_Society_Services",
    label: "Residential Society Services",
    stages: [{
        id: "",
        stageId: "01",
        name: "Stage 1",
        status: "",
        signOffStatus: "",
        actualStartDate: "",
        actualEndDate: "",
        plannedStartDate: "",
        plannedEndDate: "",
    }],
    applicableModules: [
        { id: 1, label: "Polls/Surveys", value: true },
        { id: 2, label: "Team Collaboration", value: true },
        { id: 3, label: "Engagement Progress Tracking", value: true },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: true },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: false },
        { id: 9, label: "CDP Disclosure", value: false },
        { id: 10, label: "Workshop Monitoring", value: true },
        { id: 11, label: "Project Monitoring", value: true },
        { id: 12, label: "Reports and Matrices", value: true },
        { id: 13, label: "SBT Definitions", value: false },
        { id: 14, label: "Partner Functions", value: true }
    ],
    plannedStartDate: "",
    plannedEndDate: "",
    actualStartDate: "",
    actualEndDate: "",
}];

export const address = {
    streetOrArea: "areaOrStreet 01",
    city: "city 01",
    state: "state 01",
    country: "country 01",
    pinCode: "pinCode 01",
    phoneNumber: "phoneNumber 01",
}

export const userRoles = [
    {label: "Admin", value: "Admin"},
    {label: "Manager", value: "Manager"},
    {label:??"Parent",??value:??"Parent"}
]

export const principal = {
    id: 2,
    name: "Manjunath",
    emailID: "manju@at-questions.in",
    password: "manju@123",
    role: "PRINCIPAL"
}

export const staff = {
    id: 2,
    name: "Manjunath",
    emailID: "manju@at-questions.in",
    password: "manju@123",
    role: "STAFF"
}

export const users = [{
    id: 1,
    name: "Patrick Jane",
    emailID: "patrickjane@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 2,
    name: "Gale Burtrum",
    emailID: "galebertram@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 3,
    name: "Bob Kirkland",
    emailID: "bobkirkland@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 4,
    name: "Thomas McAllister",
    emailID: "tommcallister@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 5,
    name: "Reede Smith",
    emailID: "reedesmith@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 6,
    name: "Ray Haffner",
    emailID: "rayhaffner@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 7,
    name: "Brad Partridge",
    emailID: "bradpartridge@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 8,
    name: "Patrick Jane",
    emailID: "patrickjane@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 9,
    name: "Gale Burtrum",
    emailID: "galebertram@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 10,
    name: "Thomas McAllister",
    emailID: "tommcallister@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 11,
    name: "Reede Smith",
    emailID: "reedesmith@gmail.com",
    phoneNumber: "9876543210"
},{
    id: 12,
    name: "Ray Haffner",
    emailID: "rayhaffner@gmail.com",
    phoneNumber: "9876543210"
}]

export const managersList = users;

export const idea = {
    id: "",
    votes: "",
    voted: [],
    username: "",
    published: false,
    gender: "",
    ideaTitle: "",
    ideaDescription: ""
}

export const chosenIdea = {
    id: "3541654",
    title: "Idea Title 001",
    description: "",
    status: "",
    prototypePhaseObservations: "PrototypePhaseObservations",
    testPhaseObservations: "TestPhaseObservations"
}

export const chosenIdeasArray = [{
    id: "432065",
    title: "Idea Title 001",
    description: "",
    status: "",
    prototypePhaseObservations: "",
    testPhaseObservations: ""
},{
    id: "5541659",
    title: "Idea Title 002",
    description: "",
    status: "",
    prototypePhaseObservations: "002 Prototype Phase Observations Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.",
    testPhaseObservations: "002 Test Phase Observations Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "9541657",
    title: "Idea Title 003",
    description: "",
    status: "",
    prototypePhaseObservations: "003 Prototype Phase Observations Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.",
    testPhaseObservations: "003 Test Phase Observations Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "9541647",
    title: "Idea Title 004",
    description: "",
    status: "",
    prototypePhaseObservations: "004 Prototype Phase Observations Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum.",
    testPhaseObservations: "004 Test Phase Observations Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
}]

export const ideasArray = [{
    id: "1",
    votes: "50",
    voted: [],
    published: true,
    status: "ideate",
    username: "Raghav Raj",
    gender: "male",
    ideaTitle: "Idea title 01",
    ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "002",
    votes: "50",
    voted: [],
    published: false,
    status: "",
    username: "Anjali Varma",
    gender: "female",
    ideaTitle: "Idea title 02",
    ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "003",
    votes: "50",
    voted: [],
    status: "prototype",
    published: true,
    username: "Karthik",
    gender: "male",
    ideaTitle: "Idea title 03",
    ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "004",
    votes: "52",
    voted: [],
    published: false,
    username: "Prakash Raj",
    gender: "male",
    ideaTitle: "Idea title 06",
    ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "005",
    votes: "50",
    voted: [],
    status: "prototype",
    published: true,
    username: "Sudarshan",
    gender: "male",
    ideaTitle: "Idea title 04",
    ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "006",
    votes: "51",
    voted: [],
    published: true,
    status: "ideate",
    username: "Sahithi Raj",
    gender: "female",
    ideaTitle: "Idea title 05",
    ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "007",
    votes: "52",
    voted: [],
    published: true,
    status: "test",
    username: "Prakash Raj",
    gender: "male",
    ideaTitle: "Idea title 06",
    ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "008",
    votes: "54",
    voted: [],
    published: true,
    status: "project-identification",
    username: "Keerthi Suresh",
    gender: "female",
    ideaTitle: "Idea title 07",
    ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "009",
    votes: "50",
    voted: [],
    status: "prototype",
    published: true,
    username: "Sudarshan",
    gender: "male",
    ideaTitle: "Idea title 04",
    ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "010",
    votes: "51",
    voted: [],
    published: true,
    status: "ideate",
    username: "Sahithi Raj",
    gender: "female",
    ideaTitle: "Idea title 05",
    ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "011",
    votes: "52",
    voted: [],
    published: true,
    status: "test",
    username: "Prakash Raj",
    gender: "male",
    ideaTitle: "Idea title 06",
    ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "012",
    votes: "54",
    voted: [],
    published: true,
    status: "project-identification",
    username: "Keerthi Suresh",
    gender: "female",
    ideaTitle: "Idea title 07",
    ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
}]

export const publishedIdeas = [{
    id: "004",
    votes: "50",
    voted: ["02154"],
    status: "Ideate",
    published: true,
    username: "Sudarshan",
    staff_id: "",
    gender: "male",
    title: "Idea title 04",
    description: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "005",
    votes: "51",
    voted: [],
    published: true,
    status: "Prototype",
    username: "Sahithi Raj",
    gender: "female",
    title: "Idea title 05",
    description: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},
{
    id: "006",
    votes: "52",
    voted: ["02154"],
    published: true,
    username: "Prakash Raj",
    gender: "male",
    title: "Idea title 06",
    description: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "007",
    votes: "54",
    voted: [],
    published: true,
    username: "Keerthi Suresh",
    gender: "female",
    title: "Idea title 07",
    description: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
}]

export const unpublishedIdeas = [{
    id: "02137",
    votes: "50",
    voted: [],
    published: false,
    username: "Archie Bunker",
    staff_id: "",
    gender: "male",
    title: "Idea title 01",
    description: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},{
    id: "02157",
    votes: "50",
    voted: [],
    published: false,
    username: "James Lindsey",
    staff_id: "02154",
    gender: "male",
    title: "Idea title 02",
    description: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},
{
    id: "02159",
    votes: "50",
    voted: [],
    published: false,
    username: "Roz Doyle",
    gender: "female",
    title: "Idea title 03",
    description: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
},
{
    id: "02134",
    votes: "52",
    voted: [],
    published: false,
    username: "Frasier Crane",
    gender: "male",
    title: "Idea title 06",
    description: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
}]

export const team = {
    teamId: "465547",
    teamName: "Green Warriors",
    teamPoster: "../../../../../assets/images/Green-warriors.png",
    teamIdeas: [{
            id: "02137",
            votes: "50",
            voted: [],
            published: false,
            username: "Archie Bunker",
            staff_id: "",
            gender: "male",
            ideaTitle: "Idea title 01",
            ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
        },{
            id: "02157",
            votes: "50",
            voted: [],
            published: false,
            username: "James Lindsey",
            staff_id: "02154",
            gender: "male",
            ideaTitle: "Idea title 02",
            ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
        },{
            id: "02159",
            votes: "50",
            voted: [],
            published: false,
            username: "Roz Doyle",
            gender: "female",
            ideaTitle: "Idea title 03",
            ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
        },{
            id: "02134",
            votes: "52",
            voted: [],
            published: false,
            username: "Frasier Crane",
            gender: "male",
            ideaTitle: "Idea title 06",
            ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
        },{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
}

export const teamsArray = [{
    teamId: "465547",
    teamName: "Green Warriors",
    teamPoster: "../../../../../assets/images/Green-warriors.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "652144",
    teamName: "Nature Lovers",
    teamPoster: "../../../../../assets/images/Nature-Lovers.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "665456",
    teamName: "Waste Managers",
    teamPoster: "../../../../../assets/images/Waste-managers.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "679878",
    teamName: "Renewable Rockstars",
    teamPoster: "../../../../../assets/images/Renewable-rockstars.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "946866",
    teamName: "Conscious Shoppers",
    teamPoster: "../../../../../assets/images/Conscious-shoppers.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "248973",
    teamName: "Responsible Travellers",
    teamPoster: "../../../../../assets/images/Responsiblr-travellers.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "456469",
    teamName: "Local Champions",
    teamPoster: "../../../../../assets/images/Local-champions.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
},{
    teamId: "347528",
    teamName: "Healthy Foodies",
    teamPoster: "../../../../../assets/images/Healthy-Foodies.png",
    teamIdeas: [{
        id: "001",
        votes: "50",
        voted: [],
        published: false,
        username: "Raghav Raj",
        gender: "male",
        ideaTitle: "Idea title 01",
        ideaDescription: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "002",
        votes: "50",
        voted: [],
        published: false,
        username: "Anjali Varma",
        gender: "female",
        ideaTitle: "Idea title 02",
        ideaDescription: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "003",
        votes: "50",
        voted: [],
        published: false,
        username: "Karthik",
        gender: "male",
        ideaTitle: "Idea title 03",
        ideaDescription: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "004",
        votes: "52",
        voted: [],
        published: false,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "005",
        votes: "50",
        voted: [],
        status: "Ideate",
        published: true,
        username: "Sudarshan",
        gender: "male",
        ideaTitle: "Idea title 04",
        ideaDescription: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "006",
        votes: "51",
        voted: [],
        published: true,
        status: "Prototype",
        username: "Sahithi Raj",
        gender: "female",
        ideaTitle: "Idea title 05",
        ideaDescription: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },
    {
        id: "007",
        votes: "52",
        voted: [],
        published: true,
        username: "Prakash Raj",
        gender: "male",
        ideaTitle: "Idea title 06",
        ideaDescription: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    },{
        id: "008",
        votes: "54",
        voted: [],
        published: true,
        username: "Keerthi Suresh",
        gender: "female",
        ideaTitle: "Idea title 07",
        ideaDescription: "007 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum."
    }]
}]

// export const badges = {
//     greenWarriors: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_GW_I,
//             goGetter: goGetter_GW_I,
//             superExplorer: superExplorer_GW_I,
//             tribeLeader: tribeLeader_GW_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_GW_T,
//             goGetter: goGetter_GW_T,
//             superExplorer: superExplorer_GW_T,
//             tribeLeader: tribeLeader_GW_T
//         }
//     },
//     natureLovers: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_NL_I,
//             goGetter: goGetter_NL_I,
//             superExplorer: superExplorer_NL_I,
//             tribeLeader: tribeLeader_NL_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_NL_T,
//             goGetter: goGetter_NL_T,
//             superExplorer: superExplorer_NL_T,
//             tribeLeader: tribeLeader_NL_T
//         }
//     },
//     wasteManagers: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_WM_I,
//             goGetter: goGetter_WM_I,
//             superExplorer: superExplorer_WM_I,
//             tribeLeader: tribeLeader_WM_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_WM_T,
//             goGetter: goGetter_WM_T,
//             superExplorer: superExplorer_WM_T,
//             tribeLeader: tribeLeader_WM_T
//         }
//     },
//     renewablesRockstars: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_RR_I,
//             goGetter: goGetter_RR_I,
//             superExplorer: superExplorer_RR_I,
//             tribeLeader: tribeLeader_RR_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_RR_T,
//             goGetter: goGetter_RR_T,
//             superExplorer: superExplorer_RR_T,
//             tribeLeader: tribeLeader_RR_T
//         }
//     },
//     consciousShoppers: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_CS_I,
//             goGetter: goGetter_CS_I,
//             superExplorer: superExplorer_CS_I,
//             tribeLeader: tribeLeader_CS_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_CS_T,
//             goGetter: goGetter_CS_T,
//             superExplorer: superExplorer_CS_T,
//             tribeLeader: tribeLeader_CS_T
//         }
//     },
//     responsibleTravellers: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_RT_I,
//             goGetter: goGetter_RT_I,
//             superExplorer: superExplorer_RT_I,
//             tribeLeader: tribeLeader_RT_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_RT_T,
//             goGetter: goGetter_RT_T,
//             superExplorer: superExplorer_RT_T,
//             tribeLeader: tribeLeader_RT_T
//         }
//     },
//     localChampions: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_LC_I,
//             goGetter: goGetter_LC_I,
//             superExplorer: superExplorer_LC_I,
//             tribeLeader: tribeLeader_LC_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_LC_T,
//             goGetter: goGetter_LC_T,
//             superExplorer: superExplorer_LC_T,
//             tribeLeader: tribeLeader_LC_T
//         }
//     },
//     healthyFoodies: {
//         individual: {
//             carbonNeutralizer: carbonNeutralizer_HF_I,
//             goGetter: goGetter_HF_I,
//             superExplorer: superExplorer_HF_I,
//             tribeLeader: tribeLeader_HF_I
//         },
//         team: {
//             carbonNeutralizer: carbonNeutralizer_HF_T,
//             goGetter: goGetter_HF_T,
//             superExplorer: superExplorer_HF_T,
//             tribeLeader: tribeLeader_HF_T
//         }
//     }
// }

// export const teamsList = [{
//         id: 1,
//         name: "Green Warriors",
//         members: [],
//         numberOfMembers: 11,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_GW_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_GW_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_GW_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_GW_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 2,
//         name: "Nature Lovers",
//         members: [],
//         numberOfMembers: 12,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_NL_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_NL_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_NL_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_NL_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 3,
//         name: "Waste Managers",
//         members: [],
//         numberOfMembers: 13,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_WM_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_WM_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_WM_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_WM_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 4,
//         name: "Renewables Rockstars",
//         members: [],
//         numberOfMembers: 14,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_RR_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_RR_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_RR_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_RR_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 5,
//         name: "Conscious Shoppers",
//         members: [],
//         numberOfMembers: 15,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_CS_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_CS_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_CS_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_CS_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 6,
//         name: "Responsible Travellers",
//         members: [],
//         numberOfMembers: 16,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_RT_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_RT_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_RT_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_RT_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 7,
//         name: "Local Champions",
//         members: [],
//         numberOfMembers: 17,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_LC_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_LC_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_LC_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_LC_T,
//             numberOfBadges: 14
//         }]
//     },{
//         id: 8,
//         name: "Healthy Foodies",
//         members: [],
//         numberOfMembers: 18,
//         numberOfBadges: 50,
//         numberOfIdeas: 10,
//         ideas: ideasArray,
//         badges: [{
//             badgeName: "Carbon Neutralizer",
//             badgePath: carbonNeutralizer_HF_T,
//             numberOfBadges: 11
//         },{
//             badgeName: "Super Explorer",
//             badgePath: superExplorer_HF_T,
//             numberOfBadges: 12
//         },{
//             badgeName: "Go Getter",
//             badgePath: goGetter_HF_T,
//             numberOfBadges: 13
//         },{
//             badgeName: "Tribe Leader",
//             badgePath: tribeLeader_HF_T,
//             numberOfBadges: 14
//         }]
// }]

export const reviewers = [{
    id: "1",
    name: "Patrick Jane",
    email: "patrickjane@gmail.com",
    reviewerRole: "Provider",
    frequency: "Bi-Weekly",
},{
    id: "2",
    name: "Gale Burtrum",
    email: "galebertram@gmail.com",
    reviewerRole: "Organizer",
    frequency: "Daily",
},{
    id: "3",
    name: "Bob Kirkland",
    email: "bobkirkland@gmail.com",
    reviewerRole: "Supplier",
    frequency: "Monthly",
},{
    id: "4",
    name: "Thomas McAllister",
    email: "tommcallister@gmail.com",
    reviewerRole: "Developer",
    frequency: "Bi-Monthly",
},{
    id: "5",
    name: "Reede Smith",
    email: "reedesmith@gmail.com",
    reviewerRole: "Provider",
    frequency: "Weekly",
},{
    id: "6",
    name: "Ray Haffner",
    email: "rayhaffner@gmail.com",
    reviewerRole: "Supplier",
    frequency: "Monthly",
},{
    id: "7",
    name: "Brad Partridge",
    email: "bradpartridge@gmail.com",
    reviewerRole: "Supplier",
    frequency: "Monthly",
},{
    id: "8",
    name: "Patrick Jane",
    email: "patrickjane@gmail.com",
    reviewerRole: "Provider",
    frequency: "Bi-Weekly",
},{
    id: "9",
    name: "Gale Burtrum",
    email: "galebertram@gmail.com",
    reviewerRole: "Organizer",
    frequency: "Daily",
},{
    id: "10",
    name: "Thomas McAllister",
    email: "tommcallister@gmail.com",
    reviewerRole: "Developer",
    frequency: "Bi-Monthly",
},{
    id: "11",
    name: "Reede Smith",
    email: "reedesmith@gmail.com",
    reviewerRole: "Provider",
    frequency: "Weekly",
},{
    id: "12",
    name: "Ray Haffner",
    email: "rayhaffner@gmail.com",
    reviewerRole: "Supplier",
    frequency: "Monthly",
}]

export const statusArray = [{
    name: "Completed",
    color: "#0E79B2"
},{
    name: "On-Time",
    color: "#1E9414"
},{
    name: "Overdue",
    color: "#F5DA55"
},{
    name: "Long Overdue",
    color: "#F55555"
},{
    name: "On-Hold",
    color: "#000000"
},{
    name: "Not Started",
    color: "#A1A1A1"
}]

export const spocList = [{
    id: "1",
    name: "spoc 1",
    emailID: "spoc1@gmail.com",
    phoneNumber: "9876543210",
    feedback: ""
},{
    id: "2",
    name: "spoc 2",
    emailID: "spoc2@gmail.com",
    phoneNumber: "9876543210",
    feedback: ""
}]

export const volunteersList = users

export const assignmentsList = [{
    id: "01",
    name: "assignment  1",
    assignmentType: "workshop",
    status: {
        name: "Completed",
        color: "#0E79B2"
    },
    workshopSPOCname: "workshopSPOCname 1",
    workshopSPOCemailID: "workshopSPOCemailID 1",
    workshopSPOCphoneNumber: "0987654321",
    aqSPOC: "aqSPOC 1",
    owner: "owner 1",
    class:"Class 5",
    section:"A",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "02",
    name: "assignment 2",
    assignmentType: "project",
    status: {
        name: "On-Time",
        color: "#1E9414"
    },
    projectSPOCname: "projectSPOCname 2",
    projectSPOCemailID: "projectSPOCemailID 2",
    projectSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 2",
    owner: "owner 2",
    class:"Class 5",
    section:"B",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)   ",
},{
    id: "03",
    name: "assignment  3",
    assignmentType: "workshop",
    status: {
        name: "Overdue",
        color: "#F5DA55"
    },
    workshopSPOCname: "workshopSPOCname 3",
    workshopSPOCemailID: "workshopSPOCemailID 3",
    workshopSPOCphoneNumber: "0987654321",
    aqSPOC: "aqSPOC 3",
    owner: "owner 3",
    class:"Class 5",
    section:"C",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)   ",
},{
    id: "04",
    name: "assignment  4",
    assignmentType: "project",
    status: {
        name: "Long Overdue",
        color: "#F55555"
    },
    projectSPOCname: "projectSPOCname 4",
    projectSPOCemailID: "projectSPOCemailID 4",
    projectSPOCphoneNumber: "0987654321",
    aqSPOC: "aqSPOC 4",
    owner: "owner 4",
    class:"Class 6",
    section:"A",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)   ",
},{
    id: "05",
    name: "assignment  5",
    assignmentType: "workshop",
    status: {
        name: "On-Hold",
        color: "#000000"
    },
    workshopSPOCname: "workshopSPOCname 5",
    workshopSPOCemailID: "workshopSPOCemailID 5",
    workshopSPOCphoneNumber: "0987654321",
    aqSPOC: "aqSPOC 5",
    owner: "owner 5",
    class:"Class 6",
    section:"B",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)   ",
},{
    id: "06",
    name: "assignment  6",
    assignmentType: "project",
    status: {
        name: "Not Started",
        color: "#A1A1A1"
    },
    projectSPOCname: "projectSPOCname 6",
    projectSPOCemailID: "projectSPOCemailID 6",
    projectSPOCphoneNumber: "0987654321",
    aqSPOC: "aqSPOC 6",
    owner: "owner 6",
    class:"Class 7",
    section:"A",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)   ",
}]


export const classroomList = [{
    id: "01",
    name: "assignment  1",
    assignmentType: "classroom",
    status: {
        name: "Completed",
        color: "#0E79B2"
    },
    classroomSPOCname: "classroomSPOCname 1",
    classroomSPOCemailID: "classroomSPOCemailID 1",
    classroomSPOCphoneNumber: "0987654321",
    spocList: [spocList[0]],
    aqSPOC: "aqSPOC 1",
    owner: "owner 1",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tueb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "02",
    name: "assignment 2",
    assignmentType: "classroom",
    status: {
        name: "On-Time",
        color: "#1E9414"
    },
    classroomSPOCname: "classroomSPOCname 2",
    classroomSPOCemailID: "classroomSPOCemailID 2",
    classroomSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 2",
    owner: "owner 2",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "03",
    name: "assignment  3",
    assignmentType: "classroom",
    status: {
        name: "Overdue",
        color: "#F5DA55"
    },
    classroomSPOCname: "classroomSPOCname 3",
    classroomSPOCemailID: "classroomSPOCemailID 3",
    classroomSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 3",
    owner: "owner 3",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "04",
    name: "assignment  4",
    assignmentType: "classroom",
    status: {
        name: "Long Overdue",
        color: "#F55555"
    },
    classroomSPOCname: "classroomSPOCname 4",
    classroomSPOCemailID: "classroomSPOCemailID 4",
    classroomSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 4",
    owner: "owner 4",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "05",
    name: "assignment  5",
    assignmentType: "classroom",
    status: {
        name: "On-Hold",
        color: "#000000"
    },
    classroomSPOCname: "classroomSPOCname 5",
    classroomSPOCemailID: "classroomSPOCemailID 5",
    classroomSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 5",
    owner: "owner 5",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "06",
    name: "assignment  6",
    assignmentType: "classroom",
    status: {
        name: "Not Started",
        color: "#A1A1A1"
    },
    classroomSPOCname: "classroomSPOCname 6",
    classroomSPOCemailID: "classroomSPOCemailID 6",
    classroomSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 6",
    owner: "owner 6",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
}]



export const workshopList = [{
    id: "01",
    name: "assignment  1",
    assignmentType: "workshop",
    status: {
        name: "Completed",
        color: "#0E79B2"
    },
    workshopSPOCname: "workshopSPOCname 1",
    workshopSPOCemailID: "workshopSPOCemailID 1",
    workshopSPOCphoneNumber: "0987654321",
    spocList: [spocList[0]],
    aqSPOC: "aqSPOC 1",
    owner: "owner 1",
    class:"Class 5",
    section:"A",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tueb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "02",
    name: "assignment 2",
    assignmentType: "workshop",
    status: {
        name: "On-Time",
        color: "#1E9414"
    },
    workshopSPOCname: "workshopSPOCname 2",
    workshopSPOCemailID: "workshopSPOCemailID 2",
    workshopSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 2",
    owner: "owner 2",
    class:"Class 5",
    section:"B",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "03",
    name: "assignment  3",
    assignmentType: "workshop",
    status: {
        name: "Overdue",
        color: "#F5DA55"
    },
    workshopSPOCname: "workshopSPOCname 3",
    workshopSPOCemailID: "workshopSPOCemailID 3",
    workshopSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 3",
    owner: "owner 3",
    class:"Class 5",
    section:"C",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "04",
    name: "assignment  4",
    assignmentType: "workshop",
    status: {
        name: "Long Overdue",
        color: "#F55555"
    },
    workshopSPOCname: "workshopSPOCname 4",
    workshopSPOCemailID: "workshopSPOCemailID 4",
    workshopSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 4",
    owner: "owner 4",
    class:"Class 6",
    section:"A",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "05",
    name: "assignment  5",
    assignmentType: "workshop",
    status: {
        name: "On-Hold",
        color: "#000000"
    },
    workshopSPOCname: "workshopSPOCname 5",
    workshopSPOCemailID: "workshopSPOCemailID 5",
    workshopSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 5",
    owner: "owner 5",
    class:"Class 6",
    section:"B",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "06",
    name: "assignment  6",
    assignmentType: "workshop",
    status: {
        name: "Not Started",
        color: "#A1A1A1"
    },
    workshopSPOCname: "workshopSPOCname 6",
    workshopSPOCemailID: "workshopSPOCemailID 6",
    workshopSPOCphoneNumber: "0987654321",
    spocList: spocList,
    aqSPOC: "aqSPOC 6",
    owner: "owner 6",
    class:"Class 7",
    section:"A",
    signOffStatus: "",
    plannedNoOfParticipants: "30",
    actualNoOfParticipants: "30",
    participantAvgRating: "4.5",
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
}]

export const projectList = [{
    id: "01",
    name: "assignment 1",
    assignmentType: "project",
    status: {
        name: "Completed",
        color: "#0E79B2"
    },
    signOffStatus: "",
    projectSPOCname: "projectSPOCname 1",
    projectSPOCemailID: "projectSPOCemailID 1",
    projectSPOCphoneNumber: "0987654321",
    spocList: [spocList[0]],
    volunteersList: volunteersList,
    aqSPOC: "aqSPOC 1",
    owner: "owner 1",
    completionChecklist: true,
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "02",
    name: "assignment 2",
    assignmentType: "project",
    status: {
        name: "On-Time",
        color: "#1E9414"
    },
    signOffStatus: "Yes",
    projectSPOCname: "projectSPOCname 2",
    projectSPOCemailID: "projectSPOCemailID 2",
    projectSPOCphoneNumber: "0987654321",
    spocList: spocList,
    volunteersList: volunteersList,
    aqSPOC: "aqSPOC 2",
    owner: "owner 2",
    completionChecklist: false,
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "03",
    name: "assignment 3",
    assignmentType: "project",
    status: {
        name: "Overdue",
        color: "#F5DA55"
    },
    signOffStatus: "No",
    projectSPOCname: "projectSPOCname 3",
    projectSPOCemailID: "projectSPOCemailID 3",
    projectSPOCphoneNumber: "0987654321",
    spocList: spocList,
    volunteersList: volunteersList,
    aqSPOC: "aqSPOC 3",
    owner: "owner 3",
    completionChecklist: true,
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "04",
    name: "assignment 4",
    assignmentType: "project",
    status: {
        name: "Long Overdue",
        color: "#F55555"
    },
    signOffStatus: "Yes",
    projectSPOCname: "projectSPOCname 4",
    projectSPOCemailID: "projectSPOCemailID 4",
    projectSPOCphoneNumber: "0987654321",
    spocList: spocList,
    volunteersList: volunteersList,
    aqSPOC: "aqSPOC 4",
    owner: "owner 4",
    completionChecklist: false,
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "05",
    name: "assignment 5",
    assignmentType: "project",
    status: {
        name: "On-Hold",
        color: "#000000"
    },
    signOffStatus: "No",
    projectSPOCname: "projectSPOCname 5",
    projectSPOCemailID: "projectSPOCemailID 5",
    projectSPOCphoneNumber: "0987654321",
    spocList: spocList,
    volunteersList: volunteersList,
    aqSPOC: "aqSPOC 5",
    owner: "owner 5",
    completionChecklist: true,
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
},{
    id: "06",
    name: "assignment 6",
    assignmentType: "project",
    status: {
        name: "Not Started",
        color: "#A1A1A1"
    },
    signOffStatus: "No",
    projectSPOCname: "projectSPOCname 6",
    projectSPOCemailID: "projectSPOCemailID 6",
    projectSPOCphoneNumber: "0987654321",
    spocList: spocList,
    volunteersList: volunteersList,
    aqSPOC: "aqSPOC 6",
    owner: "owner 6",
    completionChecklist: false,
    startDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    endDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    actualStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    actualEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
    plannedStartDate: "Tue Feb 09 2021 10:47:47 GMT+0530 (India Standard Time)",
    plannedEndDate: "Thu Feb 18 2021 10:47:52 GMT+0530 (India Standard Time)",
}]

export const options_01 = [ 
    {label: "Strongly Agree", value: "Strongly Agree"}, 
    {label:"Agree", value:"Agree"}, 
    {label:"Neutral", value:"Neutral"},
    {label:"Disagree", value:"Disagree"},
    {label:"Strongly Disagree", value:"Strongly Disagree"},
    {label:"NA", value:"NA"}
]

export const assignmentCompletionChecklist = [{
    id:"1",
    statement: "Project progress datasets were shared in a timely manner",
    options: options_01,
    answer: ""
},{
    id:"2",
    statement: "Data quality of Project progress datasets was to your satisfaction",
    options: options_01,
    answer: ""
},{
    id:"3",
    statement: "Project adhered to the planned timelines",
    options: options_01,
    answer: ""
},{
    id:"4",
    statement: "Project Completion case studies have been documented to your satisfaction",
    options: options_01,
    answer: ""
},{
    id:"5",
    statement: "Stories of project beneficiaries have been documented to your satisfaction",
    options: options_01,
    answer: ""
},{
    id:"6",
    statement: "Achievement of outputs, outcomes and progress towards impacts have been documented to your satisfaction",
    options: options_01,
    answer: ""
},{
    id:"7",
    statement: "Project Completion Report has been documented to your satisfaction",
    options: options_01,
    answer: ""
}]

export const options_02 = [ 
    {label: "High", value: "High"}, 
    {label:"Moderately High", value:"Moderately High"}, 
    {label:"Neutral", value:"Neutral"},
    {label:"Moderately Low", value:"Moderately Low"},
    {label:"Low", value:"Low"},
    {label:"NA", value:"NA"}
]

export const dueDiligenceQuestions = [{
    id:"1",
    statement: "Number of Projects done in past",
    options: options_02,
    answer: ""
},{
    id:"2",
    statement: "Number of workshops done in the past",
    options: options_02,
    answer: ""
},{
    id:"3",
    statement: "Strength of team to deliver",
    options: options_02,
    answer: ""
},{
    id:"4",
    statement: "Ability to deliver across Bangalore",
    options: options_02,
    answer: ""
},{
    id:"5",
    statement: "Ability to deliver pan-India",
    options: options_02,
    answer: ""
},{
    id:"6",
    statement: "Number of years in operations",
    options: options_02,
    answer: ""
},{
    id:"7",
    statement: "Brand Recognition in the market",
    options: options_02,
    answer: ""
},{
    id:"8",
    statement: "Relevance across our service segments",
    options: options_02,
    answer: ""
},{
    id:"9",
    statement: "Marketing and online engagement",
    options: options_02,
    answer: ""
},{
    id:"10",
    statement: "Potential to drive AT Quest BD",
    options: options_02,
    answer: ""
},{
    id:"11",
    statement: "Technology friendliness",
    options: options_02,
    answer: ""
},{
    id:"12",
    statement: "Paperwork and Agreements Readiness",
    options: options_02,
    answer: ""
}]

// let newProjectList_01 = new ProjectList()
// newProjectList_01.newProjectList(projectList)

// export const projectList_01 = newProjectList_01

export const partnersList = [{
    id: "01",
    entityName: "entityName 01",
    contactPersonName: "contactPersonName 01",
    emailID: "emailID 01",
    phoneNumber: "98765432101",
    designation: "designation 01",
    companyGST: "companyGST01",
    description: "description 01",
    address: address,
},{
    id: "02",
    entityName: "entityName 02",
    contactPersonName: "contactPersonName 02",
    emailID: "emailID 02",
    phoneNumber: "98765432102",
    designation: "designation 02",
    companyGST: "companyGST02",
    description: "description 02",
    address: address,
},{
    id: "03",
    entityName: "entityName 03",
    contactPersonName: "contactPersonName 03",
    emailID: "emailID 03",
    phoneNumber: "98765432103",
    designation: "designation 03",
    companyGST: "companyGST03",
    description: "description 03",
    address: address,
},{
    id: "04",
    entityName: "entityName 04",
    contactPersonName: "contactPersonName 04",
    emailID: "emailID 04",
    phoneNumber: "98765432104",
    designation: "designation 04",
    companyGST: "companyGST04",
    description: "description 04",
    address: address,
},{
    id: "05",
    entityName: "entityName 05",
    contactPersonName: "contactPersonName 05",
    emailID: "emailID 05",
    phoneNumber: "98765432105",
    designation: "designation 05",
    companyGST: "companyGST05",
    description: "description 05",
    address: address,
},{
    id: "06",
    entityName: "entityName 06",
    contactPersonName: "contactPersonName 06",
    emailID: "emailID 06",
    phoneNumber: "98765432106",
    designation: "designation 06",
    companyGST: "companyGST06",
    description: "description 06",
    address: address,
}]

// let partnersList_01 = new PartnersList();
// partnersList_01.setNewObjectList(partnersList);

// export const partnersList_02 = partnersList_01;

export const aqSPOClist = [{
    id: "01",
    name: "AQ SPOC 01"
},{
    id: "02",
    name: "AQ SPOC 02"
},{
    id: "03",
    name: "AQ SPOC 03"
},{
    id: "04",
    name: "AQ SPOC 04"
},{
    id: "05",
    name: "AQ SPOC 05"
},{
    id: "06",
    name: "AQ SPOC 06"
}]

export const questions = [{
    id: "01001",
    statement: "001 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Single",
    answer: [ 4556, 8456, 3496, 5463, 9869]
},{
    id: "01002",
    statement: "002 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Multiple",
    answer: [ 4556, 8456, 6496, 5463, 9869]
},{
    id: "01003",
    statement: "003 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Text",
    answer: "text answer"
},{
    id: "01004",
    statement: "004 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Multiple",
    answer: [""]
},{
    id: "01005",
    statement: "005 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Multiple",
    answer:[ 4556, 8456, 6496, 5463, 9869]
},{
    id: "01006",
    statement: "006 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Single",
    answer: [ 4556, 8456, 3496, 5463, 9869]
}]

export const questions_02 = [{
    id: 1,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Single",
    required: "true",
    others: "",
    options: ["option 01", "option 02", "option 03", "option 04", "option 05"],
    answer: [ 4556, 8456, 3496, 5463, 9869]
},{
    id: 2,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?",
    type: "Multiple",
    required: "true",
    others: "",
    options: ["choice 01", "choice 02", "choice 03", "choice 04", "choice 05"],
    answer: [ 4556, 8456, 6496, 5463, 9869]
},{
    id: 3,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?*",
    type: "Text",
    required: "true",
    others: "",
    options: [""],
    answer: ["text answer"]
},{
    id: 4,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Single",
    required: "true",
    others: "",
    options: ["option 01", "option 02", "option 03", "option 04", "option 05"],
    answer: [ 4556, 8456, 6496, 5463, 9869]
},{
    id: 5,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?",
    type: "Multiple",
    required: "true",
    others: "",
    options: ["choice 01", "choice 02", "choice 03", "choice 04", "choice 05"],
    answer: [ 4556, 8456, 6496, 5463, 9869]
},{
    id: 6,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?*",
    type: "Text",
    required: "true",
    others: "",
    options: [""],
    answer: ["text answer"]
},{
    id: 7,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna?",
    type: "Single",
    required: "true",
    others: "",
    options: ["option 01", "option 02", "option 03", "option 04", "option 05"],
    answer: [ 4556, 8456, 6496, 5463, 9869]
},{
    id: 8,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?",
    type: "Multiple",
    required: "true",
    others: "",
    options: ["choice 01", "choice 02", "choice 03", "choice 04", "choice 05"],
    answer: [ 4556, 8456, 6496, 5463, 9869]
},{
    id: 9,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?*",
    type: "Text",
    required: "true",
    others: "",
    options: [""],
    answer: ["text answer"]
},{
    id: 10,
    statement: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam?*",
    type: "Text",
    required: "true",
    others: "",
    options: [""],
    answer: ["text answer"]
}]

export const publishedPolls = [{
    id: 1,
    title: "Poll 01",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 2,
    title: "Poll 02",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02,
},{
    id: 3,
    title: "Poll 03",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 4,
    title: "Poll 04",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 5,
    title: "Poll 05",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 6,
    title: "Poll 06",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 7,
    title: "Poll 07",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02 
},{
    id: 8,
    title: "Poll 08",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02,
},{
    id: 9,
    title: "Poll 09",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 10,
    title: "Poll 10",
    published: true,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
}]

export const unpublishedPolls = [{
    id: 11,
    title: "Poll 11",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02 
},{
    id: 12,
    title: "Poll 12",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02,
},{
    id: 13,
    title: "Poll 13",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 14,
    title: "Poll 14",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 15,
    title: "Poll 15",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 16,
    title: "Poll 16",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 17,
    title: "Poll 17",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02 
},{
    id: 18,
    title: "Poll 18",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02,
},{
    id: 19,
    title: "Poll 19",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
},{
    id: 20,
    title: "Poll 20",
    published: false,
    totalVotes: "645",
    startDate: "",
    endDate: "",
    pollQuestionList: questions_02
}]

export const pollsList = [ ...publishedPolls, ...unpublishedPolls ]

export const engagements = [{
    id: 1,
    name: "engagement 01",
    servicesType: "level-1",
    serviceOffering: {},
    applicableModules: [],
    status: statusArray[0],
    plannedStartDate: new Date("06-06-2021"),
    plannedEndDate: new Date("06-16-2021"),
},{
    id: 1,
    name: "engagement 02",
    servicesType: "level-2",
    serviceOffering: {},
    applicableModules: [],
    status: statusArray[1],
    plannedStartDate: new Date("06-06-2021"),
    plannedEndDate: new Date("06-16-2021"),
},{
    id: 1,
    name: "engagement 03",
    servicesType: "level-3",
    serviceOffering: {},
    applicableModules: [],
    status: statusArray[2],
    plannedStartDate: new Date("06-06-2021"),
    plannedEndDate: new Date("06-16-2021"),
}]

export const webDomains = ["infoten.com", "inofsence.com", "infowars.com"]

export const companyList = [{
    id: 1,
    name: "name 01",
    webDomain: "webDomain 01",
    logo: "logo 01",
    engagements: engagements,
    registeredDate: currentDate,
    status: {name: "Active", date: "" },
    statusDate: currentDate,
    CompanyGST: "CompanyGST 01",
    webDomains: webDomains,
    corporateDomainList: webDomains,
    spoc: spocList[0],
    address: address,
    city: "city 01",
    state: "state 01",
    country: "country 01",
    pinCode: "pinCode 01",
    spocList: spocList,
    validations: []
},{
    id: 2,
    name: "name 02",
    webDomain: "webDomain 02",
    logo: "logo 02",
    engagements: engagements,
    registeredDate: currentDate,
    status: { name: "Inactive", date: "" },
    CompanyGST: "CompanyGST 02",
    webDomains: webDomains,
    corporateDomainList: webDomains,
    spoc: spocList[0],
    address: address,
    city: "city 02",
    state: "state 02",
    country: "country 02",
    pinCode: "pinCode 02",
    spocList: spocList,
    validations: []
},{
    id: 3,
    name: "name 03",
    webDomain: "webDomain 03",
    logo: "logo 03",
    engagements: engagements,
    registeredDate: currentDate,
    status: { name: "Active", date: "" },
    CompanyGST: "CompanyGST 03",
    webDomains: webDomains,
    corporateDomainList: webDomains,
    spoc: spocList[0],
    address: address,
    city: "city 03",
    state: "state 03",
    country: "country 03",
    pinCode: "pinCode 03",
    spocList: spocList,
    validations: []
},{
    id: 4,
    name: "name 04",
    webDomain: "webDomain 04",
    logo: "logo 04",
    engagements: engagements,
    registeredDate: currentDate,
    status: { name: "Inactive", date: "" },
    CompanyGST: "CompanyGST 04",
    webDomains: webDomains,
    corporateDomainList: webDomains,
    spoc: spocList[0],
    address: address,
    city: "city 04",
    state: "state 04",
    country: "country 04",
    pinCode: "pinCode 04",
    spocList: spocList,
    validations: []
},{
    id: 5,
    name: "name 05",
    webDomain: "webDomain 05",
    logo: "logo 05",
    engagements: engagements,
    registeredDate: currentDate,
    status: { name: "Active", date: "" },
    CompanyGST: "CompanyGST 05",
    webDomains: webDomains,
    corporateDomainList: webDomains,
    spoc: spocList[0],
    address: address,
    city: "city 05",
    state: "state 05",
    country: "country 05",
    pinCode: "pinCode 05",
    spocList: spocList,
    validations: []
}]