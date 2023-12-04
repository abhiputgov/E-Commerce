const router = require('express').Router();

router.get('/usertest', (req, res) => {
  res.send('user test is successful');
  console.log('oh yeah');
});
router.get('/usergettest', (req, res) => {
  res.send('user test is successful 2');
});

router.post('/userposttest', (req, res) => {
  res.send(req.body.username);
});

module.exports = router;
