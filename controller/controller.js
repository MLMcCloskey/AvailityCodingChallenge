const db = require('../model');
const fs = require('fs');
const querystring = require('querystring');

module.exports = {
    get: (req, res) => {
        res.send('root')
    },

    upload: (req, res) => {
        console.log('test');
        console.log(req.body);
        // console.log(querystring.parse(req.body));
        // let strung = req.body[0].name.toString('utf8');
        // console.log(req);
        console.log(querystring.parse(req.body.file));
        // let reader = new FileReader();
        // reader.readAsArrayBuffer(req.body);
        const data = new Uint8Array(Buffer.from(req.body.name));
        // console.log("this is the buffer data: " + data);
        fs.writeFile(data, req.body.file[0], (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
        fs.readFile(data, 'utf8', (err, data2) => {
            if (err) throw err;
            console.log("FS Read: " + data2);
        })
    }
}