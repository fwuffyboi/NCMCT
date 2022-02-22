const mongoose = require('mongoose');

async function name(params) {
    try {
        // connection settings
        const host = "mongodb-ip";
        const port = "27017";

        await mongoose.connect(`mongodb://${host}:${port}/cosmos`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch(err => {
            console.log(err);
        });

        const TestSchema = new mongoose.Schema({
            main: String,
        })

        const Model1 = mongoose.model('accounts', TestSchema);

        Model1.find({}, (err, data) => {
            return console.log(data);
        })
    } catch (error) {
        return console.log(error)
    }
}

name()