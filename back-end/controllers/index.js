/*
 * Index controller
 */

var index = {

    message: (req, res) => {
        res.json({
            message: "Welcome to your brand new MERN Stack project. Create something great. ;)"
        });
    }
}

module.exports = index;