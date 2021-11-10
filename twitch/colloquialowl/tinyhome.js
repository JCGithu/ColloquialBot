let num = 'a house'; 
let name = '';
let district = '';
let houseData = {
    "colloquialowl": {
        "name": "Owl House",
        "district": "Main District",
    },
    "winsord": {
        "district": "Main and Raid districts",
        "num": 2,
        "additional": "...and a chicken"
    },
    "beckycas_":{
        "name": "Sparkles",
        "district": "Main District"
    },
    "desirelinesgames":{
        "name": "Tigger and Red Penguin",
        "district": "Main District",
        "num": 2
    },
    "lydiapancakes": {
        "district": "Main District"
    },
    "kellanmahree": {
        "name": "Sunny Side Manor",
        "district": "Main District"
    },
    "between_the_pages_co": {
        "name": "Christine’s Cabin",
        "district": "Main District"
    },
    "arcanetempest": {
        "name": "Hellequin",
        "district": "Main District",
        "additional":  "and an entire library in the Raid District"
    },
    "azlxns": {
        "name": "Kylo Rent",
        "district": "Main District"
    },
    "cowlandcape": {
        "district": "Main District"
    },
    "hellovonnie": {
        "district": "Main District"
    },
    "coco__glez":{
        "district": "Main District",
    },
    "auntieplant": {
        "district": "Main District",
    },
    "astoldbyangela": {
        "name": "Wombat House",
        "district": "Main District"
    },
    "jostockdale":{
        "district": "Marbles District"
    },
    "millisaysmaybe": {
        "name": "Cog the Dragon's house",
        "district": "Marbles District"
    },
    "mattfraser": {
        "name": "Derp",
        "district": "Raid District"
    },
    "arcasian": {
        "district": "Raid District"
    },
    "aeeolus": {
        "district": "Origins District"
    },
    "emm__a_":{
        "name": "NotDitto",
        "district": "Main District"
    },
    "yukfun":{
        "district": "Main District" 
    },
    "letsbrock":{
        "district": "Main & Raid districts",
        "num": 2,
    },
    "ladyfreya151":{
        "district": "Main District",
        "num": 3,
    },
    "erjima":{
        "district": "Main District",
    },
    "littleghostelli":{
        "district": "Main District",
    },
    "xkambamx":{
        "district": "Main District",
    },
    "daemonthewolf":{
        "district": "Main District",
    },
    "thehotdoghat":{
        "district": "Main District",
    },
    "missblurst":{
        "district": "Main District",
    },
    "victoriasdoodlestoodio":{
        "district": "Main District",
    },
    "crazywaco":{
        "district": "Main District",
    },
    "ipusheverybutton":{
        "district": "Main District",
        "num": 2
    },
    "trichOmes":{
        "district": "Main District",
    },
    "yumeeyy":{
        "district": "Main District",
    },
    "nicaoo21":{
        "district": "Main District",
    },
    "phillustrations":{
        "district": "Main District",
    },
    "kaxninjy":{
        "district": "Main District",
    },
    "coollike":{
        "district": "Main District",
    }
};

module.exports = (channel, tags, message, client) => {
    let user = '';
    if (message === '!tinyhome'){
        user = tags.username;
    } else {
        user = message.split(' ')[1].replace('@', '').toLowerCase();
    }
    if (message.toLowerCase() === '!tinyhome arcasian investments') return '/me Arcasian investments owns... everything'
    if (houseData[user]){
        if (houseData[user].district) district = ` in the ${houseData[user].district}`;
        if (houseData[user].num) num = `${houseData[user].num} houses`;
        if (houseData[user].name) name = ` called ${houseData[user].name}`;
        if (houseData[user].additional) district = district + houseData[user].additional;
        return `${message.split(' ')[1].replace('@', '')} has ${num}${name}${district}!`;
    }
    return `Sorry, no data for ${user} yet!`;
};