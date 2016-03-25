angular.module('app').factory('ApiRoutesServices', function($http){

    var API = function(apicall, data, callback){
        var request;
        switch(apicall.method){
            case 'get':
                request = {
                    method: 'GET',
                    url: apicall.path
                };
                if(data){
                    request.data = data;
                }
                $http(request).
                    success(function(data, status, headers, config) {
                        callback(data);

                        // this callback will be called asynchronously
                        // when the response is available
                    }).
                    error(function(data, status, headers, config) {
                        console.log(arguments);
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                break;

            case 'post':
                request = {
                    method: 'POST',
                    url: apicall.path
                };
                if(data){
                    request.data = data;
                }
                $http(request).
                    success(function(data, status, headers, config) {
                        callback(data);

                        // this callback will be called asynchronously
                        // when the response is available
                    }).
                    error(function(data, status, headers, config) {
                        console.log(arguments);
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                break;

            case 'delete':
                request = {
                    method: 'DELETE',
                    url: apicall.path
                };
                if(data){
                    request.data = data;
                }
                $http(request).
                    success(function(data, status, headers, config) {
                        callback(data);

                        // this callback will be called asynchronously
                        // when the response is available
                    }).
                    error(function(data, status, headers, config) {
                        console.log(arguments);
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                break;
        }
    };
    return {
        message: {
            post: function(data, callback){
                var apicall = {
                    path: '/api/message/add',
                    method: 'post'
                };
                API(apicall, data, callback);
            }
        },
        messages: {
            get: function(data, callback){
                var apicall = {
                    path: '/api/messages/list',
                    method: 'get'
                };
                API(apicall, data, callback);
            },
            remove: function(data, callback){
                var apicall = {
                    path: '/api/messages/clear',
                    method: 'delete'
                };
                API(apicall, data, callback);
            }
        }

    };
});