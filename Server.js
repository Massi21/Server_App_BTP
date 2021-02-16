const express=require('express')
const bodyparser=require('body-parser');
const app=express();
const cors=require('cors')

const EmployeRouter=require('./Routes/Employes')
const PosteRouter=require('./Routes/Postes')
const CongeRouter = require('./Routes/Conges')
const TacheRouter= require('./Routes/Taches')
const EquipesRouter=require('./Routes/Equipes')
const ChantierRouter = require('./Routes/Chantiers')
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/Employes', EmployeRouter)

app.use('/Postes',PosteRouter)

app.use('/Chantiers',ChantierRouter)

app.use('/Conges', CongeRouter)
app.use('/Equipes', EquipesRouter )
app.use('/Taches',TacheRouter )

app.listen(8000);