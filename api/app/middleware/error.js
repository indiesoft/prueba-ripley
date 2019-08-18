export default (app) => {
    const log = app.get('log')
    app.use((err, req, res, next) => {
        console.log(err)
        res.status(err.output || 500).json({ status: 'Internal Error' });
    })
};

