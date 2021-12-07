import express from "express";

//@types/express é um sub biblioteca com as tipagens do biblioteca express
const app = express();

/*
get  => buscar uma informação
post => inserir (criar) uma informação
put  => alterar uma informação
delete => remover um dado
patch => alterar uma irformação epecifica
*/

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo
  return response.send('Òla NLW')
})

app.post("/test-post", (request, response) => {
  return response.send("Òla nlw método POST")
})









// http://localhost:3000
app.listen(3000, () => console.log('Server is running '))
// yarn add ts-node-dev -D para automatizar a execução do projeto.