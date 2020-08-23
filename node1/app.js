// Routing requests
// Different responses for different requests
// different request means different extention after the domain name   Ex -:
// localhost:3000/mypage, localhost:3000/mainpage, localhost:3000/ etc

const ht = require('http');

const serv = ht.createServer((req,res)=>{
    if(req.url == '/mainpage'){
        res.write('<html>');
        res.write('<head><title>Main page</title></head>');
        res.write('<body><h1>This is the main page and u are at "/mainpage"</h1></body>');
        res.write('</html>');
        return res.end();
        // returning here is very important else it will execute the last section of html code which would give error because it will come after .end()
    }
    if(req.url == '/mypage'){
        res.write('<html>');
        res.write('<head><title>My page</title></head>');
        res.write('<body><h1>welcome to my page and u are at "/mypage"</h1></body>');
        res.write('</html>');
        return res.end();
        // returning here is very important else it will execute the last section of html code which would give error because it will come after .end()
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page...</title></head>');
    res.write('<body><h1>Hi this is kartik saxena and this is my node.js page.</h1></body>');
    res.write('</html>');
    res.end();


});

serv.listen(3000);


// we will retrieve the extensions after the domain name using .url() and then compare it within the conditional statements.
// This evetually will give different results for different requests


