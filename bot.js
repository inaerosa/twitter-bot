console.log('The bot is starting')

const Twit = require('twit');
const config = require('./config');

var T = new Twit(config)
//search
var params = {
    q: 'unicorn',
    count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err,data,response){
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++){
//    console.log(tweets[i].text);
  }
}

//post
tweetIt();

function tweetIt() {

    var tweet = {
      status: `'#tweeting from node.js'`
    }
  
    T.post('statuses/update', tweet, tweeted)
  
    function tweeted(err, data, response) {
      if (err) {
        console.log(err);
      } else {
        console.log("It worked")
      }
    }
}  
  
