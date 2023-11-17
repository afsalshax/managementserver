//import json server
const jsonserver=require('json-server')
//import cors
const cors=require('cors')

//create json server
const server=jsonserver.create()


//json type data - js data - before request resolve 
const middleware = jsonserver.defaults()


//create a router
const router=jsonserver.router('db.json')



//apply in server
server.use(middleware)
server.use(cors())
server.use(router)

const PORT=6001
server.listen(PORT,()=>{
    console.log(`___json Serever Started At Port : ${PORT}___`);
})