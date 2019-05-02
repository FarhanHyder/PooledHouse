// data will be process here
// filter all the data based on business name
// take the average
// for each position
// tips total = takeHome * hour
// average total by total employee count

// shift_length
// shift_time
// shift_date
// shift_position
// takehome
// business_name
// business_street_address
// business_city
// business_state
// business_zip

exports.averageTipsByBusiness = (tipsInfo) => {
    // let tipInfo = [...props.tipInfo];
    const business = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business[businessName] = {business_name: businessName,
                                    business_street_address: tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip, 
                                    tipsPerHour: (tips.takehome / tips.shift_length),
                                    totalHour: tips.shift_length};
        }
        else {
            let hours = (business[businessName].totalHour + tips.shift_length);
            business[businessName].tipsPerHour = business[businessName].tipsPerHour * business[businessName].totalHour / hours + tips.takehome / hours;
            business[businessName].totalHour = hours;
        }
    });
    return business;
}

const getDay = (date) => {
    let day = date.getDay();
    if(day === 0) {
        return "Sunday";
    }
    else if (day === 1) {
        return "Monday";
    }
    else if (day === 2) {
        return "Tuesday";
    }
    else if (day === 3) {
        return "Wednesday"
    }
    else if (day === 4) {
        return "Thursday";
    }
    else if (day === 5) {
        return "Friday";
    }
    else if (day === 6) {
        return "Sunday";
    }
}

exports.averageTipsByBusinessDay = (tipsInfo) => {
    const businessTipsByday = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        let day = getDay(new Date(tips.shift_date));
        if (! businessTipsByday.hasOwnProperty(businessName)) {
            let avg = {
                        tipsPerHour: (tips.takehome / tips.shift_length),
                        totalHour: tips.shift_length,
                    };
                    
            businessTipsByday[businessName] = {
                Saturday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Sunday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Monday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Tuesday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Wednesday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Thursday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Friday: {
                    tipsPerHour: 0,
                    totalHour: 0,
                }
            }; 

            businessTipsByday[businessName][day] = avg;
            businessTipsByday[businessName].address = tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip;
        }
        else {
            // if(!businessTipsByday[businessName].hasOwnProperty(day)) {


            // }
            let hours = (businessTipsByday[businessName][day].totalHour + tips.shift_length);
            businessTipsByday[businessName][day].tipsPerHour = businessTipsByday[businessName][day].tipsPerHour * businessTipsByday[businessName][day].totalHour / hours + tips.takehome / hours;
            businessTipsByday[businessName].totalHour = hours;
        }
    });
    return businessTipsByday;
}

exports.averageTipsByPosition = (tipsInfo) => {
    const businessTipsByPos = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        let pos = tips.shift_position;
        if (! businessTipsByPos.hasOwnProperty(businessName)) {
            let avg = {
                        tipsPerHour: (tips.takehome / tips.shift_length),
                        totalHour: tips.shift_length,
                    };
                    
            businessTipsByPos[businessName] = {
                Bartender: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Server: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Barback: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Busser: {
                    tipsPerHour: 0,
                    totalHour: 0,
                },
                Other: {
                    tipsPerHour: 0,
                    totalHour: 0,
                }
            }; 

            businessTipsByPos[businessName][pos] = avg;
            businessTipsByPos[businessName].address = tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip;
        }
        else {
            // if(!businessTipsByday[businessName].hasOwnProperty(day)) {


            // }
            let hours = (businessTipsByPos[businessName][pos].totalHour + tips.shift_length);
            businessTipsByPos[businessName][pos].tipsPerHour = businessTipsByPos[businessName][pos].tipsPerHour * businessTipsByPos[businessName][pos].totalHour / hours + tips.takehome / hours;
            businessTipsByPos[businessName].totalHour = hours;
        }
    });
    return businessTipsByPos;
}

exports.averageTipsByZipCode = (tipsInfo) => {
    const businessZip = {};
    tipsInfo.forEach(tips => {
        let zip = tips.business_zip;
        if (! businessZip.hasOwnProperty(zip)) {
            businessZip[zip] = {
                business_count: 1,
                tipsPerHour: (tips.takehome / tips.shift_length),
                totalHour: tips.shift_length};
        }
        else {
            let hours = (businessZip[zip].totalHour + tips.shift_length);
            businessZip[zip].business_count += 1;
            businessZip[zip].tipsPerHour = businessZip[zip].tipsPerHour * businessZip[zip].totalHour / hours + tips.takehome / hours;
            businessZip[zip].totalHour = hours;
        }
    });
    return businessZip;    

}

exports.averageTipsByPositionAndShift = (tipsInfo) => {

}

// export {averageTipsByBusiness, averageTipsByBusinessDay, averageTipsByPosition};
