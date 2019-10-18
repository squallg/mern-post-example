/*
 * Users controller
 */

/* Models imports */
var User = require('../models/User');

var users = {

    createUser: (req, res) => {
        var data = req.body;

        if(!data.firstname || !data.lastname) {
            res.status(400).json({message: 'Veuillez compléter tous les champs'});
            return;
        }

        var newUser = new User({
            firstname: data.firstname,
            lastname: data.lastname
        });

        newUser.save((error) => {
            if(error) {
                res.status(500).json({message: "Une erreur s'est produite"});
                return;
            }

            res.json({message: 'Utilisateur créé'});
        });

    }
}

module.exports = users;