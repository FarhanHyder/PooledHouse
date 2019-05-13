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

/**
 * @function averageTipsByBusiness
 * @param {array} tipsInfo - an array of all the tips entry
 * @returns {object} business - an object with business name as the key
 * another object with business name, address, average hourly tips and total hours reported as the value
 * business = 
 *  {businessName : {business_name: businessName, 
 *                  business_street_address: A set of address,
 *                  tipsPerHour: hourly tips,
 *                  totalHour: total reported hours for businessName}
 *  }
 */
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

/**
 * @function averageTipsByBusinessByLocation
 * @param {array} tipsInfo - an array of all the tips entry
 * @returns {object} businessTipsByLocations - an object with business name as the key
 * another object with business name, address, average hourly tips and total hours reported as the value
 *  businessTipsByLocations = 
 *  {businessName : {addr : {tipsPerHour: hourly tips,
 *                          totalHour: total reported hours for business address}
 *                  }
 *  }
 */

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
/**
 * @function getDay
 * @param {date object} date 
 * @returns name of the day for the date object
 */
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

/** 
 * @function averageTipsByBusinessDay
 * @param {array} tipsInfo - an array of all the tips entry
 * @returns {object} businessTipsByday - an object with business name as the key
 * and another object  with (all the days as key and average tips as value) as the value
 *  businessTipsByday = 
 *  {businessName : {
 *               Saturday: {
 *                  tipsPerHour: average hourly tips for this day,
 *                 totalHour: total reported hour for this day
 *               },
 *               Sunday: {
 *                   tipsPerHour: average hourly tips for this day,
 *                   totalHour: total reported hour for this day
 *               },
 *               Monday: {
 *                   tipsPerHour: average hourly tips for this day,
 *                   totalHour: total reported hour for this day
 *               },
 *               Tuesday: {
 *                   tipsPerHour: average hourly tips for this day,
 *                   totalHour: total reported hour for this day
 *               },
 *               Wednesday: {
 *                   tipsPerHour: average hourly tips for this day,
 *                   totalHour: total reported hour for this day
 *               },
 *               Thursday: {
 *                   tipsPerHour: average hourly tips for this day,
 *                   totalHour: total reported hour for this day
 *               },
 *               Friday: {
 *                   tipsPerHour: average hourly tips for this day,
 *                   totalHour: total reported hour for this day
 *               }
 *               address : set of all reported business address for this business
 *           }
 *  }
 */

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


/**
 * @function averageTipsByPosition
 * @param {array} tipsInfo - an array of all the tips entry
 * @returns {object} businessTipsByPos - an object with business name as the key
 * and another object with (all the position as key and average tips as value) as the value
 * 
 *  businessTipsByPos = 
 *  {businessName : {
 *               Bartender: {
 *                 tipsPerHour: average hourly tips for this position,
 *                 totalHour: total reported hour for this position
 *               },
 *               Server: {
 *                   tipsPerHour: average hourly tips for this position,
 *                   totalHour: total reported hour for this position
 *               },
 *               Barback: {
 *                   tipsPerHour: average hourly tips for this position,
 *                   totalHour: total reported hour for this position
 *               },
 *               Busser: {
 *                   tipsPerHour: average hourly tips for this position,
 *                   totalHour: total reported hour for this position
 *               },
 *               Other: {
 *                   tipsPerHour: average hourly tips for this position,
 *                   totalHour: total reported hour for this position
 *               },
 *    
 *               address : set of all reported business address for this business
 *           }
 *  }
 */

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

/**
 * @function averageTipsByZipCode
 * @param {array} tipsInfo - an array of all the tips entry
 * @returns {object} businessZip - an object with zip code as the key
 * another object with average hourly tips and total hours reported as the value and total number business in this zip code
 * businessZip = 
 *             {zip : {
 *                  business_count : number of business,
 *                  tipsPerHour: hourly tips,
 *                  totalHour: total reported hours for businessName}
 *  }
 */

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

/**
 * @function createBusinessTable
 * @param {array} tipsInfo - an array of all the tips entry
 * @returns {object} business - an object with businessName as the key and an array of all reported tips info for that business
 * 
 * business =  {
 *          businessName: [
 *                          {address: , position: , tips: , hour: , shift: , neighborhood: , date: }, {...}
 *                      ]
 *  }
 */

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