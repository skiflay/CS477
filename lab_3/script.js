const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    const url= req.url;
    const method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head> <title> lab-3 </title> </head>');
        res.write('<body> <form action="abc" method="POST"> Enter Message <input type="text" name="msg"> <input type="submit" value="submit"> </form></body>');
        res.end();
    } else if(url==='/abc' && method==="POST"){
       const body = []
       req.on('data', chunk=>{
           body.push(chunk)
       })
      req.on('end', ()=>{
          const dataPost= Buffer.concat(body).toString();
          const dataPostArr = []
          dataPostArr.push(dataPost)
          const dataSplit = dataPostArr[0].split('=');
          const dataMsg = dataSplit[1].split('+');
          fs.writeFile('database.txt', `${dataSplit[0]}: ${dataMsg[0]} ${dataMsg[1]}`, err=>{
              if(err) res.write('Try later');
              else res.end('Thank You for your submission')
          });
      })
    }
}).listen(3000, ()=>{console.log('Server is running on port 3000')});