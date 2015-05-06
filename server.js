/**
 * Created by ian on 5/6/15.
 */

// Import the modules installed to our server
var express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var Speaker = require('./server/models/speaker');
=======
>>>>>>> origin/master

// Start the Express Web Framework
var app = express();

// Configure the app
app.use(bodyParser());

<<<<<<< HEAD
// Defining the Routes for our API
var router = express.Router();

// Start the Router
router.use(function(req, res, next){
    console.log('An action was performed by the server.');
    next();
});

router.get('/', function(req, res){
    res.json({
        message: 'Hello SPA. The application is working'
    });
});

router.route('/speakers')
    .post(function(req, res){
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
    })
    .get(function(req, res){
        Speaker.find(function(err, speakers){
            if (err) res.send(err);
            res.json(speakers);
        })
    });

router.route('/speakers/:speaker_id')
    .get(function(req, res){
        Speaker.findById(req.params.speaker_id, function(err, speaker){
            if (err) res.send(err);
            res.json(speaker);
        });
    })
    .put(function(req, res){
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
    .delete(function(req, res){
        Speaker.remove({
            _id:req.params.speaker_id
        }, function(err, speaker){
            if(err) res.send(err);
            res.json({
                message: 'Speaker successfully removed'
            });
        });
    });
app.use('/api', router);

=======
>>>>>>> origin/master
// Where the Application will run
var port = process.env.PORT || 8080;

// Import Mongoose
var mongoose = require('mongoose');

<<<<<<< HEAD
//var uri = 'mongodb://127.0.0.1/conference-api';
mongoose.connect('mongodb://127.0.0.1/conference-api');
//mongoose.connect('mongodb://username:password@kahana.mongohq.com:10072/node-api');

// Start the Node Server
app.listen(port);
console.log('Application is running at http://localhost:'+port+"/");
=======
>>>>>>> origin/master
