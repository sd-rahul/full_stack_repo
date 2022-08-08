import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(schema, options) {
        const versionableSchema = {
            deletedAt: {
                type: Date,
                required: false,
            },

            sortDuration: {
                type: Number,
                required: false,
            },
            sortingAlgorithm: {
                type: String,
                required: false,
            },
            originalId: String,
        };
        super({ ...schema, ...versionableSchema }, options);
    }
}

export default VersionableSchema;
