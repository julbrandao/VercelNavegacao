const express = require('express');
//é o framework responsavel por adaptar as paginas nesse projeto, é o mais simples baseado em js

const router = express.Router();
//permite criar as rotas

//Listar a index.ejs
router.get('/', async(req, res) => {
    //res = resposta, render vai renderizar a pagina sendo base a base
    res.render("base", {
        title: "Home",
        view: "index"
    });
});

router.get('/quemsomos', async(req, res) => {
    //res = resposta, render vai renderizar a pagina sendo base a base
    res.render("base", {
        title: "Quem Somos",
        view: "quemsomos"
    });
});
module.exports = router;
//exporta as rotas