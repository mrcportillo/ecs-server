module.exports = function(app) {
  app.use('/api/check', (req, res) => {
    return res.send({ ok: true, time: new Date().toISOString() });
  });
};
