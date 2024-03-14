const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios(request, response) { //request é o que vem do frontend
        try { //sistema try catch, vai passar pela primeira opção, se der erro em alguma linha ele vai entrar na segunda opção e mostrar a mensagem
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Usuários',
                dados: null
            })
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição \n ${error}',
                dados: null
            });
        }
    },
    
}