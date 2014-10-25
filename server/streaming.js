Twit = new TwitMaker({
	consumer_key:         '*****',
    consumer_secret:      '*****',
    access_token:         '*****',
    access_token_secret:  '*****'
});

var wrappedTwitterInsert = Meteor.bindEnvironment(function(tweet) {     

	Tweets.insert({tweetId:tweet.id,text:tweet.text,userId:tweet.id_str,userName:tweet.name,userScreenName:tweet.screen_name,createdAt:tweet.created_at});

}, "Failed to insert tweet into Posts collection.");

var stream = Twit.stream('statuses/filter', { track: '#betabeers' });

stream.on('tweet', function (tweet) {
	wrappedTwitterInsert(tweet);
});