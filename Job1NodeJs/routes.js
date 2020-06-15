const requestHandler = (req,res)=>{
    const url       = req.url;
    const method    = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Welcome to my NodeJS Server</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username"><button type="submit">Submit</button>')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Dytlan </li>');
        res.write('<li> Dyt </li>');
        res.write('<li> Adit </li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if( url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>body.push(chunk));
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const username   = parsedBody.split('=')[1];

            console.log(username);
            res.statusCode  = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }

}

module.exports = requestHandler;