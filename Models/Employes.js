const { ObjectID } = require('bson');
const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const Employe= new Schema(
    {

    nom:{type:String, required:true},
    prenom:{type:String, required:true},
    email:{type:String, required:true},
    tel:{type:String, required:true},
    adresse:{type:String, required:true},
    password:{type:String, required:false},
    photo:{type:String, required:true},
    cv:{type:String, required:true}, 
    date_nais:{type:String, required:true},
    poste:{type:String, required:true},
    date_rec:{type:String, required:true},
    type_contrat:{type:String, required:true},
    etat_civ:{type:String, required:true},
    num_sec:{type:Number, required:true},
    num_id:{type:Number, required:true},

    tache:{type:ObjectID, required:false},
    chantier:{type:ObjectID, required:false},
    id_chef:{type:ObjectID, required:false},
    evaluation: {type:Number, required:false},
    NBabsence:{type:Number, required:true},

}
)
mongoose.connect('mongodb+srv://Saoudi:Fi4FbjNQ7lSfGRCD@cluster0.mtxyh.mongodb.net/AppBTP?retryWrites=true&w=majority', {useNewUrlParser: true});
module.exports=mongoose.model('Employe', Employe);

