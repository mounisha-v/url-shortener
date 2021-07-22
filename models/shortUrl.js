const mongoose=require('mongoose')
const shortId=require('shortid')

const shortUrlShema=new mongoose.Schema({
    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        required:true,
        unique:true,
        default:shortId.generate
    }
})

module.exports=mongoose.model('shortUrl',shortUrlShema)