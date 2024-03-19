const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarProdutos(request, response) { //request é o que vem do frontend
        try { //sistema try catch, vai passar pela primeira opção, se der erro em alguma linha ele vai entrar na segunda opção e mostrar a mensagem
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Produtos',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição \n ${error}',
                dados: null
            });
        }
    },
    async cadastrarProdutos(request, response) { //request é o que vem do frontend
        try { //sistema try catch, vai passar pela primeira opção, se der erro em alguma linha ele vai entrar na segunda opção e mostrar a mensagem
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de Produtos',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição \n ${error}',
                dados: null
            });
        }
    },
    async editarProdutos(request, response) { //request é o que vem do frontend
        try { //sistema try catch, vai passar pela primeira opção, se der erro em alguma linha ele vai entrar na segunda opção e mostrar a mensagem
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar Produtos',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição \n ${error}',
                dados: null
            });
        }
    },
    
    async apagarProdutos(request, response) { //request é o que vem do frontend
        try { //sistema try catch, vai passar pela primeira opção, se der erro em alguma linha ele vai entrar na segunda opção e mostrar a mensagem
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Apagar Produtos',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição \n ${error}',
                dados: null
            });
        }
    },
    
}