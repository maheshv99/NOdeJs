const http=require('http');
http.createServer((req,res)=>{
    res.write('<h1>what is nodejs</h1>');

    const details = {
        Definition: "Node is a JS runtime environment through which we can run JS in our machine",
        Use: "It is used to create the backend or server-side appliccations"
    }
   
    res.end(JSON.stringify(details))

}).listen(5000)
