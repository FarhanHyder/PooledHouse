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

const getColor = (amount) => {
    if (amount < 100) return ORANGE;
    if (amount < 200) return CRIMSON_RED;
    if (amount < 300) return LIME_GREEN;
    if (amount < 400) return PARAKEET_GREEN;
    return EMERALD_GREEN;
}

// pre: a number as a param
// post: return an integer between [1,6]
const getLevel = (amount, max) =>{
    return Math.floor((amount*7)/max);
}

export { getColor };