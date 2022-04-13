// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const mongoose = require('mongoose');
var disabled = true;

export default async function makeAccount(
  req: NextApiRequest,
  res: NextApiResponse,
  data: any
) {
    if (req.method === 'POST') {
        const reqEmail = req.body.username
        try {
            
            // console.log(requestBody)
            // connection settings
            /*const host = "localhost";
            const port = "27017";
            const mongoUsername = "fwuffyboi";
            const mongoPassword = "fwuffyboi";
    
            await mongoose.connect(`mongodb://${mongoUsername}:${mongoPassword}@${host}:${port}/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
            `, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).catch(err => {
                // console.log(err);
            });
    
            // connect to mongoose with a username and password        
            var db = mongoose.connection;
    
            db.on('error', console.error.bind(console, 'connection error:'));
            
            db.once('open', function() {
                // console.log("Connection Successful!");
            });
    
            const TestSchema = new mongoose.Schema({
                main: Array,
            })
    
            const Model1 = mongoose.model('accounts', TestSchema);
    
            // insert document
            const doc = new Model1({
                main: data
            });
    
            // save data
            doc.save(function (err, doc) {
                if (err) return console.error(err);
                // console.log(doc);
            })
            
            res.status(200)
            res.send({ message: 'Account created.' })
            res.end()*/

            if (disabled === true) {
                res.status(403)
                res.send({ message: 'This endpoint is currently disabled.' })
                res.end()

            } else {
                const reqBody = JSON.parse(req.body)
                res.status(200)
                res.json({ message: reqBody?.username })
                res.end()
            }

        } catch (error) {
            if (disabled === true) {
                res.status(403)
                res.send({ message: 'This endpoint is currently disabled.' })
                res.end()

            } else {
                res.status(500)
                res.send({ message: reqEmail })
                res.end()
            }
        }

  } else if (req.method === "GET") {
    if (disabled === true) {
        res.status(403)
        res.send({ message: 'This endpoint is currently disabled.' })
        res.end()
    } else {
        res.status(405)
        res.send({ message: 'Sorry, you can only send POST requests to this API endpoint.' })
        res.end()
    }
        
  }
}


/*
const bcrypt = require('bcrypt');               //Importing the NPM bcrypt package.
const saltRounds = 10;                          //We are setting salt rounds, higher is safer.
const myPlaintextPassword = 's0/\/\P4$$w0rD';   //Unprotected password


 Here we are getting the hashed password from the callback,
we can save that hash in the database 
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  //save the hash in the db
});

/* Here we can compare the hashed password after we get it from
the database with the plaintext password 
bcrypt.compare(myPlaintextPassword, hash, function(error, response) {
    // response == true if they match
    // response == false if password is wrong
}); 
*/