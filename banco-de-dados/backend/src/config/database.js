require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,  // Corrigido para 'timestamps' (deve ser em minúsculo)
    underscored: true,  // Permite que o Sequelize use nomes de coluna no estilo snake_case
    underscoredAll: true,  // Aplica o estilo snake_case a todas as colunas e relacionamentos
    createdAt: 'created_at',  // Usado para mapear a coluna 'create_at'
    updatedAt: 'updated_at',  // Usado para mapear a coluna 'update_at'
  },
  dialectOptions: {
    allowPublicKeyRetrieval: true,
  },
};