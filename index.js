const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const Post = require('./models/Post')

app.use(express.static('./views'))

//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("./views", {
  express: app,
  noCache: true,
})
//config body-parser
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())

//rotas
app.get('/', function(req, res){//para listar em ordem usa se asc ou desc
  Post.findAll({order: [['id', 'desc']] }).then(function(posts){
    res.render('home.html', {posts: posts})
  })
})

app.get('/cad', function(req, res){
  res.render('formulario.html')
})

app.post('/add', function(req, res){
  Post.create({
    titulo: req.body.titulo, //este body é do body-parser vindo do post da web
    conteudo: req.body.conteudo
  }).then(() => {
    res.redirect('/')
  }).catch(function(erro){
    res.send("Erro ao criar postagen" +erro)
  })
})

app.get('/del-pag/:id', function(req, res){
  Post.destroy({
      where: {'id': req.params.id}
  }).then(function(){
      res.redirect('/')
  }).catch(function(erro){
      res.send('Erro ao apagar item' + erro)
  })
})


app.listen(8081, function(){
  console.log("servidor na porta 8081")
})