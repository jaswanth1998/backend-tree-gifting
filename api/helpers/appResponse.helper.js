module.exports = {
    appDeafultResponse: (res, status, data) => {
        if (status) {
            res.status(200).json({
                success: 1,
                data: data,
            });
        } else {
            res.status(503).json({
                success: 0,
                message: data,
            });

        }
    }
}