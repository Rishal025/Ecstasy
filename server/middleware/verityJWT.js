const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if(!authHeader?.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log('authheader' +authHeader);  //Bearer token
    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.sendStatus(403).json({message: 'Forbidden'}) //invalid token
            req.user = decoded.userInfo.username
            req.roles = decoded.userInfo.roles
            next();
        }
    );
}

moodule.export = verifyJWT;