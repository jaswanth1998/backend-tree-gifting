const {
    checkUserToken,
    getUserDetailsByUid
} = require('../../firebase/firebase.ops');

const requestCheck = async (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === 'POST') {
        req.appData = req.body;
    } else {
        req.appData = req.query;
    }
    let token = req.get("authorization");
    next();
   /* if (token) {
        try {
            token = token.slice(7);
            const response = await checkUserToken(token);
            if (response.exists && response['user_id']) {
                const user = await getUserDetailsByUid(response['user_id']);
                req.user = user;
                next();
            } else {
                res.status(401).json({
                    message: 'Invalid Token'
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }

    } else {
        res.status(401).json({
            message: 'Unauthorized'
        });
    }*/
    console.log("I am looger",
        req.baseUrl + req.path)

}

module.exports = {
    requestCheck
}