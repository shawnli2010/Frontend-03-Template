const http =  require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);             
    }).on('end', () =>{
        body = Buffer.concat(body).toString();
        console.log(body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(
`<html lang=en>
<head>
    <title>Document</title>
    <style>
    #container{
        display: flex;
        width: 500px;
        height: 300px;
        background-color: rgb(255,255,255);
    }
    #container #flex1 {
        width: 300px;
        height: 100px;
        background-color: rgb(255,0,0);
    }
    #container #flex2 {
        flex: 1;
        height: 300px;
        background-color: rgb(0,255,0);
    }
    </style>
</head>
<body>
    <div id="container">
    <div id="flex1">1111</div>
    <div id="flex2">2222</div>
    </div>
</body>
</html>
`
);
    });
}).listen(8088);

console.log("server started");