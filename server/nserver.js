var apiRoutes = require('./API/routes.js');
var apiResolve = require('./API/api_services');
var http = require('http');
var bson = require('bson');

/* setup express */


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

var setupRoutes = function(){
	var setRoute = function(route){
          switch(route.method){
              case 'GET':
                  app.get(route.path, function(req, res){
                      apiResolve[route.query].GET(req, res);
                  });
                  break;
              case 'POST':
                  app.post(route.path, function(req, res){
                      apiResolve[route.query].POST(req, res);
                  });
                  break;
              case 'DELETE':
                  app.delete(route.path, function(req, res){
                      apiResolve[route.query].DELETE(req, res);
                  });
                  break;
              case 'PUT':
                  app.put(route.path, function(req, res){
                      apiResolve[route.query].PUT(req, res);
                  });
                  break;
          }
      };
      for(var i=0;i<apiRoutes.length;i++){
          setRoute(apiRoutes[i]);
      }
};

app.use(function (req, res, next) {

    if(req.headers.origin){
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }

    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');


    next();

});
setupRoutes();

var startServer = function(){
    server = http.createServer(app);
    var listeningPort = 3101;
    server.listen(listeningPort);
    console.log('Application (production) started on port '+listeningPort+'');
};
startServer();
