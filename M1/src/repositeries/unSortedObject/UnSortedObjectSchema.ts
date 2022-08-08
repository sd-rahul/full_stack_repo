import * as mongoose from 'mongoose';

class UnSortedObjectSchema extends mongoose.Schema {
    constructor(options) {
        const unSortedObjectSchema = {
            _id: String,
            objectData: Object,
            keyCount: Number,
            depth: Number,
            size: Number,
            generationTime: Number

        }
        super(unSortedObjectSchema,options);
    }
}

export default UnSortedObjectSchema;