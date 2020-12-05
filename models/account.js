var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var GebruikerSchema = new Schema(
    {
        prename: { type: String },
        name: { type : String },
        email: { type: String },
        username: { type: String },
        password: { type: String }
    }
);

GebruikerSchema.plugin(passportLocalMongoose)

// Export model
module.exports = mongoose.model('Gebruiker', GebruikerSchema);