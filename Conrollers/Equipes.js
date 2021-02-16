const { ObjectId } = require('mongodb');
const Equipe=require('../Models/Equipes');
exports.AjoutEquipe=(req,res,next)=>{ 
    
        let data=req.body;
        console.log(data)
        const chef_equipe=ObjectId(data.chef_equipe);
        const tache=data.tache;
        const oeuvirers=data.oeuvirers;
        console.log(chef_equipe)
    const equipe=new Equipe({
        chefEquipe:chef_equipe,
        tache:tache,
        oeuvirers:oeuvirers
    })
    .save()
    .then(result=>{res.send(result)})
    .catch(error=>{console.log(error)})
    }
// exports.EquipesList=(req, res, next)=>{
//     Equipe.find({},'', (error, equipes)=>{console.log(equipes);  res.json(equipes) });
    
    
// }
// exports.Equipe=(req, res, next)=>{
//     const id=req.body.id;
//     Equipe.findOne({_id=id},'', (error, equipe)=>{console.log(equipe);  res.json(equipe) });
    
    
// }