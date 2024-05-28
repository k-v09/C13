const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes); // Ensure '/api' prefix is used correctly

router.use((req, res) => {
  res.send("wrong route!"); // Catch-all for undefined routes
});

module.exports = router;
