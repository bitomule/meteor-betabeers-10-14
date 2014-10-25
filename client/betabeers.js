Template.hello.helpers({
    tweets: function () {
		return Tweets.find();
    }
});
