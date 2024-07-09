import { User, UserStore, UserUpdate } from "./user";

let users: User[] = [];

const getAll = (): User[] => {
  return users
}

const getOne = (id: number): User | undefined => {
  return users.find((user) => user.id === id);
}

const store = ({
  nome,
  idade
}: UserStore): boolean => {
  users.push({
    id: users.length + 1,
    nome: nome,
    idade: idade,
  });

  return true
}

const update = (id: number, param: UserUpdate): boolean => {
  users = users.map((user) => {
    if (id === user.id) {
      return {
        ...user,
        ...param,
      };
    }
    return {
      ...user,
    };
  });

  return true
}

const destroy = (id: number): boolean => {
  users = users.filter((user) => user.id !== id);

  return true
}

export default {
  getAll,
  getOne,
  store,
  update,
  destroy
}