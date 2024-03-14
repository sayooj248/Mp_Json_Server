//importing json-server package
const JSONserver=require('json-server')

//creating servser using create() method from json-server
const MPserver=JSONserver.create()

//genarating path/route to server resource
const router=JSONserver.router('db.json')

//initiating json-server middlewares
const middlewares=JSONserver.defaults()

//creating PORT number for server
const PORT=3000 | process.env.PORT

//implementing middlewares to server
MPserver.use(middlewares)

//implementing route to resource to server
MPserver.use(router)  

//run command for server
MPserver.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`);
})