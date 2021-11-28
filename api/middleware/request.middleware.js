const requestCheck = async (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if(req.method === 'POST') {
        req.appData = req.body;
    }else{
        req.appData = req.query;
    }
    next();
}

module.exports = {
    requestCheck
}