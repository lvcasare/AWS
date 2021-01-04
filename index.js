const { request, response } = require('express');
var express = require('express');

const app = express();

app.get('/',(request,response)=>{
return response.json({message:'Server is up - 2'})

})

app.listen(3333);//
console.log('Listening 3333. New4');
