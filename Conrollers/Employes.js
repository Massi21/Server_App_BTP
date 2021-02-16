const Employe=require('../Models/Employes')

exports.EmployesList = (req, res, next) => {
    
    Employe.find({}, '', (error, employes) => { res.json(employes) });
}
exports.Employe = (req, res, next) => {
    var id = req.query.id;
    var ide = req.query.ide;
    var idc= req.query.idc;
    if(ide==undefined&&idc==undefined){Employe.findOne({ _id: id }, '', (error, employes) => { if(error!=null) {console.log(error);}res.status(200).json(employes) }); return;}

    if(ide==undefined&&id==undefined) 
      {Employe.find({ chantier: idc }, '', (error, employes) => { if(error!=null) {console.log(error);}res.status(200).json(employes) });return;}

      if(idc==undefined&&id==undefined)
      {Employe.find({ id_chef: ide }, '', (error, employes) => { if(error!=null) {console.log(error);}res.status(200).json(employes) });return;}
}
exports.AjoutEmploye = (req, res, next) => {
    let data = req.body;
    const nom = data.nom;
    const prenom = data.prenom;
    const date_nais = data.date_N;
    const email = data.email;
    const tel = data.tel;
    const adresse = data.adresse;
    const password = data.password;
    const photo = data.photo;
    const cv = data.cv;
   
    const poste = data.id_poste;
    const date_rec = data.date_Rec;
    const type_contrat =data.type_Contrat;
    const etat_civ = data.etat_Civ;
    const num_sec = data.num_SecSoc;
    const num_id = data.num_Id;
    const id_chantier=data.id_chantier;



    const employe = new Employe({
        nom: nom,
        prenom: prenom,
        email: email,
        tel: tel,
        adresse: adresse,
        password: password,
        photo:photo,
        cv:cv,
        date_nais:date_nais,
        poste:poste,
        date_rec:date_rec,
        type_contrat:type_contrat,
        etat_civ:etat_civ,
        num_sec:num_sec,
        num_id:num_id,
        chantier:id_chantier,
        NBabsence:0
    }).save().then((result) => {res.status(200)}).catch(error => console.log(error))
}

exports.UpdateEmploye=(req, res , next)=>{
    console.log(req.body)
    var id_chef=req.body.id_chef;
    var _id=req.body._id;
    var id_tache=req.body.id_tache;
Employe.updateMany({_id:_id}, {$set:{"tache":id_tache,"id_chef":id_chef }}).then(result=>res.send(result));
}

exports.UpdateAbsence=(req, res , next)=>{
    var id=req.query.id
    var NBabsence=req.query.nb;
Employe.updateMany({_id:id}, {$set:{"NBabsence":NBabsence }}).then(result=>res.send(result));
}
exports.EvaluerEmploye=(req, res , next)=>{
    var _id=req.body.id;
    var evaluation=req.body.evaluation;
Employe.updateOne({_id:_id}, {$set:{"evaluation":evaluation,}}).then(result=>res.send(result));
}

exports.getUsers=(req, res, next)=>{

    Employe.find({$or:[
    {poste:'5f883cfcabfb705b0817fae9'},
    {poste:'5f883c07abfb705b0817fae8'},
    {poste:'5f883e5eabfb705b0817faeb'},
    {poste:'5f883eb7abfb705b0817faec'},
    {poste:'5f883f08abfb705b0817faed'}
    ]}, 'email password poste chantier id_chef').then((result)=>res.send(result));
}

exports.getPostes = (req, res, next) => {
    var id = req.query.id || "";
    if(!id.length) {
      res.status(404).json({"msg": 'Invalid name in query string'});
      res.end();
      return;
    }
    else
    {Employe.find({ poste: id }, 'nom prenom email photo', (error, employes) => { if(error!=null) {console.log(error);};res.json(employes) });}
}

exports.modifierEmploye=(req, res , next)=>{
    
    let id=req.body.id;
    let email=req.body.email;
    let adresse=req.body.adresse;
    let etat_Civ=req.body.etat_Civ;
    let tel=req.body.tel;
    let id_poste=req.body.id_poste;
    let type_Contrat=req.body.type_Contrat;
Employe.updateOne({_id:id}, {$set:
                                {"email":email,"adresse":adresse,"etat_civ":etat_Civ,
                                "tel":tel,"poste":id_poste,"type_contrat":type_Contrat,
                            }
                            }
                ).then(result=>{console.log("inserted");res.status(200).send(result); console.log(result)});
}

exports.supprimerEmploye=(req, res , next)=>{
    // console.log(req.body)
    let id=req.query.id;
Employe.deleteOne({_id:id}).then(result=>res.send(result));
}