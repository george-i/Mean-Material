module.exports = [
    {
        path: '/api/message/add',
        method: 'POST',
        query: 'message'
    },
    {
        path: '/api/message/get',
        method: 'GET',
        query: 'message'
    },
    {
        path: '/api/messages/list',
        method: 'GET',
        query: 'messages'
    },
    {
        path: '/api/messages/clear',
        method: 'DELETE',
        query: 'messages'
    }
];