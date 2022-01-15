
const badges = {
    carbonNeutralizer: "",
    superExplorer: "",
    goGetter: "",
    tribeLeader: ""
}

export const sortBadges = (badges, badgeName) => {
    let sortedBadges = [];
    for (let i = 0; i < badges.length; i++) {
        if(badges[i] === badgeName){
            sortedBadges.push()
        }
    }
    return sortedBadges
}

export const downloadFile = (blob, fileInfo) => {

    let newBlob = new Blob([blob], { type: blob.type }, { size: blob.size });
    const url = window.URL.createObjectURL(newBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute( 'download', `${fileInfo.name}` );
    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
}

export const returnStatus = (statusList, status) => {
    if (status === undefined || status === null || status === "") {
        status = "Not Started";
    }
    if (typeof(status) === "string") {
        let status_01 = statusList.find((item)=>item.name===status);
        return status_01;
    }
    return status;
}

export const getDateObject = (date_01) => {
    let date_02 = new Date(date_01);
    let newDate = {
        day: "",
        month: "",
        year: ""
    }
    const replaceNaN = (str) => {
        if (str === "NaN") return "";
        if (parseFloat(str) < 10) str = `0${str}`;
        return str;
    }
    if (date_02 !== "Invalid Date") {
        let day = replaceNaN(`${date_02?.getDate?.()}`);
        let month = replaceNaN(`${(1+date_02?.getMonth?.())}`);
        let year = replaceNaN(`${date_02?.getFullYear?.()}`);
        newDate = {
            day: day,
            month: month,
            year: year
        }
    }
    return newDate;
}

export const setModuleList = (moduleList_02) => {
    let applicableModules_02 = [
        { id: 1, label: "Polls/Surveys", value: false },
        { id: 2, label: "Team Collaboration", value: false },
        { id: 3, label: "Engagement Progress Tracking", value: false },
        { id: 4, label: "TCFD Alignment", value: false },
        { id: 5, label: "User Creation", value: false },
        { id: 6, label: "GHG Assessment", value: false },
        { id: 7, label: "ICP Calculations", value: false },
        { id: 8, label: "Risk and Opportunities Assessment", value: false },
        { id: 9, label: "CDP Disclosure", value: false },
        { id: 10, label: "Workshop Monitoring", value: false },
        { id: 11, label: "Project Monitoring", value: false },
        { id: 12, label: "Reports and Matrices", value: false },
        { id: 13, label: "SBT Definitions", value: false },
        { id: 14, label: "Partner Functions", value: false}
    ]
    let result = []
    for (let j = 0; j < applicableModules_02?.length; j++) {
        for (let i = 0; i < moduleList_02?.length; i++) {            
            if (moduleList_02[i].id === applicableModules_02[j].id) {
                applicableModules_02[j].value = true;
            } else {
                // applicableModules_02[j].value = false;
            }
        }
        result.push(applicableModules_02[j]);
    }
    return result;
}