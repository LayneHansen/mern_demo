const router = require('express').Router();

router  
    .route('/')
    .get((req, res) => {
        console.log('hit the get route in /api/todos');
        res.json({ success: true });
    })
    .post((req, res) => {
        console.log({ reqBody: req.body });
        res.json({ success: true });
    });

    module.exports = router;