var express = require('express'),
    request = require('request'),
	router  = express.Router();

// Conf
var API   = 'https://public-api.wordpress.com/rest/v1.1/sites/techcrunch.com/',
    posts = 'posts/',
    KEY   = 'xGW8zV0w0ksRHI';

router.get('/api/v1/content/latest', function(req, res) {
	if (req.headers && req.headers["x-api-key"] !== 'xGW8zV0w0ksRHI') {
		res.send('error');
	}
	request(API + posts + '?number=3', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var posts = JSON.parse(body);
            res.json(posts);
        } else {
            res.send(err);
        }
    })
});

module.exports = router;