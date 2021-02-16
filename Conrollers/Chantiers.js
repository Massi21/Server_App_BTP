const Chantier=require('../Models/Chantiers');

exports.ChantiersList=(req, res, next)=>{
    Chantier.find({},'', (error, Chantiers)=>{  res.json(Chantiers) });
    
    
}

exports.Chantier = (req, res, next) => {
    var id = req.query.id || "";
    if(!id.length) {
      res.status(404).json({"msg": 'Invalid name in query string'});
      res.end();
      return;
    }
    else
    {Chantier.findOne({ _id: id }, '', (error, chantier) => { if(error!=null) {console.log(error);};res.json(chantier) });}
}