const { ObjectID } = require('bson');
const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Equipe= new Schema({
    chefEquipe:{type:ObjectID,required:true},
    tache:{type:ObjectID,required:true},
    oeuvirers:{type:Array,required:true}
})


mongoose.connect('mongodb+srv://Saoudi:Fi4FbjNQ7lSfGRCD@cluster0.mtxyh.mongodb.net/AppBTP?retryWrites=true&w=majority', {useNewUrlParser: true});
module.exports=mongoose.model('Equipe', Equipe);