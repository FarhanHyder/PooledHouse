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
const getColor = (amount) =>{
    const level = getLevel(amount);
    switch(level){
        case 6:
            return EMERALD_GREEN;
        case 5:
            return PARAKEET_GREEN;
        case 4:
            return LIME_GREEN;
        case 3:
            return CRIMSON_RED;
        case 2:
            return ORANGE; 
        default:
            return NAVAJO_WHITE;

    }

}

// pre: a number as a param
// post: return an integer between [1,6]
const getLevel = (amount) =>{
    return Math.floor((amount*7)/HIGHEST);
}


