const express = require('express');
const router = express.Router();
const {create, list , byId , deleteLuffy , updateLuffy} = require('../controllers/luffy.controller')//reusuable w mch barcha code 3ala file wa7ed

router.post('/ajout',create )//endpoints bch n5aliw w zada bch n9smou akther projet w code fonction nktbou fi blasa o5ra --->notion mt3 controller

router.get('/list', list)

router.get('/byid/:id',byId)

router.delete('/delete/:id',deleteLuffy)

router.put('/update/:id',updateLuffy)

module.exports = router;