"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let alunos = [];
app.get('/user', (req, res) => {
    return res.status(200).json(alunos);
});
app.get('/user/:id', (req, res) => {
    const aluno = alunos.find((aluno) => aluno.id === parseInt(req.params.id, 10));
    return res.json(aluno);
});
app.post('/user', (req, res) => {
    const { nome, idade } = req.body;
    alunos.push({
        id: alunos.length + 1,
        nome: nome,
        idade: idade,
    });
    return res.status(201).json({
        message: 'Usuário criado com sucesso',
    });
});
app.put('/user/:id', (req, res) => {
    alunos = alunos.map((aluno) => {
        if (parseInt(req.params.id, 10) === aluno.id) {
            return Object.assign(Object.assign({}, aluno), req.body);
        }
        return Object.assign({}, aluno);
    });
    return res.json({
        message: 'Atualizar dados de um usuário',
    });
});
app.delete('/user/:id', (req, res) => {
    alunos = alunos.filter((aluno) => aluno.id !== parseInt(req.params.id, 10));
    return res.json({
        message: 'Usuário removido',
    });
});
app.listen(8000, () => {
    console.log('Sistema ON');
});
