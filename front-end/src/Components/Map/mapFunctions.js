const EMERALD_GREEN = "#1a9850";        // lvl (6/6)
const PARAKEET_GREEN = "#91cf60";       // lvl (5/6)
const LIME_GREEN = "#d9ef8b";           // lvl (4/6)
const CRIMSON_RED = "#d73027";          // lvl (3/6)
const ORANGE = "#fc8d59";               // lvl (2/6)
const NAVAJO_WHITE = "#fee08b";         // lvl (1/6)


const AVERAGE_ALL = 110;    // FIXME: fetch this data from database
const HIGHEST = 200;        // FIXME: fetch this data from database

// pre: a number as a param
// post: return color code
/*
const getColor = (amount, max) =>{
    const level = getLevel(amount, max);
    switch(level){
        case 7:
            return EMERALD_GREEN;
        case 6:
            return PARAKEET_GREEN;
        case 5:
            return LIME_GREEN;
        case 4:
            return CRIMSON_RED;
        case 3:
            return ORANGE; 
        default:
            return NAVAJO_WHITE;
    }
}
*/

/**
 * Set the color of the map tiles based on the average tips for that neighborhood
 * @param {number} amount 
 * @return {string}
 */
const getColor = (amount) => {
    if (amount < 15) return ORANGE;
    if (amount < 30) return CRIMSON_RED;
    if (amount < 45) return LIME_GREEN;
    if (amount < 60) return PARAKEET_GREEN;
    return EMERALD_GREEN;
}

/**
 * Computes the average tip by neighborhood and filters by day, shift and position
 * @param {object} tip_info
 * @param {string} day
 * @param {string} shift
 * @param {string} position
 */
exports.aTBNMasterParse = (tip_info, day, shift, position) => {
//    console.log(tip_info);
    const neighborhoods = new Object();
    tip_info.forEach(entry => {
        let e_day = new Date(entry.shift_date).getDay();
        e_day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][e_day];
        if ((day == 'All' || e_day == day) && 
            (shift == 'All' ||  entry.shift_time == shift) && 
            (position == 'All' || entry.shift_position == position)) {

                let hoodName = entry.neighborhood;
                if (! neighborhoods.hasOwnProperty(hoodName)) {
                    neighborhoods[hoodName] = {neighborhood: hoodName,
                                            tipsPerHour: (entry.takehome / entry.shift_length),
                                            totalHour: entry.shift_length};
                }
                else {
                    let hours = (neighborhoods[hoodName].totalHour + entry.shift_length);
                    neighborhoods[hoodName].tipsPerHour = neighborhoods[hoodName].tipsPerHour * neighborhoods[hoodName].totalHour / hours + entry.takehome / hours;
                    neighborhoods[hoodName].totalHour = hours;
                }
        }
    });
    return neighborhoods;
}


/**
 * takes the neighborhoods object returns by averageTipsByNeighborhood 
 * and returns an object for use by reactnyc component
 * @param {object} average_tips 
 */
exports.averageTipsClean = (average_tips) => {
    let data = [];
    let element = {};
    for (var entry in average_tips) {
      element = {};
      element.name = average_tips[entry].neighborhood;
      element.values = [];
      element.values.push({label: "Avg Hourly $", val: Math.floor(average_tips[entry].tipsPerHour)});
      //console.log(element.values[0].val);
      element.color = getColor(element.values[0].val);
      data.push(element);
    }
    return data;
}

exports.getColor = getColor;