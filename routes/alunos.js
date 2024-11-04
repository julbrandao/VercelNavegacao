//São 3 rotas pois temos 2 arquivos: add.ejs, edit.ejs e show.edit

const express = require('express');
//é o framework responsavel por adaptar as paginas nesse projeto, é o mais simples baseado em js

const router = express.Router();
//permite criar as rotas

//Listar categorias
router.get('/', async(req, res) => {
    //res = resposta, render vai renderizar a pagina sendo base a base
    res.render("base", {
        title: "Alunos",
        view: "alunos/show"
    });
});

//Adicionar categorias

router.get('/add', async(req, res) => {
    //res = resposta, render vai renderizar a pagina sendo base a base
    res.render("base", {
        title: "Adicionar Alunos",
        view: "alunos/add"
    });
});

//Editar categorias

router.get('/edit', async(req, res) => {
    //res = resposta, render vai renderizar a pagina sendo base a base
    res.render("base", {
        title: "Editar Alunos",
        view: "alunos/edit"
    });
});

// / significa a pasta raíz, async é que tem delay

module.exports = router;