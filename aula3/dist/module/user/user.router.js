"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_service_1 = __importDefault(require("./user.service"));
exports.router = (0, express_1.Router)();
exports.router.get('/', (_, res) => {
    const result = user_service_1.default.getAll();
    return res.status(200).json(result);
});
exports.router.get('/:id', (req, res) => {
    const result = user_service_1.default.getOne(parseInt(req.params.id, 10));
    return res.json(result);
});
exports.router.post('/', (req, res) => {
    const { nome, idade } = req.body;
    const result = user_service_1.default.store({
        nome,
        idade
    });
    return res.status(201).json({
        message: 'Usuário criado com sucesso',
    });
});
exports.router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const result = user_service_1.default.update(id, req.body);
    return res.json({
        message: 'Atualizar dados de um usuário',
    });
});
exports.router.delete('/:id', (req, res) => {
    const result = user_service_1.default.destroy(parseInt(req.params.id, 10));
    return res.json({
        message: 'Usuário removido',
    });
});
exports.default = exports.router;
