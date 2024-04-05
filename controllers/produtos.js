const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarProdutos(request, response) {
        try {
           // instruções SQL
           const sql = `SELECT * FROM produtos`;
           // executa instruções SQL e armazena o resultado na variável usuários
           const produtos = await db.query(sql);
           // armazena em uma variável o número de registros retornados
           const nItens = produtos[0].length;

           return response.status(200).json({
               sucesso: true,
               mensagem: 'Lista de usuários.',
               dados: produtos[0],
               nItens
           });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    },
    async cadastrarprodutos(request, response) {
        try {
            // parâmetros recebidos no corpo da requisição
            const { prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao } = request.body;
            // instrução SQL
            const sql = `INSERT INTO usuarios 
                (usu_nome, usu_email, usu_dt_nasc, usu_senha, usu_tipo, usu_ativo) 
                VALUES (?, ?, ?, ?, ?, ?)`;
            // definição dos dados a serem inseridos em um array
            const values = [prd_id, prd_nome, prd_valor, prd_unidade, ptp_id, prd_disponivel, prd_img, prd_destaque, prd_img_destaque, prd_descricao];
            // execução da instrução sql passando os parâmetros
            const execSql = await db.query(sql, values);
            // identificação do ID do registro inserido
            const usu_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de usuário efetuado com sucesso.',
                dados: usu_id
                //mensSql: execSql
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },
    async editarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar produtos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
    async apagarProdutos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar produtos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: `Erro na requisição. -${error}`, 
                dados: null
            });
        }
    }, 
}

