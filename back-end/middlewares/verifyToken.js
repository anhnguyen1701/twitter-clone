const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    // access authorization from req header
    const Authorization = req.header('authorization');
    console.log("verify");

    if(!Authorization) {
        // error: unauthorized
        const err = new Error('Unauthorized!');
        err.statusCode = 401;
        return next(err);
    }

    //get token
    const token = Authorization.replace('Bearer ', '');

    //verify token
    const {userId} = jwt.verify(token, process.env.APP_SECRET);

    //asign req
    req.user = {userId};
    next();
}