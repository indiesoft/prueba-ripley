export default (app, admin) => {
  app.use((req, res, next) => {
    
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    
    const token = req.headers.authorization
    if (!token) {
      res.status(401).json({ status: 'User unauthorized' })
    } else {
      admin.auth().verifyIdToken(token)
        .then(function (decodedToken) {
          let uid = decodedToken.uid
          app.set('uid', uid)
          next()
        }).catch(function (error) {
          res.status(401).json({ status: 'User unauthorized' })
        });
    }
  });
};
