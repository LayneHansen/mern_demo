const router = require('express').Router();
const { Todo } = require('../models');

router  
    .route('/')
    .get((req, res) => {
        // Todo
        // .find({})
        // .then(data => {
        //     console.log('TODO GET');
        //     console.log({ data })
        //     res.json({ success: true, data })
        // })
        // .catch(err => {
        //     console.log({ err });
        //     res.json({ success: false });
        // });
        // console.log('hit the get route in /api/todos');
        res.json({ todo: "read my mind at all times" });
    })
    .post((req, res) => {
        console.log({ reqBody: req.body });
        res.json({ success: true });
        
        Todo
        .create({
            text: req.body.text
        })
        .then(data => {
            console.log({ data })
            res.json({ success: true, data })
        })
        .catch(err => {
            console.log({ err });
            res.json({ success: false });
        });
    });

    router  
        .route('/:id')
        .delete((req, res) => {
            console.log(req.params);
            res.json({ success: true });

            Todo
                .findByIdAndDelete(req.params.id)
                .then(data => {
                    console.log({ data })
                    res.json({ success: true });
                })
                .catch(err => {
                    console.log({ err })
                    res.json({ success: false });
                });
        });

    module.exports = router;