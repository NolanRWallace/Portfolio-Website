const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/portfolio', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("Connection Established"))
    .catch( err => console.log("Connection Failed", err));