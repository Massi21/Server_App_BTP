const express=require('express');
const EquipesController=require('../Conrollers/Equipes');
const Router=express.Router();

Router.post('/Ajout',EquipesController.AjoutEquipe)

// Router.get('/Liste',EquipesController.EquipesList)

// Router.get('/Equipe', EquipesController.Equipe)





module.exports=Router;