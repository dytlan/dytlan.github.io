const fs    = require('fs');

const requestHandler = (req,res)=>{

    const url       = req.url;
    const method    = req.method; 
    
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Request and Response</title></head>');
        res.write('<body>');
        res.write('<form method="POST" action="/message">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody    = Buffer.concat(body).toString();
            const message       = parsedBody.split('=')[1];
            fs.writeFile('test.txt',message, ()=>{
                res.statusCode  = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>NodeJS</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from nodejs server!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;