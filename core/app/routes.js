// app/routes.js
var pg       = require('pg');
var database = require('../config/db');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        var results = [];
        app.get('/WILLIAMGROSSEBITCH', function(req, res) {
            pg.connect(database.connect, function (err, client, done) {
                if (err) {
                    done();
                    console.err(err);
                    return res.status(500).json('Database connection failed bitch !');
                }

                var query = client.query("SELECT * FROM items");
                query.on('row', function (row) {
                    results.push(row);
                });

                query.on('end', function () {
                    done();
                    return res.status(200).json(results);
                });
            });
        });
    };