/* MongoDB related settings */
var mongoose = require('../mongoose'),
    MessageSchema = mongoose.Schema({message: String, createdAt: String }),
    MessageModel = mongoose.model('Message', MessageSchema);

/* Sockets.io related settings */
var sockets = require('../sockets').ioSockets;
var sock;
sockets.on('connection', function (socket){
    sock = socket;
});

/* API methods */
module.exports = {
    message: {
        GET: function(req, res) {
            // get specific message
            MessageModel.find({message: req.query.message}, function(err, message) {
                var response;
                if(err){
                    response = {
                        success: false,
                        data: null
                    };
                }else{
                    response = {
                        success: true,
                        data: message
                    };
                }
                res.json(response);
            });
        },
        POST: function(req, res) {
            var response;
            var msg = req.body.message,
                srvTime = new Date(),
                messageToWrite = {
                    message: msg, 
                    createdAt: srvTime.getHours()+':'+srvTime.getMinutes()
                },
                message = new MessageModel(messageToWrite);
            message.save(function (err) {
                if(err){
                    console.log(err);
                    response = {
                        success: false,
                        data: null
                    };                    
                }else{
                    sockets.emit('newMessage', messageToWrite);
                    response = {
                        success: true,
                        data: messageToWrite
                    };                    
                }
                res.json(response);
            });
        }
    },
    messages: {
        GET: function(req,res) {
            MessageModel.find({},function(err,messages){
                var response;
                if(err){
                    response = {
                        success: false,
                        data: null
                    };
                }else{
                    response = {
                        success: true,
                        data: messages
                    };    
                }
                res.json(response);
            });
        },
        DELETE: function(req,res) {
            MessageModel.remove({},function(err){
                var response;
                if(err){
                    response = {
                        success: false,
                        data: null
                    };  
                }else{
                    sockets.emit('clearMessages', []);
                    response = {
                        success: true,
                        data: []
                    };
                }
                res.json(response);
            });
        }
    }
};