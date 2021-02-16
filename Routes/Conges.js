const express=require('express');
const CongesController=require('../Conrollers/Conges');
const Router=express.Router();

Router.post('/Ajout',CongesController.AjoutConge)

Router.get('/Liste',CongesController.CongesList)

// Router.get('/Conge', CongesController.Conge)

Router.delete('/Supprimer', CongesController.Supprimer)

Router.put('/Update', CongesController.Update)






module.exports=Router;