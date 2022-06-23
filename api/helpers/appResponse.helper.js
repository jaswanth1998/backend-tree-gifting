module.exports = {
    appDeafultResponse: (res, status, data) => {
        if (status) {
            res.status(200).json({
                success: true,
                data: data,
            });
        } else {
            console.log(data);
            res.status(503).send(data)

        }
    }
}