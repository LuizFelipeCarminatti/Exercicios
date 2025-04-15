const Sequelize = require('sequelize')
const { Model } = Sequelize

module.exports = class Aluno extends Model {
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 100],
                        msg: 'Nome precisa ter entre 1 e 100 caracteres.'
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido'
                    }
                }
            },
        }, {
            sequelize,
            tableName: 'aluno'
        })
        return this
    }
}