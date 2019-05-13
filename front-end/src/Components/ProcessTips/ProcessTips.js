/** ProcessTips component is designed to compute the average tips
 * depending on which option the user selects to filter; by business,
 * by day, by position, by zipcode, or by shift. This component is still
 * unfinished.
 */


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
                                    business_street_address: new Set(), 
                                    tipsPerHour: (tips.takehome / tips.shift_length),
                                    totalHour: tips.shift_length};
            business[businessName].business_street_address.add(tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip);
        }
        else {
            let hours = (business[businessName].totalHour + tips.shift_length);
            business[businessName].tipsPerHour = business[businessName].tipsPerHour * business[businessName].totalHour / hours + tips.takehome / hours;
            business[businessName].totalHour = hours;
            business[businessName].business_street_address.add(tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip);
        }
    });
    return business;
}

exports.averageTipsByBusinessByLocation = (tipsInfo) => {
    const businessTipsByLocations = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        let addr = tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip;
        if (! businessTipsByLocations.hasOwnProperty(businessName) || !businessTipsByLocations[businessName].hasOwnProperty(addr)) {
            let avg = {
                        tipsPerHour: (tips.takehome / tips.shift_length),
                        totalHour: tips.shift_length,
                    };
            if(! businessTipsByLocations.hasOwnProperty(businessName)) {
                businessTipsByLocations[businessName] = {};
            }
            businessTipsByLocations[businessName][addr] = avg;
        }
        else {
            let hours = (businessTipsByLocations[businessName][addr].totalHour + tips.shift_length);
            businessTipsByLocations[businessName][addr].tipsPerHour = businessTipsByLocations[businessName][addr].tipsPerHour * businessTipsByLocations[businessName][addr].totalHour / hours + tips.takehome / hours;
            businessTipsByLocations[businessName][addr].totalHour = hours;
        }
    });
    return businessTipsByLocations;
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
        return "Saturday";
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
            businessTipsByday[businessName].address = new Set([tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip]);
        }
        else {
            let hours = (businessTipsByday[businessName][day].totalHour + tips.shift_length);
            businessTipsByday[businessName][day].tipsPerHour = businessTipsByday[businessName][day].tipsPerHour * businessTipsByday[businessName][day].totalHour / hours + tips.takehome / hours;
            businessTipsByday[businessName][day].totalHour = hours;
            businessTipsByday[businessName].address.add(tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip);
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
            businessTipsByPos[businessName][pos].totalHour = hours;
        }
    });
    return businessTipsByPos;
}

exports.averageTipsByZipCode = (tipsInfo) => {
    const businessZip = {};
    const ZipBusinessCount = {};
    tipsInfo.forEach(tips => {
        let zip = tips.business_zip;
        if (! businessZip.hasOwnProperty(zip)) {
            ZipBusinessCount[zip] = new Set();
            ZipBusinessCount[zip].add(tips.business_name);
            businessZip[zip] = {
                business_count: 1,
                tipsPerHour: (tips.takehome / tips.shift_length),
                totalHour: tips.shift_length};
        }
        else {
            let hours = (businessZip[zip].totalHour + tips.shift_length);
            ZipBusinessCount[zip].add(tips.business_name);
            businessZip[zip].business_count = ZipBusinessCount[zip].size;
            businessZip[zip].tipsPerHour = businessZip[zip].tipsPerHour * businessZip[zip].totalHour / hours + tips.takehome / hours;
            businessZip[zip].totalHour = hours;
        }
    });
    return businessZip;    

}

exports.createBusinessTable =  (tipsInfo) => {
    const business = {};
    tipsInfo.forEach(tips => {
        let businessName = tips.business_name;
        if (! business.hasOwnProperty(businessName)) {
            business[businessName] = [{
                // business_name: businessName,
                address: tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip, 
                position: tips.shift_position,
                tips : tips.takehome,
                hour : tips.shift_length,
                shift : tips.shift_time,
                neighborhood: tips.neighborhood,
                date : tips.shift_date}];
        }
        else {
            business[businessName].push({
                // business_name: businessName,
                address: tips.business_street_address + ", " + tips.business_city + ", " + tips.business_state + " " + tips.business_zip, 
                position: tips.shift_position,
                tips : tips.takehome,
                hour : tips.shift_length,
                shift : tips.shift_time,
                neighborhood: tips.neighborhood,
                date : tips.shift_date
            });
        }
    });
    return business;
}

exports.averageTipsByPositionAndShift = (tipsInfo) => {

}

// export {averageTipsByBusiness, averageTipsByBusinessDay, averageTipsByPosition};