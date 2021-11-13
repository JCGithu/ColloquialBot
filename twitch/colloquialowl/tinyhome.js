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
        "num": 4
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
        "name": "Hellequin & 水",
        "num": 2,
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
        "district": "Main District",
        "num": 2
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
        "name": "Hampster House and Pozza Check",
        "district": "Main & Raid districts",
        "num": 2,
    },
    "ladyfreya151":{
        "district": "Main District",
        "num": 4,
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
    },
    "drawn_sean":{
        "district": "Main District",
    },
    "erjima":{
        "num": 2,
        "district": "Main District",
    },
    "halmal_productions":{
        "num": 2,
        "district": "Main District",
    },
    "halmal_productions":{
        "num": 2,
        "district": "Main District",
    },
    "helenagaifem":{
        "district": "Main District",
    },
    "jess_face":{
        "district": "Main District",
    },
    "kuillus":{
        "district": "Main District",
        "num": 2,
    },
    "leighsterkeeeester":{
        "district": "Main District",
    },
    "melosprout":{
        "district": "Main District",
    },
    "nataliacaronte":{
        "district": "Main District",
    },
    "naxprime":{
        "district": "Main District",
    },
    "queerladyface":{
        "district": "Main District",
    },
    "seph020":{
        "district": "Main District",
    },
    "shockingstrawberry":{
        "district": "Main District",
    },
    "trueellie":{
        "num":2,
        "district": "Main District",
    },
    "worriedbee":{
        "district": "Main District",
    },
    "xoxnatasha":{
        "district": "Main District",
    },
};

module.exports = (channel, tags, message, client) => {
    let user = '', printUser = '';
    if (message === '!tinyhome'){
        console.log('exactly');
        user = tags.username, printUser = tags.username;
    } else {
        user = message.split(' ')[1].replace('@', '').toLowerCase();
        printUser = message.split(' ')[1].replace('@', '');
    }
    if (message.toLowerCase() === '!tinyhome arcasian investments') return '/me Arcasian investments owns... everything'
    if (houseData[user]){
        if (houseData[user].district) district = ` in the ${houseData[user].district}`;
        if (houseData[user].num) num = `${houseData[user].num} houses`;
        if (houseData[user].name) name = ` called ${houseData[user].name}`;
        if (houseData[user].additional) district = district + houseData[user].additional;
        return `${printUser} has ${num}${name}${district}!`;
    }
    return `Sorry, no data for ${user} yet!`;
};