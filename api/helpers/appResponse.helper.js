module.exports = {
    appDeafultResponse: (res, status, data) => {
        if (status) {
            res.status(200).json({
                success: true,
                data: data,
            });
        } else {
            res.status(503).json({
                success: false,
                message: data,
            });

        }
    }
}