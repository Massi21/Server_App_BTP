const Conge = require('../Models/Conges');
exports.AjoutConge = (req, res, next) => {
    let data = req.body
    console.log(data)
    const titre = data.titre;
    const date_deb = data.date_Debut;
    const date_fin = data.date_Fin;
    const paye = data.paye;
    const employes = data.liste_Emp;
    const conge = new Conge({
        titre: titre,
        dateDeb: date_deb,
        dateFin: date_fin,
        paye: paye,
        employes: employes,
        etat:false
    })
        .save()
        .then(result => { res.send(result._id) })
        .catch(error => { console.log(error) })
}
exports.CongesList = (req, res, next) => {
    Conge.find({}, '', (error, conges) => { if(error!=null) {console.log(error);} res.json(conges) });

}
// }
// exports.Conge = (req, res, next) => {
//     const id = req.body.id;
//     Conge.findOne({ _id=id }, 'titre remuniration description', (error, conge) => { console.log(postes); res.json(conge) });


// }

exports.Supprimer=(req, res, next)=>{
const id= req.query.id;
Conge.deleteOne({_id:id}).then(result=>res.status(200));

}
exports.Update=(req,res, next)=>{
    const id=req.query.id;
    Conge.updateOne({_id:id}, {$set:
        {'etat':true
    }
    }
    ).then(result=>{res.status(200).send(result);});
}

