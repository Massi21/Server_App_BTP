const { ObjectID } = require('bson');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Tache= new Schema({
    titre:{type:String,required:true},
    dateDeb:{type:String,required:true},
    dateFin:{type:String,required:true},
    Employes:{type:Array,required:true}

})
mongoose.connect('mongodb+srv://Saoudi:Fi4FbjNQ7lSfGRCD@cluster0.mtxyh.mongodb.net/AppBTP?retryWrites=true&w=majority', {useNewUrlParser: true});
module.exports=mongoose.model('Tache', Tache);