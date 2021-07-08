const jwt = require('jsonwebtoken');
const User = require('../model/authoModel');
const accessTokenSecret = "here is secret key";


exports.login = (req, res, next) => {
    const user = new User(req.body.username, req.body.password, null).login();
    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
        res.json({ accessToken });
    } else {
        res.status(200).json({ 'error': 'username or password invalid' });
    }
}


exports.authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, accessTokenSecret, (err, user) => {
            console.log(user);
            if (err) {
                return res.status(403).json({ "error": "Forbidden" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ "error": "Unauthorized" });
    }
}