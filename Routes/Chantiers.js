const express=require('express');
const ChantiersController=require('../Conrollers/Chantiers');
const Router=express.Router();


Router.get('/Liste',ChantiersController.ChantiersList)

Router.get('/Chantier', ChantiersController.Chantier)





module.exports=Router;