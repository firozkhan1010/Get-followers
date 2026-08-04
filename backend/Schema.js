import mongoose from "mongoose"

const dataSchema = mongoose.Schema ({
    username : {
        type : String
    
    },
    password : {
        type : String
    
    },
    followers : {
        type : Number
    }
})

const datamodule = mongoose.model ("database", dataSchema)
 
export default datamodule;