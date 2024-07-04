const express = require('express');
const app = express();

app.use(express.json());

// http://api.cotiinformatica.com.br:8000/v1/user/3?nome=Vitor&idade=38
// protocolo: http://
// subdominio: api.
// dominio: cotiinformatica.com.br
// porta: :8000
// rota: /v1/user/
// parametro: /3
// query parameter: ?nome=Vitor&idade=38

// ambiente local pode usar 127.0.0.1 ou localhost como domínio

// API restful
// JSON

let alunos = [];

// pegar informação
// status code 200
app.get('/user', (req, res) => {
  return res.status(200).json(alunos);
});

// pegar informação de um único assunto
// status code 200
app.get('/user/:id', (req, res) => {
  const aluno = alunos.find((aluno) => aluno.id == req.params.id);

  aluno = alunoTemp;
  return res.json(aluno);
});

// criar informação
// status code 201
app.post('/user', (req, res) => {
  alunos.push({
    id: alunos.length + 1,
    nome: req.body.nome,
    idade: req.body.idade,
  });
  return res.status(201).json({
    message: 'Usuário criado com sucesso',
  });
});

// atualizar informação
// status code 200
app.put('/user/:id', (req, res) => {
  alunos = alunos.map((aluno) => {
    if (req.params.id == aluno.id) {
      return {
        ...aluno,
        ...req.body,
      };
    }
    return {
      ...aluno,
    };
  });

  return res.json({
    message: 'Atualizar dados de um usuário',
  });
});

// remover informação
// status code 200
app.delete('/user/:id', (req, res) => {
  alunos = alunos.filter((aluno) => aluno.id != req.params.id);

  return res.json({
    message: 'Usuário removido',
  });
});

app.listen(8000, () => {
  console.log('Servidor ON');
  // // string - textos (conjunto de letras, numeros e caracteres especias)
  // const nome = 'Vitor';
  // console.log(typeof nome);

  // // number - números
  // const idade = 38;
  // console.log(typeof idade);

  // // object - Conjunto de informações sobre um determinado assunto
  // const identificacao = {
  //   nome: 'Vitor',
  //   numero: 123321,
  //   instituto: 'Detran',
  // };
  // console.log(identificacao);
  // console.log(identificacao.instituto);

  // // array - Lista de informações
  // const alunos = ['Matheus', 'Gabriel', 'Filipe', 'Leo', 'Geovani'];
  // console.log(alunos);
  // console.log(alunos[3]);

  // class Pessoa {
  //   nome;
  //   idade;

  //   constructor(nome, idade) {
  //     this.nome = nome;
  //     this.idade = idade;
  //   }

  //   dados() {
  //     return `A pessoa ${this.nome} tem a idade ${this.idade}`;
  //   }
  // }

  // const pessoa1 = new Pessoa('Vitor', 38);
  // console.log(pessoa1.dados());

  // const pessoa2 = {
  //   nome: 'Vitor',
  //   idade: 38,
  //   dados: (nome, idade) => {
  //     return `A pessoa ${nome} tem a idade ${idade}`;
  //   },
  // };

  // console.log(pessoa2.dados('Vitor', 38));
});
