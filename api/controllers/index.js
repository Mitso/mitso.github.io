const User = require('../models');

module.exports =  {
    listUsers: function (req, res) {
        res.render('user-form');
    },
    createUserEntry: function(req, res) {
        let inputs = req.body;
        User.createEntry(inputs, function(data) {
            res.render('user-form');
            console.log(('Record was created', data));
        });
    }
}