const express=require('express');
const TacheController=require('../Conrollers/Taches');
const Router=express.Router();

Router.post('/Ajout',TacheController.Ajout)

Router.get('/Liste',TacheController.TachesList)

Router.get('/Tache', TacheController.Tache)





module.exports=Router;