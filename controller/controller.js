const db = require('../model');
const fs = require('fs');
const querystring = require('querystring');

module.exports = {
    get: (req, res) => {
        res.send('/')
    },

    uploadToDB: (req, res) => {
        console.log("uploading file to Database...");
        console.log(req.body);
        // let newItem = new DataTransferItem();
        db.File.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    uploadToFS: (req, res) => {
        console.log('uploading file to FS...');
        console.log(req.body);
        // console.log(querystring.parse(req.body));
        // let strung = req.body[0].name.toString('utf8');
        // console.log(req);
        let output = (JSON.stringify(req.body.file));
        // let reader = new FileReader();
        // reader.readAsArrayBuffer(req.body);
        // const data = new Uint8Array(Buffer.from(req.body.name));
        // console.log("this is the buffer data: " + data);
        fs.writeFile(req.body.name, output, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        fs.readFile(req.body.name, 'utf8', (err, data2) => {
            if (err) throw err;
            console.log("FS Read: " + data2);
        })
    },
    uploadToConsole: (req, res) => {
        console.log('logging...');
        console.log(req.body);

    }

}