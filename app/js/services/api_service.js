angular.module('app').factory('ApiService', function(ApiRoutesServices){
    var DefaultArgVals = function(){
        this.obj = {
            _data: {},
            _callback: function(){}
        };
        return this.obj;
    };
    var sanitizeRequest = function(d, c){
        var defVals = new DefaultArgVals();
        if(typeof d === 'object'){
            defVals._data = d;
        }else
        if(typeof d === 'function'){
            defVals._callback = d;
        }
        if(typeof c === 'function'){
            defVals._callback = c;
        }
        return {
            data: defVals._data,
            callback: defVals._callback
        };
    };
    return {
        get: function(serviceName, d, c){
            var args = sanitizeRequest(d, c);
            ApiRoutesServices[serviceName].get(args.data, function(response){
                args.callback(response);
            });
        },
        post: function(serviceName, d, c){
            var args = sanitizeRequest(d, c);
            ApiRoutesServices[serviceName].post(args.data, function(response){
                args.callback(response);
            });
        },
        put: function(serviceName, d, c){
            var args = sanitizeRequest(d, c);
            ApiRoutesServices[serviceName].put(args.data, function(response){
                args.callback(response);
            });
        } ,
        remove: function(serviceName, d, c){
            var args = sanitizeRequest(d, c);
            ApiRoutesServices[serviceName].remove(args.data, function(response){
                args.callback(response);
            });
        }
    };
});