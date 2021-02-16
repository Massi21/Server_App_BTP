const Tache=require('../Models/Taches');
exports.Ajout=(req,res,next)=>{ 
        let data=req.body;
        console.log(data)
        const titre=data.titre;
        const dateDeb=data.date_Debut
        const dateFin=data.date_Fin
        const employes=data.liste_Emp
    const tache=new Tache({
        titre:titre,
        dateDeb:dateDeb,
        dateFin:dateFin,
        Employes:employes
    })
    .save()
    .then(result=>{res.send(result)})
    .catch(error=>{console.log(error)})
    }
exports.TachesList=(req, res, next)=>{
    Tache.find({},'', (error, taches)=>{if(error!=null) {console.log(error);}  res.json(taches) });   
}
exports.Tache = (req, res, next) => {
    var id = req.query.id || "";
    if(!id.length) {
      res.status(404).json({"msg": 'Invalid name in query string'});
      res.end();
      return;
    }
    else
    {Tache.findOne({ _id: id }, '', (error, taches) => { res.json(taches) });}
}