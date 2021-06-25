const dns = require('dns');
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');


/* 1.Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. 
(Search and learn 'dns' module, resolve4) */

//dns.resolveAny(hostname, callback)

function IP_Add() {
    const IPAddress = dns.lookup('www.miu.edu', (err, address) => {
        console.log('IP_Address for www.miu.edu: ' + address)
    })
}

IP_Add()

 //2. Create a web server that's going to send a response of big image
//app.get('/report/:chart_id/:user_id', function (req, res) {
    // res.sendFile(filepath);
fs.readFile('asmara_Cathedral.jpg', (err, data)=>{
    if(err) throw err;
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type': 'image/jpeg'}); 
        res.end(data); 
    }).listen(3000, ()=>{
        console.log('Server Listening port 3000')
    })
})

//Using Node Stream API, create a script to unzip a file (after you zip it). (Use zlib.createGunzip() stream)
const gzip = zlib.createGzip();
const unzip = fs.createReadStream(path.join(__dirname, 'unzip.txt'));
const ziped = fs.createWriteStream(path.join(__dirname, 'ziped.txt.gz'));
unzip.pipe(gzip).pipe(ziped);
