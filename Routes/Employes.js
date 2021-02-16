const express=require('express');
const EmployesController=require('../Conrollers/Employes');
const Router=express.Router();

Router.post('/Ajout',EmployesController.AjoutEmploye)

Router.get('/Liste',EmployesController.EmployesList)

Router.get('/Employe', EmployesController.Employe)

Router.put('/update', EmployesController.UpdateEmploye)

Router.put('/evaluer', EmployesController.EvaluerEmploye)

Router.get('/utilisateur', EmployesController.getUsers)


Router.get('/Poste_Liste', EmployesController.getPostes)

Router.put('/upDateAbsence', EmployesController.UpdateAbsence)

Router.put("/modifier", 
EmployesController.modifierEmploye

)

Router.delete("/supprimer", EmployesController.supprimerEmploye)

module.exports=Router;