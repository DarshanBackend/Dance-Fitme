import mongoose from "mongoose";

const classCategorySchema = mongoose.Schema({
    classCategory_title: {
        type: String
    },
    classCategory_image: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model("ClassCategory", classCategorySchema)
