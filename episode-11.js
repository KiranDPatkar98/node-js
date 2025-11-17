const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url)

if(req.url ==='/home'){
    res.end("Hello from Home side")
}
    res.end("Hello from my side")

})


server.listen(3000)