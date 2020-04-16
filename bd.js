const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  host: "localhost",
  dialect: 'mysql',
  username: 'root',
  password: '@AnaClara021184',
  database: 'test',
  define: {
    timestamps: true,
    underscored: true,
  },
})

sequelize.authenticate().then(function() {
  console.log("Conectado com sucesso!")
}).catch(function(erro) {
  console.log("Falha ao se conectar: "+erro)
})

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

const Usuario = sequelize.define('usuerios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type:Sequelize.STRING
  }
})

/*Usuario.sync({force: true}).then(function() {
  console.log("Tabela criada com sucesso!")
}).catch(function(erro) {
  console.log("Falha ao criar tabela: "+erro)
})*/// este bloco é parao comando de criação da tabela e é usado apenas uma vez