const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Poste= new Schema({
    titre:{type:String,required:true},
    renumeration:{type:Number,required:true},
    description:{type:String,required:true}
})


mongoose.connect('mongodb+srv://Saoudi:Fi4FbjNQ7lSfGRCD@cluster0.mtxyh.mongodb.net/AppBTP?retryWrites=true&w=majority', {useNewUrlParser: true});
module.exports=mongoose.model('Poste', Poste);