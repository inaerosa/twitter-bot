console.log('The bot is starting')

const Twit = require('twit');
const config = require('./config');

//search
var params = {
    q: 'unicorn',
    count: 2
}