// Import the modules installed to our server
var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
var Speaker = require('../models/speaker');

// Start the Express Web Framework
var app = express();

// Configure the app
app.use(bodyParser());

// Start the Router
router.use(function (req, res, next) {
    console.log('An action was performed by the server.');
    next();
});

router
    .get('/', function (req, res) {
        //res.json({
        //    message: 'Hello SPA. The application is working'
        //});
        Speaker.find(function (err, speakers) {
            if (err) res.send(err);
            res.json(speakers);
        });
    })
    .post('/', function (req, res) {
        var speaker = new Speaker();

        speaker.name = req.body.name;
        speaker.company = req.body.company;
        speaker.title = req.body.title;
        speaker.description = req.body.description;
        speaker.picture = req.body.picture;
        speaker.schedule = req.body.schedule;

        speaker.save(function(err){
            if(err) res.send(err);
            res.json({
                message: 'Speaker successfully added.'
            });
        });
    });

router
    .get('/:speaker_id', function(req, res){
        Speaker.findById(req.params.speaker_id, function(err, speaker){
            if (err) res.send(err);
            res.json(speaker);
        });
    })
    .put('/:speaker_id', function(req, res){
        Speaker.findById(req.params.speaker_id, function(err, speaker){
            if (err) res.send(err);

            // Set the speaker properties
            speaker.name = req.body.name;
            speaker.company = req.body.company;
            speaker.title = req.body.title;
            speaker.description = req.body.description;
            speaker.picture = req.body.picture;
            speaker.schedule = req.body.schedule;

            speaker.save(function(err){
                if(err) res.send(err);
                res.json({
                    message: 'Speaker successfully updated'
                });
            });
        })
    })
    .delete('/:speaker_id', function(req, res){
        Speaker.remove({
            _id:req.params.speaker_id
        }, function(err, speaker){
            if(err) res.send(err);
            res.json({
                message: 'Speaker successfully removed'
            });
        });
    });

module.exports = router;