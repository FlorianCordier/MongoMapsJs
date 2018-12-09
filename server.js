const config = require('./config/config');
let express  = require('express');
let app      = express();
let server   = require('http').createServer(app);
let twig     = require('twig');
let mongoose = require('mongoose');


//CONFIGURATIONS
app.set('views', __dirname + '/ressources/views');
app.set('view engine', 'twig');

if(config.app.mode == 'dev'){
    twig.cache(false);
}


//MONGODB DATABASE

// //Create database (named 'mydb')
// let url = "mongodb://localhost:27017/mydb";
// mongoose.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database " + "mydb" + " created!");
//     db.close();
// });

// //Insert
// let kittySchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// let Kitten = mongoose.model('Kitten', kittySchema);

// let kittyLeon = new Kitten({
//     name: "Léon",
//     age: 19
// });
// console.log(kittyLeon.name + "  " + kittyLeon.age);

// kittyLeon.save();


//ROUTES
app.use(express.static(__dirname + '/public'));
require('./routes/routes')(app);


server.listen(config.app.port, () => {
    console.log(`Server run on port ${config.app.port}`);
});