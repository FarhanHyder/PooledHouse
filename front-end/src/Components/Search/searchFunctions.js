/**
 * The searchFunctions.js file provides us with a function to help parse
 * our different database entries in the Search.js file. This function 
 * @namespace searchParse
 * @param {Array} tip_info Array of information from our tips database
 * @param {String} business_name_query The name of the business being searched
 * @param {String} day The day of the entry
 * @param {String} shift The shift, either AM/PM
 * @param {String} position The position, ie. bartender, server, etc
 * @returns {Object}
 */
exports.searchParse = (tip_info, business_name_query, day, shift, position) => {
    //    console.log(tip_info);
        const results = new Object();
        tip_info.forEach(entry => {
            let e_day = new Date(entry.shift_date).getDay();
            e_day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][e_day];
            if ((day == 'All' || e_day == day) && 
                (shift == 'All' ||  entry.shift_time == shift) && 
                (position == 'All' || entry.shift_position == position)) {
                    if (entry.business_name.toLowerCase().includes(business_name_query.toLowerCase())) {
                        let business_name = entry.business_name;
                        if (! results.hasOwnProperty(business_name)) {
                            results[business_name] = {business: business_name,
                                                    neighborhood: entry.neighborhood,
                                                    tipsPerHour: (entry.takehome / entry.shift_length),
                                                    totalHour: entry.shift_length};
                        }
                        else {
                            let hours = (results[business_name].totalHour + entry.shift_length);
                            results[business_name].tipsPerHour = results[business_name].tipsPerHour * results[business_name].totalHour / hours + entry.takehome / hours;
                            results[business_name].totalHour = hours;
                        }
                    }
            }
        });
        return results;
    }
    