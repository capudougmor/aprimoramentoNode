//arquivo para criar as tablelas

const db = require('./db')

const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.Sequelize.STRING
  },
  conteudo: {
    type: db.Sequelize.TEXT
  }
})

//Post.sync({force: true}) //arquivo para criar a tabela só deve ser usado uma vez

module.exports = Post