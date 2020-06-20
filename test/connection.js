const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise=global.Promise;

//Connect to the db before tests run
before(function(done){
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testroo');

    //once is an event listner
    mongoose.connection.once('open',function(){
        console.log("Connection has been made");
        done();
    }).on('error',function(error){
        console.log("Connection Error : ", error);
    });
});

