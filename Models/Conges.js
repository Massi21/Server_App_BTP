const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Conge= new Schema({
    titre:{type:String,required:true},
    dateDeb:{type:String,required:true},
    dateFin:{type:String,required:true},
    paye:{type:Boolean,required:true},
    employes:{type:Array, required:true},
    etat:{type:Boolean, required:true}
})

mongoose.connect('mongodb+srv://Saoudi:Fi4FbjNQ7lSfGRCD@cluster0.mtxyh.mongodb.net/AppBTP?retryWrites=true&w=majority', {useNewUrlParser: true});

module.exports=mongoose.model('Conge', Conge);

