//arquivo para se conentar com o banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  host: "localhost",
  dialect: 'mysql',
  username: 'root',
  password: '@AnaClara021184',
  database: 'postapp',
  define: {
    timestamps: true,
    underscored: true,
  },
})

sequelize.authenticate().then(function() {
  console.log("Conectado ao banco de dados!")
}).catch(function(erro) {
  console.log("Falha ao se conectar ao banco de dados: "+erro)
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
