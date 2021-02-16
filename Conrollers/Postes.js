const Poste=require('../Models/Postes');
exports.AjoutPoste=(req,res,next)=>{ 
        let data=req.body;
        const titre=data.titre;
        const renumeration=parseInt(data.renumiration);
        const description=data.description;
    const formation=new Poste({
        titre:titre,
        renumeration:renumeration,
        description:description
    })
    .save()
    .then(result=>{console.log('inserted')})
    .catch(error=>{console.log(error)})
    }
exports.PostesList=(req, res, next)=>{
    Poste.find({},'', (error, postes)=>{if(error!=null) {console.log(error);}  res.json(postes) });
    
    
}
exports.Poste=(req, res, next)=>{
    var id=req.query.id;
console.log(id)
    Poste.findOne({_id:id},'titre', (error, poste)=>{if(error!=null) {console.log(error);}  res.json(poste) });
    
    
}