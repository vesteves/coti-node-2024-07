"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
const getAll = () => {
    return users;
};
const getOne = (id) => {
    return users.find((user) => user.id === id);
};
const store = ({ nome, idade }) => {
    users.push({
        id: users.length + 1,
        nome: nome,
        idade: idade,
    });
    return true;
};
const update = (id, param) => {
    users = users.map((user) => {
        if (id === user.id) {
            return Object.assign(Object.assign({}, user), param);
        }
        return Object.assign({}, user);
    });
    return true;
};
const destroy = (id) => {
    users = users.filter((user) => user.id !== id);
    return true;
};
exports.default = {
    getAll,
    getOne,
    store,
    update,
    destroy
};
