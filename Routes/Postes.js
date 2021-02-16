const express=require('express');
const PostesController=require('../Conrollers/Postes');
const Router=express.Router();

Router.post('/Ajout',PostesController.AjoutPoste)

Router.get('/Liste',PostesController.PostesList)

Router.get('/Poste', PostesController.Poste)




module.exports=Router;