var restify = require('restify');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/api', function (req, res, next) {
  res.json({
        environment: `${process.env.MESSAGE}`,
      });
  return next();
});

server.listen(10010, function () {
  console.log('%s listening at %s', server.name, server.url);
});
